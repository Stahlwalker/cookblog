import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import { CMS_NAME } from '../../lib/constants'
import Comments from '../../components/comments'
import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  TwitterShareButton,
  TwitterIcon,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="article">
              <Head>
                <title>
                  {post.title} | Stahlwalker Cookbook
                </title>
                <meta property="og:image" content={post.coverImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                foodCategory={post.foodCategory}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <h2>Looks tasty, share with friends</h2>
            <FacebookShareButton
                    url={'https://cookblog.vercel.app/'} >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={'https://cookblog.vercel.app/'} >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <RedditShareButton
                    url={'https://cookblog.vercel.app/'} >
                    <RedditIcon size={32} round />
                  </RedditShareButton>
                  <WhatsappShareButton
                    url={'https://cookblog.vercel.app/'} >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  <LinkedinShareButton
                    url={'https://cookblog.vercel.app/'} >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
            <Comments
              post={post}
            />
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}
