import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`A blog dedicated to cooking up recipes for all those far far and away.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@LucasStahl11" />
      <meta name="twitter:creator" content="@LucasStahl11" />
      <meta name="twitter:title" content="Stahlwalker Cookbook" />
      <meta name="twitter:description" content="A blog dedicated to cooking up recipes for all those far far and away." />
      <meta property="twitter:image" content="https://cookblog.vercel.app/images/starwarssocialfinal.jpg"/>

  
      {/* <meta content="51134710437125" property="fb:app_id" /> */}
      {/* <meta content="Stahlwalker" property="og:site_name" />
      <meta content="Stahlwalker" property="og:title" />
      <meta content="article" property="og:type" />
      <meta content="Web design, digital marketing and a tech blog for web programmers." property="og:description" />
      <meta content="https://stahlwalker.org/" property="og:url" />
      <meta content="https://cdn.dribbble.com/users/571141/screenshots/3549732/untitled-1_1x.jpg" property="og:image" /> */}

      <meta property="og:title" content="Stahlwalker Cookbook"/>
      <meta property="og:type" content="article"/>
      <meta property="og:url" content="https://cookblog.vercel.app/"/>
      <meta property="og:image" content="https://cookblog.vercel.app/images/starwarssocialfinal.jpg"/>
      <meta property="og:site_name" content="Stahlwalker"/>
      <meta property="fb:app_id" content="511134710437125"/>
      <meta property="og:description" content="A blog dedicated to cooking up recipes for all those far far and away."/>

      </Head>
  )
}
