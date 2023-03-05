import React from "react";
import "../Header/_header.scss";

function Header() {
  return (
    <div className="header">
      <ul className="header__list">
        <li className="header__logo"></li>
        <li className="header__item">Lists</li>
        <li className="header__item">Cards</li>
        <li className="header__item">About</li>
      </ul>
    </div>
  );
}

export default Header;
