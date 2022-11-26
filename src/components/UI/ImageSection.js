import React from "react";

import Button from "./Button";
import IconLink from "./IconLink";

import classes from "./ImageSection.module.css";

const ImageSection = ({
  title,
  description,
  buttons,
  links,
  content,
  sectionID,
}) => {
  return (
    <div
      className={
        content === "right" ? classes.containerRight : classes.containerLeft
      }
    >
      <div className={classes.section} id={sectionID}>
        <h1>{title}</h1>
        <p>{description}</p>

        {buttons?.map((btn) => {
          return (
            <Button
              className={classes.btn}
              key={btn.value}
              onClick={btn.onClick}
            >
              {btn.value}
            </Button>
          );
        })}

        {links?.map((link) => {
          return (
            <IconLink href={link.href} key={link.href} onClick={link.onClick}>
              {link.value}
            </IconLink>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSection;
