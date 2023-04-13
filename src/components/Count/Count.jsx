import React, { useState } from "react";
import "../Count/_count.scss";

function Count() {
  const [learnWords, setLearnWords] = useState(0);
  const handleLearned = () => {
    setLearnWords(learnWords + 1);
  };
  return (
    <div className="count" onClick={handleLearned}>
      <p className="count__text">words learnt:</p>
      <p className="count__number">{learnWords}</p>
    </div>
  );
}

export default Count;
