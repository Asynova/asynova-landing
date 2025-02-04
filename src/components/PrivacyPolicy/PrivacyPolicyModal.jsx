import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-3xl rounded-xl bg-navy border border-teal/20">
          <div className="modal-content max-h-[90vh] overflow-y-auto p-8">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Privacy Policy</h2>
              
              <div className="space-y-4 text-gray-300">
                <section>
                  <h3 className="text-lg font-semibold mb-2">1. Data Collection</h3>
                  <p>During the beta phase, we collect:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Contact information provided through the waitlist form</li>
                    <li>Usage metrics and feedback to improve our platform</li>
                    <li>Technical information for platform optimization</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">2. Data Usage</h3>
                  <p>We use collected data to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Keep you updated about our beta program</li>
                    <li>Improve our platform based on feedback</li>
                    <li>Ensure platform security and performance</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">3. Data Protection</h3>
                  <p>We protect your data through:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>End-to-end encryption for all data in transit and at rest</li>
                    <li>Strict access controls and security monitoring</li>
                    <li>Regular security audits and updates</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">4. Your Rights</h3>
                  <p>As a beta user, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Request access to your data at any time</li>
                    <li>Opt out of data collection</li>
                    <li>Request data deletion</li>
                    <li>Update your communication preferences</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">5. Contact Us</h3>
                  <p>For privacy-related questions, contact us at privacy@asynova.com</p>
                </section>
              </div>

              <div className="mt-8 pt-4 border-t border-teal/20 text-sm text-gray-400">
                Last updated: February 2025
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PrivacyPolicyModal;