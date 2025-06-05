/**
 * Revolutionary Hero Section
 * The first impression that leaves visitors speechless
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ZapIcon, TrendingUpIcon, ArrowRightIcon, 
  SparklesIcon, ActivityIcon
} from 'lucide-react';
import { 
  GlassCard, GlassButton, GlassInput, 
  GlassBadge, GlassProgress, GlassLoader, GlassPanel 
} from '../../design-system/GlassComponents';
import { 
  QuantumNumber, StaggerContainer, 
  QuantumBackground, HoverCard, MorphingText, FloatingElement, RevealAnimation
} from '../../design-system/AnimationComponents';
import { 
  ThreeDScene, NeuralNetworkVisualization, 
  FinancialFlowVisualization 
} from '../../design-system/ThreeDVisualization';

interface HeroSectionProps {
  onGetStarted?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  const [monthlySpend, setMonthlySpend] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [savings, setSavings] = useState({ amount: 0, percentage: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);

  // Dynamic text that adapts based on visitor behavior
  const [dynamicHeadline, setDynamicHeadline] = useState("The Future of African Finance");
  
  const headlines = useMemo(() => [
    "The Future of African Finance",
    "Where AI Meets Banking Intelligence",
    "Predict. Prevent. Prosper.",
    "Your Operational Nervous System"
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicHeadline(headlines[Math.floor(Math.random() * headlines.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, [headlines]);



  const calculateSavings = () => {
    if (!monthlySpend) return;
    
    setIsCalculating(true);
    
    // Simulate AI calculation with realistic processing
    setTimeout(() => {
      const spend = parseFloat(monthlySpend);
      const savingsPercentage = 38 + Math.random() * 7; // 38-45%
      const savingsAmount = spend * (savingsPercentage / 100);
      
      setSavings({
        amount: savingsAmount,
        percentage: savingsPercentage,
      });
      
      setShowResults(true);
      setIsCalculating(false);
    }, 2000);
  };

  return (
    <section ref={heroRef} className="hero-section relative min-h-screen overflow-hidden">
      {/* Quantum Background */}
      <QuantumBackground variant="nebula" />
      
      {/* 3D Visualization Layer */}
      <div className="absolute inset-0 opacity-50">
        <ThreeDScene fog={false} stars>
          <NeuralNetworkVisualization nodes={30} connections={50} />
          <FinancialFlowVisualization particleCount={500} />
        </ThreeDScene>
      </div>
      
      {/* Parallax Content Layer */}
      <motion.div style={{ y }} className="relative z-10">
        <div className="container mx-auto px-6 pt-32 pb-20">
          <StaggerContainer staggerDelay={0.1} className="max-w-6xl mx-auto">
            
            {/* Floating Badge */}
            <FloatingElement duration={4} distance={10} className="flex justify-center mb-8">
              <GlassBadge variant="quantum" pulse floating>
                <SparklesIcon className="w-4 h-4 mr-2" />
                Revolutionizing Banking Operations
              </GlassBadge>
            </FloatingElement>
            
            {/* Main Headline with Morphing Effect */}
            <RevealAnimation direction="up" className="text-center mb-8">
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <MorphingText text={dynamicHeadline} speed={0.1} className="text-gradient" />
                <br />
                <span className="text-white opacity-90">
                  is <span className="text-gradient-quantum">Here</span>
                </span>
              </h1>
            </RevealAnimation>
            
            {/* Subheadline with Live Stats */}
            <RevealAnimation direction="up" className="text-center mb-12">
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                Join <QuantumNumber value={127} quantum className="text-quantum-blue" /> African banks saving 
                <QuantumNumber value={4.2} prefix=" $" suffix="M" decimals={1} className="text-quantum-green mx-2" /> monthly 
                while preventing <QuantumNumber value={99.7} suffix="%" className="text-quantum-purple" /> of system failures
              </p>
            </RevealAnimation>
            
            {/* Interactive Savings Calculator */}
            {!showResults ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <HoverCard effect="quantum" intensity={1.5}>
                  <GlassCard gradient holographic className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      See Your Savings in <span className="text-gradient">10 Seconds</span>
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">
                          Your Monthly AI Infrastructure Spend
                        </label>
                        <div className="flex gap-4">
                          <GlassInput
                            type="number"
                            placeholder="e.g., 50000"
                            value={monthlySpend}
                            onChange={(e) => setMonthlySpend((e.target as HTMLInputElement).value)}
                            icon={<span className="text-white/50">$</span>}
                            quantum
                            className="flex-1"
                          />
                          <GlassButton
                            variant="quantum"
                            onClick={calculateSavings}
                            disabled={!monthlySpend || isCalculating}
                            glow
                            pulse
                            morphing
                          >
                            {isCalculating ? (
                              <>
                                <GlassLoader size="sm" quantum />
                                <span className="ml-2">Analyzing...</span>
                              </>
                            ) : (
                              <>
                                Calculate
                                <ArrowRightIcon className="w-5 h-5 ml-2" />
                              </>
                            )}
                          </GlassButton>
                        </div>
                      </div>
                      
                      {isCalculating && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="space-y-2"
                        >
                          <p className="text-white/70 text-sm">Analyzing your infrastructure...</p>
                          <GlassProgress value={75} variant="quantum" animated particles />
                        </motion.div>
                      )}
                    </div>
                  </GlassCard>
                </HoverCard>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="max-w-4xl mx-auto"
              >
                <GlassCard gradient className="p-8 relative overflow-hidden">
                  {/* Holographic overlay effect */}
                  <div className="absolute inset-0 bg-gradient-holographic opacity-20 animate-pulse" />
                  
                  <h3 className="text-3xl font-bold text-white mb-8 text-center relative z-10">
                    Your Potential with Asynova
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
                    <HoverCard effect="holographic">
                      <GlassPanel variant="quantum" glow className="p-6 text-center">
                        <ActivityIcon className="w-10 h-10 text-quantum-blue mx-auto mb-4" />
                        <div className="text-4xl font-bold text-white">
                          <QuantumNumber 
                            value={savings.amount} 
                            prefix="$" 
                            decimals={0}
                            duration={1500}
                            quantum
                          />
                        </div>
                        <p className="text-white/70 mt-2">Monthly Savings</p>
                      </GlassPanel>
                    </HoverCard>
                    
                    <HoverCard effect="holographic">
                      <GlassPanel variant="quantum" glow className="p-6 text-center">
                        <TrendingUpIcon className="w-10 h-10 text-quantum-purple mx-auto mb-4" />
                        <div className="text-4xl font-bold text-white">
                          <QuantumNumber 
                            value={savings.percentage} 
                            suffix="%" 
                            decimals={1}
                            duration={1500}
                            quantum
                          />
                        </div>
                        <p className="text-white/70 mt-2">Cost Reduction</p>
                      </GlassPanel>
                    </HoverCard>
                    
                    <HoverCard effect="holographic">
                      <GlassPanel variant="quantum" glow className="p-6 text-center">
                        <ZapIcon className="w-10 h-10 text-quantum-green mx-auto mb-4" />
                        <div className="text-4xl font-bold text-white">
                          <QuantumNumber 
                            value={savings.amount * 12} 
                            prefix="$" 
                            decimals={0}
                            duration={1500}
                            quantum
                          />
                        </div>
                        <p className="text-white/70 mt-2">Annual Savings</p>
                      </GlassPanel>
                    </HoverCard>
                  </div>
                  
                  <div className="text-center relative z-10">
                    <GlassButton
                      variant="quantum"
                      size="xl"
                      onClick={onGetStarted}
                      glow
                      pulse
                      className="min-w-[300px]"
                    >
                      Start Saving Now
                      <ArrowRightIcon className="w-6 h-6 ml-3" />
                    </GlassButton>
                    <p className="text-white/60 mt-4 text-sm">
                      Free for Beta Partners • No Credit Card Required
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            )}
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 text-center"
            >
              <p className="text-white/60 mb-6">Trusted by Leading African Financial Institutions</p>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                {['Central Bank', 'FinTech Leader', 'Regional Bank', 'Payment Gateway'].map((name, i) => (
                  <FloatingElement key={i} delay={i * 0.2} duration={4}>
                    <div className="w-32 h-12 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white/50 text-sm">{name}</span>
                    </div>
                  </FloatingElement>
                ))}
              </div>
            </motion.div>
            
          </StaggerContainer>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/60"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
