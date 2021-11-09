import React from "react";

const ButtonComponent = ({ onClick, name, label, id }) => {
  return (
    <button onClick={onClick} name={name} id={id}>
      {label}
    </button>
  );
};

export default ButtonComponent;
