import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useKeyboard } from '../../hooks/useKeyboard';
import PrivacyPolicyModal from '../PrivacyPolicy/PrivacyPolicyModal';
import TermsOfServiceModal from '../Legal/TermsOfServiceModal';

const WaitlistModal = ({ isOpen, onClose }) => {
  useKeyboard(onClose);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    // Contact Info
    name: '',
    email: '',
    company: '',
    role: '',
    
    // Qualification Info
    aiImplementationStage: '',
    complianceChallenges: '',
    currentTools: '',
    implementationTimeline: '',
    
    // Additional Info
    additionalInfo: '',
    howHeard: '',
    
    // Consent
    acceptTerms: false,
    acceptPrivacy: false
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Google Sheets configuration
  const GOOGLE_SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acceptTerms || !formData.acceptPrivacy) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      // Send data to Google Sheets
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(formData),
        mode: "no-cors"
      });

      // Analytics tracking
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'waitlist_submit', {
          'event_category': 'Engagement',
          'event_label': formData.company,
        });
      }
      
      // Trigger Hotjar event if available
      if (typeof window.hj === 'function') {
        window.hj('event', 'waitlist_submit');
      }

      setStatus('success');
      
      // Reset form after submission
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          aiImplementationStage: '',
          complianceChallenges: '',
          currentTools: '',
          implementationTimeline: '',
          additionalInfo: '',
          howHeard: '',
          acceptTerms: false,
          acceptPrivacy: false
        });
      }, 3000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-2xl rounded-xl bg-navy border border-teal/20 overflow-hidden">
            <div className="modal-content max-h-[85vh] overflow-y-auto">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12 px-6"
                >
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-teal/20 text-teal text-2xl mb-6">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Application Received!</h3>
                  <p className="text-gray-300 mb-6 max-w-md mx-auto">
                    Thank you for your interest in becoming one of our 5 founding partners.
                    We'll review your application and contact you within 2 business days.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-navy/50 border border-teal/20 text-teal rounded-lg hover:bg-teal/10"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* Header */}
                  <div className="bg-navy/80 border-b border-teal/20 p-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold">Apply for Founding Partner Program</h2>
                      <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-gray-300 mt-2">
                      Limited to 5 partners · Applications close March 31, 2025
                    </p>
                    {status === 'error' && (
                      <div className="mt-3 text-red-400 text-sm">
                        Please check the form and try again. Make sure to accept the terms and privacy policy.
                      </div>
                    )}
                  </div>
                  
                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-6">
                    <div className="space-y-8">
                      {/* Contact Information */}
                      <section>
                        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                              placeholder="Your name"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              Work Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                              placeholder="you@company.com"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              Company
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                              placeholder="Your company"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              Your Role
                            </label>
                            <select
                              name="role"
                              value={formData.role}
                              onChange={handleChange}
                              className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                              required
                            >
                              <option value="">Select your role</option>
                              <option value="CTO/CIO">CTO/CIO</option>
                              <option value="Engineering Lead">Engineering Lead</option>
                              <option value="Data Scientist/ML Engineer">Data Scientist/ML Engineer</option>
                              <option value="Compliance Officer">Compliance Officer</option>
                              <option value="Product Manager">Product Manager</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                      </section>
                      
                      {/* Qualification Information */}
                      <section>
                        <h3 className="text-lg font-semibold mb-4">AI Implementation Details</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              What stage is your AI implementation in?
                            </label>
                            <select
                              name="aiImplementationStage"
                              value={formData.aiImplementationStage}
                              onChange={handleChange}
                              className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                              required
                            >
                              <option value="">Select your stage</option>
                              <option value="Planning">Planning stage</option>
                              <option value="Early Implementation">Early implementation</option>
                              <option value="Experiencing Challenges">Implemented but experiencing challenges</option>
                              <option value="Evaluation">Evaluating options</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              What compliance challenges are you facing?
                            </label>
                            <textarea
                              name="complianceChallenges"
                              value={formData.complianceChallenges}
                              onChange={handleChange}
                              className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                              placeholder="Describe your current compliance challenges with AI implementation"
                              rows="3"
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              What AI models or tools are you currently using/planning to use?
                            </label>
                            <input
                              type="text"
                              name="currentTools"
                              value={formData.currentTools}
                              onChange={handleChange}
                              className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                              placeholder="e.g., Gemini, GPT-4, custom models, etc."
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              When are you planning to implement?
                            </label>
                            <select
                              name="implementationTimeline"
                              value={formData.implementationTimeline}
                              onChange={handleChange}
                              className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                              required
                            >
                              <option value="">Select timeline</option>
                              <option value="1-3 months">1-3 months</option>
                              <option value="3-6 months">3-6 months</option>
                              <option value="6-12 months">6-12 months</option>
                              <option value="Evaluating">Still evaluating</option>
                            </select>
                          </div>
                        </div>
                      </section>
                      
                      {/* Additional Information */}
                      <section>
                        <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              Anything else you'd like to share about your AI implementation needs?
                            </label>
                            <textarea
                              name="additionalInfo"
                              value={formData.additionalInfo}
                              onChange={handleChange}
                              className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                              placeholder="Any other information that would help us understand your needs"
                              rows="2"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                              How did you hear about Asynova?
                            </label>
                            <select
                              name="howHeard"
                              value={formData.howHeard}
                              onChange={handleChange}
                              className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                            >
                              <option value="">Select option</option>
                              <option value="LinkedIn">LinkedIn</option>
                              <option value="Referral">Referral</option>
                              <option value="Search">Search Engine</option>
                              <option value="Event">Industry Event</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                      </section>
                      
                      {/* Terms & Consent */}
                      <section className="border-t border-teal/10 pt-6">
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                type="checkbox"
                                name="acceptTerms"
                                checked={formData.acceptTerms}
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-teal/20 bg-navy/50 text-teal focus:ring-teal"
                                required
                              />
                            </div>
                            <div className="ml-3">
                              <label className="text-sm text-gray-300">
                                I agree to the{' '}
                                <button
                                  type="button"
                                  onClick={() => setIsTermsModalOpen(true)}
                                  className="text-teal hover:underline"
                                >
                                  Terms of Service
                                </button>
                              </label>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                type="checkbox"
                                name="acceptPrivacy"
                                checked={formData.acceptPrivacy}
                                onChange={handleChange}
                                className="h-4 w-4 rounded border-teal/20 bg-navy/50 text-teal focus:ring-teal"
                                required
                              />
                            </div>
                            <div className="ml-3">
                              <label className="text-sm text-gray-300">
                                I acknowledge the{' '}
                                <button
                                  type="button"
                                  onClick={() => setIsPrivacyModalOpen(true)}
                                  className="text-teal hover:underline"
                                >
                                  Privacy Policy
                                </button>
                              </label>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    
                    {/* Submit Button */}
                    <div className="mt-8 flex justify-end">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className={`px-6 py-3 bg-teal text-navy font-semibold rounded-lg ${
                          status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                        }`}
                      >
                        {status === 'submitting' ? 'Submitting...' : 'Submit Application →'}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
      <TermsOfServiceModal 
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
    </>
  );
};

export default WaitlistModal;