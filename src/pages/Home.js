import React, { useEffect, useRef, useState } from "react";

import { ParallaxLayer, Parallax } from "@react-spring/parallax";
import { useLocation, useNavigate } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import ProjectsSection from "../components/Home/ProjectsSection";
import ImageSection from "../components/UI/ImageSection";
import Navigation from "../components/layouts/Navigation";

import keyboard from "./keyboard.jpg";
import contactimg from "./contact.jpg";
import Modal from "../components/UI/Modal";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isRefReady, setIsRefReady] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const scroller = useRef(null);
  const executeScroll = () => scroller.current.scrollIntoView();

  useEffect(() => {
    if (location.hash === "#contact" && isRefReady) {
      executeScroll();
    }
  }, [location.hash, isRefReady]);

  const mainData = {
    title: "Hello, I'm a Front-end Developer",
    description: `My name is Lucas and this is my portfolio. I am interested in modern
    web development. Passion to programing has started in my first
    semester on studies when i touched the code in serious.`,
    buttons: [
      {
        value: "About me",
        onClick: () => {
          navigate("/about");
        },
      },
    ],
    image: keyboard,
  };

  const contactData = {
    title: "Contact Me",
    description: `You can contact me through various websites, however, I most often use and reply to e-mails and linkedin messages.`,
    links: [
      {
        value: (
          <>
            <BsLinkedin /> Linkedin
          </>
        ),
        href: "https://www.linkedin.com/in/%C5%82ukasz-went-57a274212/",
      },
    ],
    buttons: [
      {
        value: (
          <>
            <FiMail /> Email
          </>
        ),
        onClick: () => {
          setModalOpen(true);
          navigator.clipboard.writeText("lukasz.went99@gmail.com");
          setTimeout(() => {
            setModalOpen(false);
          }, 3000);
        },
      },
    ],
    image: contactimg,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Parallax pages={3}>
        <Navigation />
        <ParallaxLayer
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${keyboard})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            zIndex: -1,
          }}
        >
          <ImageSection {...mainData} content="left" />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <ProjectsSection />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.25}
          style={{
            backgroundImage: `url(${contactimg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            zIndex: -1,
          }}
        >
          <div
            ref={(el) => {
              scroller.current = el;
              setIsRefReady(true);
            }}
          >
            <ImageSection
              {...contactData}
              content="right"
              sectionID="contact"
            />
          </div>
        </ParallaxLayer>
      </Parallax>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal modalOpen={modalOpen} text="Email copied to clipboard" />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
