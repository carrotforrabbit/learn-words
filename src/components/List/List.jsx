import React, { useState } from "react";
import "../List/_list.scss";
import "../DelBtn/DelBtn.jsx";
import DelBtn from "../DelBtn/DelBtn.jsx";

const List = ({ key, word, transcription, translation, theme }) => {
  const [pressed, setPressed] = useState(false);
  const editWord = () => {
    setPressed(!pressed);
  };
  return (
    <div className="list">
      {!pressed ? (
        <ul>
          <li className="list__item visually-hidden key">{key}</li>
          <li className="list__item title">{word}</li>
          <li className="list__item subtitle">{translation}</li>
          <li className="list__item text">[ {transcription} ]</li>
          <li className="list__item theme">{theme}</li>
          <li className="list__item btns">
            {!pressed && (
              <button onClick={editWord} className="list__btn btn-edit">
                Edit
              </button>
            )}
            <DelBtn />
          </li>
        </ul>
      ) : (
        <ul>
          <li className="list__item visually-hidden key">
            <input className="list__input" type="text" />
          </li>
          <li className="list__item title">
            <input className="list__input" type="text" placeholder={word} />
          </li>
          <li className="list__item subtitle">
            <input
              className="list__input"
              type="text"
              placeholder={translation}
            />
          </li>
          <li className="list__item text">
            <input
              className="list__input"
              type="text"
              placeholder={transcription}
            />
          </li>
          <li className="list__item theme">
            <input className="list__input" type="text" placeholder={theme} />
          </li>
          <li className="list__item btns">
            <button className="btn-save" onClick={editWord}>
              X
            </button>
            <button className="btn-save" onClick={editWord}>
              Save
            </button>
            <DelBtn />
          </li>
        </ul>
      )}
    </div>
  );
};

export default List;
