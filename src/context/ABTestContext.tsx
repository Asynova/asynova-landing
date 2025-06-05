/**
 * A/B Testing Framework
 * Smart variant selection and tracking
 */

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Variant types
export type Variant = 'revolutionary' | 'optimized';

// Experiment configuration
export interface Experiment {
  id: string;
  name: string;
  variants: {
    [key: string]: {
      weight: number; // 0-100
      component: React.ComponentType<any>;
    };
  };
  defaultVariant: string;
}

// A/B Test Context
interface ABTestContextType {
  variant: Variant;
  experimentId: string;
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackConversion: (conversionType: string, value?: number) => void;
}

const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

// Determine variant based on various factors
const determineVariant = (): Variant => {
  // Check if variant is forced via URL param (for testing)
  const urlParams = new URLSearchParams(window.location.search);
  const forcedVariant = urlParams.get('variant');
  if (forcedVariant === 'revolutionary' || forcedVariant === 'optimized') {
    return forcedVariant;
  }
  
  // Check localStorage for returning visitors
  const storedVariant = localStorage.getItem('ab_variant');
  if (storedVariant === 'revolutionary' || storedVariant === 'optimized') {
    return storedVariant;
  }
  
  // Smart variant selection based on context
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /mobile|android|iphone|ipad/i.test(userAgent);
  const isSlowConnection = (navigator as any).connection?.effectiveType === 'slow-2g' || 
                          (navigator as any).connection?.effectiveType === '2g';
  
  // Default logic: revolutionary for desktop/fast, optimized for mobile/slow
  let selectedVariant: Variant = 'revolutionary';
  
  if (isMobile || isSlowConnection) {
    selectedVariant = 'optimized';
  } else {
    // 50/50 split for desktop users
    selectedVariant = Math.random() < 0.5 ? 'revolutionary' : 'optimized';
  }
  
  // Store the variant for consistency
  localStorage.setItem('ab_variant', selectedVariant);
  
  return selectedVariant;
};

// Analytics tracking stub (replace with actual analytics)
const analytics = {
  track: (eventName: string, properties: Record<string, any>) => {
    // In production, this would send to your analytics service
    console.log('[Analytics Track]', eventName, properties);
    
    // Google Analytics example
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, properties);
    }
  },
  
  identify: (userId: string, traits: Record<string, any>) => {
    console.log('[Analytics Identify]', userId, traits);
  }
};

// A/B Test Provider
export const ABTestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [variant, setVariant] = useState<Variant>('revolutionary');
  const [experimentId] = useState(`landing-page-${Date.now()}`);
  
  useEffect(() => {
    const selectedVariant = determineVariant();
    setVariant(selectedVariant);
    
    // Track variant assignment
    analytics.track('Experiment Viewed', {
      experimentId,
      variant: selectedVariant,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      referrer: document.referrer,
      userAgent: navigator.userAgent
    });
  }, [experimentId]);
  
  const trackEvent = (eventName: string, properties: Record<string, any> = {}) => {
    analytics.track(eventName, {
      ...properties,
      experimentId,
      variant,
      timestamp: new Date().toISOString()
    });
  };
  
  const trackConversion = (conversionType: string, value?: number) => {
    analytics.track('Conversion', {
      type: conversionType,
      value,
      experimentId,
      variant,
      timestamp: new Date().toISOString()
    });
  };
  
  return (
    <ABTestContext.Provider value={{ variant, experimentId, trackEvent, trackConversion }}>
      {children}
    </ABTestContext.Provider>
  );
};

// Hook to use A/B testing
export const useABTest = () => {
  const context = useContext(ABTestContext);
  if (!context) {
    throw new Error('useABTest must be used within an ABTestProvider');
  }
  return context;
};

// Component wrapper for A/B testing
export const ABTest: React.FC<{
  revolutionary: React.ReactNode;
  optimized: React.ReactNode;
}> = ({ revolutionary, optimized }) => {
  const { variant } = useABTest();
  
  return (
    <>
      {variant === 'revolutionary' ? revolutionary : optimized}
    </>
  );
};

// HOC for variant-specific components
export function withVariant<P extends object>(
  RevolutionaryComponent: React.ComponentType<P>,
  OptimizedComponent: React.ComponentType<P>
): React.FC<P> {
  return (props: P) => {
    const { variant } = useABTest();
    
    if (variant === 'revolutionary') {
      return <RevolutionaryComponent {...props} />;
    } else {
      return <OptimizedComponent {...props} />;
    }
  };
}

// Conversion tracking hooks
export const useTrackView = (componentName: string) => {
  const { trackEvent } = useABTest();
  
  useEffect(() => {
    trackEvent(`${componentName} Viewed`);
  }, [componentName, trackEvent]);
};

export const useTrackClick = (elementName: string) => {
  const { trackEvent } = useABTest();
  
  return () => {
    trackEvent(`${elementName} Clicked`);
  };
};

export const useTrackConversion = () => {
  const { trackConversion } = useABTest();
  return trackConversion;
};

// Performance metrics tracking
export const trackPerformanceMetrics = (metrics: {
  FCP?: number;
  LCP?: number;
  FID?: number;
  CLS?: number;
  TTFB?: number;
}) => {
  const variant = localStorage.getItem('ab_variant') || 'unknown';
  
  analytics.track('Performance Metrics', {
    ...metrics,
    variant,
    timestamp: new Date().toISOString(),
    url: window.location.href
  });
};

export default ABTestContext;
