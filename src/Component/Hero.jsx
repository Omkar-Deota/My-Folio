import React from "react";
import img from "../assets/img.jpg";
import { HERO_CONTENT } from "../constants";
import "animate.css";

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-30 ">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full max-lg:p-6  lg:w-1/2 animate__animated animate__backInRight animate__slow ">
          <div className="flex justify-center lg:p-8">
            <img
              src={img}
              alt="Profile picture"
              className="border border-stone-900 rounded-3xl"
              height={550}
              width={550}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 animate__animated animate__backInLeft animate__slow">
          <div className="flex flex-col items-center lg:items-start mt-10 ">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl text-stone-200 mx-auto font-serif">
              Omkar Deota
            </h2>
            <span className="bg-gradient-to-t from-stone-300 mx-auto to-stone-600 bg-clip-text text-3xl tracking-tighter text-transparent">
              Full stack developer
            </span>
            <p className="my-2 p-3 max-w-lg py-6 text-xl mx-auto leading-relaxed tracking-tighter animate__animated animate__backInLeft animate__slow">
              {HERO_CONTENT}
            </p>
            <a
              href="/Omkar_Deota.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className=" bg-white rounded-full p-4 text-sm text-stone-800 mb-10 mx-auto"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
