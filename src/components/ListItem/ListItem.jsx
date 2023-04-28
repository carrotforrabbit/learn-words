import React, { useState } from "react";
import "./_listitem.scss";
import "../DelBtn/DelBtn.jsx";
import DelBtn from "../DelBtn/DelBtn.jsx";

const ListItem = (props) => {
  const [pressed, setPressed] = useState(false);
  const [inputWord, setInputWord] = useState("");
  const [inputTranslation, setInputTranslation] = useState("");
  const [inputTranscription, setInputTranscription] = useState("");
  const [inputTheme, setInputTheme] = useState("");

  const [inputWordDirty, setInputWordDirty] = useState(false);
  const [inputTranslationDirty, setInputTranslationDirty] = useState(false);
  const [inputTranscriptionDirty, setInputTranscriptionDirty] = useState(false);
  const [inputThemeDirty, setInputThemeDirty] = useState(false);

  const [inputWordError, setInputWordError] = useState("Field cannot be empty");
  const [inputTranslationError, setInputTranslationError] = useState(
    "Field cannot be empty"
  );
  const [inputTranscriptionError, setInputTranscriptionError] = useState(
    "Field cannot be empty"
  );
  const [inputThemeError, setInputThemeError] = useState(
    "Field cannot be empty"
  );

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "inputWord":
        setInputWordDirty(true);
        break;
      case "inputTranslation":
        setInputTranslationDirty(true);
        break;
      case "inputTranscription":
        setInputTranscriptionDirty(true);
        break;
      case "inputTheme":
        setInputThemeDirty(true);
        break;
    }
  };

  const inputWordHandler = (e) => {
    setInputWord(e.target.value);
    if (e.target.value === "") {
      setInputWordError("Field cannot be empty");
    } else {
      setInputWordError("");
    }
  };

  const inputTranslationHandler = (e) => {
    setInputTranslation(e.target.value);
    if (e.target.value === "") {
      setInputTranslationError("Field cannot be empty");
    } else {
      setInputTranslationError("");
    }
  };

  const inputTranscriptionHandler = (e) => {
    setInputTranscription(e.target.value);
    if (e.target.value === "") {
      setInputTranscriptionError("Field cannot be empty");
    } else {
      setInputTranscriptionError("");
    }
  };

  const inputThemeHandler = (e) => {
    setInputTheme(e.target.value);
    if (e.target.value === "") {
      setInputThemeError("Field cannot be empty");
    } else {
      setInputThemeError("");
    }
  };

  const editWord = () => {
    setPressed(!pressed);
  };
  const { index, word, translation, transcription, theme } = props;

  return (
    <div className="listitem">
      {!pressed ? (
        <ul>
          <li className="listitem__item visually-hidden key">{index}</li>
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
            {inputWordDirty && inputWordError && (
              <div style={{ color: "red" }}>{inputWordError}</div>
            )}
            <input
              onChange={(e) => inputWordHandler(e)}
              onBlur={(e) => blurHandler(e)}
              className="listitem__input"
              type="text"
              placeholder={word}
              name="inputWord"
              value={inputWord}
            />
          </li>
          <li className="listitem__item subtitle">
            {inputTranslationDirty && inputTranslationError && (
              <div style={{ color: "red" }}>{inputTranslationError}</div>
            )}
            <input
              onChange={(e) => inputTranslationHandler(e)}
              onBlur={(e) => blurHandler(e)}
              className="listitem__input"
              type="text"
              placeholder={translation}
              name="inputTranslation"
              value={inputTranslation}
            />
          </li>
          <li className="listitem__item text">
            {inputTranscriptionDirty && inputTranscriptionError && (
              <div style={{ color: "red" }}>{inputTranscriptionError}</div>
            )}
            <input
              onChange={(e) => inputTranscriptionHandler(e)}
              onBlur={(e) => blurHandler(e)}
              className="listitem__input"
              type="text"
              placeholder={transcription}
              name="inputTranscription"
              value={inputTranscription}
            />
          </li>
          <li className="listitem__item theme">
            {inputThemeDirty && inputThemeError && (
              <div style={{ color: "red" }}>{inputThemeError}</div>
            )}
            <input
              onChange={(e) => inputThemeHandler(e)}
              onBlur={(e) => blurHandler(e)}
              className="listitem__input"
              type="text"
              placeholder={theme}
              name="inputTheme"
              value={inputTheme}
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
