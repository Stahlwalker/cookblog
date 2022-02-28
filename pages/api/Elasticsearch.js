import { Client } from '@elastic/Elasticsearch'
//connect to Elasticsearch
export async function connectToElasticsearch() {
  const ESS_CLOUD_ID = process.env.ESS_CLOUD_ID
  const ESS_CLOUD_USERNAME = process.env.ESS_CLOUD_USERNAME
  const ESS_CLOUD_PASSWORD = process.env.ESS_CLOUD_PASSWORD

  if (!ESS_CLOUD_ID || !ESS_CLOUD_USERNAME || !ESS_CLOUD_PASSWORD) {
    return 'ERR_ENV_NOT_DEFINED'
  }

  return new Client({
    cloud: {
      id: ESS_CLOUD_ID,
    },
    auth: {
      username: ESS_CLOUD_USERNAME,
      password: ESS_CLOUD_PASSWORD,
    },
  })
}

export default async function searchES(req, res) {
  try {
    const client = await connectToElasticsearch()
    let results = []
    const { body } = await client.search({
      index: 'devmuscle-blog-contents',
      body: {
        query: {
          match: {
            content: {
              query: req.body,
              operator: 'and',
              fuzziness: 'AUTO',
              prefix_length: 0,
              fuzzy_transpositions: false,
              minimum_should_match: '85%',
            },
          },
        },
      },
      _source_excludes: 'content', //no need to return the content of the file only need to metadata
    })
    let hits = body.hits.hits
    hits.forEach((item) => {
      results.push(item._source.meta)
    })
    return res.send(results)
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
}
