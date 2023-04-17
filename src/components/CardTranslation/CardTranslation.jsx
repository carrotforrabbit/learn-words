import Like from "./../Like/Like.jsx";
import "../CardInitial/_cardinitial.scss";

const CardInitial = (props) => {
  return (
    <div className="card">
      <Like />
      <p className="card__title visually-hidden ">{props.index}</p>
      <p className="card__subtitle">{props.translation}</p>
      <button className="card__btn" onClick={props.showWord}>
        Show word
      </button>
      <button onClick={props.handleLearned} className="card__count">
        I know this word
      </button>
    </div>
  );
};

CardInitial.defaultProps = {
  index: "0",
  word: "word",
  translation: "translation",
  transcription: " ",
};

export default CardInitial;
