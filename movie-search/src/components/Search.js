import React, { useState } from "react";

function Search(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleSeacrh = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearch = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };
  return (
    <div>
      <form className="search">
        <input value={searchValue} onChange={handleSeacrh} type="text" />
        <input type="submit" value="SEARCH" onClick={callSearch} />
      </form>
    </div>
  );
}

export default Search;
