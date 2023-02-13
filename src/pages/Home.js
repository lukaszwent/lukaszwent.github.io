import React, { useEffect, useRef, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import ProjectsSection from "../components/Home/ProjectsSection";
import ImageSection from "../components/UI/ImageSection";

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
    title: "Hello, I'm a Web Developer",
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
    <div>
      <div
        style={{
          backgroundImage: `url(${keyboard})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          zIndex: -1,
          height: "100vh",
        }}
      >
        <ImageSection {...mainData} content="left" />
      </div>
      <div
        style={{
          height: "100%",
        }}
      >
        <ProjectsSection />
      </div>

      <div
        style={{
          backgroundImage: `url(${contactimg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          zIndex: -1,
          height: "100vh",
        }}
      >
        <div
          ref={(el) => {
            scroller.current = el;
            setIsRefReady(true);
          }}
        >
          <ImageSection {...contactData} content="right" sectionID="contact" />
        </div>
      </div>

      {modalOpen && (
        <Modal modalOpen={modalOpen} text="Email copied to clipboard" />
      )}
    </div>
  );
};

export default Home;
