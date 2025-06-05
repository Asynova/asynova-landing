/**
 * Asynova Landing Page - Revolutionary Theme Configuration
 * "Beyond Sophisticated" - Where Future Meets Present
 */

export const theme = {
  // Color Palette - Evolved for Maximum Impact
  colors: {
    // Primary - Quantum Blue (Trust meets Innovation)
    primary: {
      50: '#e6f0ff',
      100: '#b3d1ff',
      200: '#80b3ff',
      300: '#4d94ff',
      400: '#1a75ff',
      500: '#0056e0', // Main
      600: '#0046b8',
      700: '#003690',
      800: '#002668',
      900: '#001640',
      950: '#000b20', // Ultra deep for gradients
    },
    
    // Accent - Neural Purple (AI Intelligence)
    accent: {
      50: '#f3e6ff',
      100: '#dbb3ff',
      200: '#c280ff',
      300: '#aa4dff',
      400: '#921aff',
      500: '#7a00e6', // Main
      600: '#6200b8',
      700: '#4a008a',
      800: '#32005c',
      900: '#1a002e',
      950: '#0d0017', // Deep space purple
    },
    
    // Success - Financial Green (Growth, Prosperity)
    success: {
      50: '#e6f9f0',
      100: '#b3ecd4',
      200: '#80dfb8',
      300: '#4dd29c',
      400: '#1ac580',
      500: '#00b864', // Main
      600: '#009350',
      700: '#006e3c',
      800: '#004928',
      900: '#002414',
    },
    
    // Special Effects Colors
    quantum: {
      blue: '#00d4ff',
      purple: '#b829ff',
      teal: '#00ffc8',
      pink: '#ff0080',
    },
    
    // Neutral - Refined Grays
    neutral: {
      0: '#ffffff',
      50: '#f8f9fa',
      100: '#f1f3f5',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#868e96',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
      950: '#181c20',
      1000: '#0a0c0e',
    },
    
    // Glass Effects - Enhanced
    glass: {
      white: 'rgba(255, 255, 255, 0.08)',
      whiteLight: 'rgba(255, 255, 255, 0.04)',
      whiteMedium: 'rgba(255, 255, 255, 0.12)',
      whiteStrong: 'rgba(255, 255, 255, 0.18)',
      dark: 'rgba(0, 0, 0, 0.1)',
      darkLight: 'rgba(0, 0, 0, 0.05)',
      darkMedium: 'rgba(0, 0, 0, 0.15)',
      darkStrong: 'rgba(0, 0, 0, 0.25)',
      // Quantum glass effects
      quantum: 'rgba(0, 212, 255, 0.08)',
      neural: 'rgba(184, 41, 255, 0.08)',
    },
    
    // Revolutionary Gradients
    gradients: {
      // Core gradients
      primary: 'linear-gradient(135deg, #0056e0 0%, #7a00e6 100%)',
      success: 'linear-gradient(135deg, #00b864 0%, #1ac580 100%)',
      
      // Quantum effects
      quantum: 'linear-gradient(135deg, #00d4ff 0%, #b829ff 50%, #00ffc8 100%)',
      nebula: 'linear-gradient(135deg, #1a002e 0%, #0056e0 50%, #00d4ff 100%)',
      aurora: 'linear-gradient(135deg, #7a00e6 0%, #00b864 25%, #0056e0 50%, #b829ff 75%, #00ffc8 100%)',
      
      // Dark backgrounds
      deepSpace: 'linear-gradient(180deg, #0a0c0e 0%, #1a002e 50%, #000b20 100%)',
      midnight: 'linear-gradient(135deg, #0a0c0e 0%, #181c20 100%)',
      
      // Special effects
      holographic: 'linear-gradient(45deg, #ff0080 0%, #00d4ff 25%, #00ffc8 50%, #b829ff 75%, #ff0080 100%)',
      prism: 'conic-gradient(from 180deg at 50% 50%, #00d4ff 0deg, #b829ff 60deg, #ff0080 120deg, #00ffc8 180deg, #00d4ff 240deg, #b829ff 300deg, #00d4ff 360deg)',
    },
  },
  
  // Typography - Futuristic yet Readable
  typography: {
    fontFamily: {
      sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"JetBrains Mono", "Fira Code", Monaco, Consolas, monospace',
      display: '"Outfit", "Inter", sans-serif',
      future: '"Orbitron", "Outfit", sans-serif', // For special headings
    },
    
    fontSize: {
      // Enhanced scale for more impact
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
      '7xl': '4.5rem',   // 72px
      '8xl': '6rem',     // 96px - For hero sections
      '9xl': '8rem',     // 128px - For maximum impact
    },
    
    fontWeight: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    
    lineHeight: {
      none: '1',
      tight: '1.1',
      snug: '1.2',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
  },
  
  // Spacing - Golden Ratio Inspired
  spacing: {
    0: '0',
    px: '1px',
    0.5: '0.125rem',  // 2px
    1: '0.25rem',     // 4px
    1.5: '0.375rem',  // 6px
    2: '0.5rem',      // 8px
    3: '0.75rem',     // 12px
    4: '1rem',        // 16px
    5: '1.25rem',     // 20px
    6: '1.5rem',      // 24px
    8: '2rem',        // 32px
    10: '2.5rem',     // 40px
    12: '3rem',       // 48px
    16: '4rem',       // 64px
    20: '5rem',       // 80px
    24: '6rem',       // 96px
    32: '8rem',       // 128px
    40: '10rem',      // 160px
    48: '12rem',      // 192px
    56: '14rem',      // 224px
    64: '16rem',      // 256px
  },
  
  // Border Radius - Futuristic Curves
  borderRadius: {
    none: '0',
    sm: '0.25rem',     // 4px
    DEFAULT: '0.5rem', // 8px
    md: '0.75rem',     // 12px
    lg: '1rem',        // 16px
    xl: '1.5rem',      // 24px
    '2xl': '2rem',     // 32px
    '3xl': '3rem',     // 48px
    '4xl': '4rem',     // 64px - For large cards
    full: '9999px',
  },
  
  // Shadows - Multi-layered for Depth
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    
    // Glass shadows
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    
    // Glow effects
    glow: {
      sm: '0 0 10px',
      md: '0 0 20px',
      lg: '0 0 30px',
      xl: '0 0 40px',
    },
    
    // Colored glows
    glowBlue: '0 0 30px rgba(0, 86, 224, 0.5)',
    glowPurple: '0 0 30px rgba(122, 0, 230, 0.5)',
    glowGreen: '0 0 30px rgba(0, 184, 100, 0.5)',
    glowQuantum: '0 0 40px rgba(0, 212, 255, 0.6)',
    
    // Holographic effect
    holographic: '0 0 30px rgba(0, 212, 255, 0.4), 0 0 60px rgba(184, 41, 255, 0.3), 0 0 90px rgba(0, 255, 200, 0.2)',
  },
  
  // Animations - Smooth, Elegant, Impactful
  animation: {
    duration: {
      instant: '0ms',
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '700ms',
      slowest: '1000ms',
    },
    
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      bounce: 'cubic-bezier(0.87, -0.41, 0.19, 1.44)',
      smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
  },
  
  // Breakpoints - Responsive Design
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1920px',
    '4xl': '2560px', // For ultra-wide displays
  },
  
  // Z-Index Scale - For Complex Layering
  zIndex: {
    behind: '-1',
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    dropdown: '1000',
    sticky: '1020',
    fixed: '1030',
    modalBackdrop: '1040',
    modal: '1050',
    popover: '1060',
    tooltip: '1070',
    quantum: '2000', // For special effects
    max: '9999',
  },
};

// Utility functions
export const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const getGlassEffect = (variant: 'light' | 'dark' | 'quantum' = 'dark') => {
  const effects = {
    light: {
      backgroundColor: theme.colors.glass.white,
      backdropFilter: 'blur(10px) saturate(180%)',
      WebkitBackdropFilter: 'blur(10px) saturate(180%)',
      border: `1px solid ${theme.colors.glass.whiteLight}`,
    },
    dark: {
      backgroundColor: theme.colors.glass.dark,
      backdropFilter: 'blur(12px) saturate(200%)',
      WebkitBackdropFilter: 'blur(12px) saturate(200%)',
      border: `1px solid ${theme.colors.glass.darkLight}`,
    },
    quantum: {
      backgroundColor: theme.colors.glass.quantum,
      backdropFilter: 'blur(20px) saturate(250%) hue-rotate(10deg)',
      WebkitBackdropFilter: 'blur(20px) saturate(250%) hue-rotate(10deg)',
      border: `1px solid ${theme.colors.glass.quantum}`,
      boxShadow: theme.shadows.glowQuantum,
    },
  };
  
  return effects[variant];
};

// Generate dynamic gradient
export const generateGradient = (colors: string[], angle: number = 135): string => {
  const colorStops = colors.map((color, index) => 
    `${color} ${(index * 100) / (colors.length - 1)}%`
  ).join(', ');
  
  return `linear-gradient(${angle}deg, ${colorStops})`;
};

export default theme;
