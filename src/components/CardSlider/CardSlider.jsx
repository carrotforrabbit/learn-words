import React, { useState, useEffect } from "react";
import "../CardSlider/CardSlider.scss";
import "../Card/_card.scss";
import Card from "../Card/Card.jsx";
import BtnPrev from "./../BtnPrev/BtnPrev.jsx";
import BtnNext from "./../BtnNext/BtnNext.jsx";
import words from "../../utils/words";

const CardSlider = () => {
  const [index, setIndex] = React.useState(0);
  const [clickNext, setNextClick] = useState(false);
  const [clickPrev, setPrevClick] = useState(false);
  const word = words[index];

  const NextCard = () => {
    if (index + 1 >= words.length) {
      setIndex(0);
    } else setIndex(index + 1);
    setNextClick(!clickNext);
  };

  const PrevCard = () => {
    if (index - 1 < 0) {
      setIndex(words.length - 1);
      setPrevClick(!clickPrev);
    }
  };

  return (
    <div className="card-slider">
      <BtnPrev onclick={PrevCard} />
      <Card />
      <BtnNext onclick={NextCard} />
    </div>
  );
};
export default CardSlider;
