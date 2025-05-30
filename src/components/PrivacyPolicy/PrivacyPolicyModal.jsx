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
                  <h3 className="text-lg font-semibold mb-2">1. Introduction</h3>
                  <p>Asynova ("we", "our", "us") is a pre-launch AI cost optimization platform. This privacy policy explains how we handle information when you visit our website or express interest in our beta program.</p>
                  <p className="mt-2">As we have not yet launched, we currently do not process any customer AI data or payment information.</p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">2. Information We Collect</h3>
                  <p>Currently, we only collect:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Contact Information:</strong> Name, email, company name when you join our waitlist</li>
                    <li><strong>Interest Information:</strong> Your AI usage challenges and optimization needs</li>
                    <li><strong>Website Analytics:</strong> Basic usage data through privacy-focused analytics</li>
                  </ul>
                  <p className="mt-2">We do NOT currently collect or process any financial data, AI usage data, or sensitive business information.</p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">3. How We Use Information</h3>
                  <p>We use the limited information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Contact you about beta program availability</li>
                    <li>Understand market needs for product development</li>
                    <li>Send occasional updates about our launch (you can opt out)</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">4. Data Sharing</h3>
                  <p>We will NEVER:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Sell your information to third parties</li>
                    <li>Share your contact details without permission</li>
                    <li>Use your information for anything beyond what's stated here</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">5. Future Data Handling</h3>
                  <p>When we launch our platform, we will:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Update this policy with comprehensive data handling procedures</li>
                    <li>Implement bank-grade security for all customer data</li>
                    <li>Ensure full compliance with Kenya's Data Protection Act</li>
                    <li>Never access your AI prompts or responses</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">6. Your Rights</h3>
                  <p>You can:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Request deletion of your waitlist information</li>
                    <li>Opt out of any communications</li>
                    <li>Ask questions about our data practices</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">7. Contact</h3>
                  <p>For any privacy concerns or requests:</p>
                  <p className="mt-2"><strong>Email:</strong> daniel@asynova.com</p>
                  <p><strong>Founder:</strong> Daniel Bitengo</p>
                </section>
              </div>
              
              <div className="mt-8 pt-4 border-t border-teal/20 text-sm text-gray-400">
                Last updated: May 30, 2025 | Pre-launch version
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PrivacyPolicyModal;