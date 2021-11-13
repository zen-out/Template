import React from "react";
import HTMLReactParser from "html-react-parser";
const style = {
  width: "100%",
  height: "600px",
  border: 0,
  borderRadius: "4px",
  overflow: "hidden",
};
function CodeComponent({ link }) {
  var regexp = /^https?.*codepen.io\/(.*)\/pen\/(.*)$/;

  let match = link.match(regexp);
  let username = match[1];
  let actualId = match[2];
  let src = `//codepen.io/onigetoc/embed/${actualId}/?height=600&theme-id=0&default-tab=result&embed-version=2`;

  return (
    <div>
      <iframe
        height="600"
        scrolling="no"
        src={src}
        frameborder="no"
        allowtransparency="true"
        allowfullscreen="true"
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
}
function CodeSandbox({ link }) {
  return (
    <div>
      <iframe
        src={link}
        style={style}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
}
export default function Codepen({ link, title, subtitle }) {
  return (
    <div className="App">
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      {link.toLowerCase().includes("codesandbox") ? (
        <div>
          <CodeSandbox link={link} />
        </div>
      ) : (
        <div>
          <CodeComponent link={link} />
        </div>
      )}
    </div>
  );
}
