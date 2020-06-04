import React from "react";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header text="Hooked" />
      <Movie />
      <Search />
    </div>
  );
}

export default App;
