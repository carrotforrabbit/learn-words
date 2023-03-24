import React from "react";
import "../Error/_error.scss";

export default function showError() {
  return (
    <div className="error-container">
      <section className="error">
        <p className="error__text">404</p>
        <p className="error__text_">OOPS... there is nothing here</p>
      </section>
    </div>
  );
}
