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
          <Integration />
          <Security />
          <Trust />
          <Footer />
        </Suspense>
        <ScrollToTop />
      </div>
    </ModalProvider>
  );
}

export default App;