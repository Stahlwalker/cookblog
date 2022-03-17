// ./components/Search/CustomHits.js
import { connectStateResults } from "react-instantsearch-dom";
import { useRouter } from 'next/router';

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3;
  // const { asPath } = useRouter()
  // const {router} = useRouter();
  // const currentPath = router.pathname
  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p>No results, keep cooking.</p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <ol>
          {searchResults.hits.map((hit) => (
            <a href={`posts/${hit.slug}`}>
              {/* // <a href={router == 'posts/blog' ? '<a href={`${hit.slug}`}>' : '<a href={`posts/${hit.slug}`}>'}> */}
            <li className="resultsLink" key={hit.objectID}>{hit.title}</li>
            </a>
          ))}
        </ol>
      )}
    </>
  );
}

export default connectStateResults(Hits);