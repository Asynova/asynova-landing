/**
 * Hero Section - Multi-Agent AI Platform
 * Focused on developers and AI cost optimization
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ZapIcon, ArrowRightIcon, 
  GitBranchIcon, CheckCircleIcon,
  CodeIcon, CpuIcon, RocketIcon, DollarSignIcon
} from 'lucide-react';
import { 
  GlassCard, GlassButton, 
  GlassBadge, GlassPanel 
} from '../../design-system/GlassComponents';
import { 
  StaggerContainer, 
  QuantumBackground, HoverCard, MorphingText, FloatingElement, RevealAnimation
} from '../../design-system/AnimationComponents';
import { 
  ThreeDScene, NeuralNetworkVisualization
} from '../../design-system/ThreeDVisualization';

interface HeroSectionProps {
  onGetStarted?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);
  const [selectedTier, setSelectedTier] = useState<'small' | 'startup' | 'enterprise'>('startup');

  // Dynamic text for cost optimization focus
  const [dynamicHeadline, setDynamicHeadline] = useState("Cut Your AI Costs by 60%");
  
  const headlines = useMemo(() => [
    "Cut Your AI Costs by 60%",
    "Smart AI Cost Optimization", 
    "Save Money on Every API Call",
    "Quality-First Cost Reduction"
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicHeadline(headlines[Math.floor(Math.random() * headlines.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, [headlines]);

  // Progressive savings examples (NOT pricing tiers)
  const pricingTiers = {
    small: {
      name: 'Small Developer',
      current: 500,
      optimized: 275,
      savings: 225,
      percentage: 45,
      example: 'If you currently spend $500/mo on AI APIs',
      features: ['Smart caching & compression', 'Model optimization', 'Real-time tracking']
    },
    startup: {
      name: 'Growing Team',
      current: 2000,
      optimized: 800,
      savings: 1200,
      percentage: 60,
      example: 'If you currently spend $2,000/mo on AI APIs',
      features: ['All single provider features', 'Cross-provider routing', 'Enhanced savings']
    },
    enterprise: {
      name: 'Large Company',
      current: 10000,
      optimized: 3000,
      savings: 7000,
      percentage: 70,
      example: 'If you currently spend $10,000/mo on AI APIs',
      features: ['All features included', 'Maximum savings potential', 'Priority support']
    }
  };

  const currentTier = pricingTiers[selectedTier];

  return (
    <section 
      ref={heroRef}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <QuantumBackground />
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <ThreeDScene className="opacity-30">
          <NeuralNetworkVisualization />
        </ThreeDScene>
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <StaggerContainer staggerDelay={0.1} className="max-w-6xl mx-auto">
            
            {/* Floating Badge - Updated for developers */}
            <FloatingElement duration={4} distance={10} className="flex justify-center mb-8">
              <GlassBadge variant="quantum" pulse floating>
                <CodeIcon className="w-4 h-4 mr-2" />
                Production-Ready AI Infrastructure
              </GlassBadge>
            </FloatingElement>
            
            {/* Main Headline with Morphing Effect */}
            <RevealAnimation direction="up" className="text-center mb-8">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight">
                <MorphingText text={dynamicHeadline} speed={0.1} className="text-gradient" />
                <br />
                <span className="text-white opacity-90">
                  Pay Only <span className="text-gradient-quantum">What You Save</span>
                </span>
              </h1>
            </RevealAnimation>
            
            {/* Developer-focused Subheadline - UPDATED TO BE HONEST */}
            <RevealAnimation direction="up" className="text-center mb-12">
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                Advanced AI cost optimization dashboard that saves developers
                <span className="text-quantum-green mx-2 font-bold">up to 70%</span> on API costs
                with <span className="text-quantum-purple font-bold">zero quality loss</span>
              </p>
            </RevealAnimation>
            
            {/* Interactive Pricing Showcase - NO INPUT REQUIRED */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              <GlassCard gradient holographic className="p-8">
                <h3 className="text-3xl font-bold text-white mb-2 text-center">
                  Calculate <span className="text-gradient">Your Savings</span>
                </h3>
                <p className="text-white/60 text-center mb-2">
                  Select your current monthly AI spending to see potential savings
                </p>
                <p className="text-sm text-quantum-green text-center mb-8">
                  ✓ Pay only 20% of what we save you • ✓ Quality-first optimization • ✓ Zero risk guarantee
                </p>
                
                
                {/* Spending Example Selector */}
                <div className="mb-6">
                  <p className="text-white text-center mb-2 font-semibold">
                    💡 Select Your Current AI Spending Level
                  </p>
                  <p className="text-white/60 text-center text-sm">
                    (These are examples of what YOU currently spend, not our pricing)
                  </p>
                </div>
                
                {/* Tier Selector */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {Object.entries(pricingTiers).map(([key, tier]) => (
                    <motion.div
                      key={key}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <HoverCard effect="quantum">
                        <GlassPanel 
                          className={`p-6 cursor-pointer transition-all ${
                            selectedTier === key 
                              ? 'border-quantum-blue shadow-lg shadow-quantum-blue/30' 
                              : 'border-white/10 hover:border-white/30'
                          }`}
                          onClick={() => setSelectedTier(key as typeof selectedTier)}
                        >
                          <div className="text-center">
                            <p className="text-white/60 text-sm mb-2">{tier.name} Example</p>
                            <p className="text-xs text-quantum-blue mb-1">Currently spending on AI:</p>
                            <p className="text-2xl font-bold text-white mb-1">
                              ${tier.current.toLocaleString()}/mo
                            </p>
                            <p className="text-sm text-white/40">{tier.example}</p>
                            {selectedTier === key && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="mt-3"
                              >
                                <CheckCircleIcon className="w-6 h-6 text-quantum-blue mx-auto" />
                              </motion.div>
                            )}
                          </div>
                        </GlassPanel>
                      </HoverCard>
                    </motion.div>
                  ))}
                </div>
                
                {/* Dynamic Results Display */}
                <motion.div
                  key={selectedTier}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Savings Visualization */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <GlassPanel className="p-4 text-center">
                      <p className="text-white/60 text-sm mb-1">Current Cost</p>
                      <p className="text-xl text-white/80 line-through">
                        ${currentTier.current.toLocaleString()}/mo
                      </p>
                    </GlassPanel>
                    
                    <GlassPanel className="p-4 text-center border-quantum-green/30">
                      <p className="text-white/60 text-sm mb-1">Optimized Cost</p>
                      <p className="text-2xl font-bold text-quantum-green">
                        ${currentTier.optimized.toLocaleString()}/mo
                      </p>
                    </GlassPanel>
                    
                    <GlassPanel className="p-4 text-center border-quantum-blue/30">
                      <p className="text-white/60 text-sm mb-1">You Save</p>
                      <p className="text-2xl font-bold text-quantum-blue">
                        ${currentTier.savings.toLocaleString()}/mo
                      </p>
                    </GlassPanel>
                    
                    <GlassPanel className="p-4 text-center border-quantum-purple/30">
                      <p className="text-white/60 text-sm mb-1">Annual Savings</p>
                      <p className="text-2xl font-bold text-quantum-purple">
                        ${(currentTier.savings * 12).toLocaleString()}
                      </p>
                    </GlassPanel>
                  </div>
                  
                  {/* Features for selected tier */}
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {currentTier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-white/70">
                        <CheckCircleIcon className="w-4 h-4 text-quantum-green" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Smart Code Example */}
                  <div className="bg-black/20 rounded-lg p-4 border border-white/10">
                    <p className="text-white/60 text-xs mb-2">Simple integration with instant savings:</p>
                    <pre className="text-sm text-quantum-blue/90 font-mono">
{`// Before: $${currentTier.current}/month
import openai from 'openai';
const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [...]
});

// After: $${currentTier.optimized}/month (${currentTier.percentage}% savings)
import asynova from 'asynova';
const response = await asynova.optimize.openai({
  model: "gpt-4", // Auto-selected to cheaper model when safe
  messages: [...], // Auto-compressed and cached
  qualityFirst: true // Default: preserve quality
});`}
                    </pre>
                  </div>
                </motion.div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <GlassButton
                    variant="quantum"
                    size="lg"
                    onClick={() => {
                      if (onGetStarted) onGetStarted();
                      else document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    glow
                    pulse
                    morphing
                  >
                    <RocketIcon className="w-5 h-5 mr-2" />
                    Start Saving Now
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </GlassButton>
                  
                  <GlassButton
                    variant="secondary"
                    size="lg"
                    onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <ZapIcon className="w-5 h-5 mr-2" />
                    See Live Demo
                  </GlassButton>
                </div>
                
                {/* Trust Indicator */}
                <p className="text-sm text-white/60 mt-6 text-center">
                  <span className="text-quantum-green">✓</span> No credit card required • 
                  <span className="text-quantum-blue"> Use your own API keys</span> • 
                  <span className="text-quantum-purple"> Pay only from savings</span>
                </p>
              </GlassCard>
            </motion.div>
            
            {/* Trust Indicators - UPDATED TO BE HONEST */}
            <RevealAnimation direction="up" className="mt-12">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
                <div className="flex items-center gap-2">
                  <GitBranchIcon className="w-5 h-5" />
                  <span className="text-sm">Open Source Core</span>
                </div>
                <div className="flex items-center gap-2">
                  <CpuIcon className="w-5 h-5" />
                  <span className="text-sm">Quality-First Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSignIcon className="w-5 h-5" />
                  <span className="text-sm">Pay Only from Savings</span>
                </div>
              </div>
            </RevealAnimation>
          </StaggerContainer>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white/40 cursor-pointer"
          onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
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