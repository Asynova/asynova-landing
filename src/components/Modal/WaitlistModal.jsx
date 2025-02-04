import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { event } from '../../utils/analytics';
import { triggerHotjarEvent } from '../../utils/hotjar';
import { useKeyboard } from '../../hooks/useKeyboard';

const FormStep = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="space-y-6"
  >
    <div className="text-center mb-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const ProgressBar = ({ currentStep, totalSteps }) => (
  <div className="w-full bg-navy/50 h-1 mb-8 rounded-full overflow-hidden">
    <div 
      className="bg-teal h-full transition-all duration-500 ease-out rounded-full"
      style={{ width: `${(currentStep / totalSteps) * 100}%` }}
    />
  </div>
);

const WaitlistModal = ({ isOpen, onClose }) => {
  useKeyboard(onClose);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    email: '',
    role: '',
    company: '',
    companySize: '',
    
    // Step 2: Technical Profile
    aiModels: '',
    challenge: 'compliance',
    implementationTimeline: '',
    budgetRange: '',
    
    // Step 3: Beta Program
    useCase: '',
    betaInterest: '',
    contactPreference: '',
    additionalNotes: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (document.querySelector('.modal-content')) {
        document.querySelector('.modal-content').scrollTop = 0;
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const GOOGLE_SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    event({
      action: 'waitlist_submit',
      category: 'Engagement',
      label: formData.company,
    });

    triggerHotjarEvent('waitlist_submit');

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(formData),
        mode: "no-cors"
      });

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({
          email: '',
          role: '',
          company: '',
          companySize: '',
          aiModels: '',
          challenge: 'compliance',
          implementationTimeline: '',
          budgetRange: '',
          useCase: '',
          betaInterest: '',
          contactPreference: '',
          additionalNotes: ''
        });
        setCurrentStep(1);
      }, 2000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <FormStep title="Tell us about yourself">
            <div className="space-y-4">
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
                  <option value="engineering">Engineering Lead/Manager</option>
                  <option value="data">Data Scientist/ML Engineer</option>
                  <option value="product">Product Manager</option>
                  <option value="cto">CTO/Technical Director</option>
                  <option value="other">Other</option>
                </select>
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
                  placeholder="Company name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Company Size
                </label>
                <select 
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                  required
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>
            </div>
          </FormStep>
        );

      case 2:
        return (
          <FormStep title="Your Technical Profile">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Which AI models are you currently using or planning to use?
                </label>
                <textarea
                  name="aiModels"
                  value={formData.aiModels}
                  onChange={handleChange}
                  className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                  placeholder="e.g., GPT-4, BERT, Custom Models..."
                  rows="2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  What's your biggest AI implementation challenge?
                </label>
                <select 
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                  required
                >
                  <option value="compliance">Compliance & Security</option>
                  <option value="cost">Cost Optimization</option>
                  <option value="integration">Integration Complexity</option>
                  <option value="performance">Performance & Scaling</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Implementation Timeline
                </label>
                <select 
                  name="implementationTimeline"
                  value={formData.implementationTimeline}
                  onChange={handleChange}
                  className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                  required
                >
                  <option value="">When are you planning to implement?</option>
                  <option value="immediate">Within 3 months</option>
                  <option value="soon">3-6 months</option>
                  <option value="planning">6+ months</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Expected Monthly AI Budget
                </label>
                <select 
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                >
                  <option value="">Select budget range (optional)</option>
                  <option value="small">Under $1,000</option>
                  <option value="medium">$1,000 - $10,000</option>
                  <option value="large">$10,000+</option>
                </select>
              </div>
            </div>
          </FormStep>
        );

      case 3:
        return (
          <FormStep title="Beta Program Interest">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Brief description of your use case
                </label>
                <textarea
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                  placeholder="How are you planning to use AI in your financial services?"
                  rows="3"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Would you be interested in being a beta tester?
                </label>
                <select 
                  name="betaInterest"
                  value={formData.betaInterest}
                  onChange={handleChange}
                  className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes, interested in beta testing</option>
                  <option value="maybe">Maybe, would like to know more</option>
                  <option value="no">No, just keep me updated</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Preferred Contact Method
                </label>
                <select 
                  name="contactPreference"
                  value={formData.contactPreference}
                  onChange={handleChange}
                  className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                  required
                >
                  <option value="">Select preferred contact method</option>
                  <option value="email">Email</option>
                  <option value="call">Phone Call</option>
                  <option value="demo">Product Demo</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Additional Notes (optional)
                </label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  className="w-full bg-navy/50 border border-teal/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                  placeholder="Any other information you'd like to share?"
                  rows="2"
                />
              </div>
            </div>
          </FormStep>
        );

      default:
        return null;
    }
  };

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
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="text-teal text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-2">Thanks for joining!</h3>
                <p className="text-gray-300 mb-4">
                  We're excited to have you help shape the future of AI orchestration.
                </p>
                <p className="text-sm text-gray-400">
                  {formData.betaInterest === 'yes' 
                    ? "We'll keep you updated and share more details about our beta program."
                    : "We'll keep you updated on our progress."}
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  aria-label="Close waitlist form"
                >
                  ✕
                </button>

                <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

                <form onSubmit={handleSubmit} className="space-y-6">
                  {renderStepContent()}

                  <div className="flex justify-between mt-8">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="px-6 py-2 border border-teal text-teal font-semibold rounded-lg hover:bg-teal/10"
                      >
                        Back
                      </button>
                    )}
                    {currentStep < totalSteps ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="ml-auto px-6 py-2 bg-teal text-navy font-semibold rounded-lg hover:opacity-90"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className={`ml-auto px-6 py-2 bg-teal text-navy font-semibold rounded-lg 
                          ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                      >
                        {status === 'submitting' ? 'Submitting...' : 'Submit →'}
                      </button>
                    )}
                  </div>

                  {status === 'error' && (
                    <div className="text-red-400 text-sm text-center">
                      Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default WaitlistModal;