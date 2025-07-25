import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/projects/20231220_212404(0).jpg";
import img2 from "../assets/projects/20231219_160922.jpg";

const Achievements = () => {
  return (
    <div className="overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl"
      >
        <p className="font-bold tracking-wide bg-white text-black w-fit px-3 py-1 rounded-lg mx-auto mb-2">
          Achievements
        </p>
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
      <div className="flex justify-center items-center max-md:flex-col mt-5 text-2xl rounded-xl p-4 w-fit mx-auto ">
        <div className="flex flex-col items-center">
          Authored and published a research paper titled as
          <span className="italic font-semibold bg-gradient-to-r from-blue-600 to-yellow-400 text-transparent bg-clip-text">
            AI monitored precision tracking & coal quality prediction system
          </span>
          <a
            className="text-lg text-neutral-400 italic self-end"
            target="_blank"
            href="https://www.atlantis-press.com/proceedings/icaaai-25/126012637"
          >
            (Article Link)
          </a>
        </div>

        <p></p>
      </div>
    </div>
  );
};

export default Achievements;
