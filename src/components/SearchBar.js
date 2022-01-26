import React from "react";
// Styling

const SearchBar = ({ setQuery }) => {
  const checkLength = (string) => {
    if (string.length >= 2) setQuery(string);
    else setQuery("");
  };

  return (
    <input
      className="search-bar"
      onChange={(event) => checkLength(event.target.value)}
      placeholder="Search for a name"
    />
  );
};

export default SearchBar;
