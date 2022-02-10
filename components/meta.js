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

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@LucasStahl11" />
      <meta name="twitter:creator" content="@LucasStahl11" />
      <meta property="twitter:title" content="Stahlwalker Cookbook" />
      <meta property="twitter:description" content="A blog dedicated to cooking up recipes for all those far far and away." />
      <meta property="twitter:image" content='<img src="/images/starwarssocialfinal.jpg"></img>'/>


      {/* <meta property="og:url" content="http://bits.blogs.nytimes.com/2011/12/08/a-twitter-for-my-sister/" />
      <meta property="og:title" content="A Twitter for My Sister" />
      <meta property="og:description" content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling." />
      <meta property="og:image" content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg" /> */}

      </Head>
  )
}
