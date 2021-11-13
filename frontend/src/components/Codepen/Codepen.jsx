import React from "react";
const style = {
  width: "100%",
  height: "600px",
  border: 0,
  borderRadius: "4px",
  overflow: "hidden",
};
export default function Codepen({ link }) {
  var regexp = /^https?.*codepen.io\/(.*)\/pen\/(.*)$/;

  let match = link.match(regexp);
  if (match) {
    let actualId = match[2];
    let src = `//codepen.io/onigetoc/embed/${actualId}/?height=600&theme-id=0&default-tab=result&embed-version=2`;

    return (
      <div>
        <a href={link} target="_blank">
          {link}
        </a>
        <iframe
          height="600"
          scrolling="no"
          src={src}
          frameBorder="no"
          allowTransparency="true"
          allowFullScreen="true"
          style={style}
        >
          {/* See the Pen{" "}
        <a href={link}>Google book search api</a> by
        "+username+" (
        <a href='https://codepen.io/"+username+"'>
          @"+username+"
        </a>
        ) on <a href="https://codepen.io">CodePen</a>. */}
        </iframe>
      </div>
    );
  } else {
    return (
      <div>
        <a href={link} target="_blank">
          {link}
        </a>
      </div>
    );
  }
  //   let username = match[1];
}
