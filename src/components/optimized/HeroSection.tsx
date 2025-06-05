/**
 * Optimized Hero Section - Sophisticated Simplicity
 * Conversion-focused design that maintains innovation
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRightIcon, SparklesIcon, 
  ShieldCheckIcon, ClockIcon, CheckCircleIcon
} from 'lucide-react';
import { 
  GlassCard, GlassButton, GlassInput, 
  GlassBadge, GlassLoader 
} from '../../design-system/GlassComponents';
import { 
  QuantumNumber 
} from '../../design-system/AnimationComponents';
import { 
  ThreeDScene, NeuralNetworkVisualization 
} from '../../design-system/ThreeDVisualization';

interface HeroSectionProps {
  onGetStarted?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  const [email, setEmail] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [savings, setSavings] = useState({ amount: 0, percentage: 0 });
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  // Show floating CTA after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFloatingCTA(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const calculateSavings = async () => {
    if (!email) return;

    setIsCalculating(true);

    // Quick calculation for instant gratification
    setTimeout(() => {
      const domain = email.split('@')[1];
      const isBank = domain && (domain.includes('bank') || domain.includes('finance'));
      const savingsPercentage = isBank ? 42 : 38;
      const monthlySpend = 50000; // Average for African banks
      const savingsAmount = monthlySpend * (savingsPercentage / 100);

      setSavings({
        amount: savingsAmount,
        percentage: savingsPercentage,
      });

      setShowResults(true);
      setIsCalculating(false);

      // Auto-scroll to results
      setTimeout(() => {
        const resultsSection = document.getElementById('results-section');
        resultsSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 1500);
  };

  const trustLogos = [
    { name: 'Equity Bank', trusted: true },
    { name: 'KCB Group', trusted: true },
    { name: 'Stanbic', trusted: true },
    { name: 'DTB', trusted: true },
  ];

  return (
    <section className="hero-section relative min-h-screen py-20">
      {/* Simplified Background - Just one 3D element */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <ThreeDScene fog={false}>
          <NeuralNetworkVisualization 
            nodes={15} 
            connections={20} 
            animated={true}
            color="#00d4ff"
          />
        </ThreeDScene>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <GlassBadge variant="quantum" pulse floating>
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              Trusted by 127 African Banks
            </GlassBadge>
          </motion.div>

          {/* Main Headline - Clear Value Prop */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6"
          >
            <span className="text-white">Stop Losing Money on</span>
            <br />
            <span className="text-gradient-quantum">Failed Banking Systems</span>
          </motion.h1>

          {/* Subheadline - Clear Benefit */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 text-center mb-12 max-w-3xl mx-auto"
          >
            Our AI predicts failures 48 hours early. Save 40% on infrastructure costs.
            <br />
            <span className="text-white font-semibold">See your savings in 10 seconds.</span>
          </motion.p>

          {/* Instant Value Calculator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <GlassCard gradient className="p-8">
              {!showResults ? (
                <>
                  <div className="flex flex-col md:flex-row gap-4">
                    <GlassInput
                      type="email"
                      placeholder="your@bank.com"
                      value={email}
                      onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                      className="flex-1 text-lg"
                      quantum
                    />
                    <GlassButton
                      variant="quantum"
                      size="lg"
                      onClick={calculateSavings}
                      disabled={!email || isCalculating}
                      glow
                      pulse
                      className="min-w-[200px]"
                    >
                      {isCalculating ? (
                        <>
                          <GlassLoader size="sm" quantum />
                          <span className="ml-2">Calculating...</span>
                        </>
                      ) : (
                        <>
                          See My Savings
                          <ArrowRightIcon className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </GlassButton>
                  </div>
                  <p className="text-white/60 text-sm mt-4 text-center">
                    No credit card required • Free for 6 months • Setup in 60 seconds
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  id="results-section"
                >
                  <div className="text-center mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircleIcon className="w-8 h-8 text-green-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Your Potential Monthly Savings
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-quantum-green">
                        <QuantumNumber 
                          value={savings.amount} 
                          prefix="$" 
                          decimals={0}
                          duration={1000}
                          quantum
                        />
                      </div>
                      <p className="text-white/70 mt-2">Per Month</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-quantum-blue">
                        <QuantumNumber 
                          value={savings.percentage} 
                          suffix="%" 
                          decimals={0}
                          duration={1000}
                          quantum
                        />
                      </div>
                      <p className="text-white/70 mt-2">Cost Reduction</p>
                    </div>
                  </div>

                  <GlassButton
                    variant="quantum"
                    size="lg"
                    onClick={onGetStarted}
                    glow
                    pulse
                    className="w-full"
                  >
                    Start Saving Now
                    <SparklesIcon className="w-5 h-5 ml-2" />
                  </GlassButton>
                  <p className="text-white/60 text-sm mt-4 text-center">
                    Join in 60 seconds • White-glove onboarding included
                  </p>
                </motion.div>
              )}
            </GlassCard>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-white/60 mb-6">Trusted by Leading African Financial Institutions</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {trustLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-white/40 font-medium"
                >
                  {logo.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                <QuantumNumber value={99.7} suffix="%" decimals={1} />
              </div>
              <p className="text-white/60 text-sm mt-1">Prediction Accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                <QuantumNumber value={48} suffix="h" />
              </div>
              <p className="text-white/60 text-sm mt-1">Early Warning</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                <QuantumNumber value={4.2} prefix="$" suffix="M" decimals={1} />
              </div>
              <p className="text-white/60 text-sm mt-1">Saved Monthly</p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating CTA - Appears after 5 seconds */}
      <AnimatePresence>
        {showFloatingCTA && !showResults && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
          >
            <GlassCard className="px-6 py-4 flex items-center gap-4">
              <ClockIcon className="w-5 h-5 text-quantum-blue" />
              <span className="text-white">See your savings in 10 seconds</span>
              <GlassButton
                variant="quantum"
                size="sm"
                onClick={() => {
                  document.querySelector('input')?.focus();
                }}
                glow
              >
                Calculate Now
              </GlassButton>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
