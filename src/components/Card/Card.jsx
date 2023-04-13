import React, { useState } from "react";
import Like from "./../Like/Like.jsx";
import "../Card/_card.scss";
import BtnPrev from "./../BtnPrev/BtnPrev.jsx";
import BtnNext from "./../BtnNext/BtnNext.jsx";
import Count from "./../Count/Count.jsx";
import words from "../../utils/words";

const Card = (props) => {
  const [pressed, setPressed] = useState(false);
  const [index, setIndex] = useState(0);
  const [clickedPrev, setPrevClick] = useState(false);
  const [clickedNext, setNextClick] = useState(false);

  const word = props[index];

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
      <div className="card-wrapper">
        <BtnPrev PrevCard={goToPrevCard} />
        {!pressed ? (
          <>
            <div className="card">
              <Like />
              <p className="card__title visually-hidden ">{word.index}</p>
              <p className="card__title">{word.word}</p>
              <p className="card__text">{word.transcription}</p>
              <p className="card__subtitle visually-hidden">
                {word.translation}
              </p>
              <button className="card__btn" onClick={showWord}>
                Show tranlation
              </button>
              <button onClick={props.handleLearned} className="card__count">
                I know this word
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="card">
              <Like />
              <div className="card__wrapper">
                <p className="card__title visually-hidden ">{word.index}</p>
                <p className="card__subtitle">{word.translation}</p>
                <button className="card__btn" onClick={showWord}>
                  Show word
                </button>
                <button onClick={props.handleLearned} className="card__count">
                  I know this word
                </button>
              </div>
            </div>
          </>
        )}
        <BtnNext NextCard={goToNextCard} />
      </div>
      <Count />
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
