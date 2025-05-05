import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for jobs..." />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
