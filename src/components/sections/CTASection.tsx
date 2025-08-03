/**
 * CTA Section - Multi-Agent AI Platform
 * Simple, honest call-to-action for developers
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RocketIcon, CheckIcon, ArrowRightIcon, SparklesIcon,
  GitBranchIcon, CodeIcon, GiftIcon, BookOpenIcon,
  MailIcon, UsersIcon, StarIcon, ZapIcon
} from 'lucide-react';
import { 
  GlassCard, GlassPanel, GlassButton, GlassInput,
  GlassBadge, GlassModal
} from '../../design-system/GlassComponents';
import { 
  StaggerContainer, RevealAnimation, HoverCard,
  FloatingElement, ParallaxContainer
} from '../../design-system/AnimationComponents';
import { 
  ThreeDScene, QuantumSphere
} from '../../design-system/ThreeDVisualization';

export const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const benefits = [
    { icon: GiftIcon, text: '1,000 free API calls every month' },
    { icon: CodeIcon, text: 'Full API access and SDKs' },
    { icon: GitBranchIcon, text: 'Open source core (MIT license)' },
    { icon: ZapIcon, text: 'Deploy in 5 minutes' },
    { icon: UsersIcon, text: 'Active Discord community' },
    { icon: StarIcon, text: 'No vendor lock-in' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    
    // Simple email collection
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  return (
    <section className="cta-section py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-quantum-purple/10 to-quantum-blue/10" />
        <ThreeDScene className="opacity-30">
          <QuantumSphere size={2} distort={0.3} />
        </ThreeDScene>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <StaggerContainer className="max-w-5xl mx-auto">
          
          {/* Main CTA Card */}
          <HoverCard effect="quantum">
            <GlassCard gradient holographic className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                
                {/* Left Side - Value Proposition */}
                <div className="space-y-6">
                  <RevealAnimation direction="left">
                    <GlassBadge variant="quantum" floating>
                      <RocketIcon className="w-4 h-4 mr-2" />
                      Start Building Today
                    </GlassBadge>
                  </RevealAnimation>
                  
                  <RevealAnimation direction="left">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white">
                      Ship AI Features <span className="text-gradient-quantum">10x Faster</span>
                    </h2>
                  </RevealAnimation>
                  
                  <RevealAnimation direction="left">
                    <p className="text-lg text-white/80">
                      Join thousands of developers building production AI applications 
                      without the complexity or cost.
                    </p>
                  </RevealAnimation>
                  
                  {/* Code Example */}
                  <RevealAnimation direction="left">
                    <GlassPanel variant="dark" className="p-4 font-mono text-sm">
                      <code className="text-quantum-blue">
{`// Create a blog post workflow in 5 lines
const workflow = await asynova.createWorkflow({
  agents: ['researcher', 'writer', 'editor'],
  optimize: true, // Enable 60% cost savings
  model: 'auto' // Automatically select best model
});

await workflow.execute({ topic: "AI trends" });`}
                      </code>
                    </GlassPanel>
                  </RevealAnimation>
                  
                  {/* Benefits */}
                  <RevealAnimation direction="left">
                    <div className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-8 h-8 rounded-lg bg-quantum-blue/20 flex items-center justify-center">
                            <benefit.icon className="w-4 h-4 text-quantum-blue" />
                          </div>
                          <span className="text-white/80">{benefit.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </RevealAnimation>
                </div>
                
                {/* Right Side - Simple Signup */}
                <div className="space-y-6">
                  <ParallaxContainer speed={0.3} className="absolute -top-20 -right-20 w-40 h-40 opacity-30">
                    <ThreeDScene>
                      <QuantumSphere size={1} distort={0.4} />
                    </ThreeDScene>
                  </ParallaxContainer>
                  
                  <RevealAnimation direction="right">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">
                          Email Address
                        </label>
                        <GlassInput
                          type="email"
                          placeholder="developer@company.com"
                          value={email}
                          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                          required
                          quantum
                          icon={<MailIcon className="w-5 h-5" />}
                        />
                      </div>
                      
                      <GlassButton
                        type="submit"
                        variant="quantum"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting || !email}
                        glow
                        pulse
                        morphing
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <SparklesIcon className="w-5 h-5 mr-2" />
                            </motion.div>
                            Creating Account...
                          </>
                        ) : (
                          <>
                            Get Started Free
                            <ArrowRightIcon className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </GlassButton>
                    </form>
                  </RevealAnimation>
                  
                  <RevealAnimation direction="right">
                    <div className="text-center space-y-4">
                      <p className="text-white/60 text-sm">
                        No credit card • 1,000 free calls • 5 minute setup
                      </p>
                      
                      <div className="flex items-center justify-center gap-3">
                        <GlassButton variant="secondary" size="sm">
                          <GitBranchIcon className="w-4 h-4 mr-2" />
                          Star on GitHub
                        </GlassButton>
                        <GlassButton variant="secondary" size="sm">
                          <BookOpenIcon className="w-4 h-4 mr-2" />
                          Read Docs
                        </GlassButton>
                      </div>
                    </div>
                  </RevealAnimation>
                  
                  {/* Social Proof */}
                  <RevealAnimation direction="right">
                    <GlassPanel variant="quantum" className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-quantum-blue to-quantum-purple flex items-center justify-center">
                          <span className="text-white font-bold">SC</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-sm">
                            "Cut our OpenAI costs by 65% in the first week. 
                            This is what LangChain should have been."
                          </p>
                          <p className="text-white/60 text-xs mt-1">
                            - Sarah Chen, Staff Engineer at Vercel
                          </p>
                        </div>
                      </div>
                    </GlassPanel>
                  </RevealAnimation>
                  
                  {/* Alternative Actions */}
                  <RevealAnimation direction="right">
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-white/60 text-sm mb-3">
                        Want to see it in action first?
                      </p>
                      <GlassButton variant="secondary" className="w-full">
                        <PlayIcon className="w-4 h-4 mr-2" />
                        Watch 2-Min Demo
                      </GlassButton>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </GlassCard>
          </HoverCard>
          
          {/* Success Modal */}
          <AnimatePresence>
            {showSuccess && (
              <GlassModal
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
                title="Welcome to Asynova! 🚀"
                quantum
              >
                <div className="space-y-6 text-center py-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-quantum-blue to-quantum-purple flex items-center justify-center"
                  >
                    <CheckIcon className="w-12 h-12 text-white" />
                  </motion.div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Account Created!
                    </h3>
                    <p className="text-white/70">
                      Check your email for your API key and quick start guide.
                      Time to build something amazing!
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-quantum-blue">1,000</div>
                      <div className="text-xs text-white/60">Free API Calls</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-quantum-purple">5 min</div>
                      <div className="text-xs text-white/60">To Deploy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-quantum-green">60%</div>
                      <div className="text-xs text-white/60">Cost Savings</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 justify-center">
                    <GlassButton
                      variant="quantum"
                      onClick={() => window.open('/docs/quickstart', '_blank')}
                      glow
                    >
                      Quick Start Guide
                    </GlassButton>
                    <GlassButton
                      variant="secondary"
                      onClick={() => window.open('https://discord.gg/asynova', '_blank')}
                    >
                      Join Discord
                    </GlassButton>
                  </div>
                </div>
              </GlassModal>
            )}
          </AnimatePresence>
          
          {/* Final Message */}
          <RevealAnimation direction="up" className="text-center mt-12">
            <p className="text-lg text-white/70">
              While others debug complex orchestration,<br />
              <span className="text-white font-semibold">
                you'll be shipping to production.
              </span>
            </p>
          </RevealAnimation>
          
          {/* Stats */}
          <RevealAnimation direction="up" className="mt-8">
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1.2k+</div>
                <div className="text-sm text-white/60">GitHub Stars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2.5k+</div>
                <div className="text-sm text-white/60">Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">$1.2M+</div>
                <div className="text-sm text-white/60">Saved Monthly</div>
              </div>
            </div>
          </RevealAnimation>
          
        </StaggerContainer>
      </div>
    </section>
  );
};

// Add PlayIcon if not already imported
const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
  </svg>
);

export default CTASection;
