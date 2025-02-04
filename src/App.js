import { lazy } from 'react';
import { ModalProvider } from './context/ModalContext';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { withSectionTransition } from './components/SectionTransition/SectionTransition';

// Critical components
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Problem from './components/Problem/Problem';
import Solution from './components/Solution/Solution';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Lazy load with transitions
const Features = withSectionTransition(
  lazy(() => import('./components/Features/Features')),
  'features'
);
const Security = withSectionTransition(
  lazy(() => import('./components/Security/Security')),
  'security'
);
const Integration = withSectionTransition(
  lazy(() => import('./components/Integration/Integration')),
  'integration'
);
const SocialProof = withSectionTransition(
  lazy(() => import('./components/SocialProof/SocialProof')),
  'social-proof'
);
const EarlyAdopterBenefits = withSectionTransition(
  lazy(() => import('./components/EarlyAdopterBenefits/EarlyAdopterBenefits')),
  'early-adopter-benefits'
);
const PrivacyAssurance = withSectionTransition(
  lazy(() => import('./components/PrivacyAssurance/PrivacyAssurance')),
  'privacy'
);
const Trust = withSectionTransition(
  lazy(() => import('./components/Trust/Trust')),
  'trust'
);
const FAQ = withSectionTransition(
  lazy(() => import('./components/FAQ/FAQ')),
  'faq'
);
const Footer = withSectionTransition(
  lazy(() => import('./components/Footer/Footer')),
  'footer'
);

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-navy">
        <Navigation />
        <Hero />
        <Problem />
        <Solution />
        
        <ErrorBoundary>
          <Features />
          <Security />
          <Integration />
          <SocialProof />
          <EarlyAdopterBenefits />
          <PrivacyAssurance />
          <Trust />
          <FAQ />
          <Footer />
        </ErrorBoundary>
        
        <ScrollToTop />
      </div>
    </ModalProvider>
  );
}

export default App;