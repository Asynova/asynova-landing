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
              <h2 className="text-2xl font-bold">Terms of Service - Beta Program</h2>
              
              <div className="space-y-6 text-gray-300">
                <section>
                  <h3 className="text-lg font-semibold mb-2">1. Beta Program Agreement</h3>
                  <p>By applying to and participating in our founding partners beta program:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>You acknowledge this is a pre-release version of Asynova</li>
                    <li>You understand that features, functionality, and availability may change during the beta period</li>
                    <li>You agree to provide feedback to help improve the platform</li>
                    <li>You acknowledge that we may limit the number of participants to 5 founding partners</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">2. Beta Program Duration and Structure</h3>
                  <p>The beta program:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Is scheduled to begin in April 2025</li>
                    <li>Will run for approximately 3-4 months before general availability</li>
                    <li>Includes an initial evaluation period with no commitment required</li>
                    <li>Provides early access to Asynova's AI orchestration platform</li>
                    <li>Includes direct support from our founding team</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">3. Use of Asynova During Beta</h3>
                  <p>As a beta participant:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>You are granted limited access for evaluation and feedback purposes</li>
                    <li>You agree not to reverse engineer the platform</li>
                    <li>You will maintain the confidentiality of non-public features</li>
                    <li>You will use the service in compliance with applicable laws and regulations</li>
                    <li>You understand service uptime is not guaranteed during the beta period</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">4. Feedback and Suggestions</h3>
                  <p>During the beta program:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>We welcome and encourage your feedback on all aspects of the platform</li>
                    <li>You grant us the right to use your feedback to improve Asynova</li>
                    <li>We may implement features similar to your suggestions</li>
                    <li>We will treat all feedback as confidential</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">5. Founding Partner Benefits</h3>
                  <p>As a founding partner, you will receive:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Preferential pricing that will remain in effect after the official launch</li>
                    <li>Direct implementation support from our team</li>
                    <li>Input into our product roadmap and feature prioritization</li>
                    <li>Recognition as a founding partner in our materials (optional)</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">6. Termination</h3>
                  <p>Either party may:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Terminate beta participation at any time</li>
                    <li>You can withdraw from the beta program with no penalty</li>
                    <li>We may suspend access if these terms are violated</li>
                    <li>You can request data deletion upon termination</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">7. Disclaimer</h3>
                  <p>The beta service is provided "as is" without warranties of any kind, express or implied. During the beta period, you acknowledge:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>There may be bugs or errors in the platform</li>
                    <li>Service availability is not guaranteed</li>
                    <li>Features may change based on feedback and development priorities</li>
                    <li>The platform should not be used for critical production workloads during beta</li>
                  </ul>
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

export default TermsOfServiceModal;