import React, { useState } from "react";
import "./_card.scss";
import CardInitial from "../CardInitial/CardInitial.jsx";
import CardTranslation from "../CardTranslation/CardTranslation.jsx";
import BtnPrev from "../BtnPrev/BtnPrev.jsx";
import BtnNext from "../BtnNext/BtnNext.jsx";
import Count from "../Count/Count.jsx";
import words from "../../utils/words";

const CardContainer = () => {
  const [pressed, setPressed] = useState(false);
  const [index, setIndex] = useState(0);
  const [clickedPrev, setPrevClick] = useState(false);
  const [clickedNext, setNextClick] = useState(false);
  const [viewCard, setViewCard] = useState(false);
  const [learnWords, setLearnWords] = useState(0);
  const word = words[index];

  const goToPrevCard = () => {
    if (index - 1 < 0) {
      setIndex(words.length - 1);
    } else setIndex(index - 1);
    setViewCard(true);
    setPressed(false);
    setPrevClick(!clickedPrev);
  };
  const goToNextCard = () => {
    if (index + 1 >= words.length) {
      setIndex(0);
    } else setIndex(index + 1);
    setViewCard(false);
    setPressed(false);
    setNextClick(!clickedNext);
  };

  const showWord = () => {
    setPressed(!pressed);
  };

  const handleLearned = () => {
    if (!viewCard) {
      setLearnWords(learnWords + 1);
      setViewCard(true);
    }
  };
  console.log(viewCard, "viewcard");
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <BtnPrev PrevCard={goToPrevCard} />
        {!pressed ? (
          <>
            <CardInitial
              {...word}
              handleLearned={handleLearned}
              showWord={showWord}
            />
          </>
        ) : (
          <>
            <CardTranslation
              {...word}
              handleLearned={handleLearned}
              showWord={showWord}
            />
          </>
        )}
        <BtnNext NextCard={goToNextCard} />
      </div>
      <Count learnWords={learnWords} />
    </div>
  );
};
CardContainer.defaultProps = {
  index: "0",
  word: "word",
  translation: "translation",
  transcription: " ",
};
export default CardContainer;
