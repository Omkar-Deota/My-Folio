import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import "animate.css";
import TypewriterText from "./TypeWritter";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between animate__animated animate__fadeIn animate__slow w-full border-b-2 border-white">
      <div className="flex flex-shrink-0 items-center ">
        <TypewriterText text="Software Engineer" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/omkar-deota-a76957256/"
          target="_blank"
          aria-label="LinkedIN"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Omkar-Deota"
          target="_blank"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
