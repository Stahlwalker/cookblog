// ./components/Search/CustomHits.js
import { connectStateResults } from "react-instantsearch-dom";

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3;

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p>Aw snap! No search results were found.</p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <ol>
          {searchResults.hits.map((hit) => (
            <a href={`posts/${hit.slug}`}>
            <li key={hit.objectID}>{hit.title}</li>
            </a>
          ))}
        </ol>
      )}
    </>
  );
}

export default connectStateResults(Hits);