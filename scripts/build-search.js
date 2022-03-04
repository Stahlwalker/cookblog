// build-search.js
const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch/lite");
const fetch = require("node-fetch");
const process = require('process');

async function callContentful(query) {
  try {
    const data = fetch(
      
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      },
    ).then((response) => response.json());
    return data;
  } catch (error) {
    throw new Error(error);
  }
}


const allPosts = `query {
  postCollection(limit: 0) {
    items {
      sys {
        id
      }
      slug
      title
      date
      excerpt
      foodCategory
    }
  }
}`


function transformPostsToSearchObjects(posts) {
  console.log(posts);
  const transformed = posts.data.postCollection.items.map((post) => {
    return {
      objectID: post.sys.id,
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug,
      date: post.date,
      foodCategory: post.foodCategory,
    };
  });

  return transformed;
}

(async function () {
    dotenv.config();
   
    try {
      const posts = await callContentful(allPosts);
      const transformed = transformPostsToSearchObjects(posts)
  
      // initialize the client with your environment variables
      const client = algoliasearch(
         process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
         process.env.ALGOLIA_SEARCH_ADMIN_KEY,
       );
  
       // initialize the index with your index name
       const index = client.initIndex("cookblog");
  
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
  