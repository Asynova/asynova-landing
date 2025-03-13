import { useModal } from '../../context/ModalContext';
import { useState } from 'react';
import PrivacyPolicyModal from '../PrivacyPolicy/PrivacyPolicyModal';
import TermsOfServiceModal from '../Legal/TermsOfServiceModal';

const Footer = () => {
  const { openWaitlist } = useModal();
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <footer className="py-16 border-t border-teal/10">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Asynova</h3>
            <p className="text-gray-300 mb-4">
              Building the future of AI orchestration for financial services. 
              Designed with security and compliance in mind.
            </p>
            <div className="text-sm text-teal mt-4">
              Currently in development • Launching April 2025
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-400">COMPANY</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.linkedin.com/company/asynova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal"
                >
                  LinkedIn
                </a>
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
                <button
                  onClick={openWaitlist}
                  className="text-gray-300 hover:text-teal"
                >
                  Join Beta
                </button>
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
        <div className="mt-16 pt-8 border-t border-teal/10 text-center text-gray-400 text-sm max-w-5xl mx-auto">
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