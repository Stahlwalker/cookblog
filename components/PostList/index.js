// /components/PostList/index.js

// import Link from "next/link";
// import ReactMarkdown from "react-markdown";
// import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";
// import {
//   formatPublishedDateForDateTime,
//   formatPublishedDateForDisplay,
// } from "@utils/Date";

// export default function PostList(props) {
//   const { posts } = props;

//   return (
//       <ol>
//         {posts.map((post) => (
//           <li key={post.sys.id}>
//             <article>
//               <time dateTime={formatPublishedDateForDateTime(date)}>
//                 {formatPublishedDateForDisplay(date)}
//               </time>

//               <Link href={`posts/${post.slug}`}>
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
//             </article>
//           </li>
//         ))}
//       </ol>
//   );
// }