import React, { useState } from "react";
import "./Search.css";

function Search({ setSubmittedSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    setSubmittedSearch(value);
  }

  return (
    <div className="searchbar">
      <label type="search-text" htmlFor="search">
        Search Products:{" "}
      </label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
