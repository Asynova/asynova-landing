import { lazy } from 'react';
import { ModalProvider } from './context/ModalContext';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { withSectionTransition } from './components/SectionTransition/SectionTransition';

// Critical components 
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import FounderStory from './components/FounderStory/FounderStory';
import PainPoints from './components/PainPoints/PainPoints';
import Solution from './components/Solution/Solution';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Lazy load with transitions
const BetaProgram = withSectionTransition(
  lazy(() => import('./components/BetaProgram/BetaProgram')),
  'beta-program'
);
const Security = withSectionTransition(
  lazy(() => import('./components/Security/Security')),
  'security'
);
const FAQ = withSectionTransition(
  lazy(() => import('./components/FAQ/FAQ')),
  'faq'
);
const CTA = withSectionTransition(
  lazy(() => import('./components/CTA/CTA')),
  'cta'
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
        <FounderStory />
        <PainPoints />
        <Solution />
        
        <ErrorBoundary>
          <BetaProgram />
          <Security />
          <FAQ />
          <CTA />
          <Footer />
        </ErrorBoundary>
        
        <ScrollToTop />
      </div>
    </ModalProvider>
  );
}

export default App;