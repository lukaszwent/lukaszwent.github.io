import React from "react";
import Box from "../UI/Box";

import classes from "./InfoBox.module.css";

const InfoBox = ({ title, children }) => {
  return (
    <Box>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.content}>{children}</div>
    </Box>
  );
};

export default InfoBox;
