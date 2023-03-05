import React from "react";
import "../List/_list.scss";

function List(props) {
  return (
    <div className="list">
      <ul>
        <li className="list__item visually-hidden key">1{props.key}</li>
        <li className="list__item title">Love{props.word}</li>
        <li className="list__item subtitle">Любовь{props.translation}</li>
        <li className="list__item text">lav{props.transcription}</li>
        <li className="list__item theme">noun{props.theme}</li>
        <li className="list__item btns">
          <button className="list__btn btn-edit">Edit</button>
          <button className="list__btn btn-delete">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default List;
