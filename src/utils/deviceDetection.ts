/**
 * Device Capability Detection
 * Smart detection for progressive enhancement
 */

import { useState, useEffect } from 'react';

export interface DeviceCapabilities {
  hasWebGL: boolean;
  hasGoodGPU: boolean;
  connectionType: 'slow' | 'medium' | 'fast';
  deviceMemory: number;
  hardwareConcurrency: number;
  screenSize: 'mobile' | 'tablet' | 'desktop';
  prefersReducedMotion: boolean;
}

export const detectDeviceCapabilities = async (): Promise<DeviceCapabilities> => {
  // WebGL Detection
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
  const hasWebGL = !!gl;
  
  // GPU Detection
  let hasGoodGPU = false;
  if (hasWebGL && gl) {
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      // Check for integrated/low-end GPUs
      hasGoodGPU = !/(Intel|Mesa|Microsoft|SwiftShader)/i.test(renderer);
    }
  }
  
  // Connection Speed Detection
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  let connectionType: 'slow' | 'medium' | 'fast' = 'medium';
  
  if (connection) {
    const effectiveType = connection.effectiveType;
    if (effectiveType === 'slow-2g' || effectiveType === '2g') {
      connectionType = 'slow';
    } else if (effectiveType === '4g') {
      connectionType = 'fast';
    }
    
    // Also check downlink speed
    if (connection.downlink < 1) connectionType = 'slow';
    else if (connection.downlink > 10) connectionType = 'fast';
  }
  
  // Memory Detection
  const deviceMemory = (navigator as any).deviceMemory || 4; // Default to 4GB
  
  // CPU Cores
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  
  // Screen Size
  const width = window.innerWidth;
  let screenSize: 'mobile' | 'tablet' | 'desktop' = 'desktop';
  if (width < 768) screenSize = 'mobile';
  else if (width < 1024) screenSize = 'tablet';
  
  // Reduced Motion Preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return {
    hasWebGL,
    hasGoodGPU,
    connectionType,
    deviceMemory,
    hardwareConcurrency,
    screenSize,
    prefersReducedMotion
  };
};

// Performance Tier Calculation
export type PerformanceTier = 'low' | 'medium' | 'high' | 'ultra';

export const calculatePerformanceTier = (capabilities: DeviceCapabilities): PerformanceTier => {
  let score = 0;
  
  // WebGL and GPU (most important for 3D)
  if (capabilities.hasWebGL) score += 2;
  if (capabilities.hasGoodGPU) score += 3;
  
  // Connection
  if (capabilities.connectionType === 'fast') score += 2;
  else if (capabilities.connectionType === 'medium') score += 1;
  
  // Hardware
  if (capabilities.deviceMemory >= 8) score += 2;
  else if (capabilities.deviceMemory >= 4) score += 1;
  
  if (capabilities.hardwareConcurrency >= 8) score += 2;
  else if (capabilities.hardwareConcurrency >= 4) score += 1;
  
  // Screen size penalty for mobile
  if (capabilities.screenSize === 'mobile') score -= 1;
  
  // Reduced motion preference
  if (capabilities.prefersReducedMotion) score -= 3;
  
  // Calculate tier
  if (score >= 10) return 'ultra';
  if (score >= 7) return 'high';
  if (score >= 4) return 'medium';
  return 'low';
};

// Feature Flags based on Performance
export interface FeatureFlags {
  enable3D: boolean;
  enableParticles: boolean;
  enableComplexAnimations: boolean;
  enableVideoBackgrounds: boolean;
  enableQuantumEffects: boolean;
  particleCount: number;
  animationDuration: number;
}

export const getFeatureFlags = (tier: PerformanceTier): FeatureFlags => {
  switch (tier) {
    case 'ultra':
      return {
        enable3D: true,
        enableParticles: true,
        enableComplexAnimations: true,
        enableVideoBackgrounds: true,
        enableQuantumEffects: true,
        particleCount: 1000,
        animationDuration: 1000
      };
    
    case 'high':
      return {
        enable3D: true,
        enableParticles: true,
        enableComplexAnimations: true,
        enableVideoBackgrounds: false,
        enableQuantumEffects: true,
        particleCount: 500,
        animationDuration: 800
      };
    
    case 'medium':
      return {
        enable3D: true,
        enableParticles: false,
        enableComplexAnimations: true,
        enableVideoBackgrounds: false,
        enableQuantumEffects: false,
        particleCount: 0,
        animationDuration: 600
      };
    
    case 'low':
    default:
      return {
        enable3D: false,
        enableParticles: false,
        enableComplexAnimations: false,
        enableVideoBackgrounds: false,
        enableQuantumEffects: false,
        particleCount: 0,
        animationDuration: 300
      };
  }
};

// React Hook for Device Capabilities
export const useDeviceCapabilities = () => {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities | null>(null);
  const [performanceTier, setPerformanceTier] = useState<PerformanceTier>('medium');
  const [featureFlags, setFeatureFlags] = useState<FeatureFlags>(getFeatureFlags('medium'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detect = async () => {
      try {
        const caps = await detectDeviceCapabilities();
        const tier = calculatePerformanceTier(caps);
        const flags = getFeatureFlags(tier);
        
        setCapabilities(caps);
        setPerformanceTier(tier);
        setFeatureFlags(flags);
        
        // Log for monitoring
        console.log('[Device Detection]', {
          capabilities: caps,
          performanceTier: tier,
          featureFlags: flags
        });
      } catch (error) {
        console.error('[Device Detection Error]', error);
        // Default to medium tier on error
        setFeatureFlags(getFeatureFlags('medium'));
      } finally {
        setLoading(false);
      }
    };
    
    detect();
  }, []);

  return {
    capabilities,
    performanceTier,
    featureFlags,
    loading
  };
};

// Performance Monitor
export const performanceMonitor = {
  marks: new Map<string, number>(),
  
  startMark(name: string) {
    this.marks.set(name, performance.now());
  },
  
  endMark(name: string): number {
    const start = this.marks.get(name);
    if (!start) return 0;
    
    const duration = performance.now() - start;
    this.marks.delete(name);
    
    // Log slow operations
    if (duration > 100) {
      console.warn(`[Performance] ${name} took ${duration.toFixed(2)}ms`);
    }
    
    return duration;
  },
  
  measureFPS(callback: (fps: number) => void) {
    let lastTime = performance.now();
    let frames = 0;
    let fps = 0;
    
    const measure = () => {
      frames++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        fps = Math.round((frames * 1000) / (currentTime - lastTime));
        callback(fps);
        frames = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measure);
    };
    
    requestAnimationFrame(measure);
  }
};

export default {
  detectDeviceCapabilities,
  calculatePerformanceTier,
  getFeatureFlags,
  useDeviceCapabilities,
  performanceMonitor
};
