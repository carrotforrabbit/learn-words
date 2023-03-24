import React, { useState } from "react";
import "../CardSlider/CardSlider.scss";
import "../Card/_card.scss";
import Cards from "../Cards/Cards.jsx";
// import Card from "../Card/Card.jsx";
import BtnPrev from "./../BtnPrev/BtnPrev.jsx";
import BtnNext from "./../BtnNext/BtnNext.jsx";
import words from "../../utils/words";

const CardSlider = () => {
  const [index, setIndex] = useState(0);

  const PrevCard = () => {
    if (index - 1 < 0) {
      setIndex(words.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const NextCard = () => {
    if (index + 1 >= words.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <div className="card-slider">
      <BtnPrev onclick={PrevCard} />
      <Cards />
      <BtnNext onclick={NextCard} />
    </div>
  );
};
export default CardSlider;
