/**
 * Revolutionary Features Section
 * Showcasing capabilities that defy expectations
 */

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  BrainIcon, ShieldIcon, GlobeIcon, 
  ServerIcon, AlertTriangleIcon,
  BanknoteIcon,
  CpuIcon, NetworkIcon
} from 'lucide-react';
import { 
  GlassCard, GlassButton, GlassBadge 
} from '../../design-system/GlassComponents';
import { 
  StaggerContainer, HoverCard, RevealAnimation, 
  FloatingElement, QuantumNumber 
} from '../../design-system/AnimationComponents';
import { 
  ThreeDScene, DataCubeGrid, FourDVisualization,
  QuantumSphere 
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
      icon: AlertTriangleIcon,
      title: "Failure Prediction AI",
      description: "Our quantum-enhanced AI predicts system failures 48 hours before they occur, analyzing millions of data points in real-time.",
      stats: { value: 99.7, label: "Accuracy", suffix: "%" },
      color: theme.colors.quantum.pink,
      demo: (
        <ThreeDScene className="h-48">
          <FourDVisualization dataPoints={15} timeSteps={8} />
        </ThreeDScene>
      )
    },
    {
      icon: BanknoteIcon,
      title: "Cost Optimization Engine",
      description: "Intelligent resource allocation reduces AI infrastructure costs by up to 45% while improving performance.",
      stats: { value: 4.2, label: "Saved Monthly", prefix: "$", suffix: "M" },
      color: theme.colors.quantum.teal,
      demo: (
        <div className="h-48 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <BanknoteIcon className="w-24 h-24 text-quantum-teal" />
          </motion.div>
        </div>
      )
    },
    {
      icon: ServerIcon,
      title: "Banking System Integration",
      description: "Native support for FLEXCUBE, T24, Finacle, and M-Pesa with real-time synchronization.",
      stats: { value: 100, label: "Compatible", suffix: "%" },
      color: theme.colors.quantum.blue,
      demo: (
        <ThreeDScene className="h-48">
          <DataCubeGrid gridSize={3} spacing={1.2} />
        </ThreeDScene>
      )
    },
    {
      icon: GlobeIcon,
      title: "Offline-First Architecture",
      description: "Works seamlessly even with unstable connectivity. Edge computing ensures operations never stop.",
      stats: { value: 24, label: "Availability", suffix: "/7" },
      color: theme.colors.quantum.purple,
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
            <GlobeIcon className="w-24 h-24 text-quantum-purple" />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="w-32 h-32 border-2 border-quantum-purple rounded-full"
            />
          </div>
        </div>
      )
    },
    {
      icon: ShieldIcon,
      title: "Quantum Security",
      description: "Military-grade encryption with quantum-resistant algorithms. Your data is safer than Fort Knox.",
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
      icon: BrainIcon,
      title: "Self-Learning AI",
      description: "Our AI learns from your specific patterns, becoming smarter and more efficient every day.",
      stats: { value: 10, label: "Smarter Daily", suffix: "x" },
      color: theme.colors.accent[500],
      demo: (
        <ThreeDScene className="h-48">
          <QuantumSphere size={1.5} distort={0.3} />
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
              Revolutionary Features
            </GlassBadge>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-6 mb-6">
              Technology from the <span className="text-gradient-quantum">Future</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Every feature is designed to give African financial institutions 
              an unfair advantage in the global market.
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
          
          {/* Call to Action */}
          <RevealAnimation direction="up" className="text-center mt-20">
            <p className="text-xl text-white/70 mb-8">
              Ready to experience the future of banking technology?
            </p>
            <GlassButton
              variant="quantum"
              size="lg"
              glow
              pulse
              className="min-w-[250px]"
            >
              <NetworkIcon className="w-5 h-5 mr-2" />
              Explore All Features
            </GlassButton>
          </RevealAnimation>
          
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FeaturesSection;
