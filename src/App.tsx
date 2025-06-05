/**
 * Asynova Landing Page - Complete with All Optimizations
 * Performance + A/B Testing + SEO + Accessibility + Monitoring
 */

import React, { useEffect, useState, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { RocketIcon, MenuIcon, XIcon } from 'lucide-react';

// Design System Imports
import { GlassLoader, GlassButton, GlassPanel } from './design-system/GlassComponents';
import { PageTransition } from './design-system/AnimationComponents';
import './App.css';

// Context Imports
import { PerformanceProvider, usePerformance } from './context/PerformanceContext';
import { ABTestProvider, ABTest, useABTest, useTrackClick } from './context/ABTestContext';

// Utility Imports
import SEO from './components/seo/SEO';
import { SkipToMain, useHeadingHierarchy, ariaLabels } from './utils/accessibility';
import { 
  useWebVitals, 
  usePerformanceObserver, 
  useScrollDepth, 
  useTimeOnPage,
  ConversionFunnel 
} from './utils/performanceMonitoring';

// Component Imports
import HeroSectionRevolutionary from './components/sections/HeroSection';
import HeroSectionOptimized from './components/optimized/HeroSection';
import FeaturesSectionRevolutionary from './components/sections/FeaturesSection';
import FeaturesSectionOptimized from './components/optimized/FeaturesSection';

// Lazy Loaded Components
const DemoSectionRevolutionary = lazy(() => import('./components/sections/DemoSection'));
const DemoSectionOptimized = lazy(() => import('./components/optimized/DemoSection'));
const CTASectionRevolutionary = lazy(() => import('./components/sections/CTASection'));
const CTASectionOptimized = lazy(() => import('./components/optimized/CTASection'));

// Initialize conversion funnel
const conversionFunnel = new ConversionFunnel('landing-page-main');

// Navigation Component with Performance Awareness
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { featureFlags } = usePerformance();
  const trackClick = useTrackClick('Navigation');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    trackClick();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: featureFlags.enableComplexAnimations ? 'smooth' : 'auto' 
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: featureFlags.enableComplexAnimations ? "spring" : "tween",
        stiffness: 100,
        duration: featureFlags.animationDuration / 1000
      }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-4 backdrop-blur-xl' : 'py-6'
      }`}
      role="navigation"
      aria-label={ariaLabels.navigation.main}
    >
      <div className="container mx-auto px-6">
        <GlassPanel 
        variant={featureFlags.enableQuantumEffects ? "quantum" : "dark"} 
        className="px-6 py-4"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-quantum-blue to-quantum-purple flex items-center justify-center">
                <RocketIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-xl font-bold text-white">Asynova</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#features" 
                onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
                className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-quantum-blue rounded px-2 py-1"
              >
                Features
              </a>
              <a 
                href="#demo" 
                onClick={(e) => { e.preventDefault(); scrollToSection('demo'); }}
                className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-quantum-blue rounded px-2 py-1"
              >
                Demo
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}
                className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-quantum-blue rounded px-2 py-1"
              >
                Pricing
              </a>
              <GlassButton 
                variant={featureFlags.enableQuantumEffects ? "quantum" : "secondary"}
                onClick={() => scrollToSection('cta')}
                glow={featureFlags.enableQuantumEffects}
                aria-label={ariaLabels.buttons.getStarted}
              >
                Get Started
              </GlassButton>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-quantum-blue rounded"
              aria-label={ariaLabels.navigation.toggle}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <XIcon aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden mt-4 pt-4 border-t border-white/10"
                role="navigation"
                aria-label={ariaLabels.navigation.mobile}
              >
                <div className="flex flex-col gap-4">
                  <a 
                    href="#features" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
                    className="text-white/70 hover:text-white transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-quantum-blue rounded px-2"
                  >
                    Features
                  </a>
                  <a 
                    href="#demo" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('demo'); }}
                    className="text-white/70 hover:text-white transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-quantum-blue rounded px-2"
                  >
                    Demo
                  </a>
                  <a 
                    href="#pricing" 
                    onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}
                    className="text-white/70 hover:text-white transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-quantum-blue rounded px-2"
                  >
                    Pricing
                  </a>
                  <GlassButton 
                  variant={featureFlags.enableQuantumEffects ? "quantum" : "secondary"}
                  onClick={() => scrollToSection('cta')}
                  className="w-full"
                  glow={featureFlags.enableQuantumEffects}
                  aria-label={ariaLabels.buttons.getStarted}
                  >
                    Get Started
                  </GlassButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </GlassPanel>
      </div>
    </motion.nav>
  );
};

// Loading Fallback Component
const LoadingFallback: React.FC = () => {
  const { featureFlags } = usePerformance();
  return (
    <div className="min-h-[400px] flex items-center justify-center" role="status">
      <GlassLoader size="lg" quantum={featureFlags.enableQuantumEffects} />
      <span className="sr-only">Loading content...</span>
    </div>
  );
};

// Footer Component
const Footer: React.FC = () => (
  <footer className="py-12 border-t border-white/10" role="contentinfo">
    <div className="container mx-auto px-6">
      <div className="text-center text-white/60">
        <p className="mb-4">
          © 2025 Asynova. The Operational Intelligence Layer for African Finance.
        </p>
        <p className="text-sm">
          Predicting and preventing system failures before they cascade.
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <a 
            href="/privacy" 
            className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-quantum-blue rounded px-2 py-1"
          >
            Privacy Policy
          </a>
          <a 
            href="/terms" 
            className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-quantum-blue rounded px-2 py-1"
          >
            Terms of Service
          </a>
          <a 
            href="/contact" 
            className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-quantum-blue rounded px-2 py-1"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// Main App Content with A/B Testing
const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { variant, trackEvent } = useABTest();
  const { performanceTier, featureFlags } = usePerformance();

  // Performance monitoring hooks
  useWebVitals();
  usePerformanceObserver();
  useScrollDepth();
  useTimeOnPage();
  useHeadingHierarchy();

  useEffect(() => {
    // Track page view
    conversionFunnel.trackStep('page_view', {
      variant,
      performanceTier
    });

    // Track performance tier
    trackEvent('Performance Tier Detected', { tier: performanceTier });
    
    // Quick loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
      conversionFunnel.trackStep('content_loaded');
    }, featureFlags.animationDuration);
    
    return () => clearTimeout(timer);
  }, [performanceTier, featureFlags.animationDuration, trackEvent, variant]);

  const handleGetStarted = () => {
    conversionFunnel.trackStep('cta_clicked');
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ 
        behavior: featureFlags.enableComplexAnimations ? 'smooth' : 'auto' 
      });
    }
  };

  // Show loader briefly
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-center">
          <GlassLoader size="xl" quantum={featureFlags.enableQuantumEffects} />
          <p className="text-white/60 mt-6 text-lg animate-pulse">
            {variant === 'revolutionary' 
              ? 'Initializing quantum intelligence...'
              : 'Preventing failures, saving millions...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <PageTransition variant="fade">
      <div className="app">
        {/* Skip to main content link */}
        <SkipToMain />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content with A/B Testing */}
        <main id="main-content" role="main">
          {/* Hero Section */}
          <section id="hero" aria-label={ariaLabels.sections.hero}>
            <ABTest
              revolutionary={<HeroSectionRevolutionary onGetStarted={handleGetStarted} />}
              optimized={<HeroSectionOptimized onGetStarted={handleGetStarted} />}
            />
          </section>
          
          {/* Features Section */}
          <section id="features" aria-label={ariaLabels.sections.features}>
            <ABTest
              revolutionary={<FeaturesSectionRevolutionary />}
              optimized={<FeaturesSectionOptimized />}
            />
          </section>
          
          {/* Demo Section - Lazy loaded */}
          <section id="demo" aria-label={ariaLabels.sections.demo}>
            <Suspense fallback={<LoadingFallback />}>
              <ABTest
                revolutionary={<DemoSectionRevolutionary />}
                optimized={<DemoSectionOptimized />}
              />
            </Suspense>
          </section>
          
          {/* CTA Section - Lazy loaded */}
          <section id="cta" aria-label={ariaLabels.sections.cta}>
            <Suspense fallback={<LoadingFallback />}>
              <ABTest
                revolutionary={<CTASectionRevolutionary />}
                optimized={<CTASectionOptimized />}
              />
            </Suspense>
          </section>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Performance Debug Info (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-4 left-4 max-w-sm">
            <GlassPanel variant="dark" className="p-4 text-xs text-white/60">
              <div>Variant: {variant}</div>
              <div>Performance: {performanceTier}</div>
              <div>3D: {featureFlags.enable3D ? 'Yes' : 'No'}</div>
              <div>Particles: {featureFlags.enableParticles ? 'Yes' : 'No'}</div>
            </GlassPanel>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

// Main App Component with All Providers
function App() {
  return (
    <HelmetProvider>
      <PerformanceProvider>
        <ABTestProvider>
          {/* SEO Meta Tags */}
          <SEO />
          
          {/* Main App Content */}
          <AppContent />
        </ABTestProvider>
      </PerformanceProvider>
    </HelmetProvider>
  );
}

export default App;
