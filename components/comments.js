// import {DiscussionEmbed} from "disqus-react"
// const DisqusComments = ({ post }) => {
//   const disqusShortname = "your-disqus-shortname"
//   const disqusConfig = {
//     url: "https://your-site-url/post-slug",
//     identifier: post.id, // Single post id
//     title: post.title // Single post title
//   }
//   return (
//     <div>
//       <DiscussionEmbed
//         shortname={disqusShortname}
//         config={disqusConfig}
//       />
//     </div>
//   )
// }
// export default DisqusComments;

// Comments.js
import React, { useEffect } from 'react'

const Comments = ({ fullUrl, id }) => {
  useEffect(() => {
    const DISQUS_SCRIPT = 'disq_script'
    const sd = document.getElementById(DISQUS_SCRIPT)
    if (!sd) {
      var disqus_config = function() {
        this.page.url = fullUrl
        this.page.identifier = id
      }

      const d = document
      const s = d.createElement('script')
      s.src = 'https://stahlwalkercookbook.disqus.com/embed.js' // REPLACE THIS LINE WITH YOUR DISQUS LINE
      s.id = DISQUS_SCRIPT
      s.async = true
      s.setAttribute('data-timestamp', +new Date())

      d.body.appendChild(s)
    } else {
      window.DISQUS.reset({
        reload: true,
        config: disqus_config,
      })
    }
  }, [])
  return <div id="disqus_thread"></div>
}

export default Comments