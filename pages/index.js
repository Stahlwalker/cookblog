import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import LatestPost from '@components/latestpost'


export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  // const [posts, setPosts] = useState(props.posts);
  return (
    <>
      <Layout preview={preview}>
        <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/> */}
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"></link>
          <title>Stahlwalker Cookbook</title>
        </Head>
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
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}

          {/* <button
            onClick={async () => {
              const newPosts = await getNewPostsFromApi();

              setPosts(...morePosts, ...newPosts);
            }}
            type="button"
          >
          Load more
          </button> */}

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
