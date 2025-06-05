/**
 * Performance Monitoring
 * Core Web Vitals and advanced performance tracking
 */

import { useEffect } from 'react';
import { Metric, onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

// Performance metrics storage
interface PerformanceData {
  fcp?: number;
  lcp?: number;
  cls?: number;
  ttfb?: number;
  scrollDepth?: number;
  timeOnPage?: number;
  conversionFunnel?: Record<string, number>;
}

class PerformanceTracker {
  private data: PerformanceData = {};
  private startTime: number = Date.now();
  private maxScrollDepth = 0;
  
  constructor() {
    this.initializeTracking();
  }
  
  private initializeTracking() {
    // Track Core Web Vitals
    onFCP((metric: Metric) => {
      this.data.fcp = metric.value;
      this.reportMetric('FCP', metric.value);
    });
    
    onLCP((metric: Metric) => {
      this.data.lcp = metric.value;
      this.reportMetric('LCP', metric.value);
    });
    
    onCLS((metric: Metric) => {
      this.data.cls = metric.value;
      this.reportMetric('CLS', metric.value);
    });
    
    onTTFB((metric: Metric) => {
      this.data.ttfb = metric.value;
      this.reportMetric('TTFB', metric.value);
    });
    
    // Track scroll depth
    this.trackScrollDepth();
    
    // Track time on page
    this.trackTimeOnPage();
  }
  
  private reportMetric(name: string, value: number) {
    console.log(`[Performance] ${name}: ${value.toFixed(2)}ms`);
    
    // Send to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(value),
        non_interaction: true,
      });
    }
  }
  
  private trackScrollDepth() {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      const scrollPercentage = (scrollTop + windowHeight) / documentHeight * 100;
      this.maxScrollDepth = Math.max(this.maxScrollDepth, scrollPercentage);
      this.data.scrollDepth = this.maxScrollDepth;
      
      // Report scroll milestones
      if (scrollPercentage >= 25 && !this.hasReported('scroll_25')) {
        this.reportScrollMilestone(25);
      } else if (scrollPercentage >= 50 && !this.hasReported('scroll_50')) {
        this.reportScrollMilestone(50);
      } else if (scrollPercentage >= 75 && !this.hasReported('scroll_75')) {
        this.reportScrollMilestone(75);
      } else if (scrollPercentage >= 90 && !this.hasReported('scroll_90')) {
        this.reportScrollMilestone(90);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
  }
  
  private reportedMilestones = new Set<string>();
  
  private hasReported(milestone: string): boolean {
    return this.reportedMilestones.has(milestone);
  }
  
  private reportScrollMilestone(percentage: number) {
    const milestone = `scroll_${percentage}`;
    this.reportedMilestones.add(milestone);
    
    console.log(`[Performance] Scroll depth: ${percentage}%`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'scroll_depth', {
        event_category: 'Engagement',
        event_label: `${percentage}%`,
        value: percentage,
      });
    }
  }
  
  private trackTimeOnPage() {
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Date.now() - this.startTime;
      this.data.timeOnPage = timeOnPage;
      
      console.log(`[Performance] Time on page: ${(timeOnPage / 1000).toFixed(2)}s`);
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'time_on_page', {
          event_category: 'Engagement',
          value: Math.round(timeOnPage / 1000),
        });
      }
    });
  }
  
  public getPerformanceData(): PerformanceData {
    return { ...this.data };
  }
  
  public trackConversion(step: string, data?: Record<string, any>) {
    const timestamp = Date.now();
    
    if (!this.data.conversionFunnel) {
      this.data.conversionFunnel = {};
    }
    
    this.data.conversionFunnel[step] = timestamp;
    
    console.log(`[Conversion] ${step}`, data);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion_step', {
        event_category: 'Conversion',
        event_label: step,
        custom_parameters: data,
      });
    }
  }
}

// Global performance tracker instance
const performanceTracker = new PerformanceTracker();

// React Hooks for Performance Monitoring
export const useWebVitals = () => {
  useEffect(() => {
    // Performance tracker is automatically initialized
    console.log('[Performance] Web Vitals tracking initialized');
  }, []);
};

export const usePerformanceObserver = () => {
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log(`[Performance] ${entry.name}: ${entry.duration.toFixed(2)}ms`);
        }
      });
      
      observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });
      
      return () => observer.disconnect();
    }
  }, []);
};

export const useScrollDepth = () => {
  // Scroll depth tracking is automatically handled by performanceTracker
  useEffect(() => {
    console.log('[Performance] Scroll depth tracking active');
  }, []);
};

export const useTimeOnPage = () => {
  // Time on page tracking is automatically handled by performanceTracker
  useEffect(() => {
    console.log('[Performance] Time on page tracking active');
  }, []);
};

// Conversion Funnel Tracking
export class ConversionFunnel {
  private funnelName: string;
  private steps: Record<string, number> = {};
  
  constructor(funnelName: string) {
    this.funnelName = funnelName;
  }
  
  trackStep(step: string, data?: Record<string, any>) {
    const timestamp = Date.now();
    this.steps[step] = timestamp;
    
    performanceTracker.trackConversion(`${this.funnelName}_${step}`, {
      ...data,
      funnel: this.funnelName,
      step,
      timestamp,
    });
  }
  
  getSteps() {
    return { ...this.steps };
  }
  
  getConversionTime(fromStep: string, toStep: string): number | null {
    const from = this.steps[fromStep];
    const to = this.steps[toStep];
    
    if (from && to) {
      return to - from;
    }
    
    return null;
  }
}

// Export the performance tracker and utilities
export { performanceTracker };
export default performanceTracker;
