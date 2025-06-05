/**
 * Performance Context
 * Global performance management for the app
 */

import React, { createContext, useContext, ReactNode } from 'react';
import { 
  useDeviceCapabilities, 
  PerformanceTier, 
  FeatureFlags, 
  DeviceCapabilities 
} from '../utils/deviceDetection';

interface PerformanceContextType {
  capabilities: DeviceCapabilities | null;
  performanceTier: PerformanceTier;
  featureFlags: FeatureFlags;
  loading: boolean;
  // Helper functions
  shouldRender3D: () => boolean;
  shouldRenderParticles: () => boolean;
  shouldRenderQuantumEffects: () => boolean;
  getAnimationDuration: (baseMs: number) => number;
  getParticleCount: (baseCount: number) => number;
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined);

export const PerformanceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { capabilities, performanceTier, featureFlags, loading } = useDeviceCapabilities();

  const contextValue: PerformanceContextType = {
    capabilities,
    performanceTier,
    featureFlags,
    loading,
    
    shouldRender3D: () => featureFlags.enable3D,
    shouldRenderParticles: () => featureFlags.enableParticles,
    shouldRenderQuantumEffects: () => featureFlags.enableQuantumEffects,
    
    getAnimationDuration: (baseMs: number) => {
      // Scale animation duration based on performance
      const scale = featureFlags.animationDuration / 1000;
      return baseMs * scale;
    },
    
    getParticleCount: (baseCount: number) => {
      // Scale particle count based on performance
      if (!featureFlags.enableParticles) return 0;
      const scale = featureFlags.particleCount / 1000;
      return Math.floor(baseCount * scale);
    }
  };

  return (
    <PerformanceContext.Provider value={contextValue}>
      {children}
    </PerformanceContext.Provider>
  );
};

export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (!context) {
    throw new Error('usePerformance must be used within a PerformanceProvider');
  }
  return context;
};

// HOC for Performance-based Rendering
export function withPerformance<P extends object>(
  Component: React.ComponentType<P>,
  minimumTier: PerformanceTier = 'medium'
): React.FC<P> {
  return (props: P) => {
    const { performanceTier, loading } = usePerformance();
    
    if (loading) {
      return <div className="w-full h-full animate-pulse bg-white/5 rounded-lg" />;
    }
    
    const tierOrder: PerformanceTier[] = ['low', 'medium', 'high', 'ultra'];
    const currentTierIndex = tierOrder.indexOf(performanceTier);
    const minimumTierIndex = tierOrder.indexOf(minimumTier);
    
    if (currentTierIndex < minimumTierIndex) {
      return null; // Don't render if performance is too low
    }
    
    return <Component {...props} />;
  };
}

// Lazy Component Wrapper with Performance Check
export const LazyWithPerformance: React.FC<{
  children: ReactNode;
  fallback?: ReactNode;
  minimumTier?: PerformanceTier;
  delay?: number;
}> = ({ children, fallback = null, minimumTier = 'medium', delay = 0 }) => {
  const { performanceTier, loading } = usePerformance();
  const [shouldRender, setShouldRender] = React.useState(false);
  
  React.useEffect(() => {
    if (loading) return;
    
    const tierOrder: PerformanceTier[] = ['low', 'medium', 'high', 'ultra'];
    const currentTierIndex = tierOrder.indexOf(performanceTier);
    const minimumTierIndex = tierOrder.indexOf(minimumTier);
    
    if (currentTierIndex >= minimumTierIndex) {
      if (delay > 0) {
        const timer = setTimeout(() => setShouldRender(true), delay);
        return () => clearTimeout(timer);
      } else {
        setShouldRender(true);
      }
    }
  }, [performanceTier, loading, minimumTier, delay]);
  
  if (!shouldRender) {
    return <>{fallback}</>;
  }
  
  return <>{children}</>;
};

export default PerformanceContext;
