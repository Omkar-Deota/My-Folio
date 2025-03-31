import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/projects/20231220_212404(0).jpg";
import img2 from "../assets/projects/20231219_160922.jpg";

const Achievements = () => {
  return (
    <div className="overflow-hidden ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl"
      >
        Achievements
        <p className="mt-2 italic bg-gradient-to-r from-blue-600 to-yellow-400 text-transparent bg-clip-text">
          WINNER of SMART INDIA HACKATHON 2023
        </p>
      </motion.h2>
      <div className="overflow-hidden flex max-md:flex-col justify-center items-center gap-10 p-5">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <img src={img1} alt="" className="rounded-xl" />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <img src={img2} alt="" className="rounded-xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
