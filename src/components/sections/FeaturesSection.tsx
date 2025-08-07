/**
 * Features Section - Multi-Agent AI Platform
 * Showcasing developer-focused capabilities
 */

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  GitBranchIcon, ShieldIcon, DollarSignIcon, 
  ZapIcon, NetworkIcon, CodeIcon,
  CpuIcon, LayersIcon
} from 'lucide-react';
import { 
  GlassCard, GlassButton, GlassBadge 
} from '../../design-system/GlassComponents';
import { 
  StaggerContainer, HoverCard, RevealAnimation, 
  FloatingElement, QuantumNumber 
} from '../../design-system/AnimationComponents';
import { 
  ThreeDScene, DataCubeGrid, QuantumSphere 
} from '../../design-system/ThreeDVisualization';
import { theme } from '../../design-system/theme';

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  stats: {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
  };
  color: string;
  demo?: React.ReactNode;
}

export const FeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const features: Feature[] = [
    {
      icon: DollarSignIcon,
      title: "Progressive Cost Savings",
      description: "Connect one provider, save 45%. Add more providers to unlock up to 70% savings. Quality-first optimization.",
      stats: { value: 70, label: "Maximum Savings", suffix: "%" },
      color: theme.colors.quantum.blue,
      demo: (
        <div className="h-48 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <DollarSignIcon className="w-24 h-24 text-quantum-blue" />
          </motion.div>
        </div>
      )
    },
    {
      icon: NetworkIcon,
      title: "Multi-Provider Optimization",
      description: "Connect OpenAI, Claude, and Gemini. Our algorithms select the best model for each task while preserving quality.",
      stats: { value: 3, label: "AI Providers", suffix: " providers" },
      color: theme.colors.quantum.teal,
      demo: (
        <div className="h-48 flex items-center justify-center">
          <motion.div
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <NetworkIcon className="w-24 h-24 text-quantum-teal" />
          </motion.div>
        </div>
      )
    },
    {
      icon: ZapIcon,
      title: "Real-Time Monitoring",
      description: "Watch your savings accumulate in real-time. Track every optimization, cache hit, and cost reduction.",
      stats: { value: 100, label: "Real-Time Updates", suffix: "%" },
      color: theme.colors.quantum.purple,
      demo: (
        <ThreeDScene className="h-48">
          <DataCubeGrid gridSize={3} spacing={1.2} />
        </ThreeDScene>
      )
    },
    {
      icon: LayersIcon,
      title: "Smart Caching System",
      description: "Advanced pattern matching identifies similar requests and serves cached responses instantly. Zero cost, zero latency.",
      stats: { value: 99, label: "Cache Accuracy", suffix: "%" },
      color: theme.colors.quantum.pink,
      demo: (
        <div className="h-48 relative">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <LayersIcon className="w-24 h-24 text-quantum-pink" />
          </motion.div>
        </div>
      )
    },
    {
      icon: ShieldIcon,
      title: "Quality Protection",
      description: "Conservative defaults preserve response quality. Smart task classification never downgrades critical operations.",
      stats: { value: 100, label: "Quality Preserved", suffix: "%" },
      color: theme.colors.success[500],
      demo: (
        <div className="h-48 flex items-center justify-center">
          <motion.div
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <ShieldIcon className="w-24 h-24 text-green-500" />
          </motion.div>
        </div>
      )
    },
    {
      icon: CodeIcon,
      title: "Developer-First API",
      description: "Drop-in replacement for existing AI SDKs. No code changes required. Works with OpenAI, Claude, and Gemini clients.",
      stats: { value: 5, label: "Minutes to Integrate", suffix: " min" },
      color: theme.colors.accent[500],
      demo: (
        <ThreeDScene className="h-48">
          <QuantumSphere size={1.5} />
        </ThreeDScene>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="features-section py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <StaggerContainer className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <RevealAnimation direction="up" className="text-center mb-20">
            <GlassBadge variant="quantum" floating>
              <CpuIcon className="w-4 h-4 mr-2" />
              Built for Scale
            </GlassBadge>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-6 mb-6">
              Cost Optimization That <span className="text-gradient-quantum">Actually Works</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stop paying full price for AI APIs. Our intelligent optimization reduces costs while 
              preserving the quality you need. Connect more providers to unlock higher savings.
            </p>
          </RevealAnimation>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <HoverCard 
                  effect="quantum" 
                  intensity={1.5}
                  className="h-full"
                >
                  <GlassCard 
                    holographic={hoveredFeature === index}
                    className="h-full p-8 cursor-pointer relative overflow-hidden"
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    onClick={() => setActiveFeature(activeFeature === index ? null : index)}
                  >
                    {/* Background Glow */}
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${feature.color}40 0%, transparent 70%)`,
                      }}
                      animate={{
                        scale: hoveredFeature === index ? 1.5 : 1,
                        opacity: hoveredFeature === index ? 0.6 : 0.3,
                      }}
                    />
                    
                    {/* Icon */}
                    <FloatingElement duration={3} distance={10}>
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                        style={{
                          background: `linear-gradient(135deg, ${feature.color}20 0%, ${feature.color}10 100%)`,
                          border: `1px solid ${feature.color}30`,
                        }}
                      >
                        <feature.icon 
                          className="w-8 h-8" 
                          style={{ color: feature.color }}
                        />
                      </div>
                    </FloatingElement>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 mb-6">
                      {feature.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-baseline gap-2">
                      <div className="text-3xl font-bold" style={{ color: feature.color }}>
                        <QuantumNumber 
                          value={feature.stats.value}
                          prefix={feature.stats.prefix}
                          suffix={feature.stats.suffix}
                          quantum
                        />
                      </div>
                      <span className="text-white/60 text-sm">
                        {feature.stats.label}
                      </span>
                    </div>
                    
                    {/* Interactive Demo */}
                    {activeFeature === index && feature.demo && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 -mx-8 -mb-8 border-t border-white/10"
                      >
                        {feature.demo}
                      </motion.div>
                    )}
                  </GlassCard>
                </HoverCard>
              </motion.div>
            ))}
          </div>
          
          {/* Code Example */}
          <RevealAnimation direction="up" className="mt-20">
            <GlassCard className="max-w-3xl mx-auto p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Start Saving in 5 Minutes
              </h3>
              <pre className="text-sm text-quantum-blue/80 font-mono overflow-x-auto">
{`// Install the SDK
npm install asynova

// Replace your existing AI client
import asynova from 'asynova';

// Connect your providers for maximum savings
await asynova.connect({
  openai: 'sk-your-openai-key',     // 45% savings
  claude: 'sk-your-claude-key',     // +15% more (60% total)  
  gemini: 'your-gemini-key'         // +10% more (70% total)
});

// Use exactly like before - we handle optimization
const response = await asynova.chat.completions.create({
  model: "gpt-4",
  messages: [{ role: "user", content: "Hello!" }],
  // Our system automatically:
  // ✓ Checks cache for similar requests
  // ✓ Selects optimal model for task
  // ✓ Compresses prompts when safe
  // ✓ Preserves quality always
});

console.log('Original cost: $0.03');
console.log('Optimized cost: $0.009'); 
console.log('You saved: 70%');`}
              </pre>
            </GlassCard>
          </RevealAnimation>
          
          {/* Call to Action - FIXED BUTTONS */}
          <RevealAnimation direction="up" className="text-center mt-12">
            <p className="text-xl text-white/70 mb-8">
              Ready to cut your AI costs while preserving quality?
            </p>
            <div className="flex gap-4 justify-center">
              <GlassButton
                variant="quantum"
                size="lg"
                glow
                pulse
                className="min-w-[250px]"
                onClick={() => {
                  const ctaSection = document.getElementById('cta');
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <CodeIcon className="w-5 h-5 mr-2" />
                Start Saving Free
              </GlassButton>
              <GlassButton
                variant="secondary"
                size="lg"
                className="min-w-[200px]"
                onClick={() => {
                  window.open('https://github.com/asynova/asynova-core', '_blank');
                }}
              >
                <GitBranchIcon className="w-5 h-5 mr-2" />
                View on GitHub
              </GlassButton>
            </div>
          </RevealAnimation>
          
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FeaturesSection;