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
      <meta name="twitter:image" content='<img src="http://cdn.wallpapername.com/1440x900/20121101/star%20wars%20minimalistic%20yellow%20darth%20vader%20egg%20spoon%201440x900%20wallpaper_www.wallpapername.com_32.jpg"></img>'/>

      </Head>
  )
}
