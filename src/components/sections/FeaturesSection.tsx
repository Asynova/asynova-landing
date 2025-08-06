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
      icon: LayersIcon,
      title: "Visual Workflow Builder",
      description: "Drag-and-drop AI agents to build complex workflows. Like Zapier for AI, but actually powerful.",
      stats: { value: 5, label: "Minutes to Deploy", suffix: " min" },
      color: theme.colors.quantum.blue,
      demo: (
        <div className="h-48 flex items-center justify-center">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <LayersIcon className="w-24 h-24 text-quantum-blue" />
          </motion.div>
        </div>
      )
    },
    {
      icon: DollarSignIcon,
      title: "60% Cost Optimization",
      description: "Semantic caching, smart model selection, and request batching cut your AI bills in half.",
      stats: { value: 60, label: "Average Savings", suffix: "%" },
      color: theme.colors.quantum.teal,
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
            <DollarSignIcon className="w-24 h-24 text-quantum-teal" />
          </motion.div>
        </div>
      )
    },
    {
      icon: ZapIcon,
      title: "Real-Time Execution",
      description: "Watch your agents work in real-time. Debug, monitor, and optimize on the fly.",
      stats: { value: 100, label: "Concurrent Agents", suffix: "+" },
      color: theme.colors.quantum.purple,
      demo: (
        <ThreeDScene className="h-48">
          <DataCubeGrid gridSize={3} spacing={1.2} />
        </ThreeDScene>
      )
    },
    {
      icon: NetworkIcon,
      title: "Multi-Model Support",
      description: "Use OpenAI, Claude, Gemini, and open source models in the same workflow. We handle the complexity.",
      stats: { value: 15, label: "Models Supported", suffix: "+" },
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
            <NetworkIcon className="w-24 h-24 text-quantum-pink" />
          </motion.div>
        </div>
      )
    },
    {
      icon: ShieldIcon,
      title: "Enterprise Security",
      description: "SOC 2 compliant, end-to-end encryption, and role-based access control. Your data never trains models.",
      stats: { value: 256, label: "Bit Encryption", suffix: "-bit" },
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
      icon: GitBranchIcon,
      title: "Version Control for AI",
      description: "Track changes, rollback workflows, and collaborate with your team. Git for AI workflows.",
      stats: { value: 100, label: "Version History", suffix: "%" },
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
              Infrastructure That <span className="text-gradient-quantum">Just Works</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Stop wrestling with complex AI orchestration. Start shipping features that scale.
              Built by developers who were tired of the status quo.
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
                Build Complex Workflows in Minutes
              </h3>
              <pre className="text-sm text-quantum-blue/80 font-mono overflow-x-auto">
{`// Create a content generation workflow
const workflow = await asynova.createWorkflow({
  name: "Blog Post Generator",
  agents: [
    { type: "researcher", model: "gemini-flash" },
    { type: "writer", model: "claude-3" },
    { type: "editor", model: "gpt-4" }
  ],
  optimization: {
    enableCaching: true,
    smartModelSelection: true,
    targetCostReduction: 0.6
  }
});

// Execute with real-time monitoring
const result = await workflow.execute({
  topic: "Future of AI",
  onProgress: (agent, status) => {
    console.log(\`\${agent}: \${status.message}\`);
    console.log(\`Cost so far: $\${status.cost}\`);
  }
});`}
              </pre>
            </GlassCard>
          </RevealAnimation>
          
          {/* Call to Action - FIXED BUTTONS */}
          <RevealAnimation direction="up" className="text-center mt-12">
            <p className="text-xl text-white/70 mb-8">
              Ready to cut your AI costs and ship faster?
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
                Start Building Free
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