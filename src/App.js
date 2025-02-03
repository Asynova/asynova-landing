import Hero from './components/Hero/Hero';
import Navigation from './components/Navigation/Navigation';
import Features from './components/Features/Features';
import Integration from './components/Integration/Integration';
import Security from './components/Security/Security';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ModalProvider } from './context/ModalContext';
import { Suspense } from 'react';

function App() {
  return (
    <ModalProvider>
      <div className="min-h-screen bg-navy">
        <Navigation />
        <Suspense fallback={<div className="text-white text-center p-8">Loading...</div>}>
          <Hero />
          <Features />
          <Integration />
          <Security />
          <Footer />
        </Suspense>
        <ScrollToTop />
      </div>
    </ModalProvider>
  );
}

export default App;