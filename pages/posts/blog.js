import Container from '../../components/container'
import MoreBlog from '../../components/more-blog'
import HeroPost from '../../components/hero-post'
import Layout from '../../components/layout'
import { getAllPostsForHome } from '../../lib/api'
import Head from 'next/head'
import SimpleLayout from '../../components/layout/simple'
import Pagination from '../../components/pagination'
import React, { useState, useMemo } from 'react';

let PageSize = 10;


export default function Blog({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const [currentPage, setCurrentPage] = useState(1);

  const currentBlogListData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allPosts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <>
      <Layout preview={preview}>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <script src="https://kit.fontawesome.com/784baf4bd1.js" crossOrigin="anonymous"></script>
          <title>Stahlwalker Cookbook</title>
        </Head>
        <SimpleLayout></SimpleLayout>
        <Container>     
          {/* {moreBlogs.length > 0 && <MoreBlog posts={moreBlogs} />} */}
          {allPosts.length > 0 && <MoreBlog posts={currentBlogListData} showMore={false} />}
          <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={allPosts.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
        </Container>
        
      </Layout>
    </>
   
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}

