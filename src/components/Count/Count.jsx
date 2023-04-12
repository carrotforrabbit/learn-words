import "../Count/_count.scss";

function Count() {
  const [learnWords, setLearnWords] = useState(0);
  handleLearned = () => {
    setLearnWords(learnWords + 1);
  };
  return (
    <div className="count">
      <p className="count__text">words learnt:</p>
      <p className="count__number">{learnWords}</p>
    </div>
  );
}

export default Count;
