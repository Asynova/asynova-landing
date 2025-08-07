/**
 * Interactive Demo Section - Multi-Agent AI Platform
 * Simple demonstration of workflow concept and cost savings
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  PlayIcon, GitBranchIcon, ZapIcon, CheckCircleIcon,
  CodeIcon, CpuIcon
} from 'lucide-react';
import { 
  GlassCard, GlassPanel, GlassButton, GlassBadge
} from '../../design-system/GlassComponents';
import {
  StaggerContainer, RevealAnimation, HoverCard
} from '../../design-system/AnimationComponents';

const DemoSection: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cost, setCost] = useState({ traditional: 0, optimized: 0 });
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const runDemo = () => {
    // Reset state
    setIsRunning(true);
    setProgress(0);
    setCost({ traditional: 0, optimized: 0 });
    setCompletedSteps([]);

    // Simulate workflow execution
    let currentStep = 0;
    const steps = [
      { delay: 0, progress: 33, traditional: 4.50, optimized: 1.80 },
      { delay: 1000, progress: 66, traditional: 9.00, optimized: 3.60 },
      { delay: 2000, progress: 100, traditional: 12.50, optimized: 5.00 }
    ];

    steps.forEach(step => {
      setTimeout(() => {
        setProgress(step.progress);
        setCost({
          traditional: step.traditional,
          optimized: step.optimized
        });
        setCompletedSteps(prev => [...prev, currentStep]);
        currentStep++;

        if (step.progress === 100) {
          setTimeout(() => setIsRunning(false), 500);
        }
      }, step.delay);
    });
  };

  const savingsPercentage = cost.traditional > 0 
    ? Math.round((1 - cost.optimized / cost.traditional) * 100)
    : 0;

  return (
    <section className="demo-section py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <StaggerContainer>
          {/* Section Header */}
          <RevealAnimation direction="up" className="text-center mb-12">
            <div className="mb-4">
              <GlassBadge variant="quantum" floating>
                <CodeIcon className="w-4 h-4 mr-2" />
                Live Demo
              </GlassBadge>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Watch Your Costs Drop in Real-Time
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              See how our optimization algorithms reduce AI costs while preserving quality
            </p>
          </RevealAnimation>

          {/* Demo Container */}
          <RevealAnimation direction="up">
            <div className="max-w-5xl mx-auto">
              <HoverCard effect="glow">
                <GlassCard gradient holographic className="p-6 md:p-8">
                  {/* Demo Title */}
                  <div className="mb-8 text-center">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                      Example: AI API Cost Reduction
                    </h3>
                    <p className="text-white/60">
                      Three optimization techniques working together
                    </p>
                  </div>

                  {/* Optimization Techniques Visualization */}
                  <div className="mb-8">
                    <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
                      {/* Cache Check */}
                      <motion.div
                        animate={{
                          scale: isRunning && progress >= 0 ? [1, 1.1, 1] : 1,
                          opacity: completedSteps.includes(0) ? 1 : 0.6
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <GlassPanel className="p-3 md:p-4 text-center">
                          <GitBranchIcon className="w-6 h-6 md:w-8 md:h-8 text-quantum-blue mx-auto mb-2" />
                          <p className="text-sm font-medium text-white">Cache Check</p>
                          <p className="text-xs text-white/60">95% similarity</p>
                        </GlassPanel>
                      </motion.div>

                      <motion.span 
                        animate={{ opacity: progress >= 33 ? 1 : 0.3 }}
                        className="text-xl md:text-2xl text-white/50 hidden sm:block"
                      >
                        →
                      </motion.span>

                      {/* Model Selection */}
                      <motion.div
                        animate={{
                          scale: isRunning && progress >= 33 ? [1, 1.1, 1] : 1,
                          opacity: completedSteps.includes(1) ? 1 : 0.6
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <GlassPanel className="p-3 md:p-4 text-center">
                          <ZapIcon className="w-6 h-6 md:w-8 md:h-8 text-quantum-purple mx-auto mb-2" />
                          <p className="text-sm font-medium text-white">Model Select</p>
                          <p className="text-xs text-white/60">GPT-4 → GPT-3.5</p>
                        </GlassPanel>
                      </motion.div>

                      <motion.span 
                        animate={{ opacity: progress >= 66 ? 1 : 0.3 }}
                        className="text-xl md:text-2xl text-white/50 hidden sm:block"
                      >
                        →
                      </motion.span>

                      {/* Token Optimization */}
                      <motion.div
                        animate={{
                          scale: isRunning && progress >= 66 ? [1, 1.1, 1] : 1,
                          opacity: completedSteps.includes(2) ? 1 : 0.6
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <GlassPanel className="p-3 md:p-4 text-center">
                          <CheckCircleIcon className="w-6 h-6 md:w-8 md:h-8 text-quantum-green mx-auto mb-2" />
                          <p className="text-sm font-medium text-white">Optimize</p>
                          <p className="text-xs text-white/60">Compress & Save</p>
                        </GlassPanel>
                      </motion.div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {isRunning && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6"
                    >
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-quantum-blue via-quantum-purple to-quantum-green"
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                      </div>
                      <p className="text-sm text-white/60 mt-2 text-center">
                        Optimization Progress: {progress}%
                      </p>
                    </motion.div>
                  )}

                  {/* Cost Comparison */}
                  <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
                    <div className="text-center">
                      <GlassPanel className="p-4">
                        <p className="text-sm text-white/60 mb-2">Without Optimization</p>
                        <motion.p 
                          className="text-2xl md:text-3xl font-bold text-white/80"
                          animate={{ scale: cost.traditional > 0 ? [1, 1.1, 1] : 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          ${cost.traditional.toFixed(2)}
                        </motion.p>
                        <p className="text-xs text-white/50 mt-1">Full Price API Calls</p>
                      </GlassPanel>
                    </div>
                    
                    <div className="text-center">
                      <GlassPanel className="p-4 border-quantum-green/30">
                        <p className="text-sm text-white/60 mb-2">With Asynova</p>
                        <motion.p 
                          className="text-2xl md:text-3xl font-bold text-quantum-green"
                          animate={{ scale: cost.optimized > 0 ? [1, 1.1, 1] : 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          ${cost.optimized.toFixed(2)}
                        </motion.p>
                        {savingsPercentage > 0 && (
                          <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xs text-quantum-green mt-1"
                          >
                            {savingsPercentage}% Saved!
                          </motion.p>
                        )}
                      </GlassPanel>
                    </div>
                  </div>

                  {/* Optimization Features */}
                  {progress === 100 && !isRunning && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
                        <div className="text-sm">
                          <CpuIcon className="w-5 h-5 text-quantum-blue mx-auto mb-1" />
                          <p className="text-white/80">Smart Caching</p>
                        </div>
                        <div className="text-sm">
                          <GitBranchIcon className="w-5 h-5 text-quantum-purple mx-auto mb-1" />
                          <p className="text-white/80">Model Selection</p>
                        </div>
                        <div className="text-sm">
                          <ZapIcon className="w-5 h-5 text-quantum-green mx-auto mb-1" />
                          <p className="text-white/80">Token Compression</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Action Button */}
                  <div className="text-center">
                    <GlassButton
                      variant="quantum"
                      size="lg"
                      onClick={runDemo}
                      disabled={isRunning}
                      style={{ position: 'relative', zIndex: 10 }}
                      glow
                      pulse={!isRunning}
                    >
                      <PlayIcon className="w-5 h-5 mr-2" />
                      {isRunning ? 'Optimizing Costs...' : progress === 100 ? 'Run Again' : 'See Cost Optimization'}
                    </GlassButton>
                  </div>

                  {/* Info Note */}
                  <p className="text-xs text-white/50 text-center mt-6">
                    This demo simulates our cost optimization algorithms using real savings data
                  </p>
                </GlassCard>
              </HoverCard>
            </div>
          </RevealAnimation>

          {/* CTA Below Demo */}
          <RevealAnimation direction="up" className="text-center mt-12">
            <p className="text-lg text-white/70 mb-4">
              Ready to start saving on your AI costs?
            </p>
            <GlassButton 
              variant="secondary" 
              size="lg" 
              onClick={() => {
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ position: 'relative', zIndex: 10 }}
            >
              Connect Your API Keys →
            </GlassButton>
          </RevealAnimation>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default DemoSection;