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
// import { CMS_NAME } from '../../lib/constants'
import { URL } from '../../lib/constants'
import { POST_URL } from '../../lib/constants'
import Comments from '../../components/comments'
import PrintComponent from '../../components/PrintComponent';
import WakeLock from '../../components/WakeLock';

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
              <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"></link>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
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
                <WakeLock />
              <PostBody content={post.content} />
            </article>
            <>
              <PrintComponent />
              </>
              {/* <WakeButton /> */}
            

              {/* <ReactNoSleep>
              {({ isOn, enable, disable }) => (
                <button onClick={isOn ? disable : enable}>
                  {isOn ? 'on' : 'off'}
                </button>
              )}
            </ReactNoSleep> */}


            <social className="social">
            <h2>Looks tasty, share with friends</h2>
            <FacebookShareButton
                    url={`https://cookblog.vercel.app/posts/${post.slug}`} >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={`https://cookblog.vercel.app/posts/${post.slug}`} >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <div className="redditSocial">
                  <RedditShareButton
                    url={`https://cookblog.vercel.app/posts/${post.slug}`} >
                    <RedditIcon size={32} round />
                  </RedditShareButton>
                  </div>
                  <PinterestShareButton
                    url={`https://cookblog.vercel.app/posts/${post.slug}`} >
                    <PinterestIcon size={32} round />
                  </PinterestShareButton>
                  <WhatsappShareButton
                    url={`https://cookblog.vercel.app/posts/${post.slug}`} >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                  <LinkedinShareButton
                    url={`https://cookblog.vercel.app/posts/${post.slug}`} >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                  </social>
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

