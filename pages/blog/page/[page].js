
import Container from '../../../components/container'
import MoreStories from '../../../components/more-stories'
import HeroPost from '../../../components/hero-post'
import Intro from '../../../components/intro'
import Layout from '../../../components/layout'
import { getAllPostsForHome, getPaginatedPostSummaries } from '../../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../../lib/constants'
// import React, { useState, useEffect } from "react"

export default function BlogIndexPage(props) {
  const { postSummaries, totalPages, currentPage } = props;

  return (
    // We’ll build the post list component later
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
  const postSummaries = await ContentfulApi.getPaginatedPostSummaries(
    params.page,
  );
  const totalPages = Math.ceil(postSummaries.total / Config.pagination.pageSize);

  return {
    props: {
      postSummaries: postSummaries.items,
      totalPages,
      currentPage: params.page,
    },
  };
}