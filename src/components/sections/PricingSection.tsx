/**
 * Pricing Section - Risk-Free 20% of Savings Model
 * Transparent explanation of our unique pricing approach
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSignIcon, CheckIcon,
  CalculatorIcon, ShieldIcon, TrendingUpIcon
} from 'lucide-react';
import { 
  GlassCard, GlassPanel, GlassBadge 
} from '../../design-system/GlassComponents';
import {
  StaggerContainer, RevealAnimation, HoverCard
} from '../../design-system/AnimationComponents';

interface PricingExample {
  name: string;
  monthlySpend: number;
  providers: number;
  savingsPercent: number;
  savingsAmount: number;
  ourFee: number;
  userKeeps: number;
  description: string;
}

export const PricingSection: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<number>(1);

  const pricingExamples: PricingExample[] = [
    {
      name: "Solo Developer",
      monthlySpend: 500,
      providers: 1,
      savingsPercent: 45,
      savingsAmount: 225,
      ourFee: 45,
      userKeeps: 180,
      description: "Perfect for indie hackers and side projects"
    },
    {
      name: "Growing Startup", 
      monthlySpend: 2000,
      providers: 2,
      savingsPercent: 60,
      savingsAmount: 1200,
      ourFee: 240,
      userKeeps: 960,
      description: "Ideal for scaling AI-powered applications"
    },
    {
      name: "Enterprise Team",
      monthlySpend: 10000,
      providers: 3,
      savingsPercent: 70,
      savingsAmount: 7000,
      ourFee: 1400,
      userKeeps: 5600,
      description: "Maximum optimization for large-scale operations"
    }
  ];

  const currentExample = pricingExamples[selectedExample];

  return (
    <section className="pricing-section py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <StaggerContainer>
          
          {/* Section Header */}
          <RevealAnimation direction="up" className="text-center mb-16">
            <GlassBadge variant="quantum" floating>
              <DollarSignIcon className="w-4 h-4 mr-2" />
              Transparent Pricing
            </GlassBadge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-6">
              Pay Only <span className="text-gradient-quantum">20% of Savings</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-4">
              The first AI platform where you literally cannot lose money. 
              We only get paid when you save money.
            </p>
            <div className="bg-quantum-green/20 border border-quantum-green/30 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-quantum-green text-lg font-semibold text-center">
                ✓ No fixed fees ✓ No upfront costs ✓ No risk to you
              </p>
              <p className="text-white/80 text-center text-sm mt-2">
                You pay us only from the money we save you
              </p>
            </div>
          </RevealAnimation>
          
          {/* Our Pricing Model - CRYSTAL CLEAR */}
          <RevealAnimation direction="up" className="mb-16">
            <div className="max-w-4xl mx-auto">
              <GlassCard className="p-8 border-quantum-blue/30">
                <h3 className="text-2xl font-bold text-white text-center mb-6">
                  How Our Pricing Works (Simple Math)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl mb-2">📊</div>
                    <h4 className="font-semibold text-white mb-2">1. We Track Your Savings</h4>
                    <p className="text-white/60 text-sm">
                      Monitor every API call, cache hit, and model optimization. 
                      Calculate exact savings in real-time.
                    </p>
                  </div>
                  
                  <div>
                    <div className="text-4xl mb-2">🧮</div>
                    <h4 className="font-semibold text-white mb-2">2. We Take 20% of Savings</h4>
                    <p className="text-white/60 text-sm">
                      If we save you $1,000, we charge $200. 
                      If we save you $0, we charge $0.
                    </p>
                  </div>
                  
                  <div>
                    <div className="text-4xl mb-2">💰</div>
                    <h4 className="font-semibold text-white mb-2">3. You Keep 80% Forever</h4>
                    <p className="text-white/60 text-sm">
                      You always come out ahead. 
                      Impossible to lose money with our model.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-quantum-green/10 border border-quantum-green/30 rounded-lg">
                  <p className="text-white text-center">
                    <strong>Example:</strong> Save $1,200/month → Pay us $240 → Keep $960 in pure profit
                  </p>
                </div>
              </GlassCard>
            </div>
          </RevealAnimation>
          
          {/* How It Works */}
          <RevealAnimation direction="up" className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                How Our Risk-Free Model Works
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-quantum-blue to-quantum-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Connect APIs</h4>
                  <p className="text-white/60 text-sm">Add your OpenAI, Claude, or Gemini keys</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-quantum-purple to-quantum-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">We Optimize</h4>
                  <p className="text-white/60 text-sm">Smart caching, model selection, compression</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-quantum-pink to-quantum-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">You Save</h4>
                  <p className="text-white/60 text-sm">Track exact savings in real-time</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-quantum-green to-quantum-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">4</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">We Take 20%</h4>
                  <p className="text-white/60 text-sm">Only from what we saved you</p>
                </div>
              </div>
            </div>
          </RevealAnimation>
          
          {/* Interactive Pricing Calculator */}
          <RevealAnimation direction="up" className="mb-16">
            <GlassCard gradient holographic className="max-w-5xl mx-auto p-8">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Calculate Your Savings
              </h3>
              
              {/* Example Selector - FIXED TO BE CLEAR */}
              <div className="mb-6">
                <p className="text-white/70 text-center mb-4">
                  <strong>Select your current monthly AI spending to see your savings:</strong>
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {pricingExamples.map((example, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <HoverCard effect="glow">
                      <GlassPanel 
                        className={`p-6 cursor-pointer transition-all ${
                          selectedExample === index 
                            ? 'border-quantum-blue shadow-lg shadow-quantum-blue/30' 
                            : 'border-white/10 hover:border-white/30'
                        }`}
                        onClick={() => setSelectedExample(index)}
                      >
                        <div className="text-center">
                          <p className="text-white/60 text-sm mb-2">{example.name}</p>
                          <p className="text-lg text-white/50 mb-1">Currently spending:</p>
                          <p className="text-2xl font-bold text-white mb-1">
                            ${example.monthlySpend.toLocaleString()}/mo
                          </p>
                          <p className="text-sm text-white/40">{example.description}</p>
                          {selectedExample === index && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="mt-3"
                            >
                              <CheckIcon className="w-6 h-6 text-quantum-blue mx-auto" />
                            </motion.div>
                          )}
                        </div>
                      </GlassPanel>
                    </HoverCard>
                  </motion.div>
                ))}
              </div>
              
              {/* Pricing Breakdown */}
              <motion.div
                key={selectedExample}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <GlassPanel className="p-4 text-center">
                    <p className="text-white/60 text-sm mb-1">Current Spend</p>
                    <p className="text-xl text-white/80">
                      ${currentExample.monthlySpend.toLocaleString()}/mo
                    </p>
                  </GlassPanel>
                  
                  <GlassPanel className="p-4 text-center border-quantum-green/30">
                    <p className="text-white/60 text-sm mb-1">You Save</p>
                    <p className="text-2xl font-bold text-quantum-green">
                      ${currentExample.savingsAmount.toLocaleString()}/mo
                    </p>
                    <p className="text-xs text-quantum-green">({currentExample.savingsPercent}%)</p>
                  </GlassPanel>
                  
                  <GlassPanel className="p-4 text-center border-quantum-blue/30">
                    <p className="text-white/60 text-sm mb-1">Our Fee</p>
                    <p className="text-2xl font-bold text-quantum-blue">
                      ${currentExample.ourFee.toLocaleString()}/mo
                    </p>
                    <p className="text-xs text-quantum-blue">(20% of savings)</p>
                  </GlassPanel>
                  
                  <GlassPanel className="p-4 text-center border-quantum-purple/30">
                    <p className="text-white/60 text-sm mb-1">You Keep</p>
                    <p className="text-2xl font-bold text-quantum-purple">
                      ${currentExample.userKeeps.toLocaleString()}/mo
                    </p>
                    <p className="text-xs text-quantum-purple">(80% of savings)</p>
                  </GlassPanel>
                </div>
                
                {/* Annual Impact */}
                <div className="text-center p-6 bg-gradient-to-r from-quantum-green/20 to-quantum-blue/20 rounded-lg border border-quantum-green/30">
                  <p className="text-white/60 text-sm mb-2">Annual Savings You Keep</p>
                  <p className="text-4xl font-bold text-quantum-green">
                    ${(currentExample.userKeeps * 12).toLocaleString()}
                  </p>
                  <p className="text-sm text-white/60 mt-2">
                    That's {currentExample.providers} provider{currentExample.providers > 1 ? 's' : ''} connected for {currentExample.savingsPercent}% optimization
                  </p>
                </div>
              </motion.div>
            </GlassCard>
          </RevealAnimation>
          
          {/* Guarantees */}
          <RevealAnimation direction="up" className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Our Risk-Free Guarantees
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <HoverCard effect="glow">
                  <GlassPanel className="p-6 text-center">
                    <ShieldIcon className="w-12 h-12 text-quantum-green mx-auto mb-4" />
                    <h4 className="font-semibold text-white mb-2">Save Money or Pay Nothing</h4>
                    <p className="text-white/60 text-sm">
                      If we don't reduce your costs, you pay absolutely nothing. Period.
                    </p>
                  </GlassPanel>
                </HoverCard>
                
                <HoverCard effect="glow">
                  <GlassPanel className="p-6 text-center">
                    <CalculatorIcon className="w-12 h-12 text-quantum-blue mx-auto mb-4" />
                    <h4 className="font-semibold text-white mb-2">Auditable Savings</h4>
                    <p className="text-white/60 text-sm">
                      Every optimization tracked and measured. See exactly where each penny is saved.
                    </p>
                  </GlassPanel>
                </HoverCard>
                
                <HoverCard effect="glow">
                  <GlassPanel className="p-6 text-center">
                    <TrendingUpIcon className="w-12 h-12 text-quantum-purple mx-auto mb-4" />
                    <h4 className="font-semibold text-white mb-2">Quality Preserved</h4>
                    <p className="text-white/60 text-sm">
                      Conservative optimization that never sacrifices response quality.
                    </p>
                  </GlassPanel>
                </HoverCard>
              </div>
            </div>
          </RevealAnimation>
          
          {/* FAQ */}
          <RevealAnimation direction="up">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-4">
                <GlassPanel className="p-6">
                  <h4 className="font-semibold text-white mb-2">
                    How do you calculate savings?
                  </h4>
                  <p className="text-white/70 text-sm">
                    We track the original cost (what you would have paid without optimization) and 
                    compare it to the optimized cost (what you actually paid). The difference is your savings.
                  </p>
                </GlassPanel>
                
                <GlassPanel className="p-6">
                  <h4 className="font-semibold text-white mb-2">
                    What if I'm not satisfied with the optimization?
                  </h4>
                  <p className="text-white/70 text-sm">
                    You can disable optimization at any time, report quality issues with one click, 
                    or whitelist specific operations to never be optimized.
                  </p>
                </GlassPanel>
                
                <GlassPanel className="p-6">
                  <h4 className="font-semibold text-white mb-2">
                    How do you ensure quality isn't sacrificed?
                  </h4>
                  <p className="text-white/70 text-sm">
                    We use conservative defaults, smart task classification, and quality monitoring. 
                    Critical operations are never downgraded, and users control optimization levels.
                  </p>
                </GlassPanel>
                
                <GlassPanel className="p-6">
                  <h4 className="font-semibold text-white mb-2">
                    Can I cancel anytime?
                  </h4>
                  <p className="text-white/70 text-sm">
                    Yes. Cancel immediately, no fees, no questions asked. You only pay for savings 
                    already achieved.
                  </p>
                </GlassPanel>
              </div>
            </div>
          </RevealAnimation>
          
        </StaggerContainer>
      </div>
    </section>
  );
};

export default PricingSection;