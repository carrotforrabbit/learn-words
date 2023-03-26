import React, { useState } from "react";
import "../CardSlider/CardSlider.scss";
import "../Card/_card.scss";
import Card from "../Card/Card.jsx";
import BtnPrev from "./../BtnPrev/BtnPrev.jsx";
import BtnNext from "./../BtnNext/BtnNext.jsx";
import words from "../../utils/words";

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevCard = () => {
    setCurrentIndex(currentIndex === 0 ? words.length - 1 : currentIndex - 1);
  };

  const goToNextCard = () => {
    setCurrentIndex(currentIndex === words.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="card-slider">
      <BtnPrev onClick={goToPrevCard} />
      <Card
        key={words[currentIndex].key}
        word={words[currentIndex].word}
        transcription={words[currentIndex].transcription}
        translation={words[currentIndex].translation}
      />
      <BtnNext onClick={goToNextCard} />
    </div>
  );
};

export default CardSlider;

// const CardSlider = () => {
//   const [index, setIndex] = useState(0);

//   const PrevCard = () => {
//     if (index - 1 < 0) {
//       setIndex(words.length - 1);
//     } else {
//       setIndex(index - 1);
//     }
//   };
//   const NextCard = () => {
//     if (index + 1 >= words.length) {
//       setIndex(0);
//     } else {
//       setIndex(index + 1);
//     }
//   };
//   return (
//     <div className="card-slider">
//       <BtnPrev onClick={PrevCard} />
//       {words.map((word, i) => (
//         <div
//           key={i}
//           className={`card-container ${i === index ? "active" : ""}`}>
//           <Card
//             index={i}
//             word={word.word}
//             transcription={word.transcription}
//             translation={word.translation}
//           />
//         </div>
//       ))}
//       <BtnNext onClick={NextCard} />
//     </div>
//   );
// };
// export default CardSlider;
