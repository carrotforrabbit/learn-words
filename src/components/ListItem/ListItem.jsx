import React, { useState } from "react";
import "./_listitem.scss";
import "../DelBtn/DelBtn.jsx";
import DelBtn from "../DelBtn/DelBtn.jsx";

const ListItem = ({ key, word, transcription, translation, theme }) => {
  const [pressed, setPressed] = useState(false);
  const editWord = () => {
    setPressed(!pressed);
  };
  return (
    <div className="listitem">
      {!pressed ? (
        <ul>
          <li className="listitem__item visually-hidden key">{key}</li>
          <li className="listitem__item title">{word}</li>
          <li className="listitem__item subtitle">{translation}</li>
          <li className="listitem__item text">{transcription}</li>
          <li className="listitem__item theme">{theme}</li>
          <li className="listitem__item btns">
            {!pressed && (
              <button onClick={editWord} className="listitem__btn btn-edit">
                Edit
              </button>
            )}
            <DelBtn />
          </li>
        </ul>
      ) : (
        <ul>
          <li className="listitem__item visually-hidden key">
            <input className="listitem__input" type="text" />
          </li>
          <li className="listitem__item title">
            <input className="listitem__input" type="text" placeholder={word} />
          </li>
          <li className="listitem__item subtitle">
            <input
              className="listitem__input"
              type="text"
              placeholder={translation}
            />
          </li>
          <li className="listitem__item text">
            <input
              className="listitem__input"
              type="text"
              placeholder={transcription}
            />
          </li>
          <li className="listitem__item theme">
            <input
              className="listitem__input"
              type="text"
              placeholder={theme}
            />
          </li>
          <li className="listitem__item btns">
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

ListItem.defaultProps = {
  key: "0",
  word: "word",
  translation: "translation",
  transcription: " ",
  theme: "theme",
};

export default ListItem;
