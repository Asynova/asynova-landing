/**
 * Interactive Demo Section
 * Live demonstration that makes visitors say "How is this possible?"
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlayIcon, PauseIcon, RefreshCwIcon, ExpandIcon,
  AlertCircleIcon, CheckCircleIcon,
  ActivityIcon, BrainIcon, ShieldCheckIcon,
  GitBranchIcon, SparklesIcon
} from 'lucide-react';
import { 
  GlassCard, GlassPanel, GlassButton, GlassBadge,
  GlassProgress, GlassInput
} from '../../design-system/GlassComponents';
import { 
  StaggerContainer, RevealAnimation, HoverCard,
  QuantumNumber
} from '../../design-system/AnimationComponents';
import { 
  ThreeDScene, NeuralNetworkVisualization
} from '../../design-system/ThreeDVisualization';
import { theme } from '../../design-system/theme';

interface DemoStep {
  id: string;
  title: string;
  description: string;
  duration: number;
  action: () => void;
}

export const DemoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [demoProgress, setDemoProgress] = useState(0);
  const [selectedBank, setSelectedBank] = useState('');
  
  // Simulated real-time data
  const [metrics, setMetrics] = useState({
    transactionsPerSecond: 1250,
    systemHealth: 98.5,
    costSavings: 42.3,
    activeAlerts: 0,
    cpuUsage: 45,
    memoryUsage: 62,
    apiLatency: 85,
    errorRate: 0.02
  });

  const [predictions, setPredictions] = useState({
    failureRisk: 'Low',
    estimatedDowntime: 0,
    preventedIncidents: 127,
    nextMaintenance: '3 days'
  });

  // Demo steps
  const demoSteps: DemoStep[] = useMemo(() => [
    {
      id: 'connect',
      title: 'Connect Banking System',
      description: 'Asynova connects to your core banking system in real-time',
      duration: 3000,
      action: () => {
        setMetrics(prev => ({ ...prev, systemHealth: 99.2 }));
      }
    },
    {
      id: 'analyze',
      title: 'AI Analysis Begins',
      description: 'Our AI analyzes millions of data points per second',
      duration: 4000,
      action: () => {
        setMetrics(prev => ({ 
          ...prev, 
          transactionsPerSecond: 2850,
          cpuUsage: 78
        }));
      }
    },
    {
      id: 'predict',
      title: 'Predict System Failure',
      description: 'AI detects anomaly pattern indicating potential failure',
      duration: 3000,
      action: () => {
        setPredictions(prev => ({
          ...prev,
          failureRisk: 'High',
          estimatedDowntime: 4
        }));
        setMetrics(prev => ({ ...prev, activeAlerts: 3 }));
      }
    },
    {
      id: 'prevent',
      title: 'Automatic Prevention',
      description: 'System automatically scales resources and reroutes traffic',
      duration: 4000,
      action: () => {
        setPredictions(prev => ({
          ...prev,
          failureRisk: 'Low',
          preventedIncidents: 128
        }));
        setMetrics(prev => ({ 
          ...prev, 
          activeAlerts: 0,
          cpuUsage: 52
        }));
      }
    },
    {
      id: 'optimize',
      title: 'Cost Optimization',
      description: 'AI optimizes resource allocation, reducing costs',
      duration: 3000,
      action: () => {
        setMetrics(prev => ({ 
          ...prev, 
          costSavings: 47.8,
          memoryUsage: 48
        }));
      }
    }
  ], []);

  // Auto-play demo
  useEffect(() => {
    if (!isPlaying) return;

    const currentStepData = demoSteps[currentStep];
    const timer = setTimeout(() => {
      currentStepData.action();
      
      if (currentStep < demoSteps.length - 1) {
        setCurrentStep(prev => prev + 1);
        setDemoProgress(((currentStep + 1) / demoSteps.length) * 100);
      } else {
        setIsPlaying(false);
        setCurrentStep(0);
        setDemoProgress(100);
      }
    }, currentStepData.duration);

    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, demoSteps]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        transactionsPerSecond: prev.transactionsPerSecond + (Math.random() - 0.5) * 100,
        apiLatency: Math.max(20, Math.min(150, prev.apiLatency + (Math.random() - 0.5) * 10)),
        errorRate: Math.max(0, Math.min(1, prev.errorRate + (Math.random() - 0.5) * 0.01))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleStartDemo = () => {
    setIsPlaying(true);
    setCurrentStep(0);
    setDemoProgress(0);
  };

  const handleResetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setDemoProgress(0);
    setMetrics({
      transactionsPerSecond: 1250,
      systemHealth: 98.5,
      costSavings: 42.3,
      activeAlerts: 0,
      cpuUsage: 45,
      memoryUsage: 62,
      apiLatency: 85,
      errorRate: 0.02
    });
    setPredictions({
      failureRisk: 'Low',
      estimatedDowntime: 0,
      preventedIncidents: 127,
      nextMaintenance: '3 days'
    });
  };

  return (
    <section className="demo-section py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <StaggerContainer className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <RevealAnimation direction="up" className="text-center mb-16">
            <GlassBadge variant="quantum" floating>
              <SparklesIcon className="w-4 h-4 mr-2" />
              Live Demonstration
            </GlassBadge>
            <h2 className="text-5xl md:text-7xl font-bold text-white mt-6 mb-6">
              See the <span className="text-gradient-quantum">Magic</span> Happen
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Watch how Asynova predicts and prevents a bank system failure in real-time
            </p>
          </RevealAnimation>
          
          {/* Demo Container */}
          <HoverCard effect="quantum" className="max-w-6xl mx-auto">
            <GlassCard gradient className="overflow-hidden">
              
              {/* Demo Controls */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <GlassButton
                      variant="quantum"
                      onClick={isPlaying ? () => setIsPlaying(false) : handleStartDemo}
                      glow
                      disabled={demoProgress === 100 && !isPlaying}
                    >
                      {isPlaying ? (
                        <>
                          <PauseIcon className="w-5 h-5 mr-2" />
                          Pause Demo
                        </>
                      ) : (
                        <>
                          <PlayIcon className="w-5 h-5 mr-2" />
                          Start Demo
                        </>
                      )}
                    </GlassButton>
                    
                    <GlassButton
                      variant="secondary"
                      onClick={handleResetDemo}
                      disabled={isPlaying}
                    >
                      <RefreshCwIcon className="w-5 h-5 mr-2" />
                      Reset
                    </GlassButton>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <GlassInput
                      placeholder="Select your bank..."
                      value={selectedBank}
                      onChange={(e) => setSelectedBank((e.target as HTMLInputElement).value)}
                      className="w-48"
                    />
                    
                    <GlassButton
                      variant="secondary"
                      onClick={() => console.log('Fullscreen demo coming soon!')}
                    >
                      <ExpandIcon className="w-5 h-5" />
                    </GlassButton>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4">
                  <GlassProgress 
                    value={demoProgress} 
                    variant="quantum" 
                    animated 
                    particles
                  />
                </div>
              </div>
              
              {/* Demo Steps Timeline */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between overflow-x-auto pb-2">
                  {demoSteps.map((step, index) => (
                    <div 
                      key={step.id}
                      className={`flex items-center ${index < demoSteps.length - 1 ? 'flex-1' : ''}`}
                    >
                      <div className="flex flex-col items-center">
                        <motion.div
                          animate={{
                            scale: currentStep === index ? 1.2 : 1,
                            backgroundColor: currentStep >= index 
                              ? theme.colors.quantum.blue 
                              : 'rgba(255, 255, 255, 0.1)'
                          }}
                          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                        >
                          {currentStep > index ? (
                            <CheckCircleIcon className="w-6 h-6" />
                          ) : (
                            index + 1
                          )}
                        </motion.div>
                        <span className="text-xs text-white/60 mt-2 whitespace-nowrap">
                          {step.title}
                        </span>
                      </div>
                      {index < demoSteps.length - 1 && (
                        <div className="flex-1 h-0.5 bg-white/10 mx-2 mt-5">
                          <motion.div
                            className="h-full bg-quantum-blue"
                            initial={{ width: '0%' }}
                            animate={{ 
                              width: currentStep > index ? '100%' : '0%' 
                            }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Main Demo Display */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                
                {/* Left Panel - System Metrics */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    System Metrics
                  </h3>
                  
                  <GlassPanel variant="quantum" className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/70">TPS</span>
                      <span className="text-xl font-bold text-quantum-blue">
                        <QuantumNumber value={metrics.transactionsPerSecond} />
                      </span>
                    </div>
                    <GlassProgress value={metrics.transactionsPerSecond / 3000 * 100} variant="primary" />
                  </GlassPanel>
                  
                  <GlassPanel variant="quantum" className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/70">System Health</span>
                      <span className="text-xl font-bold text-quantum-green">
                        <QuantumNumber value={metrics.systemHealth} suffix="%" decimals={1} />
                      </span>
                    </div>
                    <GlassProgress value={metrics.systemHealth} variant="success" />
                  </GlassPanel>
                  
                  <GlassPanel variant="quantum" className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/70">Cost Savings</span>
                      <span className="text-xl font-bold text-quantum-purple">
                        <QuantumNumber value={metrics.costSavings} suffix="%" decimals={1} />
                      </span>
                    </div>
                    <GlassProgress value={metrics.costSavings} variant="quantum" />
                  </GlassPanel>
                  
                  <GlassPanel variant="quantum" className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Active Alerts</span>
                      <GlassBadge 
                        variant={metrics.activeAlerts > 0 ? "error" : "success"}
                        pulse={metrics.activeAlerts > 0}
                      >
                        {metrics.activeAlerts}
                      </GlassBadge>
                    </div>
                  </GlassPanel>
                </div>
                
                {/* Center Panel - 3D Visualization */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    AI Neural Activity
                  </h3>
                  <GlassPanel variant="quantum" className="h-96 relative overflow-hidden">
                    <ThreeDScene>
                      <NeuralNetworkVisualization 
                        nodes={20} 
                        connections={30}
                        animated={isPlaying}
                        color={predictions.failureRisk === 'High' ? '#ff0080' : '#00d4ff'}
                      />
                    </ThreeDScene>
                    
                    {/* Overlay Status */}
                    <div className="absolute top-4 left-4">
                      <GlassBadge 
                        variant={predictions.failureRisk === 'High' ? 'error' : 'success'}
                        floating
                      >
                        {predictions.failureRisk === 'High' ? (
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
                  </GlassPanel>
                </div>
                
                {/* Right Panel - AI Predictions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    AI Predictions
                  </h3>
                  
                  <GlassPanel 
                    variant="quantum" 
                    className="p-4"
                    glow={predictions.failureRisk === 'High'}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white/70">Failure Risk</span>
                      <span className={`text-xl font-bold ${
                        predictions.failureRisk === 'High' 
                          ? 'text-red-500' 
                          : 'text-green-500'
                      }`}>
                        {predictions.failureRisk}
                      </span>
                    </div>
                    {predictions.failureRisk === 'High' && (
                      <div className="text-sm text-white/60">
                        Estimated downtime: {predictions.estimatedDowntime} hours
                      </div>
                    )}
                  </GlassPanel>
                  
                  <GlassPanel variant="quantum" className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Prevented Incidents</span>
                      <span className="text-xl font-bold text-quantum-blue">
                        <QuantumNumber value={predictions.preventedIncidents} />
                      </span>
                    </div>
                  </GlassPanel>
                  
                  <GlassPanel variant="quantum" className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">Next Maintenance</span>
                      <span className="text-white font-medium">
                        {predictions.nextMaintenance}
                      </span>
                    </div>
                  </GlassPanel>
                  
                  <GlassPanel variant="quantum" className="p-4">
                    <div className="space-y-3">
                      <div className="text-white/70 text-sm">Resource Usage</div>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>CPU</span>
                            <span>{metrics.cpuUsage}%</span>
                          </div>
                          <GlassProgress value={metrics.cpuUsage} variant="primary" />
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Memory</span>
                            <span>{metrics.memoryUsage}%</span>
                          </div>
                          <GlassProgress value={metrics.memoryUsage} variant="primary" />
                        </div>
                      </div>
                    </div>
                  </GlassPanel>
                </div>
              </div>
              
              {/* Current Step Description */}
              <AnimatePresence mode="wait">
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="p-6 bg-quantum-blue/10 border-t border-white/10"
                  >
                    <div className="flex items-center gap-4">
                      <BrainIcon className="w-6 h-6 text-quantum-blue animate-pulse" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {demoSteps[currentStep].title}
                        </h4>
                        <p className="text-white/70">
                          {demoSteps[currentStep].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </GlassCard>
          </HoverCard>
          
          {/* Call to Action */}
          <RevealAnimation direction="up" className="text-center mt-12">
            <p className="text-xl text-white/70 mb-6">
              Impressed? This is just a glimpse of what Asynova can do.
            </p>
            <div className="flex gap-4 justify-center">
              <GlassButton
                variant="quantum"
                size="lg"
                glow
                pulse
              >
                <ActivityIcon className="w-5 h-5 mr-2" />
                Get Full Demo
              </GlassButton>
              <GlassButton
                variant="secondary"
                size="lg"
              >
                <GitBranchIcon className="w-5 h-5 mr-2" />
                Technical Details
              </GlassButton>
            </div>
          </RevealAnimation>
          
        </StaggerContainer>
      </div>
    </section>
  );
};

export default DemoSection;
