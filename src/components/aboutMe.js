import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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

const buttonVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.8, // Delay to start after the about header animation
      duration: 1,
    },
  },
};
const buttonHoverVariants = {
  scale: 1.1,
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  transition: {
    duration: 0.3,
    yoyo: Infinity,
  },
};



const AboutMe = () => {
  const { scrollYProgress } = useScroll();
  const [isBottom, setIsBottom] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["#808080", "#000000"]
  );
  const smoothBackgroundColor = useSpring(backgroundColor, {
    stiffness: 300,
    damping: 30,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (!hasScrolledToBottom) {
          setIsBottom(true);
          setHasScrolledToBottom(true);
        }
      }
    };

    handleScroll(); // Check once on component mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledToBottom]);

  return (
    <motion.div className="about-main" style={{ backgroundColor: backgroundColor}}>
      {isBottom && (
        <motion.div className="about-box">
          <motion.h1
            className="about-header"
            variants={aboutHeaderVariants}
            initial="hidden"
            animate="visible"
          >
            About me
          </motion.h1>
          <motion.p
            className="about-para"
            variants={paraVariants}
            initial="hidden"
            animate="visible"
          >
            I'm Ngo Hieu, a 17-year-old student at Nguyen Tat Thanh High School. I'm often referred to as Corn Hieu as a fun nickname and my hobbies are predominantly coding and participating in sports like bodybuilding and basketball.
          </motion.p>
          <motion.p
            className="about-para"
            variants={paraVariants}
            initial="hidden"
            animate="visible"
          >
            My motives lie upon the burning spirit of entrepreneurship and my long-standing passion for coding. I believe that technology will be the future and I want to be a part of it by pursuing the startup journey.
          </motion.p>
          <motion.a 
          className="about-button" 
          href="/All_posts"
          variants={buttonVariants} 
          initial="hidden" 
          animate="visible"
          whileHover={buttonHoverVariants}>
            Visit my blogs
          </motion.a>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AboutMe;
