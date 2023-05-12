import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedDiv = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const divVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -50,
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={inView ? "visible" : "hidden"}
      initial="hidden"
      variants={containerVariants}
    >
      <motion.div variants={divVariants}>{children}</motion.div>
    </motion.div>
  );
};

export default AnimatedDiv;
