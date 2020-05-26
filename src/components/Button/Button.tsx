import React, { ReactChild } from "react";
import "./Button.scss";

const Button = (props: {
  style?: object;
  onClick?: () => void;
  className?: string;
  children: ReactChild;
}) => {
  return (
    <button
      className={`button ${props.className}`}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
