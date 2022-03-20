import Link from "next/link";
import Pagination from "./Pagination/index.js";
// import Pagination from "@components/PostList/Pagination/index.js";


export default function PostList(props) {
    const { posts, currentPage, totalPages } = props;

    // Calculate the disabled states of the next and previous links
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;


  return (
      
    //   <ol>
    //     {posts.map((post) => (
    //       <li key={post.sys.id}>
    //         <article>
            

    //           <Link href={`posts/${post.slug}`}>
    //             <a>
    //               <h2>{post.title}</h2>
    //             </a>
    //           </Link>

    //           <ul>
    //             {tags.map((tag) => (
    //               <li key={tag}>{tag}</li>
    //             ))}
    //           </ul>

    //         </article>
    //       </li>
    //     ))}
    //   </ol>

<Pagination
totalPages={totalPages}
currentPage={currentPage}
nextDisabled={nextDisabled}
prevDisabled={prevDisabled}
></Pagination>
    

  );
}




