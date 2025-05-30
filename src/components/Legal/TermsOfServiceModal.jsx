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
              
              <div className="space-y-6 text-gray-300">
                <section>
                  <h3 className="text-lg font-semibold mb-2">1. Pre-Launch Status</h3>
                  <p>IMPORTANT: Asynova is currently in development and has not launched. By signing up for our waitlist:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>You understand the platform is not yet available for use</li>
                    <li>You're expressing interest in our beta program starting June 2025</li>
                    <li>No payment is required or accepted at this time</li>
                    <li>We make no guarantees about launch dates or features</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">2. Beta Program (When Available)</h3>
                  <p>Our planned beta program will:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Be limited to 5 selected fintech partners</li>
                    <li>Offer 3 months free access for testing and feedback</li>
                    <li>Require active participation and feedback</li>
                    <li>Not guarantee any specific performance or uptime</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">3. Intellectual Property</h3>
                  <p>The Asynova platform, including all code, designs, and concepts:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Is owned by Daniel Bitengo/Asynova</li>
                    <li>Is protected by copyright and other intellectual property laws</li>
                    <li>May not be copied, modified, or distributed without permission</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">4. No Warranties</h3>
                  <p>Given our pre-launch status:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>We provide no warranties about future availability</li>
                    <li>Features described on the website are planned, not guaranteed</li>
                    <li>Performance claims (like 40% savings) are theoretical</li>
                    <li>The platform is provided "AS IS" when available</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">5. Limitation of Liability</h3>
                  <p>To the maximum extent permitted by law:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>We are not liable for any damages arising from use of our website</li>
                    <li>We are not liable for delays in launching the platform</li>
                    <li>Our total liability is limited to any fees you've actually paid (currently $0)</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">6. Future Terms</h3>
                  <p>When we launch:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>These terms will be updated with comprehensive service terms</li>
                    <li>Beta participants will receive updated terms before using the platform</li>
                    <li>Acceptance of new terms will be required for platform access</li>
                  </ul>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">7. Governing Law</h3>
                  <p>These terms are governed by the laws of Kenya.</p>
                </section>
                
                <section>
                  <h3 className="text-lg font-semibold mb-2">8. Contact</h3>
                  <p>For questions about these terms:</p>
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

export default TermsOfServiceModal;