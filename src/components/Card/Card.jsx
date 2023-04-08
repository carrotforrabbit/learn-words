import React, { useState } from "react";
import Like from "./../Like/Like.jsx";
import "../CardSlider/CardSlider.scss";
import "../Card/_card.scss";
import BtnPrev from "./../BtnPrev/BtnPrev.jsx";
import BtnNext from "./../BtnNext/BtnNext.jsx";
import words from "../../utils/words";

const Card = (props) => {
  const [pressed, setPressed] = useState(false);
  const [index, setIndex] = useState(0);
  const [clickedPrev, setPrevClick] = useState(false);
  const [clickedNext, setNextClick] = useState(false);
  const word = props[index];
  console.log(props);

  const goToPrevCard = () => {
    if (index - 1 < 0) {
      setIndex(words.length - 1);
    } else setIndex(index - 1);
    setPrevClick(!clickedPrev);
  };
  const goToNextCard = () => {
    if (index + 1 >= words.length) {
      setIndex(0);
    } else setIndex(index + 1);
    setNextClick(!clickedNext);
  };

  const showWord = () => {
    setPressed(!pressed);
  };

  return (
    <div className="card-container">
      <BtnPrev PrevCard={goToPrevCard} />
      {!pressed ? (
        <>
          <div className="card">
            <Like />
            <p className="card__title visually-hidden ">{word.index}</p>
            <p className="card__title">{word.word}</p>
            <p className="card__text">{word.transcription}</p>
            <p className="card__subtitle visually-hidden">{word.translation}</p>
            <button className="card__btn" onClick={showWord}>
              Show tranlation
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="card">
            <Like />
            <p className="card__title visually-hidden ">{word.index}</p>
            <p className="card__subtitle">{word.translation}</p>
            <button className="card__btn" onClick={showWord}>
              Show word
            </button>
          </div>
        </>
      )}
      <BtnNext NextCard={goToNextCard} />
    </div>
  );
};
Card.defaultProps = {
  index: "0",
  word: "word",
  translation: "translation",
  transcription: " ",
};
export default Card;
