import React from "react";
import ProjectList from "../Projects/ProjectsList";

import classes from "./ProjectSection.module.css";

const projectsList = [
  {
    title: "Quizz App",
    description:
      "The application is an ABCD/(True, False) quiz with the possibility of choosing different categories.",
    technologies: [
      "React",
      "React Router 6",
      "JavaScript",
      "Styled-Components",
    ],
    github: "https://github.com/lukaszwent/quiz-app-react",
    play: "https://lukaszwent.github.io/quiz-app-react/",
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
