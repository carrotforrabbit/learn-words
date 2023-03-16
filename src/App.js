import "./App.scss";
import Card from "./components/Card/Card.jsx";
import Header from "./components/Header/Header.jsx";
import React from "react";
import List from "./components/List/List.jsx";
import words from "./utils/words.js";

class WordCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Card></Card>
        {words.map((word) => (
          <List key={word.key} {...word}></List>
        ))}
      </React.Fragment>
    );
  }
}

export default WordCard;
