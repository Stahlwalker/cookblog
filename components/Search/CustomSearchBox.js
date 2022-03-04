// .components/Search/CustomSearchBox.js

import { connectSearchBox } from "react-instantsearch-dom";

function SearchBox({ refine }) {
  return (
    <form action="" role="search">
      <label htmlFor="algolia_search" type="submit">Search</label>
      <input
        id="algolia_search"
        type="search"
        placeholder=" pasta..."
        onChange={(e) => refine(e.currentTarget.value)}
        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
      />
    </form>
  );
}

export default connectSearchBox(SearchBox);