import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { event } from '../../utils/analytics';
import { triggerHotjarEvent } from '../../utils/hotjar';
import { useKeyboard } from '../../hooks/useKeyboard';

const WaitlistModal = ({ isOpen, onClose }) => {
  useKeyboard(onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const [formData, setFormData] = useState({
    email: '',
    company: '',
    challenge: 'compliance'
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

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
        body: JSON.stringify({
          email: formData.email,
          company: formData.company,
          challenge: formData.challenge
        }),
        mode: "no-cors"
      });

      // With no-cors, we won't get response details
      // Assume success if we get here without error
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ email: '', company: '', challenge: 'compliance' });
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] overflow-y-auto flex items-center justify-center"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md mx-auto my-8 bg-navy p-6 rounded-lg border border-teal/20 z-[9999]"
            >
              {status === 'success' ? (
                <div className="text-center py-8">
                  <div className="text-teal text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
                  <p className="text-gray-300">We'll keep you updated on our progress.</p>
                </div>
              ) : (
                <>
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                    aria-label="Close waitlist form"
                  >
                    ✕
                  </button>

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">Join the Waitlist</h3>
                    <p className="text-gray-300">Be among the first to automate your AI workflows.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Email
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
                        placeholder="Company name"
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
                      >
                        <option value="compliance">Compliance & Security</option>
                        <option value="cost">Cost Optimization</option>
                        <option value="integration">Integration Complexity</option>
                        <option value="performance">Performance & Scaling</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className={`w-full bg-teal text-navy font-semibold rounded-lg py-3 
                        ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
                    >
                      {status === 'submitting' ? 'Joining...' : 'Join Waitlist →'}
                    </button>

                    {status === 'error' && (
                      <div className="text-red-400 text-sm text-center">
                        Something went wrong. Please try again.
                      </div>
                    )}
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;
