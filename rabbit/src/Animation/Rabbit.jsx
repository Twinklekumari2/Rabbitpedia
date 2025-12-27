import { motion } from "framer-motion";

const word = "Rabbit";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // delay between letters
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AnimatedWord() {
  return (
    <motion.span
      className="text-green-600 inline-flex"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {word.split("").map((char, index) => (
        <motion.span key={index} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
