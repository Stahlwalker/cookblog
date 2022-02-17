// // /components/PostList/index.js

// import Link from "next/link";
// // import ReactMarkdown from "react-markdown";
// // import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";
// // import {
// //   formatPublishedDateForDateTime,
// //   formatPublishedDateForDisplay,
// // } from "@utils/Date";
// import Pagination from "@components/PostList/Pagination";

// export default function PostList(props) {
//     // Remember to take the currentPage and totalPages from props passed
//     // from the BlogIndex and BlogIndexPage components
//      const { posts, currentPage, totalPages } = props;
   
//     // Calculate the disabled states of the next and previous links
//      const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
//      const prevDisabled = parseInt(currentPage, 10) === 1;

//   return (
//       <ol>
//         {posts.map((post) => (
//           <li key={post.sys.id}>
//             <article>
//               <time dateTime={formatPublishedDateForDateTime(date)}>
//                 {formatPublishedDateForDisplay(date)}
//               </time>

//               <Link href={`blog/${post.slug}`}>
//                 <a>
//                   <h2>{post.title}</h2>
//                 </a>
//               </Link>

//               <ul>
//                 {tags.map((tag) => (
//                   <li key={tag}>{tag}</li>
//                 ))}
//               </ul>

//               <ReactMarkdown
//                 children={post.excerpt}
//                 renderers={ReactMarkdownRenderers(post.excerpt)}
//               />
//               <Pagination
//                 totalPages={totalPages}
//                 currentPage={currentPage}
//                 nextDisabled={nextDisabled}
//                 prevDisabled={prevDisabled}
//               />
//             </article>
//           </li>
          
//         ))}
//       </ol>
//   );
// }

// export default function Pagination(props) {
//     const { totalPages, currentPage, prevDisabled, nextDisabled } = props;
  
//     const prevPageUrl =
//       currentPage === "2"
//         ? "/blog"
//         : `/blog/page/${parseInt(currentPage, 10) - 1}`;
  
//     const nextPageUrl = `/blog/page/${parseInt(currentPage, 10) + 1}`;
  
//     return (
//       <ol>
//         <li>
//           {prevDisabled && <span>Previous page</span>}
//           {!prevDisabled && (
//             <Link href={prevPageUrl}>
//               <a>Previous page</a>
//             </Link>
//           )}
//         </li>
//         <li>
//           Page {currentPage} of {totalPages}
//         </li>
//         <li>
//           {nextDisabled && <span>Next page</span>}
//           {!nextDisabled && (
//             <Link href={nextPageUrl}>
//               <a>Next page</a>
//             </Link>
//           )}
//         </li>
//       </ol>
//     );
//   }