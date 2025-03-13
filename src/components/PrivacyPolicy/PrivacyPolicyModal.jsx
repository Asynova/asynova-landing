import { Dialog } from '@headlessui/react';

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
              
              <div className="space-y-6 text-gray-300">
                <section>
                  <h3 className="text-lg font-semibold mb-2">1. Data Collection During Beta</h3>
                  <p>During the beta phase, we collect:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Contact information provided through the beta application form</li>
                    <li>Information about your AI implementation challenges and needs</li>
                    <li>Usage metrics and feedback to improve our platform</li>
                    <li>Technical information for performance optimization</li>
                  </ul>
                  <p className="mt-2">We apply strict data minimization principles and only collect what's necessary to provide the beta service and improve the platform.</p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">2. How We Use Your Data</h3>
                  <p>We use collected data to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Evaluate your application for the beta program</li>
                    <li>Provide you with access to the Asynova platform</li>
                    <li>Communicate with you about the beta program</li>
                    <li>Improve our platform based on your feedback and usage</li>
                    <li>Ensure the security and performance of our services</li>
                  </ul>
                  <p className="mt-2">We will never sell your data to third parties or use it for purposes beyond what's described here.</p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">3. Data Security During Beta</h3>
                  <p>We protect your data through:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>End-to-end encryption for all data in transit and at rest</li>
                    <li>Strict access controls and comprehensive security monitoring</li>
                    <li>Regular security audits and updates</li>
                    <li>Adherence to industry security standards</li>
                  </ul>
                  <p className="mt-2">As a financial services-focused company, we understand the importance of security and treat all data with the highest level of protection.</p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">4. Your Rights as a Beta Participant</h3>
                  <p>As a beta program participant, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Request access to your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Opt out of non-essential data collection</li>
                    <li>Request deletion of your data</li>
                    <li>Withdraw from the beta program at any time</li>
                    <li>Control your communication preferences</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">5. Beta-Specific Data Handling</h3>
                  <p>During the beta phase:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>We may collect additional feedback and usage data to improve the platform</li>
                    <li>All data is anonymized when used for product improvement purposes</li>
                    <li>You'll be notified of any significant changes to our data handling practices</li>
                    <li>You can opt out of beta-specific data collection while continuing to use the service</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">6. Contact Us</h3>
                  <p>For privacy-related questions or to exercise your rights, contact us at:</p>
                  <p className="mt-2">privacy@asynova.com</p>
                </section>
              </div>
              
              <div className="mt-8 pt-4 border-t border-teal/20 text-sm text-gray-400">
                Last updated: March 2025
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PrivacyPolicyModal;