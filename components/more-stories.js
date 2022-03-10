import React, { useState } from 'react';
import PostPreview from '../components/post-preview'

export default function MoreStories({ posts, showMore }) {
  const [ postNum, setPostNum] = useState(4); // Default number of posts dislplayed
  
  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 4) // 3 is the number of posts you want to load per click
  }

  posts.length + 1 === postNum ? showMore = false : showMore = true;

  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Recipes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.slice(0, postNum).map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
          

     {showMore && (
          <button className="load-more" onClick={handleClick}>Load More</button>
        )}
    </section>
  )
}
