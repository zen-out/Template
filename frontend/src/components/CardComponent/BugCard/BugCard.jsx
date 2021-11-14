import React from "react";
import "./BugCard.css";

export default function BugCard() {
  return (
    <div>
      <div className="wrapper">
        <input type="checkbox" id="checkbox" />
        <label for="checkbox" className="open">
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </label>

        <section className="content">
          <label for="checkbox" className="close">
            <span>Close Me!</span>
          </label>

          <div className="logo">
            <div className="logo__line"></div>
            <div className="logo__line"></div>
            <div className="logo__line"></div>
          </div>

          <h1>Three Invites</h1>
          <p>
            To get one of these invites, just create the
            best of your shots and post them in yuor
            dribbble account
          </p>
        </section>
      </div>
    </div>
  );
}
