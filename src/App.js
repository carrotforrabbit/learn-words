import "./App.scss";
import Header from "./components/Header/Header.jsx";
import React from "react";
import List from "./components/List/List";
import CardSlider from "./components/CardSlider/CardSlider";
import Error from "./components/Error/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/home" element={<List />}></Route>
            <Route path="/cards" element={<CardSlider />}></Route>
            {/* <Routes>
            <Route path="/liked" element={<Like />}></Route>
          </Routes> */}
            <Route path="*" element={<Error />}></Route>
            <Route path="/" element={<List />}></Route>
          </Routes>
        </main>
      </Router>
    </React.Fragment>
  );
}

export default App;
