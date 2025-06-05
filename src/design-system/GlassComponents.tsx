/**
 * Asynova Revolutionary Glass Components
 * "Quantum Morphism" - UI from the Future
 */

import React, { ReactNode, HTMLAttributes, ButtonHTMLAttributes, useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { theme } from './theme';
import './glass-components.css';

// Enhanced Type definitions
interface GlassProps {
  children: ReactNode;
  variant?: 'light' | 'dark' | 'colored' | 'quantum';
  blur?: 'sm' | 'md' | 'lg' | 'xl' | 'quantum';
  border?: boolean;
  glow?: boolean;
  morphing?: boolean;
  interactive?: boolean;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

interface GlassCardProps extends GlassProps {
  hoverable?: boolean;
  gradient?: boolean;
  holographic?: boolean;
  parallax?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'quantum';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  pulse?: boolean;
  morphing?: boolean;
}

// Quantum Glass Panel - Next-gen base component
export const GlassPanel: React.FC<GlassProps> = ({
  children,
  variant = 'dark',
  blur = 'md',
  border = true,
  glow = false,
  morphing = false,
  interactive = false,
  className = '',
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const blurValues = {
    sm: '8px',
    md: '12px',
    lg: '20px',
    xl: '30px',
    quantum: '40px',
  };

  const variantStyles = {
    light: {
      background: 'rgba(255, 255, 255, 0.08)',
      borderColor: 'rgba(255, 255, 255, 0.15)',
    },
    dark: {
      background: 'rgba(0, 0, 0, 0.2)',
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    colored: {
      background: 'linear-gradient(135deg, rgba(0, 86, 224, 0.1) 0%, rgba(122, 0, 230, 0.1) 100%)',
      borderColor: 'rgba(122, 0, 230, 0.2)',
    },
    quantum: {
      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(184, 41, 255, 0.08) 50%, rgba(0, 255, 200, 0.08) 100%)',
      borderColor: 'rgba(0, 212, 255, 0.3)',
    },
  };

  useEffect(() => {
    if (!interactive || !ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.current!.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    };

    const element = ref.current;
    element.addEventListener('mousemove', handleMouseMove);
    return () => element?.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  const style = {
    ...variantStyles[variant],
    backdropFilter: `blur(${blurValues[blur]}) ${variant === 'quantum' ? 'saturate(200%)' : ''}`,
    WebkitBackdropFilter: `blur(${blurValues[blur]}) ${variant === 'quantum' ? 'saturate(200%)' : ''}`,
    border: border ? `1px solid ${variantStyles[variant].borderColor}` : 'none',
    boxShadow: glow ? (variant === 'quantum' ? theme.shadows.holographic : theme.shadows.glass) : 'none',
  } as React.CSSProperties & {
    '--mouse-x': string;
    '--mouse-y': string;
  };
  
  // Add CSS custom properties separately
  if (interactive) {
    (style as any)['--mouse-x'] = `${mousePosition.x}%`;
    (style as any)['--mouse-y'] = `${mousePosition.y}%`;
  }

  return (
    <motion.div
      ref={ref}
      className={`glass-panel ${variant} ${morphing ? 'morphing' : ''} ${interactive ? 'interactive' : ''} ${className}`}
      style={style}
      animate={morphing ? {
        borderRadius: ['16px', '24px', '16px', '32px', '16px'],
      } : {}}
      transition={morphing ? {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      } : {}}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

// Quantum Glass Card - Content container with advanced effects
export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  hoverable = false,
  gradient = false,
  holographic = false,
  parallax = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
  className = '',
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    if (!parallax) return;
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallax]);
  
  const parallaxOffset = parallax ? scrollY * 0.3 : 0;
  
  return (
    <motion.div
      ref={ref}
      style={{
        transform: parallax ? `translateY(${parallaxOffset}px)` : undefined,
      }}
      whileHover={hoverable ? {
        scale: 1.02,
        rotateY: holographic ? 5 : 0,
        rotateX: holographic ? -5 : 0,
      } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <GlassPanel
        className={`glass-card ${hoverable ? 'glass-card-hoverable' : ''} ${gradient ? 'glass-card-gradient' : ''} ${holographic ? 'glass-card-holographic' : ''} ${className}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        {...props}
      >
        {children}
      </GlassPanel>
    </motion.div>
  );
};

// Quantum Glass Button - Next-gen interactive element
export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  glow = false,
  loading = false,
  icon,
  pulse = false,
  morphing = false,
  className = '',
  disabled = false,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  const variantClasses = {
    primary: 'glass-button-primary',
    secondary: 'glass-button-secondary',
    success: 'glass-button-success',
    warning: 'glass-button-warning',
    error: 'glass-button-error',
    quantum: 'glass-button-quantum',
  };

  return (
    <motion.button
      className={`glass-button ${variantClasses[variant]} ${sizeClasses[size]} ${glow ? 'glass-button-glow' : ''} ${loading ? 'glass-button-loading' : ''} ${pulse ? 'glass-button-pulse' : ''} ${morphing ? 'glass-button-morphing' : ''} ${className}`}
      disabled={disabled || loading}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      animate={pulse && !disabled ? {
        boxShadow: [
          '0 0 0 0 rgba(0, 212, 255, 0)',
          '0 0 0 10px rgba(0, 212, 255, 0.3)',
          '0 0 0 20px rgba(0, 212, 255, 0)',
        ],
      } : {}}
      transition={pulse ? {
        duration: 2,
        repeat: Infinity,
        ease: 'easeOut',
      } : { type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {loading && (
        <span className="glass-button-spinner" />
      )}
      {icon && <span className="glass-button-icon">{icon}</span>}
      {children}
    </motion.button>
  );
};

// Enhanced Glass Input with quantum effects
export const GlassInput: React.FC<HTMLAttributes<HTMLInputElement> & {
  type?: string;
  placeholder?: string;
  icon?: ReactNode;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  quantum?: boolean;
  required?: boolean;
  name?: string;
}> = ({
  type = 'text',
  placeholder,
  icon,
  quantum = false,
  className = '',
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <motion.div 
      className={`glass-input-wrapper ${quantum ? 'quantum' : ''}`}
      animate={focused && quantum ? {
        boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
      } : {}}
    >
      {icon && <span className="glass-input-icon">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        className={`glass-input ${icon ? 'glass-input-with-icon' : ''} ${quantum ? 'glass-input-quantum' : ''} ${className}`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
    </motion.div>
  );
};

// Quantum Glass Badge with animation
export const GlassBadge: React.FC<{
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'quantum';
  pulse?: boolean;
  floating?: boolean;
}> = ({ children, variant = 'default', pulse = false, floating = false }) => {
  const variantClasses = {
    default: 'glass-badge-default',
    success: 'glass-badge-success',
    warning: 'glass-badge-warning',
    error: 'glass-badge-error',
    info: 'glass-badge-info',
    quantum: 'glass-badge-quantum',
  };

  return (
    <motion.span 
      className={`glass-badge ${variantClasses[variant]} ${pulse ? 'glass-badge-pulse' : ''}`}
      animate={floating ? {
        y: [0, -10, 0],
      } : {}}
      transition={floating ? {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      } : {}}
    >
      {children}
    </motion.span>
  );
};

// Quantum Modal with advanced animations
export const GlassModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  quantum?: boolean;
}> = ({ isOpen, onClose, children, title, quantum = false }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className={`glass-modal-overlay ${quantum ? 'quantum' : ''}`}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className={`glass-modal-content ${quantum ? 'glass-modal-quantum' : ''}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        {title && (
          <div className="glass-modal-header">
            <h2 className="glass-modal-title">{title}</h2>
            <button className="glass-modal-close" onClick={onClose}>
              ×
            </button>
          </div>
        )}
        <div className="glass-modal-body">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Quantum Glass Loader with advanced animation
export const GlassLoader: React.FC<{
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  quantum?: boolean;
}> = ({ size = 'md', color = theme.colors.primary[500], quantum = false }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div className={`glass-loader ${sizeClasses[size]} ${quantum ? 'glass-loader-quantum' : ''}`}>
      <div className="glass-loader-inner" style={{ borderColor: color }}>
        {quantum && (
          <>
            <div className="glass-loader-particle glass-loader-particle-1" />
            <div className="glass-loader-particle glass-loader-particle-2" />
            <div className="glass-loader-particle glass-loader-particle-3" />
          </>
        )}
      </div>
    </div>
  );
};

// Quantum Tooltip with enhanced visuals
export const GlassTooltip: React.FC<{
  content: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  quantum?: boolean;
}> = ({ content, children, position = 'top', quantum = false }) => {
  return (
    <div className="glass-tooltip-wrapper">
      {children}
      <motion.span 
        className={`glass-tooltip glass-tooltip-${position} ${quantum ? 'glass-tooltip-quantum' : ''}`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {content}
      </motion.span>
    </div>
  );
};

// Quantum Progress Bar with animated fill
export const GlassProgress: React.FC<{
  value: number;
  max?: number;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'quantum';
  animated?: boolean;
  showLabel?: boolean;
  particles?: boolean;
}> = ({ value, max = 100, variant = 'primary', animated = true, showLabel = false, particles = false }) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const variantClasses = {
    primary: 'glass-progress-primary',
    success: 'glass-progress-success',
    warning: 'glass-progress-warning',
    error: 'glass-progress-error',
    quantum: 'glass-progress-quantum',
  };

  return (
    <div className="glass-progress">
      <motion.div
        className={`glass-progress-bar ${variantClasses[variant]} ${animated ? 'glass-progress-animated' : ''} ${particles ? 'glass-progress-particles' : ''}`}
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      {showLabel && (
        <span className="glass-progress-label">{Math.round(percentage)}%</span>
      )}
    </div>
  );
};

// Export all components
const GlassComponents = {
  GlassPanel,
  GlassCard,
  GlassButton,
  GlassInput,
  GlassBadge,
  GlassModal,
  GlassLoader,
  GlassTooltip,
  GlassProgress,
};

export default GlassComponents;
