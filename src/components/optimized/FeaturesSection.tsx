/**
 * Optimized Features Section - Clear Value Props
 * Focus on benefits that matter to African banks
 */

import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangleIcon, DollarSignIcon, ServerIcon, 
  GlobeIcon, ShieldIcon, ZapIcon
} from 'lucide-react';
import { 
  GlassCard, GlassBadge 
} from '../../design-system/GlassComponents';
import { 
  StaggerContainer, HoverCard, RevealAnimation,
  QuantumNumber 
} from '../../design-system/AnimationComponents';

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  stat: string | number;
  statLabel: string;
  color: string;
}

export const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: AlertTriangleIcon,
      title: "Predict Failures",
      description: "Know 48 hours before your systems fail. Prevent M-Pesa outages.",
      stat: 99.7,
      statLabel: "% Accuracy",
      color: "text-red-400"
    },
    {
      icon: DollarSignIcon,
      title: "Cut AI Costs",
      description: "Reduce infrastructure spend by 40%. Save millions yearly.",
      stat: "$4.2M",
      statLabel: "Saved Monthly",
      color: "text-green-400"
    },
    {
      icon: ServerIcon,
      title: "Works With Your Systems",
      description: "FLEXCUBE, T24, Finacle, M-Pesa. Plug and play.",
      stat: "60",
      statLabel: "Seconds Setup",
      color: "text-blue-400"
    },
    {
      icon: GlobeIcon,
      title: "Works Offline",
      description: "Perfect for unstable connectivity. Never lose operations.",
      stat: "24/7",
      statLabel: "Availability",
      color: "text-purple-400"
    },
    {
      icon: ShieldIcon,
      title: "Bank-Grade Security",
      description: "CBK compliant. Quantum-resistant encryption.",
      stat: "256",
      statLabel: "Bit Encryption",
      color: "text-cyan-400"
    },
    {
      icon: ZapIcon,
      title: "Gets Smarter Daily",
      description: "AI learns from every transaction. Improves automatically.",
      stat: "10x",
      statLabel: "Smarter",
      color: "text-yellow-400"
    }
  ];

  return (
    <section className="features-section py-20 relative">
      <div className="container mx-auto px-6">
        <StaggerContainer className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <RevealAnimation direction="up" className="text-center mb-16">
            <GlassBadge variant="quantum" floating>
              <ZapIcon className="w-4 h-4 mr-2" />
              Why Banks Choose Asynova
            </GlassBadge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-4">
              Everything You Need.
              <br />
              <span className="text-gradient-quantum">Nothing You Don't.</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Built specifically for African financial institutions. 
              No complex setup. Just results.
            </p>
          </RevealAnimation>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <HoverCard effect="lift" className="h-full">
                  <GlassCard className="p-6 h-full">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 ${feature.color}`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 mb-4 text-sm">
                      {feature.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="pt-4 border-t border-white/10">
                      <div className={`text-2xl font-bold ${feature.color}`}>
                        {typeof feature.stat === 'number' ? (
                          <QuantumNumber value={feature.stat} decimals={1} />
                        ) : (
                          feature.stat
                        )}
                      </div>
                      <p className="text-white/60 text-sm">
                        {feature.statLabel}
                      </p>
                    </div>
                  </GlassCard>
                </HoverCard>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <RevealAnimation direction="up" className="text-center mt-16">
            <p className="text-lg text-white/70">
              <span className="text-white font-semibold">127 banks</span> are already saving millions.
              <br />
              Don't let your competitors get ahead.
            </p>
          </RevealAnimation>
          
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FeaturesSection;
