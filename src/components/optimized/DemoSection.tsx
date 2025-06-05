/**
 * Optimized Demo Section - Simple but Impressive
 * One powerful visualization that shows our capability
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  PlayIcon, AlertCircleIcon, CheckCircleIcon,
  TrendingUpIcon, ActivityIcon, ShieldCheckIcon
} from 'lucide-react';
import { 
  GlassCard, GlassButton, GlassBadge, GlassProgress 
} from '../../design-system/GlassComponents';
import { 
  RevealAnimation, HoverCard, QuantumNumber 
} from '../../design-system/AnimationComponents';
import { 
  ThreeDScene, NeuralNetworkVisualization 
} from '../../design-system/ThreeDVisualization';

export const DemoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [failureRisk, setFailureRisk] = useState('Low');
  
  // Simulated metrics
  const [metrics, setMetrics] = useState({
    systemHealth: 98.5,
    activeAlerts: 0,
    preventedIncidents: 127
  });

  // Auto-play demo
  useEffect(() => {
    if (!isPlaying) return;

    const steps = [
      () => {
        // Step 1: Normal operation
        setMetrics({ systemHealth: 98.5, activeAlerts: 0, preventedIncidents: 127 });
        setFailureRisk('Low');
      },
      () => {
        // Step 2: Anomaly detected
        setMetrics({ systemHealth: 92.3, activeAlerts: 3, preventedIncidents: 127 });
        setFailureRisk('High');
      },
      () => {
        // Step 3: Auto-prevention
        setMetrics({ systemHealth: 99.2, activeAlerts: 0, preventedIncidents: 128 });
        setFailureRisk('Low');
      }
    ];

    const timer = setTimeout(() => {
      if (currentStep < steps.length) {
        steps[currentStep]();
        setCurrentStep(prev => prev + 1);
      } else {
        setIsPlaying(false);
        setCurrentStep(0);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isPlaying, currentStep]);

  return (
    <section className="demo-section py-20 relative bg-black/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <RevealAnimation direction="up" className="text-center mb-12">
            <GlassBadge variant="quantum" floating>
              <ActivityIcon className="w-4 h-4 mr-2" />
              Live Demo
            </GlassBadge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-4">
              Watch AI Prevent a <span className="text-gradient-quantum">System Failure</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              See how Asynova detects and prevents failures before they impact your operations
            </p>
          </RevealAnimation>
          
          {/* Demo Container */}
          <HoverCard effect="quantum">
            <GlassCard gradient className="overflow-hidden">
              {/* Control Bar */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <GlassButton
                    variant="quantum"
                    onClick={() => {
                      setIsPlaying(true);
                      setCurrentStep(0);
                    }}
                    disabled={isPlaying}
                    glow
                  >
                    <PlayIcon className="w-5 h-5 mr-2" />
                    Run Demo
                  </GlassButton>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-white/60">Status:</span>
                    <GlassBadge 
                      variant={failureRisk === 'High' ? 'error' : 'success'}
                      pulse={failureRisk === 'High'}
                    >
                      {failureRisk === 'High' ? (
                        <>
                          <AlertCircleIcon className="w-4 h-4 mr-1" />
                          Risk Detected
                        </>
                      ) : (
                        <>
                          <ShieldCheckIcon className="w-4 h-4 mr-1" />
                          System Stable
                        </>
                      )}
                    </GlassBadge>
                  </div>
                </div>
              </div>
              
              {/* Main Demo Display */}
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Visualization */}
                <div className="relative h-80 bg-black/30 rounded-lg overflow-hidden">
                  <ThreeDScene>
                    <NeuralNetworkVisualization 
                      nodes={20} 
                      connections={30}
                      animated={isPlaying}
                      color={failureRisk === 'High' ? '#ff0080' : '#00d4ff'}
                    />
                  </ThreeDScene>
                  
                  {/* Overlay Label */}
                  <div className="absolute top-4 left-4">
                    <span className="text-white/60 text-sm">AI Neural Activity</span>
                  </div>
                </div>
                
                {/* Metrics Panel */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Real-Time Metrics
                  </h3>
                  
                  {/* System Health */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/70">System Health</span>
                      <span className="text-xl font-bold text-quantum-green">
                        <QuantumNumber value={metrics.systemHealth} suffix="%" decimals={1} />
                      </span>
                    </div>
                    <GlassProgress 
                      value={metrics.systemHealth} 
                      variant={metrics.systemHealth > 95 ? "success" : "warning"} 
                      animated 
                    />
                  </div>
                  
                  {/* Active Alerts */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Active Alerts</span>
                      <motion.span
                        className={`text-xl font-bold ${
                          metrics.activeAlerts > 0 ? 'text-red-400' : 'text-green-400'
                        }`}
                        animate={metrics.activeAlerts > 0 ? {
                          scale: [1, 1.2, 1],
                        } : {}}
                      >
                        {metrics.activeAlerts}
                      </motion.span>
                    </div>
                  </div>
                  
                  {/* Prevented Incidents */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Prevented Incidents</span>
                      <span className="text-xl font-bold text-quantum-blue">
                        <QuantumNumber value={metrics.preventedIncidents} />
                      </span>
                    </div>
                  </div>
                  
                  {/* Demo Progress */}
                  {isPlaying && (
                    <div className="pt-4">
                      <div className="flex justify-between text-sm text-white/60 mb-2">
                        <span>Demo Progress</span>
                        <span>{currentStep}/3</span>
                      </div>
                      <GlassProgress 
                        value={(currentStep / 3) * 100} 
                        variant="quantum" 
                        animated 
                      />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Bottom Message */}
              <div className="p-6 bg-quantum-blue/10 border-t border-white/10">
                <div className="flex items-center justify-center gap-4">
                  <CheckCircleIcon className="w-6 h-6 text-quantum-green" />
                  <p className="text-white/80">
                    This happens <span className="font-semibold text-white">127 times per day</span> across our network, 
                    saving banks millions in prevented downtime.
                  </p>
                </div>
              </div>
            </GlassCard>
          </HoverCard>
          
          {/* CTA */}
          <RevealAnimation direction="up" className="text-center mt-12">
            <GlassButton
              variant="quantum"
              size="lg"
              glow
              pulse
              onClick={() => {
                document.querySelector('input')?.focus();
              }}
            >
              <TrendingUpIcon className="w-5 h-5 mr-2" />
              Get This For Your Bank
            </GlassButton>
          </RevealAnimation>
          
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
