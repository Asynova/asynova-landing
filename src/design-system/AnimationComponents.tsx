/**
 * Revolutionary Animation Components
 * Next-generation motion and interaction patterns
 */

import React, { useEffect, useState, useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import './animations.css';

// Quantum Number Counter - Beyond traditional counters
export const QuantumNumber: React.FC<{
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  quantum?: boolean; // Quantum glitch effect
}> = ({ value, duration = 1500, prefix = '', suffix = '', decimals = 0, className = '', quantum = false }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [glitchValue, setGlitchValue] = useState(value);
  
  useEffect(() => {
    const startTime = Date.now();
    const startValue = displayValue;
    const endValue = value;
    
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Custom easing for more impact
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      
      const currentValue = startValue + (endValue - startValue) * easeOutExpo;
      setDisplayValue(currentValue);
      
      // Quantum glitch effect
      if (quantum && Math.random() > 0.95) {
        setGlitchValue(currentValue + (Math.random() - 0.5) * endValue * 0.1);
        setTimeout(() => setGlitchValue(currentValue), 50);
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value, duration, quantum, displayValue]);
  
  const displayedValue = quantum && glitchValue !== value ? glitchValue : displayValue;
  
  return (
    <span className={`quantum-number ${quantum ? 'quantum-glitch' : ''} ${className}`}>
      {prefix}
      <span className="quantum-number-value">
        {displayedValue.toFixed(decimals)}
      </span>
      {suffix}
    </span>
  );
};

// Stagger Container with Advanced Options
export const StaggerContainer: React.FC<{
  children: ReactNode;
  staggerDelay?: number;
  staggerDirection?: 'up' | 'down' | 'left' | 'right' | 'fade';
  className?: string;
}> = ({ children, staggerDelay = 0.1, staggerDirection = 'up', className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    up: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    down: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };
  
  return (
    <motion.div
      ref={ref}
      className={`stagger-container ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={itemVariants[staggerDirection]}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: index * 0.05,
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Page Transition with Multiple Effects
export const PageTransition: React.FC<{ 
  children: ReactNode;
  variant?: 'fade' | 'slide' | 'scale' | 'rotate' | 'quantum';
  className?: string;
}> = ({ children, variant = 'fade', className = '' }) => {
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slide: {
      initial: { x: '100%', opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: '-100%', opacity: 0 },
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 1.2, opacity: 0 },
    },
    rotate: {
      initial: { rotate: -180, opacity: 0 },
      animate: { rotate: 0, opacity: 1 },
      exit: { rotate: 180, opacity: 0 },
    },
    quantum: {
      initial: { scale: 0, rotate: -180, opacity: 0 },
      animate: { scale: 1, rotate: 0, opacity: 1 },
      exit: { scale: 0, rotate: 180, opacity: 0 },
    },
  };
  
  return (
    <motion.div
      className={`page-transition ${className}`}
      variants={variants[variant]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

// Advanced Parallax Container
export const ParallaxContainer: React.FC<{
  children: ReactNode;
  speed?: number;
  offset?: number;
  className?: string;
  rotateOnScroll?: boolean;
}> = ({ children, speed = 0.5, offset = 0, className = '', rotateOnScroll = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const y = useTransform(smoothProgress, [0, 1], [offset, -offset * speed]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, rotateOnScroll ? 360 : 0]);
  
  return (
    <motion.div
      ref={ref}
      className={`parallax-container ${className}`}
      style={{ y, rotate }}
    >
      {children}
    </motion.div>
  );
};

// Quantum Background - Next-level animated backgrounds
export const QuantumBackground: React.FC<{
  variant?: 'nebula' | 'matrix' | 'particles' | 'waves' | 'neural';
  className?: string;
}> = ({ variant = 'nebula', className = '' }) => {
  return (
    <div className={`quantum-background quantum-background-${variant} ${className}`}>
      <div className="quantum-layer quantum-layer-1" />
      <div className="quantum-layer quantum-layer-2" />
      <div className="quantum-layer quantum-layer-3" />
      {variant === 'particles' && (
        <>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`quantum-particle quantum-particle-${i + 1}`} />
          ))}
        </>
      )}
      {variant === 'neural' && (
        <svg className="neural-network" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#b829ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00ffc8" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {/* Neural network paths will be generated dynamically */}
        </svg>
      )}
    </div>
  );
};

// Hover Card with Advanced Effects
export const HoverCard: React.FC<{
  children: ReactNode;
  effect?: 'lift' | 'glow' | 'scale' | 'rotate' | 'holographic' | 'quantum';
  className?: string;
  intensity?: number;
}> = ({ children, effect = 'lift', className = '', intensity = 1 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const ref = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };
  
  const handleMouseLeave = () => {
    setMousePosition({ x: 0.5, y: 0.5 });
  };
  
  const rotateX = (mousePosition.y - 0.5) * 20 * intensity;
  const rotateY = (mousePosition.x - 0.5) * -20 * intensity;
  
  return (
    <motion.div
      ref={ref}
      className={`hover-card hover-effect-${effect} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={
        effect === 'holographic' 
          ? { scale: 1.05 }
          : effect === 'quantum'
          ? { scale: 1.02 }
          : { scale: 1.02 }
      }
      animate={
        effect === 'holographic' || effect === 'quantum'
          ? { rotateX, rotateY }
          : {}
      }
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {children}
      {effect === 'holographic' && (
        <div className="holographic-overlay" />
      )}
      {effect === 'quantum' && (
        <div 
          className="quantum-overlay"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0, 212, 255, 0.3) 0%, transparent 50%)`,
          }}
        />
      )}
    </motion.div>
  );
};

// Morphing Text - Text that transforms
export const MorphingText: React.FC<{
  text: string;
  className?: string;
  speed?: number;
}> = ({ text, className = '', speed = 0.05 }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsGlitching(true);
        const glitchedText = text.split('').map(char => 
          Math.random() > 0.7 ? String.fromCharCode(char.charCodeAt(0) + Math.floor(Math.random() * 10 - 5)) : char
        ).join('');
        setDisplayText(glitchedText);
        
        setTimeout(() => {
          setDisplayText(text);
          setIsGlitching(false);
        }, 100);
      }
    }, 1000 / speed);
    
    return () => clearInterval(glitchInterval);
  }, [text, speed]);
  
  return (
    <span className={`morphing-text ${isGlitching ? 'glitching' : ''} ${className}`}>
      {displayText}
    </span>
  );
};

// Floating Elements - Elements that float in 3D space
export const FloatingElement: React.FC<{
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}> = ({ children, delay = 0, duration = 3, distance = 20, className = '' }) => {
  return (
    <motion.div
      className={`floating-element ${className}`}
      animate={{
        y: [0, -distance, 0],
        rotateZ: [0, 5, -5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Reveal Animation - Content that reveals on scroll
export const RevealAnimation: React.FC<{
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}> = ({ children, direction = 'up', className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
  
  return (
    <motion.div
      ref={ref}
      className={`reveal-animation ${className}`}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

// Gradient Cursor - Custom cursor with gradient trail
export const GradientCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <motion.div
      className="gradient-cursor"
      animate={{
        x: mousePosition.x - 20,
        y: mousePosition.y - 20,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    />
  );
};

// Export all components
const AnimationComponents = {
  QuantumNumber,
  StaggerContainer,
  PageTransition,
  ParallaxContainer,
  QuantumBackground,
  HoverCard,
  MorphingText,
  FloatingElement,
  RevealAnimation,
  GradientCursor,
};

export default AnimationComponents;
