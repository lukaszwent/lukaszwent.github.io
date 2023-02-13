import React from "react";

import InfoBoxes from "../components/About/InfoBoxes";
import MainSection from "../components/UI/ImageSection";

import man from "./man.jpg";

const About = () => {
  const data = {
    title: "So, my name is Łukasz Went",
    description: `I am a student of Applied Computer Science at the University of Lodz. I am constantly trying to train my programming skills. I am a determined and persistent person striving to achieve my goals. On a daily basis, I program in JavaScript using technologies such as NodeJS, ReactJS or React Native. 
    `,
    image: man,
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${man})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          zIndex: -1,
          height: "100vh",
        }}
      >
        <MainSection {...data} content="right" />
      </div>

      <InfoBoxes />
    </div>
  );
};

export default About;
