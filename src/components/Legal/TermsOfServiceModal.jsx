import { Dialog } from '@headlessui/react';

const TermsOfServiceModal = ({ isOpen, onClose }) => {
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
              <h2 className="text-2xl font-bold">Terms of Service</h2>
              
              <div className="space-y-4 text-gray-300">
                <section>
                  <h3 className="text-lg font-semibold mb-2">1. Beta Program Terms</h3>
                  <p>By participating in our beta program:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>You acknowledge this is a pre-release version</li>
                    <li>Features and functionality may change</li>
                    <li>Service availability is not guaranteed</li>
                    <li>Your feedback may be used to improve the platform</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">2. Use of Service</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access is provided for evaluation purposes</li>
                    <li>You agree not to reverse engineer the platform</li>
                    <li>You'll maintain the confidentiality of any non-public features</li>
                    <li>You'll use the service in compliance with all applicable laws</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">3. Feedback & Suggestions</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We welcome and encourage your feedback</li>
                    <li>You grant us the right to use feedback for improvement</li>
                    <li>We may implement features similar to your suggestions</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">4. Termination</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Either party may terminate participation at any time</li>
                    <li>We may suspend access if terms are violated</li>
                    <li>You can request data deletion upon termination</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2">5. Disclaimer</h3>
                  <p>The beta service is provided "as is" without warranties of any kind, express or implied.</p>
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

export default TermsOfServiceModal;