import React from "react";
import styles from "./button.module.css";

const Button = ({ children, color, executaFuncao, tipoDoBotao }) => {
  return (
    <button
      className={`${
        color === "primary" ? `${styles.primary}` : `${styles.secondary}`
      }`}
      onClick={() => executaFuncao()}
      type={tipoDoBotao || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
