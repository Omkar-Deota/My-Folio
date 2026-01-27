import img from "../assets/images/self.png";
import { HERO_CONTENT } from "../constants";
import "animate.css";
import AvatarParallax from "./Avatar";

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-30 ">
      <div className="flex flex-col lg:flex-row-reverse">
        <div className="w-full max-lg:p-6 lg:w-1/2 flex justify-center animate__animated animate__backInRight animate__slow">
          <AvatarParallax src={img} size="clamp(220px, 42vw, 800px)" />
        </div>
        <div className="w-full lg:w-1/2 animate__animated animate__backInLeft animate__slow">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="bg-gradient-to-t lg:text-8xl text-4xl from-stone-300 mx-auto to-stone-600 bg-clip-text tracking-tighter text-transparent">
              Software Engineer
            </h2>
            <p className="my-2 p-3 max-w-lg py-6 text-xl mx-auto leading-relaxed tracking-tighter animate__animated animate__backInLeft animate__slow">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
