import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/index.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from '../lib/ga'


function MyApp({ Component, pageProps }) {
  <head> 
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
  </head>

  const router = useRouter()

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  useEffect(() => {
    import("jquery/dist/jquery.min.js");
  }, []);

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
}, [])

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
