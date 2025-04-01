import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

/**
 * Helper function to adjust color brightness
 * @param {string} color - Hex color to adjust
 * @param {number} amount - Amount to adjust (-1 to 1)
 * @returns {string} - Adjusted hex color
 */
function adjustColor(color, amount) {
  // Convert hex to RGB
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Adjust RGB values
  const adjustR = Math.max(0, Math.min(255, Math.round(r + (amount * 255))));
  const adjustG = Math.max(0, Math.min(255, Math.round(g + (amount * 255))));
  const adjustB = Math.max(0, Math.min(255, Math.round(b + (amount * 255))));

  // Convert back to hex
  const adjustHex = 
    '#' + 
    ((1 << 24) + (adjustR << 16) + (adjustG << 8) + adjustB)
      .toString(16)
      .slice(1);
  
  return adjustHex;
}

/**
 * AnimatedProgressBar - Animated progress bar component
 * 
 * @param {Object} props
 * @param {number} props.value - Current progress value (0-100)
 * @param {number} props.maxValue - Maximum progress value
 * @param {string} props.color - Primary color for the progress bar
 * @param {string} props.backgroundColor - Background color for the progress bar
 * @param {number} props.height - Height of the progress bar in pixels
 * @param {string} props.label - Optional label for the progress bar
 * @param {boolean} props.showPercentage - Whether to show percentage number
 * @param {boolean} props.animate - Whether to animate the progress bar
 * @param {string} props.className - Additional CSS classes
 */
const AnimatedProgressBar = ({
  value = 0,
  maxValue = 100,
  color = "var(--primary)",
  backgroundColor = "var(--border)",
  height = 10,
  label = "",
  showPercentage = true,
  animate = true,
  className = "",
  inView = true,
  ...props
}) => {
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const percentage = Math.min(100, Math.max(0, (value / maxValue) * 100));

  useEffect(() => {
    if (inView && !hasAnimated && animate) {
      controls.start({
        width: `${percentage}%`,
        transition: {
          duration: 1,
          ease: "easeOut"
        }
      });
      setHasAnimated(true);
    } else if (!animate) {
      controls.set({ width: `${percentage}%` });
    }
  }, [inView, percentage, animate, controls, hasAnimated]);

  return (
    <div className={`progress-container ${className}`} {...props}>
      {label && (
        <div className="progress-label">
          <span>{label}</span>
          {showPercentage && <span className="progress-percentage">{Math.round(percentage)}%</span>}
        </div>
      )}
      
      <div 
        className="progress-bar-bg"
        style={{ 
          backgroundColor,
          height: `${height}px`,
          borderRadius: `${height / 2}px`
        }}
      >
        <motion.div
          className="progress-bar-fill"
          style={{ 
            backgroundColor: color,
            height: "100%",
            borderRadius: `${height / 2}px`,
            backgroundImage: `linear-gradient(to right, ${color}, ${adjustColor(color, 0.1)})`,
            boxShadow: `0 0 8px ${color}80`
          }}
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>

      <style jsx>{`
        .progress-container {
          width: 100%;
          margin-bottom: 1rem;
        }
        
        .progress-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        
        .progress-percentage {
          font-weight: 500;
        }
        
        .progress-bar-bg {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default AnimatedProgressBar;