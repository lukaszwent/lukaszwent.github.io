import React from "react";

import { motion } from "framer-motion";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";

import InfoBoxes from "../components/About/InfoBoxes";
import MainSection from "../components/UI/ImageSection";
import Navigation from "../components/layouts/Navigation";

import man from "./man.jpg";

const About = () => {
  const data = {
    title: "So, my name is Łukasz Went",
    description: `I am a student of Computer Science at the University of Lodz. I am constantly trying to train my programming skills. I am a determined and persistent person striving to achieve my goals. On a daily basis, I program in JavaScript using technologies such as NodeJS, ReactJS or React Native. 
    `,
    image: man,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Parallax pages={2}>
        <Navigation />
        <ParallaxLayer
          speed={1}
          style={{
            backgroundImage: `url(${man})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            zIndex: -1,
          }}
        >
          <MainSection {...data} content="right" />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <InfoBoxes />
        </ParallaxLayer>
      </Parallax>
    </motion.div>
  );
};

export default About;
