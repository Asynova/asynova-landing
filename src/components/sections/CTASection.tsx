/**
 * Revolutionary CTA Section
 * The final push that converts visitors into beta partners
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RocketIcon, CheckIcon, ArrowRightIcon, SparklesIcon,
  CalendarIcon, UsersIcon, TrophyIcon, ShieldCheckIcon,
  ClockIcon, StarIcon, GiftIcon, ZapIcon
} from 'lucide-react';
import { 
  GlassCard, GlassPanel, GlassButton, GlassInput,
  GlassBadge, GlassModal
} from '../../design-system/GlassComponents';
import { 
  StaggerContainer, RevealAnimation, HoverCard,
  QuantumNumber, FloatingElement, ParallaxContainer
} from '../../design-system/AnimationComponents';
import { 
  ThreeDScene, QuantumSphere, FinancialFlowVisualization
} from '../../design-system/ThreeDVisualization';

interface BetaSlot {
  id: number;
  status: 'available' | 'pending' | 'taken';
  company?: string;
}

export const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 23,
    minutes: 47,
    seconds: 59
  });
  
  // Beta slots simulation
  const [betaSlots, setBetaSlots] = useState<BetaSlot[]>([
    { id: 1, status: 'taken', company: 'Equity Bank' },
    { id: 2, status: 'taken', company: 'KCB Group' },
    { id: 3, status: 'pending' },
    { id: 4, status: 'available' },
    { id: 5, status: 'available' },
  ]);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulate slot updates
  useEffect(() => {
    const interval = setInterval(() => {
      setBetaSlots(prev => {
        const available = prev.filter(s => s.status === 'available');
        if (available.length > 0 && Math.random() > 0.7) {
          const randomSlot = available[Math.floor(Math.random() * available.length)];
          return prev.map(slot => 
            slot.id === randomSlot.id 
              ? { ...slot, status: 'pending' as const }
              : slot
          );
        }
        return prev;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Update slot
    setBetaSlots(prev => {
      const available = prev.filter(s => s.status === 'available');
      if (available.length > 0) {
        return prev.map(slot => 
          slot.id === available[0].id 
            ? { ...slot, status: 'taken' as const, company: company || email.split('@')[1] }
            : slot
        );
      }
      return prev;
    });

    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const benefits = [
    { icon: GiftIcon, text: 'Free for 6 months (worth $30,000)' },
    { icon: ShieldCheckIcon, text: 'White-glove onboarding support' },
    { icon: UsersIcon, text: 'Direct access to founding team' },
    { icon: TrophyIcon, text: 'Priority feature requests' },
    { icon: StarIcon, text: 'Lifetime 50% discount' },
    { icon: ZapIcon, text: 'Be first to market with AI advantage' },
  ];

  return (
    <section className="cta-section py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-quantum-purple/10 to-quantum-blue/10" />
        <ThreeDScene className="opacity-30">
          <FinancialFlowVisualization flowIntensity={0.5} particleCount={300} />
        </ThreeDScene>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <StaggerContainer className="max-w-5xl mx-auto">
          
          {/* Urgency Banner */}
          <RevealAnimation direction="down" className="mb-12">
            <FloatingElement duration={3}>
              <GlassPanel variant="quantum" glow className="p-4 text-center">
                <div className="flex items-center justify-center gap-6 flex-wrap">
                  <GlassBadge variant="error" pulse>
                    <ClockIcon className="w-4 h-4 mr-1" />
                    Limited Time
                  </GlassBadge>
                  <div className="flex items-center gap-4 text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold">
                        <QuantumNumber value={timeLeft.days} />
                      </div>
                      <div className="text-xs text-white/60">Days</div>
                    </div>
                    <span className="text-2xl">:</span>
                    <div className="text-center">
                      <div className="text-2xl font-bold">
                        <QuantumNumber value={timeLeft.hours} />
                      </div>
                      <div className="text-xs text-white/60">Hours</div>
                    </div>
                    <span className="text-2xl">:</span>
                    <div className="text-center">
                      <div className="text-2xl font-bold">
                        <QuantumNumber value={timeLeft.minutes} />
                      </div>
                      <div className="text-xs text-white/60">Minutes</div>
                    </div>
                    <span className="text-2xl">:</span>
                    <div className="text-center">
                      <div className="text-2xl font-bold">
                        <QuantumNumber value={timeLeft.seconds} />
                      </div>
                      <div className="text-xs text-white/60">Seconds</div>
                    </div>
                  </div>
                  <div className="text-white/80">
                    until Beta Program closes
                  </div>
                </div>
              </GlassPanel>
            </FloatingElement>
          </RevealAnimation>
          
          {/* Main CTA Card */}
          <HoverCard effect="quantum">
            <GlassCard gradient holographic className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                
                {/* Left Side - Value Proposition */}
                <div className="space-y-6">
                  <RevealAnimation direction="left">
                    <GlassBadge variant="quantum" floating>
                      <RocketIcon className="w-4 h-4 mr-2" />
                      Exclusive Beta Program
                    </GlassBadge>
                  </RevealAnimation>
                  
                  <RevealAnimation direction="left">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white">
                      Join the <span className="text-gradient-quantum">Banking Revolution</span>
                    </h2>
                  </RevealAnimation>
                  
                  <RevealAnimation direction="left">
                    <p className="text-lg text-white/80">
                      Be among the first 5 African financial institutions to experience 
                      the future of banking operations. Limited slots available.
                    </p>
                  </RevealAnimation>
                  
                  {/* Beta Slots Visualization */}
                  <RevealAnimation direction="left">
                    <div className="space-y-3">
                      <p className="text-white/60 text-sm">Beta Partner Slots</p>
                      <div className="flex gap-2">
                        {betaSlots.map((slot) => (
                          <motion.div
                            key={slot.id}
                            className={`flex-1 h-12 rounded-lg flex items-center justify-center text-sm font-medium ${
                              slot.status === 'taken' 
                                ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                                : slot.status === 'pending'
                                ? 'bg-yellow-500/20 border border-yellow-500/50 text-yellow-400'
                                : 'bg-white/10 border border-white/20 text-white/60'
                            }`}
                            animate={slot.status === 'pending' ? {
                              opacity: [1, 0.5, 1],
                            } : {}}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                            }}
                          >
                            {slot.status === 'taken' 
                              ? slot.company 
                              : slot.status === 'pending'
                              ? 'Pending...'
                              : 'Available'}
                          </motion.div>
                        ))}
                      </div>
                    </div>
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
                
                {/* Right Side - Signup Form */}
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
                          Work Email
                        </label>
                        <GlassInput
                          type="email"
                          placeholder="you@bank.com"
                          value={email}
                          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                          required
                          quantum
                          icon={<UsersIcon className="w-5 h-5" />}
                        />
                      </div>
                      
                      <div>
                        <label className="text-white/70 text-sm mb-2 block">
                          Company Name
                        </label>
                        <GlassInput
                          type="text"
                          placeholder="Your Financial Institution"
                          value={company}
                          onChange={(e) => setCompany((e.target as HTMLInputElement).value)}
                          quantum
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
                            Securing Your Slot...
                          </>
                        ) : (
                          <>
                            Claim Beta Access
                            <ArrowRightIcon className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </GlassButton>
                    </form>
                  </RevealAnimation>
                  
                  <RevealAnimation direction="right">
                    <div className="text-center space-y-4">
                      <p className="text-white/60 text-sm">
                        No credit card required • Setup in 60 seconds
                      </p>
                      
                      <div className="flex items-center justify-center gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">
                            <QuantumNumber value={30000} prefix="$" />
                          </div>
                          <div className="text-xs text-white/60">Value</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-quantum-green">
                            FREE
                          </div>
                          <div className="text-xs text-white/60">For Beta</div>
                        </div>
                      </div>
                    </div>
                  </RevealAnimation>
                  
                  <RevealAnimation direction="right">
                    <GlassPanel variant="quantum" className="p-4">
                      <div className="flex items-center gap-3">
                        <CalendarIcon className="w-5 h-5 text-quantum-blue" />
                        <div className="text-sm">
                          <p className="text-white font-medium">Book a Demo Instead?</p>
                          <p className="text-white/60">
                            Get a personalized walkthrough
                          </p>
                        </div>
                        <GlassButton variant="secondary" size="sm" className="ml-auto">
                          Schedule
                        </GlassButton>
                      </div>
                    </GlassPanel>
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
                title="Welcome to the Future! 🎉"
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
                      Beta Access Secured!
                    </h3>
                    <p className="text-white/70">
                      Check your email for next steps. Your journey to operational 
                      excellence begins now.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-quantum-blue">24h</div>
                      <div className="text-xs text-white/60">Onboarding</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-quantum-purple">1-on-1</div>
                      <div className="text-xs text-white/60">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-quantum-green">$0</div>
                      <div className="text-xs text-white/60">For 6 Months</div>
                    </div>
                  </div>
                  
                  <GlassButton
                    variant="quantum"
                    onClick={() => setShowSuccess(false)}
                    className="min-w-[200px]"
                    glow
                  >
                    Let's Get Started
                  </GlassButton>
                </div>
              </GlassModal>
            )}
          </AnimatePresence>
          
          {/* Final Urgency Message */}
          <RevealAnimation direction="up" className="text-center mt-12">
            <p className="text-lg text-white/70">
              While your competitors struggle with outdated systems,<br />
              <span className="text-white font-semibold">
                you'll be operating in the future.
              </span>
            </p>
          </RevealAnimation>
          
        </StaggerContainer>
      </div>
    </section>
  );
};

export default CTASection;
