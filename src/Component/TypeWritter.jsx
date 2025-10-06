import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prev) => text.slice(0, prev.length + 1));

      if (index >= text.length) {
        setIndex(0);
      } else {
        setIndex((prev) => prev + 1);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [index, text]);

  return (
    <p className="ml-4 text-2xl font-semibold tracking-wider">
      {displayText.split("").map((char, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};
export default TypewriterText;
