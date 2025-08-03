/**
 * Asynova Landing Page - Multi-Agent AI Orchestration Platform
 * Production-grade infrastructure for AI workflows with 60% cost optimization
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
import { PerformanceProvider } from './context/PerformanceContext';

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
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';

// Lazy Loaded Components
const DemoSection = lazy(() => import('./components/sections/DemoSection'));
const CTASection = lazy(() => import('./components/sections/CTASection'));

// Initialize conversion funnel
const conversionFunnel = new ConversionFunnel('landing-page-main');

// Navigation Component
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl shadow-xl' : ''
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-quantum-blue to-quantum-purple rounded-xl flex items-center justify-center">
              <RocketIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Asynova</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Demo
            </button>
            <a
              href="https://docs.asynova.com"
              className="text-white/80 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
            <a
              href="https://github.com/asynova"
              className="text-white/80 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <GlassButton
              variant="quantum"
              size="sm"
              onClick={() => scrollToSection('cta')}
              glow
            >
              Get Started Free
            </GlassButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-white/80 hover:text-white transition-colors text-left py-2"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('demo')}
                  className="text-white/80 hover:text-white transition-colors text-left py-2"
                >
                  Demo
                </button>
                <a
                  href="https://docs.asynova.com"
                  className="text-white/80 hover:text-white transition-colors py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
                <a
                  href="https://github.com/asynova"
                  className="text-white/80 hover:text-white transition-colors py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <GlassButton
                  variant="quantum"
                  size="sm"
                  onClick={() => scrollToSection('cta')}
                  className="mt-2"
                  glow
                >
                  Get Started Free
                </GlassButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Loading component
const LoadingFallback: React.FC = () => (
  <div className="min-h-[400px] flex items-center justify-center" role="status">
    <GlassLoader size="lg" quantum />
    <span className="sr-only">Loading content...</span>
  </div>
);

// Footer Component
const Footer: React.FC = () => (
  <footer className="py-12 border-t border-white/10" role="contentinfo">
    <div className="container mx-auto px-6">
      <div className="text-center text-white/60">
        <p className="mb-4">
          © 2025 Asynova. Multi-Agent AI Orchestration Platform.
        </p>
        <p className="text-sm">
          Cut your AI costs by 60% while building powerful workflows.
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <a 
            href="https://github.com/asynova" 
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://docs.asynova.com" 
            className="hover:text-white transition-colors"
          >
            Documentation
          </a>
          <a 
            href="https://discord.gg/asynova" 
            className="hover:text-white transition-colors"
          >
            Discord
          </a>
          <a 
            href="/privacy" 
            className="hover:text-white transition-colors"
          >
            Privacy
          </a>
          <a 
            href="/terms" 
            className="hover:text-white transition-colors"
          >
            Terms
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// Main App Component
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Performance monitoring
  useWebVitals();
  usePerformanceObserver();
  useScrollDepth();
  useTimeOnPage();
  useHeadingHierarchy();

  useEffect(() => {
    // Track page load
    conversionFunnel.trackStep('page_loaded');
    
    // Quick loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
      conversionFunnel.trackStep('content_loaded');
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    conversionFunnel.trackStep('cta_clicked');
    const ctaSection = document.getElementById('cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Show loader briefly
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-center">
          <GlassLoader size="xl" quantum />
          <p className="text-white/60 mt-6 text-lg animate-pulse">
            Initializing AI orchestration...
          </p>
        </div>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <PerformanceProvider>
        <SEO />
        <PageTransition variant="fade">
          <div className="app">
            {/* Skip to main content link */}
            <SkipToMain />
            
            {/* Navigation */}
            <Navigation />
            
            {/* Main Content */}
            <main id="main-content" role="main">
              {/* Hero Section */}
              <section id="hero" aria-label={ariaLabels.sections.hero}>
                <HeroSection onGetStarted={handleGetStarted} />
              </section>
              
              {/* Features Section */}
              <section id="features" aria-label={ariaLabels.sections.features}>
                <FeaturesSection />
              </section>
              
              {/* Demo Section - Lazy loaded */}
              <section id="demo" aria-label={ariaLabels.sections.demo}>
                <Suspense fallback={<LoadingFallback />}>
                  <DemoSection />
                </Suspense>
              </section>
              
              {/* CTA Section - Lazy loaded */}
              <section id="cta" aria-label={ariaLabels.sections.cta}>
                <Suspense fallback={<LoadingFallback />}>
                  <CTASection />
                </Suspense>
              </section>
            </main>
            
            {/* Footer */}
            <Footer />
          </div>
        </PageTransition>
      </PerformanceProvider>
    </HelmetProvider>
  );
};

export default App;