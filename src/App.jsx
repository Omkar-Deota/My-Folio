import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Technologies from "./Component/Technologies";
import Project from "./Component/Project";
import Experience from "./Component/Experience";
import Contact from "./Component/Contact";
import Achievements from "./Component/Achievements";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("overlay"); // overlay -> docking -> done
  const [scrollProgress, setScrollProgress] = useState(0);

  const isLoading = stage !== "done";
  const isDocking = stage === "docking";
  const isOverlayStage = stage === "overlay";

  useEffect(() => {
    if (stage !== "overlay") return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + 2, 100);
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [stage]);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight || document.body.scrollHeight;
      const clientHeight = doc.clientHeight;
      const total = Math.max(scrollHeight - clientHeight, 0);
      const next = total > 0 ? (scrollTop / total) * 100 : 0;
      setScrollProgress(next);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (progress < 100 || stage !== "overlay") return;
    setStage("docking");
  }, [progress, stage]);

  useEffect(()=>{
    if (stage !== "docking") return;
  
    const timer = setTimeout(() => {
      setStage("done");
    }, 700);

    return () => clearTimeout(timer);
  }, [ stage]);

  const navLeftContent = useMemo(() => {
    if (isOverlayStage) return null;

    return (
      <motion.div
        layoutId="loading-chip"
         className={`ml-4 px-4 py-2 font-semibold tracking-wider text-white ${
          isDocking ? "text-4xl" : "text-2xl md:text-4xl"
        }`}
      >
        Omkar Deota
      </motion.div>
    );
  }, [isDocking, isOverlayStage]);

  return (
    <LayoutGroup>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[20000] h-2 rounded-4xl">
        <div
          className="h-full bg-gradient-to-r from-orange-600  to-red-700"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <motion.main
        initial={false}
        animate={{
          opacity: isOverlayStage ? 0.35 : 1,
          filter: isOverlayStage ? "blur(2px)" : "blur(0px)",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Navbar leftContent={navLeftContent} />
        <Hero />
        <Technologies />
        <Experience />
        <Achievements />
        <Project />
        <Contact />
      </motion.main>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-overlay"
            className={`fixed inset-0 z-[10000] flex items-center justify-center px-6 max-md:hidden ${
              isDocking ? "bg-stone-950/30" : "bg-stone-950/85"
            }`}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="flex w-full max-w-xl flex-col items-center gap-6"
              animate={{
                y: isDocking ? -220 : 0,
                scale: isDocking ? 0.82 : 1,
                opacity: isDocking ? 0.95 : 1,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {!isDocking &&<motion.div
                layoutId="loading-chip"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-base font-semibold tracking-[0.2em] text-stone-100"
              >
                Omkar Deota
              </motion.div>
}
              {!isDocking && (
                <div className="h-3 w-full overflow-hidden rounded-full border border-white/20 bg-white/5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 via-yellow-400 to-green-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                </div>
              )}

              {!isDocking && (
                <div className="text-sm font-medium tracking-widest text-stone-300">
                  {progress}%
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default App;
