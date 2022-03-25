import ContentfulImage from './contentful-image'
import Link from 'next/link'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <ContentfulImage
      width={600}
      height={700}
      alt={`Cover Image for ${title}`}
      className="blog-preview-image"
      src={url}
    />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
