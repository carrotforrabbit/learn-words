import words from "../../utils/words";
import ListItem from "../ListItem/ListItem";
import "./_list.scss";

export default function List() {
  return (
    <div className="list">
      <h1 className="list__title">words game</h1>
      <p className="list__text">
        Here you can learn English words in an easy and fun way.
      </p>
      {words.map((word) => (
        <ListItem key={word.key} {...word} />
      ))}
    </div>
  );
}
