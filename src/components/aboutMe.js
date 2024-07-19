import React from "react";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import {easeOut} from "framer-motion"
import { useScroll, useTransform, useSpring } from 'framer-motion';

const aboutHeaderVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      duration: 0.8,
    },
  },
};
const paraVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8, // Delay to start after the about header animation
      duration: 1,
    },
  },
};

const AboutMe = () => {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["#808080", "#000000"]
  );
  const smoothBackgroundColor = useSpring(backgroundColor, {
    stiffness: 300,
    damping: 30,
  });
  return (
    <div>
      <motion.div
        className="about"
        style={{ backgroundColor: backgroundColor }}
      >
        <motion.h1
          className="about-header"
          variants={aboutHeaderVariants}
          initial="hidden"
          animate="visible"
        >
          {" "}
          About me{" "}
        </motion.h1>
        <motion.p
          className="about-para"
          variants={paraVariants}
          initial="hidden"
          animate="visible"
        >
          {" "}
          I'm Ngo Hieu, a 17-year-old student at Nguyen Tat Thanh High
          School.I'm often refered as Corn Hieu as a fun nickname and my hobbies
          are predominantly coding and participating sports like bodybuilding
          and basketball.{" "}
        </motion.p>
        <motion.p
          className="about-para"
          variants={paraVariants}
          initial="hidden"
          animate="visible"
        >
          {" "}
          My motives lies upon the burning spirit of entrepreneurship and my
          long-standing passion for coding. I believe that technology will be
          the future and I want to be a part of it by pursuing the startup
          journey.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AboutMe;
