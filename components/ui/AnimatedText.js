import React from 'react';
import { motion } from 'framer-motion';

/**
 * GradientText - Renders text with a gradient effect
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The text content
 * @param {string} props.from - Starting gradient color
 * @param {string} props.to - Ending gradient color
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.animate - Whether to animate the gradient
 */
export const GradientText = ({ 
  children, 
  from = "var(--primary)", 
  to = "var(--secondary)", 
  className = "", 
  animate = false 
}) => {
  const gradientStyle = {
    background: `linear-gradient(to right, ${from}, ${to}, ${from})`,
    backgroundSize: animate ? "200% 100%" : "100% 100%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    display: "inline-block",
    animation: animate ? "gradient 8s linear infinite" : "none"
  };

  return (
    <span 
      className={className} 
      style={gradientStyle}
    >
      {children}
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </span>
  );
};

/**
 * AnimatedLetters - Split text into individual animated letters
 * 
 * @param {Object} props
 * @param {string} props.text - The text to animate
 * @param {Object} props.variants - Framer Motion variants for animation
 * @param {string} props.className - Additional CSS classes
 */
export const AnimatedLetters = ({ 
  text, 
  variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } })
  },
  className = ""
}) => {
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={variants}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

/**
 * AnimatedWords - Split text into individual animated words
 * 
 * @param {Object} props
 * @param {string} props.text - The text to animate
 * @param {Object} props.variants - Framer Motion variants for animation
 * @param {string} props.className - Additional CSS classes
 */
export const AnimatedWords = ({ 
  text, 
  variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } })
  },
  className = ""
}) => {
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={variants}
          style={{ display: "inline-block", marginRight: "0.5rem", whiteSpace: "nowrap" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default { GradientText, AnimatedLetters, AnimatedWords };