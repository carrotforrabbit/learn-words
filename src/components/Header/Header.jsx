import React from "react";
import "../Header/_header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="body">
      <header className="header">
        <ul className="header__list">
          <li className="header__logo">
            <Link to="/home">
              <img src="src/img/logo.jpg" alt="Logo." />
              {/* <svg
                width="50px"
                height="50px"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="6"
                  y="6"
                  width="36"
                  height="36"
                  rx="3"
                  fill="#2F88FF"
                  stroke="#000000"
                  stroke-width="4"
                />
                <path
                  d="M14 16L18 32L24 19L30 32L34 16"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> */}
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/home">
              Home
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/cards">
              Cards
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/liked">
              Liked
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
