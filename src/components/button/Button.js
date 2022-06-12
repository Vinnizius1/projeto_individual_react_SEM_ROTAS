import React from "react";
// import primary from "./button.module.css";
// import secondary from "./button.module.css";
import style from "./button.module.css";

const Button = (props) => {
  if (props.ok) {
    return (
      <button
        onClick={() => props.ok()}
        className={props.primary ? style.primary : style.secondary}
      >
        {props.children}
      </button>
    );
  } else if (props.fechaModal) {
    return (
      <button
        type="button"
        onClick={() => props.fechaModal()}
        className={props.primary ? style.primary : style.secondary}
      >
        {props.children}
      </button>
    );
  } else if (props.handleSubmit) {
    return (
      <button
        type="submit"
        onClick={() => props.handleSubmit()}
        className={props.primary ? style.primary : style.secondary}
      >
        {props.children}
      </button>
    );
  } else if (props.fechaInvalidCard) {
    return (
      <button
        type="button"
        onClick={() => props.fechaInvalidCard()}
        className={props.primary ? style.primary : style.secondary}
      >
        {props.children}
      </button>
    );
  } else if (props.fechaValidCard) {
    return (
      <button
        type="button"
        onClick={() => props.fechaValidCard()}
        className={props.primary ? style.primary : style.secondary}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
