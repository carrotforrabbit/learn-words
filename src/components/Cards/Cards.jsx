import words from "../../utils/words";
import Card from "../Card/Card";

export default function Cards() {
  return (
    <div>
      {words.map((word) => (
        <Card key={word.key} {...word} />
      ))}
    </div>
  );
}
