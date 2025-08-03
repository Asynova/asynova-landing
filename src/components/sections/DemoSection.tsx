/**
 * Interactive Demo Section - Multi-Agent AI Platform
 * Live demonstration of workflow building and cost optimization
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlayIcon, PauseIcon, RefreshCwIcon, ExpandIcon,
  CheckCircleIcon, ZapIcon,
  BrainIcon, CodeIcon,
  GitBranchIcon, SparklesIcon, LayersIcon
} from 'lucide-react';
import { 
  GlassCard, GlassPanel, GlassButton, GlassBadge,
  GlassProgress
} from '../../design-system/GlassComponents';
import { 
  StaggerContainer, RevealAnimation, HoverCard,
  QuantumNumber
} from '../../design-system/AnimationComponents';
// Theme imports removed - not used

interface DemoStep {
  id: string;
  title: string;
  description: string;
  duration: number;
  action: () => void;
}

interface Agent {
  id: string;
  name: string;
  type: string;
  model: string;
  status: 'idle' | 'running' | 'complete';
  cost: number;
}

export const DemoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [demoProgress, setDemoProgress] = useState(0);
  const [workflowType, setWorkflowType] = useState('blog-generator');
  
  // Simulated workflow agents
  const [agents, setAgents] = useState<Agent[]>([
    { id: '1', name: 'Research Agent', type: 'researcher', model: 'gemini-flash', status: 'idle', cost: 0 },
    { id: '2', name: 'Writing Agent', type: 'writer', model: 'claude-3-sonnet', status: 'idle', cost: 0 },
    { id: '3', name: 'Editor Agent', type: 'editor', model: 'gpt-4', status: 'idle', cost: 0 },
    { id: '4', name: 'SEO Agent', type: 'optimizer', model: 'gemini-flash', status: 'idle', cost: 0 }
  ]);

  // Cost metrics
  const [metrics, setMetrics] = useState({
    totalCost: 0,
    savedAmount: 0,
    optimizationRate: 0,
    apiCalls: 0,
    cacheHits: 0,
    executionTime: 0,
    tokensProcessed: 0
  });

  // Demo steps
  const demoSteps: DemoStep[] = useMemo(() => [
    {
      id: 'build',
      title: 'Build Workflow',
      description: 'Drag and drop agents to create your AI workflow',
      duration: 3000,
      action: () => {
        setAgents(prev => prev.map(agent => ({ ...agent, status: 'idle' })));
      }
    },
    {
      id: 'optimize',
      title: 'Optimization Analysis',
      description: 'AI analyzes the workflow for cost optimization opportunities',
      duration: 3000,
      action: () => {
        setMetrics(prev => ({ 
          ...prev, 
          optimizationRate: 62
        }));
      }
    },
    {
      id: 'execute-research',
      title: 'Execute Research',
      description: 'Research agent gathers information with smart caching',
      duration: 4000,
      action: () => {
        setAgents(prev => prev.map(agent => 
          agent.id === '1' ? { ...agent, status: 'running', cost: 0.012 } : agent
        ));
        setMetrics(prev => ({ 
          ...prev, 
          apiCalls: prev.apiCalls + 3,
          cacheHits: prev.cacheHits + 2,
          tokensProcessed: prev.tokensProcessed + 1500,
          totalCost: 0.012,
          savedAmount: 0.018
        }));
      }
    },
    {
      id: 'execute-write',
      title: 'Generate Content',
      description: 'Writing agent creates content using optimized model',
      duration: 4000,
      action: () => {
        setAgents(prev => prev.map(agent => {
          if (agent.id === '1') return { ...agent, status: 'complete' };
          if (agent.id === '2') return { ...agent, status: 'running', cost: 0.025 };
          return agent;
        }));
        setMetrics(prev => ({ 
          ...prev, 
          apiCalls: prev.apiCalls + 1,
          tokensProcessed: prev.tokensProcessed + 3000,
          totalCost: 0.037,
          savedAmount: 0.043
        }));
      }
    },
    {
      id: 'execute-edit',
      title: 'Edit & Polish',
      description: 'Editor agent refines content with cached context',
      duration: 3000,
      action: () => {
        setAgents(prev => prev.map(agent => {
          if (agent.id === '2') return { ...agent, status: 'complete' };
          if (agent.id === '3') return { ...agent, status: 'running', cost: 0.018 };
          return agent;
        }));
        setMetrics(prev => ({ 
          ...prev, 
          apiCalls: prev.apiCalls + 1,
          cacheHits: prev.cacheHits + 1,
          tokensProcessed: prev.tokensProcessed + 2000,
          totalCost: 0.055,
          savedAmount: 0.075,
          executionTime: 12
        }));
      }
    },
    {
      id: 'complete',
      title: 'Workflow Complete',
      description: 'All agents finished - 60% cost savings achieved!',
      duration: 2000,
      action: () => {
        setAgents(prev => prev.map(agent => ({ ...agent, status: 'complete' })));
        setMetrics(prev => ({ 
          ...prev, 
          optimizationRate: 58
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
        setDemoProgress(100);
      }
    }, currentStepData.duration);

    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, demoSteps]);

  const handleStartDemo = () => {
    handleResetDemo();
    setIsPlaying(true);
  };

  const handleResetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setDemoProgress(0);
    setAgents(prev => prev.map(agent => ({ ...agent, status: 'idle', cost: 0 })));
    setMetrics({
      totalCost: 0,
      savedAmount: 0,
      optimizationRate: 0,
      apiCalls: 0,
      cacheHits: 0,
      executionTime: 0,
      tokensProcessed: 0
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
              Build & Optimize <span className="text-gradient-quantum">AI Workflows</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Watch how Asynova orchestrates multiple AI agents while cutting costs by 60%
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
                    <select
                      value={workflowType}
                      onChange={(e) => setWorkflowType(e.target.value)}
                      className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                      disabled={isPlaying}
                    >
                      <option value="blog-generator">Blog Post Generator</option>
                      <option value="code-reviewer">Code Review Pipeline</option>
                      <option value="data-analyzer">Data Analysis Workflow</option>
                    </select>
                    
                    <GlassButton
                      variant="secondary"
                      onClick={() => console.log('Fullscreen demo')}
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
              
              {/* Main Demo Display */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                
                {/* Left Panel - Workflow Builder */}
                <div className="lg:col-span-2 space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    AI Agent Workflow
                  </h3>
                  
                  <GlassPanel variant="quantum" className="p-6 min-h-[400px]">
                    {/* Agent Flow Visualization */}
                    <div className="flex items-center justify-between space-x-4">
                      {agents.map((agent, index) => (
                        <React.Fragment key={agent.id}>
                          <motion.div
                            animate={{
                              scale: agent.status === 'running' ? 1.1 : 1,
                              opacity: agent.status === 'idle' ? 0.6 : 1
                            }}
                            className="flex-1"
                          >
                            <GlassCard
                              className={`p-4 text-center ${
                                agent.status === 'running' ? 'border-quantum-blue' : 
                                agent.status === 'complete' ? 'border-quantum-green' : ''
                              }`}
                              glow={agent.status === 'running'}
                            >
                              <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-white/10 flex items-center justify-center">
                                <BrainIcon className={`w-6 h-6 ${
                                  agent.status === 'running' ? 'text-quantum-blue animate-pulse' :
                                  agent.status === 'complete' ? 'text-quantum-green' :
                                  'text-white/50'
                                }`} />
                              </div>
                              <h4 className="text-sm font-medium text-white mb-1">
                                {agent.name}
                              </h4>
                              <p className="text-xs text-white/60 mb-2">
                                {agent.model}
                              </p>
                              {agent.cost > 0 && (
                                <div className="text-xs text-quantum-green">
                                  ${agent.cost.toFixed(3)}
                                </div>
                              )}
                              {agent.status === 'running' && (
                                <div className="mt-2">
                                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                      className="h-full bg-quantum-blue"
                                      initial={{ width: '0%' }}
                                      animate={{ width: '100%' }}
                                      transition={{ duration: 3 }}
                                    />
                                  </div>
                                </div>
                              )}
                              {agent.status === 'complete' && (
                                <CheckCircleIcon className="w-5 h-5 text-quantum-green mx-auto mt-2" />
                              )}
                            </GlassCard>
                          </motion.div>
                          {index < agents.length - 1 && (
                            <motion.div
                              animate={{
                                opacity: agents[index].status === 'complete' ? 1 : 0.3
                              }}
                              className="w-8"
                            >
                              <svg className="w-full h-2">
                                <line
                                  x1="0"
                                  y1="4"
                                  x2="32"
                                  y2="4"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  className="text-white/30"
                                />
                                <motion.line
                                  x1="0"
                                  y1="4"
                                  x2="32"
                                  y2="4"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  className="text-quantum-blue"
                                  initial={{ pathLength: 0 }}
                                  animate={{ 
                                    pathLength: agents[index].status === 'complete' ? 1 : 0 
                                  }}
                                  transition={{ duration: 0.5 }}
                                />
                              </svg>
                            </motion.div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                    
                    {/* Code Preview */}
                    <div className="mt-8 p-4 bg-black/30 rounded-lg">
                      <pre className="text-xs text-quantum-blue/80 font-mono">
{`const workflow = await asynova.createWorkflow({
  name: "${workflowType}",
  agents: [
    { type: "researcher", model: "gemini-flash" },
    { type: "writer", model: "claude-3-sonnet" },
    { type: "editor", model: "gpt-4" }
  ],
  optimization: {
    enableCaching: true,
    smartModelSelection: true,
    targetCostReduction: 0.6
  }
});`}
                      </pre>
                    </div>
                  </GlassPanel>
                </div>
                
                {/* Right Panel - Metrics */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    Real-Time Metrics
                  </h3>
                  
                  {/* Cost Optimization */}
                  <GlassPanel variant="quantum" className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white/70">Total Cost</span>
                      <span className="text-xl font-bold text-white">
                        $<QuantumNumber value={metrics.totalCost} decimals={3} />
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white/70">Amount Saved</span>
                      <span className="text-xl font-bold text-quantum-green">
                        $<QuantumNumber value={metrics.savedAmount} decimals={3} />
                      </span>
                    </div>
                    <div className="mt-4 p-3 bg-quantum-green/10 rounded-lg">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-quantum-green">
                          <QuantumNumber value={metrics.optimizationRate} suffix="%" />
                        </div>
                        <div className="text-xs text-white/60 mt-1">Cost Reduction</div>
                      </div>
                    </div>
                  </GlassPanel>
                  
                  {/* API Metrics */}
                  <GlassPanel variant="quantum" className="p-4">
                    <h4 className="text-sm font-medium text-white mb-3">API Usage</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">API Calls</span>
                        <span className="text-white">
                          <QuantumNumber value={metrics.apiCalls} />
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">Cache Hits</span>
                        <span className="text-quantum-blue">
                          <QuantumNumber value={metrics.cacheHits} />
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">Tokens</span>
                        <span className="text-white">
                          <QuantumNumber value={metrics.tokensProcessed} />
                        </span>
                      </div>
                    </div>
                  </GlassPanel>
                  
                  {/* Optimization Techniques */}
                  <GlassPanel variant="quantum" className="p-4">
                    <h4 className="text-sm font-medium text-white mb-3">
                      Active Optimizations
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          currentStep >= 2 ? 'bg-quantum-green' : 'bg-white/20'
                        }`} />
                        <span className="text-xs text-white/70">Semantic Caching</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          currentStep >= 3 ? 'bg-quantum-green' : 'bg-white/20'
                        }`} />
                        <span className="text-xs text-white/70">Smart Model Selection</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          currentStep >= 2 ? 'bg-quantum-green' : 'bg-white/20'
                        }`} />
                        <span className="text-xs text-white/70">Request Batching</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          currentStep >= 4 ? 'bg-quantum-green' : 'bg-white/20'
                        }`} />
                        <span className="text-xs text-white/70">Context Reuse</span>
                      </div>
                    </div>
                  </GlassPanel>
                  
                  {/* Execution Time */}
                  {metrics.executionTime > 0 && (
                    <GlassPanel variant="quantum" className="p-4">
                      <div className="text-center">
                        <ZapIcon className="w-8 h-8 text-quantum-purple mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white">
                          <QuantumNumber value={metrics.executionTime} suffix="s" />
                        </div>
                        <div className="text-xs text-white/60">Total Execution Time</div>
                      </div>
                    </GlassPanel>
                  )}
                </div>
              </div>
              
              {/* Current Step Description */}
              <AnimatePresence mode="wait">
                {isPlaying && currentStep < demoSteps.length && (
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="p-6 bg-quantum-blue/10 border-t border-white/10"
                  >
                    <div className="flex items-center gap-4">
                      <LayersIcon className="w-6 h-6 text-quantum-blue animate-pulse" />
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
              Ready to cut your AI costs and build powerful workflows?
            </p>
            <div className="flex gap-4 justify-center">
              <GlassButton
                variant="quantum"
                size="lg"
                glow
                pulse
              >
                <CodeIcon className="w-5 h-5 mr-2" />
                Try It Yourself
              </GlassButton>
              <GlassButton
                variant="secondary"
                size="lg"
              >
                <GitBranchIcon className="w-5 h-5 mr-2" />
                View Source Code
              </GlassButton>
            </div>
          </RevealAnimation>
          
        </StaggerContainer>
      </div>
    </section>
  );
};

export default DemoSection;
