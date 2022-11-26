import React from "react";
import ProjectList from "../Projects/ProjectsList";

import classes from "./ProjectSection.module.css";

const projectsList = [
  {
    title: "Quizz App",
    description:
      "The application is an ABCD quiz with the possibility of choosing different categories and saving your previous results.",
    technologies: [
      "React",
      "Redux",
      "Firebase",
      "React Router 6",
      "JavaScript",
      "Styled-Components",
    ],
    github: "t",
    play: "t",
  },
];

const ProjectsSection = () => {
  return (
    <div className={classes.projectsSection}>
      <h2>Selected Projects</h2>
      <ProjectList data={projectsList} />
    </div>
  );
};

export default ProjectsSection;
