import React from "react";

import classes from "./IconLink.module.css";

const IconLink = (props) => {
  return (
    <a {...props} className={classes.iconLink} target="_blank">
      {props.children}
    </a>
  );
};

export default IconLink;
