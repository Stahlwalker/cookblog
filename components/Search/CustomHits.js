// ./components/Search/CustomHits.js
import { connectStateResults } from "react-instantsearch-dom";
import { useRouter } from 'next/router';

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3;
  const { asPath } = useRouter()
  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p>No results, keep searching.</p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <ol>
          {searchResults.hits.map((hit) => (
            // <a href={`posts/${hit.slug}`}>
               <a key={hit.slug} href={asPath == '/posts/blog' ? hit.slug : `posts/${hit.slug}`}>
            <li className="resultsLink" key={hit.objectID}>{hit.title}</li>
            </a>
          ))}
        </ol>
      )}
    </>
  );
}

export default connectStateResults(Hits);