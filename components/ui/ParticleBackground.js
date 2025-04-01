// import React, { useRef, useEffect, useState } from 'react';
// import { Box, useTheme } from '@mui/material';
// import { motion } from 'framer-motion';

// const ParticleBackground = ({ 
//   count = 40, 
//   color = null, 
//   minSize = 1, 
//   maxSize = 3, 
//   minSpeed = 0.3, 
//   maxSpeed = 0.8, 
//   interactive = true,
//   opacity = 0.6,
//   withGlow = true,
//   connectParticles = false,
//   direction = 'random',
//   fullHeight = false,
//   sx = {}
// }) => {
//   const canvasRef = useRef(null);
//   const theme = useTheme();
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const [mousePosition, setMousePosition] = useState({ x: null, y: null });
//   const animationRef = useRef(null);
//   const particlesRef = useRef([]);

//   // Determine particle color based on theme if not explicitly provided
//   const particleColor = color || theme.palette.primary.main;

//   // Initialize particle system
//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     // Set canvas dimensions
//     const updateCanvasDimensions = () => {
//       const width = canvas.parentElement.clientWidth;
//       const height = fullHeight 
//         ? window.innerHeight 
//         : canvas.parentElement.clientHeight || 400;

//       setDimensions({ width, height });
//       canvas.width = width;
//       canvas.height = height;
//     };

//     // Initial dimensions
//     updateCanvasDimensions();

//     // Create particle class
//     class Particle {
//       constructor(x, y) {
//         // Position
//         this.x = x;
//         this.y = y;

//         // Size
//         this.size = (Math.random() * (maxSize - minSize)) + minSize;

//         // Direction and speed
//         if (direction === 'up') {
//           this.speedX = (Math.random() - 0.5) * minSpeed;
//           this.speedY = ((Math.random() * minSpeed) + 0.1) * -1;
//         } else if (direction === 'down') {
//           this.speedX = (Math.random() - 0.5) * minSpeed;
//           this.speedY = (Math.random() * minSpeed) + 0.1;
//         } else if (direction === 'left') {
//           this.speedX = ((Math.random() * minSpeed) + 0.1) * -1;
//           this.speedY = (Math.random() - 0.5) * minSpeed;
//         } else if (direction === 'right') {
//           this.speedX = (Math.random() * minSpeed) + 0.1;
//           this.speedY = (Math.random() - 0.5) * minSpeed;
//         } else {
//           // Random direction
//           this.speedX = (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed;
//           this.speedY = (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed;
//         }

//         // Animation properties
//         this.alpha = Math.random() * opacity;
//         this.alphaChange = 0.005;
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         // Pulse effect - changing opacity over time
//         if (this.alpha >= opacity || this.alpha <= 0.1) {
//           this.alphaChange = -this.alphaChange;
//         }
//         this.alpha += this.alphaChange;

//         // Edge detection
//         if (this.x > dimensions.width || this.x < 0) {
//           this.speedX = -this.speedX;
//         }
//         if (this.y > dimensions.height || this.y < 0) {
//           this.speedY = -this.speedY;
//         }

//         // Mouse interaction
//         if (interactive && mousePosition.x && mousePosition.y) {
//           const dx = mousePosition.x - this.x;
//           const dy = mousePosition.y - this.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
//           const interactRadius = 100;

//           // If mouse is close, push particles away slightly
//           if (distance < interactRadius) {
//             const angle = Math.atan2(dy, dx);
//             const pushFactor = (interactRadius - distance) / interactRadius;

//             this.x -= Math.cos(angle) * pushFactor * 2;
//             this.y -= Math.sin(angle) * pushFactor * 2;
//           }
//         }
//       }

//       draw(ctx, rgbColor) {
//         // Draw particle
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(${rgbColor}, ${this.alpha})`;
//         ctx.fill();

//         // Add glow effect if enabled
//         if (withGlow) {
//           ctx.shadowBlur = 10;
//           ctx.shadowColor = `rgba(${rgbColor}, 0.5)`;
//         }
//       }
//     }

//     // Convert hex to RGB for opacity support
//     const hexToRgb = (hex) => {
//       const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//       return result ? 
//         `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
//         '255, 255, 255';
//     };

//     // Initialize particles
//     const initParticles = () => {
//       particlesRef.current = [];
//       for (let i = 0; i < count; i++) {
//         const x = Math.random() * dimensions.width;
//         const y = Math.random() * dimensions.height;
//         particlesRef.current.push(new Particle(x, y));
//       }
//     };

//     // Animation loop
//     const animate = () => {
//       ctx.clearRect(0, 0, dimensions.width, dimensions.height);
//       const rgbColor = hexToRgb(particleColor);

//       // Update and draw all particles
//       particlesRef.current.forEach(particle => {
//         particle.update();
//         particle.draw(ctx, rgbColor);
//       });

//       // Connect particles if enabled
//       if (connectParticles) {
//         connectParticlesDots(ctx, rgbColor);
//       }

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     // Connect particles with lines
//     const connectParticlesDots = (ctx, rgbColor) => {
//       const maxDistance = 100;

//       for (let i = 0; i < particlesRef.current.length; i++) {
//         for (let j = i + 1; j < particlesRef.current.length; j++) {
//           const dx = particlesRef.current[i].x - particlesRef.current[j].x;
//           const dy = particlesRef.current[i].y - particlesRef.current[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < maxDistance) {
//             // Set line opacity based on distance
//             const opacity = (maxDistance - distance) / maxDistance * 0.4;

//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(${rgbColor}, ${opacity})`;
//             ctx.lineWidth = 0.5;
//             ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
//             ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     // Handle window resize
//     const handleResize = () => {
//       updateCanvasDimensions();
//       // Reinitialize particles on resize for better experience
//       initParticles();
//     };

//     // Handle mouse movement for interactive mode
//     const handleMouseMove = (e) => {
//       if (!interactive) return;

//       const rect = canvas.getBoundingClientRect();
//       setMousePosition({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top
//       });
//     };

//     const handleMouseLeave = () => {
//       setMousePosition({ x: null, y: null });
//     };

//     // Set up event listeners
//     window.addEventListener('resize', handleResize);

//     if (interactive) {
//       canvas.addEventListener('mousemove', handleMouseMove);
//       canvas.addEventListener('mouseleave', handleMouseLeave);
//     }

//     // Initialize and start animation
//     initParticles();
//     animate();

//     // Cleanup
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       window.removeEventListener('resize', handleResize);

//       if (interactive) {
//         canvas.removeEventListener('mousemove', handleMouseMove);
//         canvas.removeEventListener('mouseleave', handleMouseLeave);
//       }
//     };
//   }, [count, minSize, maxSize, minSpeed, maxSpeed, interactive, particleColor, opacity, withGlow, connectParticles, direction, dimensions, mousePosition, fullHeight]);

//   return (
//     <Box 
//       component={motion.div}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       sx={{ 
//         position: 'absolute', 
//         top: 0, 
//         left: 0, 
//         right: 0, 
//         bottom: 0, 
//         overflow: 'hidden',
//         pointerEvents: 'none',
//         ...sx 
//       }}
//     >
//       <canvas 
//         ref={canvasRef}
//         style={{ 
//           display: 'block',
//           pointerEvents: interactive ? 'auto' : 'none'
//         }}
//       />
//     </Box>
//   );
// };

// export default ParticleBackground;

import React, { useRef, useEffect, useState } from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const ParticleBackground = ({
  count = null, // Let density be calculated automatically
  color = null,
  minSize = 0.3,
  maxSize = 2.5,
  minSpeed = 0.1,
  maxSpeed = 0.5,
  interactive = true,
  opacity = 0.8,
  withGlow = true,
  connectParticles = true,
  direction = 'random',
  fullHeight = true,
  sx = {}
}) => {
  const canvasRef = useRef(null);
  const theme = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Determine colors based on theme
  const primaryColor = color || theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const tertiaryColor = theme.palette.info.main;

  // Initialize particle system
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    const updateCanvasDimensions = () => {
      const width = window.innerWidth;
      const height = fullHeight ? window.innerHeight : 400;

      setDimensions({ width, height });
      canvas.width = width;
      canvas.height = height;
    };

    // Create particle class with enhanced features
    class Particle {
      constructor(x, y) {
        // Position
        this.x = x;
        this.y = y;

        // Size with bias toward smaller particles
        this.size = Math.random() < 0.8
          ? Math.random() * (1.5 - minSize) + minSize // 80% smaller particles
          : Math.random() * (maxSize - 1) + 1; // 20% larger particles

        // Speed with some particles moving faster
        const speedFactor = Math.random() < 0.1 ? maxSpeed : minSpeed;
        this.speedX = (Math.random() - 0.5) * speedFactor;
        this.speedY = (Math.random() - 0.5) * speedFactor;

        // Color variation
        const colorRand = Math.random();
        if (colorRand < 0.5) {
          this.color = primaryColor;
        } else if (colorRand < 0.8) {
          this.color = secondaryColor;
        } else if (colorRand < 0.95) {
          this.color = tertiaryColor;
        } else {
          this.color = '#ffffff'; // Few white particles
        }

        // Opacity and effects
        this.opacity = Math.random() * (opacity - 0.2) + 0.2;
        this.blinking = Math.random() > 0.6;
        this.targetOpacity = this.opacity;
      }

      update() {
        // Move particle
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around boundaries
        if (this.x < 0) this.x = dimensions.width;
        if (this.x > dimensions.width) this.x = 0;
        if (this.y < 0) this.y = dimensions.height;
        if (this.y > dimensions.height) this.y = 0;

        // Blinking effect
        if (this.blinking) {
          this.opacity = 0.2 + Math.abs(Math.sin(Date.now() * 0.001 + this.x)) * 0.3;
        }

        // Mouse interaction
        if (interactive && mousePosition.current.x && mousePosition.current.y) {
          const dx = mousePosition.current.x - this.x;
          const dy = mousePosition.current.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const mouseRadius = 200;

          if (distance < mouseRadius) {
            const interpolationFactor = 1 - (distance / mouseRadius);
            const angle = Math.atan2(dy, dx);

            if (this.size < 1) {
              // Smaller particles are attracted
              const attractionStrength = 0.15 * interpolationFactor;
              this.speedX += Math.cos(angle) * attractionStrength;
              this.speedY += Math.sin(angle) * attractionStrength;
              this.opacity = Math.min(1, this.opacity + interpolationFactor * 0.3);
            } else {
              // Larger particles are repelled
              const repulsionStrength = 0.08 * interpolationFactor;
              this.speedX -= Math.cos(angle) * repulsionStrength;
              this.speedY -= Math.sin(angle) * repulsionStrength;
            }
          } else {
            // Apply friction
            this.speedX *= 0.99;
            this.speedY *= 0.99;
          }
        }

        // Speed limit
        const speed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
        if (speed > 1) {
          this.speedX = (this.speedX / speed) * 1;
          this.speedY = (this.speedY / speed) * 1;
        }
      }

      draw(ctx) {
        // Size multiplier for mouse interaction
        let sizeMultiplier = 1;
        if (interactive && mousePosition.current.x && mousePosition.current.y) {
          const dx = mousePosition.current.x - this.x;
          const dy = mousePosition.current.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const mouseRadius = 200;

          if (distance < mouseRadius) {
            const interpolationFactor = 1 - (distance / mouseRadius);
            sizeMultiplier = 1 + (interpolationFactor * 0.2);

            // Glow effect near mouse
            if (withGlow) {
              ctx.shadowBlur = 15 * interpolationFactor;
              ctx.shadowColor = this.color;
            }
          }
        }

        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * sizeMultiplier, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Reset shadow after drawing
        if (withGlow) {
          ctx.shadowBlur = 0;
        }
      }
    }

    // Convert hex to RGB for opacity support
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ?
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` :
        '255, 255, 255';
    };

    // Initialize particles with automatic density calculation
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = count || Math.floor((dimensions.width * dimensions.height) / 8000);

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * dimensions.width;
        const y = Math.random() * dimensions.height;
        particlesRef.current.push(new Particle(x, y));
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Update and draw all particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      // Connect particles with sophisticated connection system
      if (connectParticles) {
        connectParticlesDots(ctx);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Enhanced particle connection system
    const connectParticlesDots = (ctx) => {
      const connectionDistance = Math.min(dimensions.width, dimensions.height) * 0.08;
      const particlesToConnect = particlesRef.current.filter(() => Math.random() > 0.5);

      for (let i = 0; i < particlesToConnect.length; i++) {
        for (let j = i + 1; j < particlesToConnect.length; j++) {
          const p1 = particlesToConnect[i];
          const p2 = particlesToConnect[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - (distance / connectionDistance);
            ctx.globalAlpha = opacity * 0.3;

            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            const rgb1 = hexToRgb(p1.color);
            const rgb2 = hexToRgb(p2.color);

            gradient.addColorStop(0, `rgba(${rgb1}, ${opacity * 0.5})`);
            gradient.addColorStop(1, `rgba(${rgb2}, ${opacity * 0.5})`);

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = Math.max(0.1, (p1.size + p2.size) * 0.05);
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    // Handle window resize
    const handleResize = () => {
      updateCanvasDimensions();
      initParticles();
    };

    // Handle mouse movement for interactive mode
    const handleMouseMove = (e) => {
      if (!interactive) return;

      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    // Set up event listeners
    window.addEventListener('resize', handleResize);

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Initialize and start animation when dimensions are set
    if (dimensions.width > 0 && dimensions.height > 0 && !isInitialized) {
      updateCanvasDimensions();
      initParticles();
      animate();
      setIsInitialized(true);
    }

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);

      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [dimensions, isInitialized, primaryColor, secondaryColor, tertiaryColor, theme, count, minSize, maxSize, minSpeed, maxSpeed, interactive, opacity, withGlow, connectParticles, direction, fullHeight]);
  // In your ParticleBackground component's return statement
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      sx={{
        position: 'fixed', // Changed from absolute to fixed
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0, // Ensure it stays behind content
        ...sx
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          pointerEvents: interactive ? 'auto' : 'none',
          width: '100%',
          height: '100%'
        }}
      />
    </Box>
  );
  // return (
  //   <Box 
  //     component={motion.div}
  //     initial={{ opacity: 0 }}
  //     animate={{ opacity: 1 }}
  //     transition={{ duration: 1.5 }}
  //     sx={{ 
  //       position: 'absolute', 
  //       top: 0, 
  //       left: 0, 
  //       right: 0, 
  //       bottom: 0, 
  //       overflow: 'hidden',
  //       pointerEvents: 'none',
  //       ...sx 
  //     }}
  //   >
  //     <canvas 
  //       ref={canvasRef}
  //       style={{ 
  //         display: 'block',
  //         pointerEvents: interactive ? 'auto' : 'none'
  //       }}
  //     />
  //   </Box>
  // );
};

export default ParticleBackground;