import "./App.scss";
import Header from "./components/Header/Header.jsx";
import React from "react";
import List from "./components/List/List";
import CardContainer from "./components/CardContainer/CardContainer";
import Error from "./components/Error/Error";
import words from "./utils/words";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <main>
          <Routes>
            <Route path="/home" element={<List />}></Route>
            <Route path="/cards" element={<CardContainer {...words} />}></Route>
            <Route path="/liked" element={<Error />}></Route>
            <Route path="*" element={<Error />}></Route>
            <Route path="/" element={<List />}></Route>
          </Routes>
        </main>
      </React.Fragment>
    </Router>
  );
}

export default App;
