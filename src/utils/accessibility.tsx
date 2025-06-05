/**
 * Accessibility Utilities
 * WCAG 2.1 AA compliance helpers
 */

import { useEffect } from 'react';

// Skip to main content link
export const SkipToMain: React.FC = () => (
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-quantum-blue text-white px-4 py-2 rounded-lg z-50"
  >
    Skip to main content
  </a>
);

// Focus trap hook for modals
export const useFocusTrap = (isActive: boolean, containerRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusableElements = container.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    firstFocusable?.focus();

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, containerRef]);
};

// Announce message to screen readers
export const useAnnounce = () => {
  useEffect(() => {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    document.body.appendChild(announcer);

    return () => {
      document.body.removeChild(announcer);
    };
  }, []);

  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcer = document.querySelector('[aria-live]');
    if (announcer) {
      announcer.setAttribute('aria-live', priority);
      announcer.textContent = message;
      setTimeout(() => {
        announcer.textContent = '';
      }, 1000);
    }
  };

  return announce;
};

// Keyboard navigation hook
export const useKeyboardNavigation = (
  items: HTMLElement[],
  isActive: boolean,
  orientation: 'horizontal' | 'vertical' = 'vertical'
) => {
  useEffect(() => {
    if (!isActive || items.length === 0) return;

    let currentIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      const prevKey = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
      const nextKey = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';

      switch (e.key) {
        case prevKey:
          e.preventDefault();
          currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
          items[currentIndex]?.focus();
          break;
        case nextKey:
          e.preventDefault();
          currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
          items[currentIndex]?.focus();
          break;
        case 'Home':
          e.preventDefault();
          currentIndex = 0;
          items[currentIndex]?.focus();
          break;
        case 'End':
          e.preventDefault();
          currentIndex = items.length - 1;
          items[currentIndex]?.focus();
          break;
      }
    };

    items.forEach((item, index) => {
      item.addEventListener('keydown', handleKeyDown);
      item.setAttribute('tabindex', index === 0 ? '0' : '-1');
    });

    return () => {
      items.forEach(item => {
        item.removeEventListener('keydown', handleKeyDown);
      });
    };
  }, [items, isActive, orientation]);
};

// Color contrast checker
export const checkContrast = (foreground: string, background: string): number => {
  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  // Calculate relative luminance
  const luminance = (rgb: { r: number; g: number; b: number }) => {
    const { r, g, b } = rgb;
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const fgRgb = hexToRgb(foreground);
  const bgRgb = hexToRgb(background);

  if (!fgRgb || !bgRgb) return 0;

  const fgLuminance = luminance(fgRgb);
  const bgLuminance = luminance(bgRgb);

  const brightest = Math.max(fgLuminance, bgLuminance);
  const darkest = Math.min(fgLuminance, bgLuminance);

  return (brightest + 0.05) / (darkest + 0.05);
};

// ARIA labels for interactive elements
export const ariaLabels = {
  navigation: {
    main: 'Main navigation',
    mobile: 'Mobile navigation menu',
    toggle: 'Toggle navigation menu'
  },
  buttons: {
    getStarted: 'Get started with Asynova',
    calculate: 'Calculate your savings',
    demo: 'Request a demo',
    signUp: 'Sign up for beta access'
  },
  sections: {
    hero: 'Hero section - Operational Intelligence Platform',
    features: 'Platform features',
    demo: 'Live demonstration',
    cta: 'Call to action - Join beta program'
  },
  forms: {
    email: 'Enter your email address',
    company: 'Enter your company name',
    submit: 'Submit form'
  }
};

// Screen reader only CSS class
export const srOnly = 'absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0';

// Ensure proper heading hierarchy
export const useHeadingHierarchy = () => {
  useEffect(() => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    const issues: string[] = [];

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName[1]);
      if (index > 0 && level > lastLevel + 1) {
        issues.push(`Heading hierarchy issue: h${lastLevel} followed by h${level}`);
      }
      lastLevel = level;
    });

    if (issues.length > 0 && process.env.NODE_ENV === 'development') {
      console.warn('[Accessibility] Heading hierarchy issues:', issues);
    }
  }, []);
};

export default {
  SkipToMain,
  useFocusTrap,
  useAnnounce,
  useKeyboardNavigation,
  checkContrast,
  ariaLabels,
  srOnly,
  useHeadingHierarchy
};
