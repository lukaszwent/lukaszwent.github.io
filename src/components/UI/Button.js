import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  let btnStyles = `${classes.button} ${
    props.className ? props.className : null
  }`;

  return (
    <button {...props} className={btnStyles}>
      {props.children}
    </button>
  );
};

export default Button;
