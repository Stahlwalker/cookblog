import Container from '../../components/container'
import MoreBlog from '../../components/more-blog'
import HeroPost from '../../components/hero-post'
import Layout from '../../components/layout'
import { getAllPostsForHome, getPreviewPostBySlug } from '../../lib/api'
import Head from 'next/head'
import SimpleLayout from '../../components/layout/simple'



export default function Blog({ preview, allPosts, page, total }) {
  // const heroPost = allPosts[0]
  const POSTS_PER_PAGE = 10;
  // const page = useState(0);
  const hasNextPage = Math.ceil(total / POSTS_PER_PAGE) > page;
  const hasPreviousPage = page > 1;
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
      </Layout>
     
          {allPosts && (
        <>
          {hasPreviousPage && (
            <Link href={`/posts/blog/${page - 1}`}>
              Previous {page - 1}/{total}
            </Link>
          )}
          {hasNextPage && (
            <Link href={`/posts/blog${page + 1}`}>
              Next {page + 1}/{total}
            </Link>
          )}
    </>
    )}
    </>
  );
};

// export const getStaticPaths = async () => {
//   const allPosts = (await getPreviewPostBySlug()) ?? []
//   return {
//     paths: allPosts?.map(({ slug }) => `/posts/blog/${slug}`) ?? [],
//     fallback: true,
//   }
// }

export const getStaticPaths = async () => {
  // Get total pages
  const POSTS_PER_PAGE = 10;
  const pages = Math.ceil(getPreviewPostBySlug.length / POSTS_PER_PAGE);
  // Generate paths for Next.js. It is like: [{ params: { page: 1 } }, { params: { page: 2 }},...]
  const paths = Array.from(Array(pages).keys()).map((page) => ({
    params: { page: String(page + 1) },
  }));

  return {
    paths,
    fallback: true,
  };
};


export const getStaticProps = async ({ params }) => {
  const { page } = params;
  const { posts, total } = (await getAllPostsForHome(preview)) ?? [];
  // const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    // props: { preview, allPosts },
    props: {
    posts: posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE),
    page: Number(page),
    total,
  },
  };
};

// export const getStaticProps = async ({ params }) => {
//   const { page } = params;
//   const { posts, total } = await getPosts();

