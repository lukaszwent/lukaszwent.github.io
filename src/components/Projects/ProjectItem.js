import React from "react";

import classes from "./ProjectItem.module.css";

import Card from "../layouts/Card";

import { BsGithub, BsPlayCircleFill } from "react-icons/bs";
import Chip from "../UI/Chip";
import IconLink from "../UI/IconLink";

const ProjectItem = (props) => {
  return (
    <Card>
      <h3 className={classes.header}>{props.title}</h3>
      <p className={classes.description}>{props.description}</p>
      <div className={classes.technologies}>
        {props.technologies.map((technology) => {
          return <Chip key={technology}>{technology}</Chip>;
        })}
      </div>
      <div className={classes.buttons}>
        {props.github ? (
          <IconLink href={props.github}>
            <BsGithub />
          </IconLink>
        ) : null}
        {props.play ? (
          <IconLink href={props.play}>
            <BsPlayCircleFill />
          </IconLink>
        ) : null}
      </div>
    </Card>
  );
};

export default ProjectItem;
