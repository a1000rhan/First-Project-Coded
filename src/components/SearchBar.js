import React from "react";
import React, { useState } from "react";

const [searchInput, setSearchInput] = useState("");
//{girl,mother}
const handleChange = (e) => {
  setSearchInput(e.target.value);
  console.log(searchInput);
};

jam3ya.amout.filter((j) => {
  return j.amout.match(searchInput);
});

function SearchBar(p) {
  const checkLength = (string) => {
    if (string.length >= 2) p.setQuery(string);
    else p.setQuery("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search for amount here"
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
}

export default SearchBar;
