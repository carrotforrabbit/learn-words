import React, { useState } from "react";
import "../Card/_card.scss";
import Like from "./../Like/Like.jsx";
import words from "../../utils/words";

const Card = ({ key, word, transcription, translation }) => {
  const [pressed, setPressed] = useState(false);
  const showWord = () => {
    setPressed(!pressed);
  };
  const item = words[key];

  return (
    <div className="card-container">
      {!pressed ? (
        <>
          <div {...item} className="card">
            <Like />
            <p className="card__title visually-hidden ">{item.key}</p>
            <p className="card__title">{item.word}</p>
            <p className="card__text">{item.transcription}</p>
            <p className="card__subtitle visually-hidden">{item.translation}</p>
            <button className="card__btn" onClick={showWord}>
              Show tranlation
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="card">
            <Like />
            <p className="card__title visually-hidden ">{item.key}</p>
            <p className="card__subtitle">{item.translation}</p>
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
