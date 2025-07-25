import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import {
  TbBrandJavascript,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandNodejs,
  TbBrandTailwind,
} from "react-icons/tb";
import { FaGithub, FaPython } from "react-icons/fa";
import { SiTypescript, SiJira } from "react-icons/si";
const IconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [20, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-10 ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-4xl font-bold tracking-wide bg-white text-black w-fit px-3 py-1 rounded-lg mx-auto"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(2)}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={IconVariant(3)}
        >
          <TbBrandJavascript className=" text-7xl  text-amber-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={IconVariant(4)}
        >
          <SiTypescript className=" text-7xl  text-blue-400" />
        </motion.div>

        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={IconVariant(5)}
        >
          <TbBrandMongodb className=" text-7xl  text-green-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={IconVariant(6)}
        >
          <TbBrandMysql className=" text-7xl  text-cyan-400 " />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={IconVariant(8)}
        >
          <TbBrandTailwind className=" text-7xl  text-sky-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={IconVariant(9)}
        >
          <TbBrandNodejs className=" text-7xl  text-green-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={IconVariant(10)}
        >
          <FaPython className=" text-7xl  text-amber-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={IconVariant(11)}
        >
          <FaGithub className=" text-7xl  text-gray-400" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={IconVariant(12)}
        >
          <SiJira className=" text-7xl  text-[#50a8f7]" />
        </motion.div>
        <motion.div
          className="p-4"
          initial="initial"
          animate="animate"
          variants={IconVariant(13)}
        >
          <p className=" text-5xl  text-[#50a8f7]">ASP.NET</p>
        </motion.div>
      </motion.div>
      <motion.div
        className="p-4"
        initial="initial"
        animate="animate"
        variants={IconVariant(2)}
      >
        <p className="text-7xl  text-[#50a8f7] text-center">And counting...</p>
      </motion.div>
    </div>
  );
};

export default Technologies;
