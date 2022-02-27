// build-search.js
const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch/lite");
const fetch = require("node-fetch");

const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
foodCategory
author {
  name
  picture {
    url
  }
}
excerpt
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`

// async function getAllPosts() {
//   // write your code to fetch your data
//   let shouldQueryMorePosts = true;
//   const returnPosts = [];

//   while (shouldQueryMorePosts) {
//     const response = await getPaginatedPosts(page);

//     if (response.posts.length > 0) {
//       returnPosts.push(...response.posts);
//     }

//     shouldQueryMorePosts = returnPosts.length < response.total;
//     page++;
//   }

//   return returnPosts;
// }

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

async function getAllPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}, limit: 0) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractPostEntries(entries)
}



function transformPostsToSearchObjects(posts) {
  // ...
  const transformed = posts.map((post) => {
    return {
      objectID: post.sys.id,
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug,
      topicsCollection: { items: post.topicsCollection.items },
      date: post.date,
      readingTime: post.readingTime,
    };
  });

  return transformed;
}

(async function () {
  dotenv.config();

  try {
    const posts = await getAllPostsForHome(preview);
    const transformed = transformPostsToSearchObjects(posts);

    // initialize the client with your environment variables
    const client = algoliasearch(
       process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
       process.env.ALGOLIA_SEARCH_ADMIN_KEY,
     );

     // initialize the index with your index name
     const index = client.initIndex("my_awesome_content");

     // save the objects!
     const algoliaResponse = await index.saveObjects(transformed);

     // check the output of the response in the console
     console.log(
       `🎉 Sucessfully added ${algoliaResponse.objectIDs.length} records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
         "\n",
       )}`,
     );
  } catch (error) {
    console.log(error);
  }
})();