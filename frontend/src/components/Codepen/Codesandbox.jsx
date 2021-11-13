const style = {
  width: "100%",
  height: "600px",
  border: 0,
  borderRadius: "4px",
  overflow: "hidden",
};
export default function CodeSandbox({ link }) {
  if (link.includes("codesandbox.io")) {
    let newLink = link + "?from-embed";
    return (
      <div>
        <a href={link} target="_blank">
          {link}
        </a>
        <iframe
          src={newLink}
          style={style}
          frameBorder="no"
          allowTransparency="true"
          allowFullScreen="true"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
    );
  } else {
    return (
      <a href={link} target="_blank">
        {link}
      </a>
    );
  }
}
