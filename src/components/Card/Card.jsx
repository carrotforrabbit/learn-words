import React, { useState } from "react";
import "../Card/_card.scss";
import Like from "./../Like/Like.jsx";

const Card = ({ key, word, transcription, translation }) => {
  const [pressed, setPressed] = useState(false);
  const showWord = () => {
    setPressed(!pressed);
  };

  return (
    <div className="card-container">
      {!pressed ? (
        <>
          <div className="card">
            <Like />
            <p className="card__title visually-hidden ">{key}</p>
            <p className="card__title">{word}</p>
            <p className="card__text">{transcription}</p>
            <p className="card__subtitle visually-hidden">{translation}</p>
            <button className="card__btn" onClick={showWord}>
              Show tranlation
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="card">
            <Like />
            <p className="card__title visually-hidden ">{key}</p>
            <p className="card__subtitle">{translation}</p>
            <button className="card__btn" onClick={showWord}>
              Show word
            </button>
          </div>
        </>
      )}
    </div>
  );
};
Card.defaultProps = {
  key: "0",
  word: "word",
  translation: "translation",
  transcription: " ",
};
export default Card;
