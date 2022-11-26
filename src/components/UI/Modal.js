import React from "react";
import { motion } from "framer-motion";

import classes from "./Modal.module.css";

const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
  },
};

const Modal = ({ text }) => {
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className={classes.modal}
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <p>{text}</p>
    </motion.div>
  );
};

export default Modal;
