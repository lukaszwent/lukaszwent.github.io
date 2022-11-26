import React from "react";

import classes from "./Chip.module.css";

const Chip = ({ children }) => {
  return <div className={classes.chip}>{children}</div>;
};

export default Chip;
