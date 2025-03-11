import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  console.log('Searchbar()');
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const Searching = (e) => {
    console.log('searching..()');
    e.preventDefault(); // Prevents page refresh on form submission
    if (search.trim()) {
      console.log('search.trim()');
      navigate(`/search/${encodeURIComponent(search.trim())}`); 
      console.log(`search is :${search}`);// Encode URI
    }
  };

  return (
    <form className="searchBarDiv" onSubmit={Searching}>
      <button type="submit" className="searchBtn" onClick={search.trim() ? Searching : undefined}/>
      <input 
        placeholder="Search..." 
        className="searchBar" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
