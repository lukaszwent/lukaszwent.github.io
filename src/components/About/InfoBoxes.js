import React from "react";
import Chip from "../UI/Chip";
import InfoBox from "./InfoBox";

import classes from "./InfoBoxes.module.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "React Native",
  "NodeJS",
  "Express",
  "MongoDB",
  "MySQL",
  "Git",
];

const InfoBoxes = () => {
  return (
    <div className={classes.boxesContainer}>
      <InfoBox title="Skills">
        {skills.map((skill) => {
          return <Chip key={skill}>{skill}</Chip>;
        })}
      </InfoBox>

      <InfoBox title="Education">
        <div className={classes.infoBoxContent}>
          <div className={classes.contentTitle}>Uniwersytet Łódzki WFiS</div>
          <div className={classes.secondTitle}>Informatyka, Inżynierskie</div>
          <div className={classes.date}>2019-2023</div>
        </div>
      </InfoBox>

      <InfoBox title="Experience">
        <div className={classes.infoBoxContent}>
          <div className={classes.contentTitle}>Commerzbank Internship</div>
          <div className={classes.secondTitle}>
            (Working as Frontend developer in project for UMŁ)
          </div>
          <div className={classes.date}>07-09.2022</div>
        </div>
      </InfoBox>
    </div>
  );
};

export default InfoBoxes;
