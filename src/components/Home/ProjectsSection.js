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
  {
    title: "Website to control your tasks",
    description:
      "A website that allows you to add, delete, update and view tasks. Tasks have a specific time for their execution, the user adding time determines the status of its completion. The interface is built on the basis of EJS templates and styled using Bootstrap. All logic is performed using the Express server and the MongoDB database to hold the data.",
    technologies: ["NodeJS", "Express", "JavaScript", "EJS", "MongoDB"],
    github: "https://github.com/lukaszwent/controlapp",
    play: "",
  },
  {
    title: "Book online store",
    description:
      "An online store written in Java using the Spring framework. In the application we have two user roles, seller and buyer. The seller has the ability to add, update, delete and view books. The buyer can filter books and add them to the basket.",
    technologies: ["Spring Boot", "Spring Security", "Java", "Thymeleaf"],
    github: "https://github.com/lukaszwent/Spring-BookStore",
    play: "",
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
