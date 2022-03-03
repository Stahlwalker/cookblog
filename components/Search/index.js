// .components/Search/index.js

// “algoliasearch/lite” is the search-only version of the API client — optimized for size and search
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Hits } from "react-instantsearch-dom";
import CustomSearchBox from "./CustomSearchBox";
import CustomHits from "./CustomHits";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
);

export default function Search() {
  return (
    <>
      <InstantSearch 
        searchClient={searchClient} 
        indexName="cookblog">
        <CustomSearchBox />
        <CustomHits />
      </InstantSearch>
    </>
  )
}