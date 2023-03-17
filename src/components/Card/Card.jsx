import React, { useState } from "react";
import "../Card/_card.scss";
import Like from "./../Like/Like.jsx";
import BtnPrev from "./../BtnPrev/BtnPrev.jsx";
import BtnNext from "./../BtnNext/BtnNext.jsx";

const Card = ({ key, word, transcription, translation }) => {
  const [pressed, setPressed] = useState(false);
  const showWord = () => {
    setPressed(!pressed);
  };
  return (
    <div className="card-container">
      {!pressed ? (
        <>
          <BtnPrev />
          <div className="card">
            <Like />
            <p className="card__title visually-hidden ">{key}</p>
            <p className="card__title">{word}</p>
            <p className="card__text">[{transcription}]</p>
            <p className="card__subtitle visually-hidden">{translation}</p>
            <button className="card__btn" onClick={showWord}>
              Show word
            </button>
          </div>
          <BtnNext />
        </>
      ) : (
        <>
          <BtnPrev />
          <div className="card">
            <Like />
            <p className="card__title visually-hidden ">{key}</p>
            <p className="card__subtitle">{translation}</p>
            <button className="card__btn" onClick={showWord}>
              Show word
            </button>
          </div>
          <BtnNext />
        </>
      )}
    </div>
  );
};

export default Card;
