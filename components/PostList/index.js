 

import Link from "next/link";


export default function PostList(props) {
  const { posts } = props;

  return (
      <ol>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <article>
            

              <Link href={`posts/${post.slug}`}>
                <a>
                  <h2>{post.title}</h2>
                </a>
              </Link>

              <ul>
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              
            </article>
          </li>
        ))}
      </ol>
  );
}