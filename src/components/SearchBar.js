import React, { useState } from "react";

// const [searchInput, setSearchInput] = useState("");
//{girl,mother}
// const handleChange = (e) => {
//   setSearchInput(e.target.value);
//   console.log(searchInput);
// };

// jam3ya.amout.filter((j) => {
//   return j.amout.match(searchInput);
// });
let dates = [];
function jamount() {
  const [amount, setamount] = useState();
  const am = jam3yas.filer((a) => a.amount == amount);
}

function SearchBar(p) {
  const checkLength = (string) => {
    if (string.length >= 2) p.setQuery(string);
    else p.setQuery("");
  };

  function Date() {
    const [date, setDate] = useState();
    const mydates = dates.filter((e) => e.date == dates);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search for amount here"
        onChange={(e) => checkLength(e.target.value)}
      />
      <input
        className="dates"
        onChange={(event) => checkLength(event.target.value)} //Cu
        placeholder="dd/mm/yy"
      />
    </div>
  );
}

export default SearchBar;
