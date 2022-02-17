// /utils/ContentfulApi.js

export default class ContentfulApi {

    static async callContentful(query) { /* GQL call described above */ }
  
    static async getTotalPostsNumber() { /* method described above */ }
  
    static async getPaginatedPostSummaries(page) {
      const skipMultiplier = page === 1 ? 0 : page - 1;
      const skip =
        skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;
  
      const query = `{
          blogPostCollection(limit: ${Config.pagination.pageSize}, skip: ${skip}, order: date_DESC) {
            total
            items {
              sys {
                id
              }
              date
              title
              slug
              excerpt
              tags
            }
          }
        }`;
  
      // Call out to the API
      const response = await this.callContentful(query);
  
      const paginatedPostSummaries = response.data.blogPostCollection
        ? response.data.blogPostCollection
        : { total: 0, items: [] };
  
      return paginatedPostSummaries;
    }
   }