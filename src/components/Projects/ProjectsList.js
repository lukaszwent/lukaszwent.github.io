import React from "react";
import ProjectItem from "./ProjectItem";

import classes from "./ProjectList.module.css";

const ProjectList = ({ data }) => {
  return (
    <div className={classes.list}>
      {data.map((element, index) => {
        return <ProjectItem {...element} key={index} />;
      })}
    </div>
  );
};

export default ProjectList;
