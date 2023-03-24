import words from "../../utils/words";
import List from "../List/List";

export default function ListItem() {
  return (
    <div>
      {words.map((word) => (
        <List key={word.key} {...word} />
      ))}
    </div>
  );
}
