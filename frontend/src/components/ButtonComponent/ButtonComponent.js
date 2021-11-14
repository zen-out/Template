import React from "react";
import "./Button.css";
const ButtonComponent = ({ onClick, name, label, id }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      className="btn btn-4"
      onClick={() => handleClick()}
      name={name}
      id={id}
    >
      <span style={{ color: "white" }}>{label}</span>
    </button>
  );
};

export default ButtonComponent;
