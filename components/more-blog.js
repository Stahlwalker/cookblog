import React, { useState } from 'react';
import PostPreview from '../components/post-preview'
import Search from "../components/Search";
export default function MoreBlog({ posts}) {
 
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        All Recipes 
        {/* <Search> */}
                {/* <PostList posts={posts} /> */}
        {/* </Search>  */}
      </h2>
      <div className="grid grid-cols-0 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
      {posts.map((post) => (
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
          
    </section>
  )
}
