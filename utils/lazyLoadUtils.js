import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Custom hook for intersection observer
export const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true);
      }
    }, {
      root: options.root || null,
      rootMargin: options.rootMargin || '0px',
      threshold: options.threshold || 0.2,
    });

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.root, options.rootMargin, options.threshold, hasIntersected]);

  return { ref, isIntersecting, hasIntersected };
};

// Enhanced scroll animation hook with Framer Motion for elements entering viewport
export const useScrollAnimation = (direction = "up", delay = 0, duration = 0.5) => {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true, amount: 0.3 });
  
  // Generate variants based on direction
  const getVariants = () => {
    const baseVariants = {
      visible: {
        opacity: 1,
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1.0], // Custom easing
        }
      },
      hidden: {
        opacity: 0,
      }
    };
    
    // Add directional properties
    switch(direction) {
      case "up":
        baseVariants.hidden.y = 60;
        baseVariants.visible.y = 0;
        break;
      case "down":
        baseVariants.hidden.y = -60;
        baseVariants.visible.y = 0;
        break;
      case "left":
        baseVariants.hidden.x = 60;
        baseVariants.visible.x = 0;
        break;
      case "right":
        baseVariants.hidden.x = -60;
        baseVariants.visible.x = 0;
        break;
      case "scale":
        baseVariants.hidden.scale = 0.9;
        baseVariants.visible.scale = 1;
        break;
      case "rotate":
        baseVariants.hidden.rotate = -5;
        baseVariants.visible.rotate = 0;
        break;
      default:
        break;
    }
    
    return baseVariants;
  };
  
  const variants = getVariants();
  
  return { ref, isVisible, variants };
};

// Simplified hook for fade-in animation
export const useScrollFade = (delay = 0, duration = 0.5) => {
  return useScrollAnimation("none", delay, duration);
};

// Simplified hook for scale animation
export const useScrollScale = (delay = 0, duration = 0.5) => {
  return useScrollAnimation("scale", delay, duration);
};

// Simplified hook for rotate animation
export const useScrollRotate = (delay = 0, duration = 0.5) => {
  return useScrollAnimation("rotate", delay, duration);
};

// Helper function to create staggered children animations
export const createStaggeredChildren = (
  staggerChildren = 0.1, 
  delayChildren = 0, 
  transition = {}
) => {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
        ...transition,
      },
    },
  };
};

// Helper function to create a stagger item for the children
export const createStaggerItem = (
  direction = "up", 
  duration = 0.5, 
  ease = [0.25, 0.1, 0.25, 1.0]
) => {
  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration, ease },
    },
  };

  // Add directional properties
  switch(direction) {
    case "up":
      item.hidden.y = 40;
      item.visible.y = 0;
      break;
    case "down":
      item.hidden.y = -40;
      item.visible.y = 0;
      break;
    case "left":
      item.hidden.x = 40;
      item.visible.x = 0;
      break;
    case "right":
      item.hidden.x = -40;
      item.visible.x = 0;
      break;
    case "scale":
      item.hidden.scale = 0.9;
      item.visible.scale = 1;
      break;
    default:
      break;
  }

  return item;
};