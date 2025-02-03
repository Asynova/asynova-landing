import { motion } from 'framer-motion';
import { useModal } from '../../context/ModalContext';

const Footer = () => {
    const { openWaitlist } = useModal();

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
            Ready to Transform Your AI Implementation?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the waitlist for early access and be among the first to automate your AI workflows.
          </p>
          <button 
            onClick={openWaitlist}
            className="px-8 py-3 bg-teal text-navy font-semibold rounded-lg hover:opacity-90">
            Join Early Access →
          </button>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Asynova</h3>
            <p className="text-gray-300 mb-4">
              Automating AI orchestration for financial services with security and compliance built-in.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-400">COMPANY</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-teal">About</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-teal">Careers</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-teal">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-400">LEGAL</h4>
            <ul className="space-y-2">
              <li><a href="#privacy" className="text-gray-300 hover:text-teal">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-300 hover:text-teal">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-teal/10 text-center text-gray-400 text-sm">
          © 2025 Asynova. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;