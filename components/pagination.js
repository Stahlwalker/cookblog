import {
    withPagination,
    getPagination,
    hasPreviousPage,
    hasNextPage,
  } from 'next-api-paginate';
//   import { Post } from '~/db/models/Post';
import { getAllPostsForHome } from '../lib/api'
  
  export default withPagination({
    defaultLimit: 15,
    maxLimit: 40,
  })(async (req, res) => {
    const { page, limit } = getPagination(req);
    const offset = page * limit - limit;
  
    try {
      const { rows, count } = await getAllPostsForHome.findAndCountAll({
        limit,
        offset,
      });
  
      const pageCount = Math.ceil(count / limit);
  
      return res.json({
        ok: true,
        getAllPostsForHome: rows,
        pagination: {
          page,
          limit,
          pageCount,
          itemCount: count,
          hasPrevious: hasPreviousPage(req),
          hasNext: hasNextPage(req)(count),
        },
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        ok: false,
      });
    }
  });