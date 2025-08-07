/**
 * CTA Section - BULLETPROOF EMAIL COLLECTION
 * Uses Netlify Function with form fallback
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  RocketIcon, CheckIcon, ArrowRightIcon, SparklesIcon,
  GitBranchIcon, BookOpenIcon, MailIcon
} from 'lucide-react';

export const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      // PRIMARY: Use Netlify Function (most reliable)
      const functionResponse = await fetch('/.netlify/functions/collect-email', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      if (functionResponse.ok) {
        console.log('✅ Netlify function success');
        setShowSuccess(true);
        setEmail('');
        
        // Track conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'event_category': 'engagement',
            'event_label': 'early_access_signup'
          });
        }
        
        // Auto-hide success after 7 seconds
        setTimeout(() => setShowSuccess(false), 7000);
        return;
      }

      // FALLBACK: Try Netlify Forms
      console.log('⚠️ Function failed, trying Netlify Forms...');
      const formData = new URLSearchParams();
      formData.append('form-name', 'early-access');
      formData.append('email', email);
      formData.append('bot-field', '');
      
      const formResponse = await fetch('/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
      });

      if (formResponse.ok) {
        console.log('✅ Netlify Forms success');
        setShowSuccess(true);
        setEmail('');
        setTimeout(() => setShowSuccess(false), 7000);
        return;
      }

      // If both fail, throw error
      throw new Error(`Function: ${functionResponse.status}, Form: ${formResponse.status}`);
      
    } catch (error) {
      console.error('❌ All submission methods failed:', error);
      
      // FINAL FALLBACK: Direct email prompt
      const confirmed = window.confirm(
        `Submission failed. Would you like to email us directly?\n\n` +
        `Email: support@asynova.com\n` +
        `Subject: Early Access Request\n` +
        `Your email: ${email}\n\n` +
        `Click OK to open your email client.`
      );
      
      if (confirmed) {
        const subject = encodeURIComponent('Early Access Request - Asynova');
        const body = encodeURIComponent(
          `Hi Asynova team,\n\n` +
          `I'd like to join the early access list.\n\n` +
          `Email: ${email}\n\n` +
          `Thanks!`
        );
        window.open(`mailto:support@asynova.com?subject=${subject}&body=${body}`);
      }
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const openGitHub = () => {
    window.open('https://github.com/asynova/asynova-core', '_blank', 'noopener,noreferrer');
  };

  const showDocs = () => {
    window.open('https://github.com/asynova/asynova-core#readme', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cta" className="py-24 relative overflow-hidden bg-black/50">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-black/50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden"
            style={{ 
              boxShadow: '0 0 40px rgba(99, 102, 241, 0.1)',
              position: 'relative',
              zIndex: 1
            }}
          >
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              
              {/* Left Side - Value Proposition */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full"
                >
                  <RocketIcon className="w-4 h-4 mr-2 text-purple-400" />
                  <span className="text-sm text-purple-300">Start Building Today</span>
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl lg:text-5xl font-bold text-white"
                >
                  Cut Your AI Costs{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    by 70%
                  </span>
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-300"
                >
                  Advanced AI cost optimization dashboard with quality-first approach.
                  Connect your API keys and start saving immediately.
                </motion.p>
                
                {/* Benefits List */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3"
                >
                  {[
                    '✅ Up to 70% cost reduction guaranteed',
                    '✅ Use your own API keys (zero cost to you)',
                    '✅ Open source core (MIT)',
                    '✅ Deploy in 5 minutes',
                    '✅ Pay only 20% of what you save'
                  ].map((benefit, i) => (
                    <div key={i} className="text-gray-300">{benefit}</div>
                  ))}
                </motion.div>
              </div>
              
              {/* Right Side - Email Form */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Success Message */}
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                    >
                      <div className="flex items-center text-green-400">
                        <CheckIcon className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Success! You're on the early access list.</span>
                      </div>
                      <p className="text-sm text-green-300 mt-2">
                        We'll email you as soon as we launch (very soon!)
                      </p>
                    </motion.div>
                  )}

                  {/* Email Form */}
                  <form 
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label htmlFor="email" className="text-gray-400 text-sm mb-2 block">
                        Work Email Address
                      </label>
                      <div className="relative">
                        <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="developer@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/15 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                          style={{ 
                            fontSize: '16px',
                            WebkitAppearance: 'none',
                            MozAppearance: 'none',
                            appearance: 'none'
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting || !email}
                      className={`w-full py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
                        isSubmitting || !email
                          ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 cursor-pointer shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <SparklesIcon className="w-5 h-5 mr-2 animate-spin" />
                          Joining Waitlist...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Get Early Access
                          <ArrowRightIcon className="w-5 h-5 ml-2" />
                        </span>
                      )}
                    </button>
                  </form>
                  
                  <div className="text-center space-y-4">
                    <p className="text-gray-500 text-sm">
                      No credit card required • Use your own API keys • Pay only from savings
                    </p>
                    
                    {/* Secondary Buttons */}
                    <div className="flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={openGitHub}
                        className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all cursor-pointer flex items-center transform hover:scale-105 active:scale-95"
                      >
                        <GitBranchIcon className="w-4 h-4 mr-2" />
                        <span>Star on GitHub</span>
                      </button>
                      <button
                        type="button"
                        onClick={showDocs}
                        className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all cursor-pointer flex items-center transform hover:scale-105 active:scale-95"
                      >
                        <BookOpenIcon className="w-4 h-4 mr-2" />
                        <span>Read Docs</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Trust Badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="pt-6 border-t border-white/10"
                  >
                    <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                      <p className="text-sm text-gray-300">
                        "Built by engineers who were tired of paying thousands for AI APIs. 
                        This is the solution we wished existed."
                      </p>
                      <p className="text-xs text-gray-500 mt-2">- The Asynova Team</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-400 mb-8">
              While others debug complex orchestration,{' '}
              <span className="text-white font-semibold">
                you'll be shipping to production.
              </span>
            </p>
            
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Open Source
                </div>
                <div className="text-sm text-gray-500">Core on GitHub</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  60% Savings
                </div>
                <div className="text-sm text-gray-500">Guaranteed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  5 Min Setup
                </div>
                <div className="text-sm text-gray-500">To production</div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default CTASection;