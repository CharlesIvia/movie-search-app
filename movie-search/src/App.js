import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search";

function App() {
  const apiurl = "http://www.omdbapi.com/?apikey=fd010aa6";

  const search = (e) => {
      if (e.key === "Enter") {
          axios(`${apiurl}&s=${state.s}`).then(({data}) => {
              let results = data.Search;

              setstate(prevState => {
                  return {...prevState, results: results}
              })
        })
    }
  };

  const [state, setstate] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const handleInput = (e) => {
    let s = e.target.value;

    setstate((prevState) => {
      return { ...prevState, s: s };
    });
  };
  return (
    <div className="App">
      <header>
        <h1>Hooked</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
      </main>
    </div>
  );
}

export default App;
