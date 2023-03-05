import React from "react";
import "../Card/_card.scss";

function Card(props) {
  return (
    <div className="card">
      <p className="card__title">love{props.word}</p>
      <p className="card__subtitle">любовь{props.translation}</p>
      <p className="card__text">lav{props.transcription}</p>
      <button className="card__btn">Flip Card</button>
    </div>
  );
}

export default Card;
