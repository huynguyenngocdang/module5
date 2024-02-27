import React from "react";
// import "./Button.scss";
import styles from "./Button.module.css";

// styled-components

const Button = (props) => {
  return (
    // scss
    // <button className={`button ${props.className}` || ""}>
    
    // css module
    <button
      className={`${styles.button} 
    ${props.secondary ? styles.buttonSecondary : ""}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
