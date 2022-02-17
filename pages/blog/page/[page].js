// /pages/blog/pages/[page].js

// import ContentfulApi from "@utils/ContentfulApi";
// import { Config } from "@utils/Config";
// import PostList from "@components/PostList";

// export default function BlogIndexPage(props) {
//   const { postSummaries, totalPages, currentPage } = props;

//   return (
//     <PostList 
//     posts={postSummaries} 
//     totalPages={totalPages}
//     currentPage={currentPage}
//     />
//   );
// }

// export async function getStaticPaths() {
//   const totalPosts = await ContentfulApi.getTotalPostsNumber();
//   const totalPages = Math.ceil(totalPosts / Config.pagination.pageSize);

//   const paths = [];

//   /**
//    * Start from page 2, so we don't replicate /blog
//    * which is page 1
//    */
//   for (let page = 2; page <= totalPages; page++) {
//     paths.push({ params: { page: page.toString() } });
//   }

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const postSummaries = await ContentfulApi.getPaginatedPostSummaries(
//     params.page,
//   );
//   const totalPages = Math.ceil(postSummaries.total / Config.pagination.pageSize);

//   return {
//     props: {
//       postSummaries: postSummaries.items,
//       totalPages,
//       currentPage: params.page,
//     },
//   };
// }