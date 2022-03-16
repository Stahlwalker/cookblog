// ./components/Search/CustomHits.js
import { connectStateResults } from "react-instantsearch-dom";

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3;

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p>No results, keep cooking.</p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <ol>
          {searchResults.hits.map((hit) => (
            <a href={`${hit.slug}`}>
            <li className="resultsLink" key={hit.objectID}>{hit.title}</li>
            </a>
          ))}
        </ol>
      )}
    </>
  );
}

export default connectStateResults(Hits);