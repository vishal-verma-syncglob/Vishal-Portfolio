import { motion } from "framer-motion";

const name = "Vishal Verma";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // typing speed
    },
  },
};
321;
const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const TypewriterName = () => {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-block" }}
    >
      {name.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letter}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TypewriterName;
