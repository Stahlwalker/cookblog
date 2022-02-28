import { Client } from '@elastic/Elasticsearch'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import matter from 'gray-matter'

//I needed the parent folder
const root = process.cwd().split().pop()
//connection to Elasticsearch
async function connectToElasticsearch() {
  //process.env is not available from this folder, since this is outside of the project
  //for this reason dotenv is used to resolve .env file
  const result = dotenv.config()
  if (
    !result.parsed.ESS_CLOUD_ID ||
    !result.parsed.ESS_CLOUD_USERNAME ||
    !result.parsed.ESS_CLOUD_PASSWORD
  ) {
    return 'ERR_ENV_NOT_DEFINED'
  }
  return new Client({
    cloud: {
      id: result.parsed.ESS_CLOUD_ID,
    },
    auth: {
      username: result.parsed.ESS_CLOUD_USERNAME,
      password: result.parsed.ESS_CLOUD_PASSWORD,
    },
  })
}
export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '')
}
//content of the blog
async function getAllFilesFrontMatter(folder) {
  const prefixPaths = path.join(root, '_content', folder)
  const files = getDirectories(prefixPaths)
  const allFrontMatters = []
  files.forEach((file) => {
    const filename = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    if (path.extname(filename) !== '.md' && path.extname(filename) !== '.mdx') return
    const source = fs.readFileSync(file, 'utf-8')
    const { data: frontmatter } = matter(source)
    if (!frontmatter.draft) {
      allFrontMatters.push({
        ...frontmatter,
        source: source, //includes content of the blog
        slug: formatSlug(filename),
        lastmod: frontmatter.lastmod ? new Date(frontmatter.lastmod).toISOString() : null,
      })
    }
  })
  return allFrontMatters
}
async function indexToES() {
  const allPosts = await getAllFilesFrontMatter('blog')
  const client = await connectToElasticsearch()
  try {
    for (const file of allPosts) {
      await client.index({
        index: 'devmuscle-blog-contents',
        body: {
          content: file.source, //Elasticsearch searches in here (in everything simply)
          //meta : ES is going to return only these fields
          //...so we also index these metadata
          //...to decrease reponse object size- no need the whole content as response-
          //which are enough for UI
          meta: {
            title: file.title,
            alt: file.alt,
            date: file.date,
            image: file.image,
            lastmod: file.lastmod,
            tags: file.tags,
            slug: file.slug,
            summary: file.summary,
          },
        },
      })
      await client.indices.refresh({ index: 'devmuscle-blog-contents' })
    }
  } catch (error) {}
}
indexToES()
