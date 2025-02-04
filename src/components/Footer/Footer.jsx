import { motion } from 'framer-motion';
import { useModal } from '../../context/ModalContext';
import { useState } from 'react';
import PrivacyPolicyModal from '../PrivacyPolicy/PrivacyPolicyModal';
import TermsOfServiceModal from '../Legal/TermsOfServiceModal';

const Footer = () => {
  const { openWaitlist } = useModal();
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('social-proof');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-20 border-t border-teal/10">
      <div className="container mx-auto px-4">
        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Help Shape the Future of AI Implementation
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our early access program to influence the development of our AI orchestration platform. 
            Be part of the journey from the beginning.
          </p>
          <button 
            onClick={openWaitlist}
            className="px-8 py-3 bg-teal text-navy font-semibold rounded-lg hover:opacity-90"
          >
            Join Beta Program →
          </button>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Asynova</h3>
            <p className="text-gray-300 mb-4">
              Building the future of AI orchestration for financial services. 
              Designed with security and compliance in mind.
            </p>
            <div className="text-sm text-teal mt-4">
              Currently in development • Launching 2025
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-400">COMPANY</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={scrollToAbout}
                  className="text-gray-300 hover:text-teal"
                >
                  About
                </button>
              </li>
              <li>
                <span className="text-gray-300 opacity-75 cursor-not-allowed">
                  Careers
                  <span className="ml-2 text-xs bg-teal/20 text-teal px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </span>
              </li>
              <li>
                <span className="text-gray-300 opacity-75 cursor-not-allowed">
                  Blog
                  <span className="ml-2 text-xs bg-teal/20 text-teal px-2 py-0.5 rounded-full">
                    Coming Soon
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-400">LEGAL</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="text-gray-300 hover:text-teal"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsTermsModalOpen(true)}
                  className="text-gray-300 hover:text-teal"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-teal/10 text-center text-gray-400 text-sm">
          © 2025 Asynova. All rights reserved. • In Development
        </div>
      </div>

      {/* Modals */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
      <TermsOfServiceModal 
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;