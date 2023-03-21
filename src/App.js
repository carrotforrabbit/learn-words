import "./App.scss";
import Header from "./components/Header/Header.jsx";
import React from "react";
import List from "./components/List/List.jsx";
import CardSlider from "./components/CardSlider/CardSlider.jsx";

class WordCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <CardSlider />
        <List />
      </React.Fragment>
    );
  }
}

export default WordCard;
