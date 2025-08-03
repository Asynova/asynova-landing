/**
 * Hero Section - Multi-Agent AI Platform
 * Focused on developers and AI cost optimization
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ZapIcon, TrendingUpIcon, ArrowRightIcon, 
  GitBranchIcon, DollarSignIcon,
  CodeIcon, CpuIcon
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
  ThreeDScene, NeuralNetworkVisualization
} from '../../design-system/ThreeDVisualization';

interface HeroSectionProps {
  onGetStarted?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  const [apiSpend, setApiSpend] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [savings, setSavings] = useState({ amount: 0, percentage: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);

  // Dynamic text for developers
  const [dynamicHeadline, setDynamicHeadline] = useState("Multi-Agent AI Orchestration");
  
  const headlines = useMemo(() => [
    "Multi-Agent AI Orchestration",
    "Cut Your AI Costs by 60%",
    "Build Complex AI Workflows",
    "Ship AI Features 10x Faster"
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicHeadline(headlines[Math.floor(Math.random() * headlines.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, [headlines]);

  const calculateSavings = () => {
    if (!apiSpend) return;
    
    setIsCalculating(true);
    
    // Simulate AI calculation with realistic processing
    setTimeout(() => {
      const spend = parseFloat(apiSpend);
      const savingsPercentage = 55 + Math.random() * 10; // 55-65%
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
      
      {/* 3D Visualization Layer - Updated for AI workflows */}
      <div className="absolute inset-0 opacity-50">
        <ThreeDScene fog={false} stars>
          <NeuralNetworkVisualization nodes={30} connections={50} />
        </ThreeDScene>
      </div>
      
      {/* Parallax Content Layer */}
      <motion.div style={{ y }} className="relative z-10">
        <div className="container mx-auto px-6 pt-32 pb-20">
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
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <MorphingText text={dynamicHeadline} speed={0.1} className="text-gradient" />
                <br />
                <span className="text-white opacity-90">
                  Made <span className="text-gradient-quantum">Simple</span>
                </span>
              </h1>
            </RevealAnimation>
            
            {/* Developer-focused Subheadline */}
            <RevealAnimation direction="up" className="text-center mb-12">
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                Join <QuantumNumber value={1247} quantum className="text-quantum-blue" /> developers saving 
                <QuantumNumber value={60} suffix="%" className="text-quantum-green mx-2" /> on AI costs
                while shipping <QuantumNumber value={10} suffix="x" className="text-quantum-purple" /> faster
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
                      Calculate Your <span className="text-gradient">AI Cost Savings</span>
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">
                          Your Monthly AI API Spend (OpenAI, Claude, Gemini, etc.)
                        </label>
                        <div className="flex gap-4">
                          <GlassInput
                            type="number"
                            placeholder="e.g., 500"
                            value={apiSpend}
                            onChange={(e) => setApiSpend((e.target as HTMLInputElement).value)}
                            icon={<span className="text-white/50">$</span>}
                            quantum
                            className="flex-1"
                          />
                          <GlassButton
                            variant="quantum"
                            onClick={calculateSavings}
                            disabled={!apiSpend || isCalculating}
                            glow
                            pulse
                            morphing
                          >
                            {isCalculating ? (
                              <>
                                <GlassLoader size="sm" quantum />
                                <span className="ml-2">Optimizing...</span>
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
                          <p className="text-white/70 text-sm">Analyzing optimization potential...</p>
                          <GlassProgress value={75} variant="quantum" animated particles />
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Quick code example */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-white/60 text-xs mb-2">Quick Example:</p>
                      <pre className="text-xs text-quantum-blue/80 font-mono">
{`const workflow = await asynova.createWorkflow({
  agents: ['researcher', 'writer', 'editor'],
  optimize: true // 60% cost savings
});`}
                      </pre>
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
                    Your Savings with Asynova
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
                    <HoverCard effect="holographic">
                      <GlassPanel variant="quantum" glow className="p-6 text-center">
                        <DollarSignIcon className="w-10 h-10 text-quantum-green mx-auto mb-4" />
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
                        <ZapIcon className="w-10 h-10 text-quantum-blue mx-auto mb-4" />
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
                      Start Building for Free
                      <ArrowRightIcon className="w-6 h-6 ml-3" />
                    </GlassButton>
                    <p className="text-white/60 mt-4 text-sm">
                      1,000 API calls free • No credit card required
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            )}
            
            {/* Trust Indicators - Updated for developers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 text-center"
            >
              <p className="text-white/60 mb-6">Built by developers, for developers</p>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                {['Open Source', '5-Min Setup', 'MIT License', 'No Vendor Lock-in'].map((name, i) => (
                  <FloatingElement key={i} delay={i * 0.2} duration={4}>
                    <div className="w-32 h-12 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white/50 text-sm">{name}</span>
                    </div>
                  </FloatingElement>
                ))}
              </div>
            </motion.div>
            
            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-8 flex justify-center gap-4"
            >
              <GlassBadge variant="secondary">
                <GitBranchIcon className="w-4 h-4 mr-1" />
                1.2k GitHub Stars
              </GlassBadge>
              <GlassBadge variant="secondary">
                <CpuIcon className="w-4 h-4 mr-1" />
                50ms Latency
              </GlassBadge>
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
