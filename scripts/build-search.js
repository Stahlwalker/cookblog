// build-search.js
const dotenv = require("dotenv");
import { getAllPostsForHome } from '/../lib/api'


export async function getAllPostsForHome(preview) {
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
    const posts = await getAllBlogPosts();
    const transformed = transformPostsToSearchObjects(posts);

    // we have data ready for Algolia!
    console.log(transformed);
  } catch (error) {
    console.log(error);
  }
})();