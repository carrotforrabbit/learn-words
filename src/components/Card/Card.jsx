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
  // const wordid = words[index];
  console.log(props);

  const goToPrevCard = () => {
    if (index - 1 < 0) {
      setIndex(words.length - 1);
    } else {
      setIndex(index - 1);
      setPrevClick(!clickedPrev);
    }
  };
  const goToNextCard = () => {
    if (index + 1 >= words.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
      setNextClick(!clickedNext);
    }
  };

  const showWord = () => {
    setPressed(!pressed);
  };

  return (
    <div className="card-container">
      <BtnPrev onClick={goToPrevCard} />
      {!pressed ? (
        <>
          <div className="card">
            <Like />
            <p className="card__title visually-hidden ">{props.index}</p>
            <p className="card__title">{props.word}</p>
            <p className="card__text">{props.transcription}</p>
            <p className="card__subtitle visually-hidden">
              {props.translation}
            </p>
            <button className="card__btn" onClick={showWord}>
              Show tranlation
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="card">
            <Like />
            <p className="card__title visually-hidden ">{props.index}</p>
            <p className="card__subtitle">{props.translation}</p>
            <button className="card__btn" onClick={showWord}>
              Show word
            </button>
          </div>
        </>
      )}
      <BtnNext onClick={goToNextCard} />
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
