import React from "react";
import { motion } from "framer-motion";

import styled from './Loader.module.css';
const container = {
  
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
 
  
  
};


const itemBg = {
 
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
    exit: {
      opacity: 1,
      y: -200,
      transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    }
    },
  },
   
}
const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 1,
    animate:{ rotate: 180 },
    transition:{ type: "inertia", velocity: 50 }
  },
};

const Loader = ({ setLoading }) => {
  console.log("loader")
  return (
   
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        
      >
        <motion.div
          className={styled.main} variants={itemBg}>
       
        <motion.div variants={item}>
             Loading...
           </motion.div>
        </motion.div>
        

    
    </motion.div>
  );
};


export default Loader;