import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
        <button className="search-icon-btn">
          <FaSearch className="search-icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
