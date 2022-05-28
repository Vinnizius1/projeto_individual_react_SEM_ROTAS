import React from "react";
import primary from "./button.module.css";
import secondary from "./button.module.css";

const Button = (props) => {
  // return <button className={styles.button}>{props.children}</button>;

  return (
    <button
      type="submit"
      className={props.primary ? primary.primary : secondary.secondary}
    >
      {props.children}
    </button>
  );
};

export default Button;
