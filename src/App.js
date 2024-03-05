import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Add from "./page/Add/Add";
import List from "./page/List/List";
import State from "./page/useState/State";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/state" element={<State/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

