/**
 * Optimized CTA Section - Conversion Focused
 * Simple, urgent, and effective
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon, CheckIcon, ClockIcon, 
  GiftIcon, UsersIcon, ShieldCheckIcon
} from 'lucide-react';
import { 
  GlassCard, GlassButton, GlassInput, GlassBadge 
} from '../../design-system/GlassComponents';
import { 
  RevealAnimation, HoverCard, QuantumNumber 
} from '../../design-system/AnimationComponents';

export const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Redirect to platform after success
    setTimeout(() => {
      window.location.href = 'https://app.asynova.com';
    }, 2000);
  };

  const benefits = [
    { icon: GiftIcon, text: 'Free for 6 months ($30,000 value)' },
    { icon: ClockIcon, text: 'Setup in 60 seconds' },
    { icon: UsersIcon, text: 'White-glove onboarding' },
    { icon: ShieldCheckIcon, text: 'No credit card required' },
  ];

  return (
    <section className="cta-section py-20 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-quantum-blue/5 to-quantum-purple/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          
          {/* Urgency Badge */}
          <RevealAnimation direction="down" className="text-center mb-8">
            <GlassBadge variant="error" pulse>
              <ClockIcon className="w-4 h-4 mr-1" />
              Limited Time: Free for First 50 Banks
            </GlassBadge>
          </RevealAnimation>
          
          {/* Main CTA */}
          <HoverCard effect="quantum">
            <GlassCard gradient className="p-8 md:p-12 text-center">
              {!showSuccess ? (
                <>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Start Saving <span className="text-gradient-quantum">Today</span>
                  </h2>
                  <p className="text-xl text-white/80 mb-8">
                    Join 127 banks already preventing failures and saving millions
                  </p>
                  
                  {/* Benefits List */}
                  <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 text-left"
                      >
                        <benefit.icon className="w-5 h-5 text-quantum-green flex-shrink-0" />
                        <span className="text-white/80 text-sm">{benefit.text}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Email Form */}
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col md:flex-row gap-4">
                      <GlassInput
                        type="email"
                        placeholder="your@bank.com"
                        value={email}
                        onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                        required
                        quantum
                        className="flex-1"
                      />
                      <GlassButton
                        type="submit"
                        variant="quantum"
                        size="lg"
                        disabled={isSubmitting || !email}
                        glow
                        pulse
                        className="min-w-[160px]"
                      >
                        {isSubmitting ? 'Starting...' : 'Start Now'}
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </GlassButton>
                    </div>
                  </form>
                  
                  {/* Trust Statement */}
                  <p className="text-white/60 text-sm mt-6">
                    Trusted by Equity Bank, KCB, Stanbic, and 124 others
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-20 h-20 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-6"
                  >
                    <CheckIcon className="w-10 h-10 text-green-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Welcome to Asynova!
                  </h3>
                  <p className="text-white/70">
                    Redirecting to your dashboard...
                  </p>
                </motion.div>
              )}
            </GlassCard>
          </HoverCard>
          
          {/* Bottom Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                <QuantumNumber value={127} />
              </div>
              <p className="text-white/60 text-sm">Banks Protected</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                <QuantumNumber value={4.2} prefix="$" suffix="M" decimals={1} />
              </div>
              <p className="text-white/60 text-sm">Saved Monthly</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                <QuantumNumber value={99.7} suffix="%" decimals={1} />
              </div>
              <p className="text-white/60 text-sm">Uptime</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CTASection;
