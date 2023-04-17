import "../Count/_count.scss";

function Count(props) {
  return (
    <div className="count">
      <p className="count__text">words learnt: {props.learnWords}</p>
    </div>
  );
}

export default Count;
