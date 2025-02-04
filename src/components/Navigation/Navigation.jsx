import { useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openWaitlist } = useModal();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-navy/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Status */}
          <div className="flex items-center gap-3">
            <div className="text-xl font-bold">Asynova</div>
            <span className="hidden sm:block text-xs bg-teal/20 text-teal px-2 py-1 rounded-full">
              In Development
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-teal"
            >
              Planned Features
            </button>
            <button 
              onClick={() => scrollToSection('security')}
              className="text-gray-300 hover:text-teal"
            >
              Security Roadmap
            </button>
            <button 
              onClick={() => scrollToSection('integrations')}
              className="text-gray-300 hover:text-teal"
            >
              Future Integrations
            </button>
          </div>

          {/* CTA Button */}
          <button 
            onClick={openWaitlist}
            className="hidden md:block px-6 py-2 bg-teal text-navy font-semibold rounded-lg hover:opacity-90"
            aria-label="Join Beta Program"
          >
            Join Beta
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy/95 border-t border-teal/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-300 hover:text-teal py-2"
              >
                Planned Features
              </button>
              <button 
                onClick={() => scrollToSection('security')}
                className="text-gray-300 hover:text-teal py-2"
              >
                Security Roadmap
              </button>
              <button 
                onClick={() => scrollToSection('integrations')}
                className="text-gray-300 hover:text-teal py-2"
              >
                Future Integrations
              </button>
              <button 
                onClick={openWaitlist}
                className="px-6 py-2 bg-teal text-navy font-semibold rounded-lg hover:opacity-90"
              >
                Join Beta
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;