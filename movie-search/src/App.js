import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {
  const apiurl = "http://www.omdbapi.com/?apikey=fd010aa6";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(`${apiurl}&s=${state.s}`).then(({ data }) => {
        let results = data.Search;

        setstate((prevState) => {
          return { ...prevState, results: results };
        });
      });
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

  const openPopup = (id) => {
    axios(`${apiurl}&i=${id}`).then(({ data }) => {
        let result = data;
        
        console.log(result)
      setstate((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };
  const closePopup = () => {
    setstate((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Hooked</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />
        {typeof state.selected.Title != "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
