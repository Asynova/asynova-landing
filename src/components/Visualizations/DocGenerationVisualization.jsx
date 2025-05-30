import { motion } from 'framer-motion';

const DocGenerationVisualization = () => {
  // Real-time optimization examples
  const optimizations = [
    { type: "Duplicate Detection", saved: "$1,250/mo", description: "Same credit checks cached" },
    { type: "Token Reduction", saved: "$890/mo", description: "Optimized prompt engineering" },
    { type: "Batch Processing", saved: "$675/mo", description: "Grouped similar requests" },
    { type: "Model Routing", saved: "$485/mo", description: "Cheaper models for simple tasks" },
    { type: "Response Compression", saved: "$340/mo", description: "Reduced output verbosity" },
    { type: "Smart Caching", saved: "$1,100/mo", description: "Intelligent result storage" },
    { type: "Rate Limiting", saved: "$260/mo", description: "Prevented unnecessary calls" },
    { type: "Error Handling", saved: "$150/mo", description: "Avoided retry storms" }
  ];

  const totalSaved = optimizations.reduce((sum, opt) => sum + parseInt(opt.saved.replace(/[^0-9]/g, '')), 0);

  return (
    <div className="relative bg-navy/70 border border-teal/20 rounded-lg p-4 md:p-6">
      <div className="flex justify-between items-center mb-4 md:mb-6 flex-wrap">
        <h3 className="text-base md:text-lg font-medium">Real-Time Cost Optimization Engine</h3>
        <div className="bg-teal/20 text-teal text-xs px-3 py-1 rounded-full">
          Live Savings Tracker
        </div>
      </div>
      
      {/* Mobile view - simplified */}
      <div className="md:hidden space-y-4">
        <div className="bg-navy/50 p-3 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm font-medium text-teal">Active Optimizations</div>
            <div className="text-xs text-gray-400">This Month</div>
          </div>
          
          <div className="space-y-2">
            {/* Show top 4 optimizations on mobile */}
            {optimizations.slice(0, 4).map((opt, index) => (
              <motion.div
                key={opt.type}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between bg-navy/70 p-2 rounded"
              >
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-teal mr-2"></div>
                  <div>
                    <div className="text-xs text-gray-300">{opt.type}</div>
                    <div className="text-xs text-gray-500">{opt.description}</div>
                  </div>
                </div>
                <div className="text-sm text-teal font-semibold">{opt.saved}</div>
              </motion.div>
            ))}
            <div className="text-xs text-gray-400 italic px-2">+ 4 more optimizations</div>
          </div>
        </div>
        
        <div className="bg-teal/10 border border-teal/20 p-3 rounded-lg">
          <div className="text-sm text-gray-300 mb-1">Total Monthly Savings</div>
          <div className="text-2xl font-bold text-teal">${totalSaved.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Annually: ${(totalSaved * 12).toLocaleString()}</div>
        </div>
      </div>
      
      {/* Desktop view */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-6">
          {/* Left side: Optimization Details */}
          <div>
            <div className="bg-navy/50 p-3 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <div className="text-sm font-medium">Active Optimizations</div>
                <div className="text-xs text-gray-400">Real-time</div>
              </div>
              
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {optimizations.map((opt, index) => (
                  <motion.div
                    key={opt.type}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between bg-navy/70 p-2 rounded hover:bg-navy/60 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-teal/20 flex items-center justify-center mr-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-teal"></div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-300">{opt.type}</div>
                        <div className="text-xs text-gray-500">{opt.description}</div>
                      </div>
                    </div>
                    <div className="text-sm text-teal font-semibold">{opt.saved}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side: Savings Dashboard */}
          <div>
            <div className="bg-navy/50 p-3 rounded-lg mb-3">
              <div className="text-sm font-medium mb-3">Savings Breakdown</div>
              
              {/* Savings bar chart */}
              <div className="space-y-2">
                {[
                  { label: "Caching", percent: 35, color: "bg-teal" },
                  { label: "Token Optimization", percent: 25, color: "bg-teal/80" },
                  { label: "Batch Processing", percent: 20, color: "bg-teal/60" },
                  { label: "Smart Routing", percent: 15, color: "bg-teal/40" },
                  { label: "Other", percent: 5, color: "bg-teal/20" }
                ].map((item, index) => (
                  <div key={item.label} className="flex items-center">
                    <div className="text-xs text-gray-400 w-24">{item.label}</div>
                    <div className="flex-1 bg-navy/70 rounded-full h-4 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percent}%` }}
                        transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                        className={`h-full ${item.color} rounded-full`}
                      />
                    </div>
                    <div className="text-xs text-gray-400 ml-2 w-10 text-right">{item.percent}%</div>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-teal/10 border border-teal/20 p-4 rounded-lg text-center"
            >
              <div className="text-sm text-gray-300 mb-1">Total Monthly Savings</div>
              <div className="text-3xl font-bold text-teal">${totalSaved.toLocaleString()}</div>
              <div className="text-sm text-gray-400 mt-1">
                Annual savings: ${(totalSaved * 12).toLocaleString()}
              </div>
              <div className="mt-3 text-xs text-gray-500">
                Based on current usage patterns
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-4 bg-navy/40 p-3 rounded-lg"
        >
          <div className="text-sm font-medium mb-2">How We Optimize</div>
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-navy/70 p-2 rounded text-center">
              <div className="text-teal text-lg font-bold">ML</div>
              <div className="text-xs text-gray-400">Predictive Models</div>
            </div>
            <div className="bg-navy/70 p-2 rounded text-center">
              <div className="text-teal text-lg font-bold">24/7</div>
              <div className="text-xs text-gray-400">Real-time Analysis</div>
            </div>
            <div className="bg-navy/70 p-2 rounded text-center">
              <div className="text-teal text-lg font-bold">Auto</div>
              <div className="text-xs text-gray-400">No Manual Work</div>
            </div>
            <div className="bg-navy/70 p-2 rounded text-center">
              <div className="text-teal text-lg font-bold">API</div>
              <div className="text-xs text-gray-400">Drop-in Replace</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DocGenerationVisualization;