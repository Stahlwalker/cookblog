import Container from '../../components/container'
import MoreBlog from '../../components/more-blog'
import HeroPost from '../../components/hero-post'
import Layout from '../../components/layout'
import Head from 'next/head'
import SimpleLayout from '../../components/layout/simple'
import { getAllPostsForHome, getPaginatedPostSummaries } from '../../lib/api'
import PostList from '../../components/PostList'



export default function Blog(props) {
  const { preview, allPosts, postSummaries, totalPages, currentPage } = props;
  // const heroPost = allPosts[0]
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
          {allPosts.length > 0 && <MoreBlog posts={allPosts} showMore={false} />}
        </Container>
        <PostList 
            posts={postSummaries} 
            totalPages={totalPages}
            currentPage={currentPage}
       />
      </Layout>
    </>
  );
}


export async function getStaticPaths() {
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / 2);

  const paths = [];

  /**
   * Start from page 2, so we don't replicate /blog
   * which is page 1
   */
  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  const postSummaries = await getPaginatedPostSummaries(
    params.page,
  );
  const totalPages = Math.ceil(postSummaries.total / Config.pagination.pageSize);

  return {
    props: { 
      preview, 
      allPosts,
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: params.page,
     },
  };
}
