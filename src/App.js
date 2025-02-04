import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation/Navigation';
import Features from './components/Features/Features';
import Integration from './components/Integration/Integration';
import Security from './components/Security/Security';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ModalProvider } from './context/ModalContext';
import { Suspense } from 'react';
import Problem from './components/Problem/Problem';
import Solution from './components/Solution/Solution';
import Trust from './components/Trust/Trust';
import LoadingIndicator from './components/LoadingState/LoadingIndicator';
import FAQ from './components/FAQ/FAQ';
import EarlyAdopterBenefits from './components/EarlyAdopterBenefits/EarlyAdopterBenefits';
import SocialProof from './components/SocialProof/SocialProof';
import PrivacyAssurance from './components/PrivacyAssurance/PrivacyAssurance';

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-navy">
        <Navigation />
        <Suspense fallback={<LoadingIndicator />}>
          <Hero />
          <Problem />
          <Solution />
          <Features />
          <Security />
          <Integration />
          <SocialProof />
          <EarlyAdopterBenefits />
          <PrivacyAssurance />
          <Trust />
          <FAQ />
          <Footer />
        </Suspense>
        <ScrollToTop />
      </div>
    </ModalProvider>
  );
}

export default App;