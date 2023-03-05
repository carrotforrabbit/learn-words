import "./App.scss";
import Card from "./components/Card/Card.jsx";
import Header from "./components/Header/Header.jsx";
import React from "react";
import List from "./components/List/List.jsx";

class WordCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Card></Card>
        <List></List>
        <List></List>
        <List></List>
      </React.Fragment>
    );
  }
}

export default WordCard;
