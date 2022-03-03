import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import Layout from '../../components/layout'
import { getAllPostsForHome, getPaginatedPostSummaries } from '../../lib/api'
import Head from 'next/head'
import PostList from '../../components/PostList'


export default function Index({ preview, allPosts, postSummaries, totalPages, currentPage}) {
  const postNumber = allPosts.length
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
 
  return (
    <>
      <Layout preview={preview}>
        <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/> */}
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous"></link> */}
        {/* <script src="https://kit.fontawesome.com/784baf4bd1.js" crossOrigin="anonymous"></script> */}
          <title>Stahlwalker Cookbook</title>
        </Head>
        <Container>
        {postNumber}
        {postSummaries} blog
        
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}

          <PostList 
            posts={postSummaries} 
            totalPages={totalPages}
            currentPage={currentPage}
       />


        </Container>

        

      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  const postSummaries = (await getPaginatedPostSummaries(1)) ?? []

  //the problem is getPaginatedPostSummaries is not returning the anything

  console.log(`postSummaries:${postSummaries}`)
  const totalPages = Math.ceil(postSummaries.total / 2);
  return {
    props: { preview, allPosts, postSummaries, totalPages, currentPage: "1", },
  }
}
