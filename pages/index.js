import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome, getFeaturedPost } from '../lib/api'
import Head from 'next/head'
import SimpleLayout from '../components/layout/simple'


export default function Index({ preview, allPosts, featuredPost }) {
  // Use featured post if available, otherwise fall back to most recent post
  const heroPost = featuredPost || allPosts[0]
  // Filter out the hero post from the more posts list to avoid duplication
  const morePosts = allPosts.filter(post => post.slug !== heroPost?.slug)
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
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} showMore={true} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  const featuredPost = await getFeaturedPost(preview)
  return {
    props: { preview, allPosts, featuredPost },
  }
}
