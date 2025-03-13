import { motion } from 'framer-motion';

const BeforeAfterVisualization = () => {
  return (
    <div className="relative w-full">
      <div className="absolute top-2 left-4 bg-teal/20 text-teal px-3 py-1 rounded-full text-xs">
        Implementation Transformation
      </div>
      
      {/* Mobile-optimized visualization - show on small screens */}
      <div className="md:hidden space-y-6 mt-8 pt-4">
        <div className="bg-navy/70 border border-red-400/30 rounded-lg p-4">
          <h3 className="text-sm font-medium flex items-center mb-3">
            <span className="text-red-400 mr-2">⚠️</span> 
            <span>Current Implementation: 9+ Months</span>
          </h3>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-navy/80 p-2 rounded">
              <div className="text-xs text-gray-400">Documentation</div>
              <div className="text-red-400 font-semibold text-sm">200+ Hrs</div>
            </div>
            <div className="bg-navy/80 p-2 rounded">
              <div className="text-xs text-gray-400">Resource Waste</div>
              <div className="text-red-400 font-semibold text-sm">40-60%</div>
            </div>
          </div>
          
          <div className="mt-3 text-xs text-gray-400 border-t border-navy/50 pt-2">
            <div className="flex justify-between mb-1">
              <span>Model Selection</span>
              <span>3+ months</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Documentation</span>
              <span>3+ months</span>
            </div>
            <div className="flex justify-between">
              <span>Integration</span>
              <span>3+ months</span>
            </div>
          </div>
        </div>
        
        <div className="bg-navy/70 border border-teal/30 rounded-lg p-4">
          <h3 className="text-sm font-medium flex items-center mb-3">
            <span className="text-teal mr-2">✓</span> 
            <span>With Asynova: 4-6 Weeks</span>
          </h3>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-navy/80 p-2 rounded">
              <div className="text-xs text-gray-400">Documentation</div>
              <div className="text-teal font-semibold text-sm">Automated</div>
            </div>
            <div className="bg-navy/80 p-2 rounded">
              <div className="text-xs text-gray-400">Cost Savings</div>
              <div className="text-teal font-semibold text-sm">40-60%</div>
            </div>
          </div>
          
          <div className="mt-3 text-xs text-gray-400 border-t border-navy/50 pt-2">
            <div className="flex justify-between mb-1">
              <span>Configure</span>
              <span>1-2 weeks</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Auto-Documentation</span>
              <span>Minutes</span>
            </div>
            <div className="flex justify-between">
              <span>Deploy</span>
              <span>2-3 weeks</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop visualization - hide on mobile */}
      <div className="hidden md:block">
        {/* Before - Complex Implementation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-navy/70 border border-red-400/30 rounded-lg p-6 mb-6"
        >
          <h3 className="text-lg font-medium flex items-center mb-3">
            <span className="text-red-400 mr-2">⚠️</span> 
            <span>Current Implementation: 9+ Months</span>
          </h3>
          
          <div className="space-y-2">
            {/* Timeline visualization */}
            <div className="relative h-16 mb-4">
              <div className="absolute top-7 left-0 right-0 h-2 bg-navy/50 rounded"></div>
              
              {/* Months markers */}
              {[1, 3, 5, 7, 9].map(month => (
                <div key={month} className="absolute top-0" style={{ left: `${(month-1) * 12.5}%` }}>
                  <div className="w-2 h-2 bg-gray-400 rounded-full mx-auto mb-1"></div>
                  <div className="text-xs text-gray-400">Month {month}</div>
                </div>
              ))}
              
              {/* Process stages */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '25%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-7 left-0 h-2 bg-red-400/50 rounded-l"
              >
              </motion.div>
              <div className="absolute top-10 left-0 text-xs text-gray-400">Model Selection</div>
              
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '35%' }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute top-7 left-[25%] h-2 bg-red-400/70 rounded-l"
              >
              </motion.div>
              <div className="absolute top-10 left-[25%] text-xs text-gray-400">Compliance Documentation</div>
              
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '40%' }}
                transition={{ duration: 1, delay: 2.5 }}
                className="absolute top-7 left-[60%] h-2 bg-red-400/90 rounded-r"
              >
              </motion.div>
              <div className="absolute top-10 left-[60%] text-xs text-gray-400">Integration & Testing</div>
            </div>
            
            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="bg-navy/80 p-2 rounded">
                <div className="text-xs text-gray-400">Documentation</div>
                <div className="text-red-400 font-semibold">200+ Hours</div>
              </div>
              <div className="bg-navy/80 p-2 rounded">
                <div className="text-xs text-gray-400">Resource Waste</div>
                <div className="text-red-400 font-semibold">40-60%</div>
              </div>
              <div className="bg-navy/80 p-2 rounded">
                <div className="text-xs text-gray-400">Compliance Risk</div>
                <div className="text-red-400 font-semibold">High</div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* After - Simplified Implementation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.5 }}
          className="bg-navy/70 border border-teal/30 rounded-lg p-6"
        >
          <h3 className="text-lg font-medium flex items-center mb-3">
            <span className="text-teal mr-2">✓</span> 
            <span>With Asynova: 4-6 Weeks</span>
          </h3>
          
          <div className="space-y-2">
            {/* Timeline visualization */}
            <div className="relative h-16 mb-4">
              <div className="absolute top-7 left-0 right-0 h-2 bg-navy/50 rounded"></div>
              
              {/* Week markers */}
              {[1, 2, 3, 4, 5, 6].map(week => (
                <div key={week} className="absolute top-0" style={{ left: `${(week-1) * 20}%` }}>
                  <div className="w-2 h-2 bg-gray-400 rounded-full mx-auto mb-1"></div>
                  <div className="text-xs text-gray-400">Week {week}</div>
                </div>
              ))}
              
              {/* Process stages */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, delay: 4 }}
                className="absolute top-7 left-0 h-2 bg-gradient-to-r from-teal/60 via-teal/80 to-teal rounded"
              >
              </motion.div>
              <div className="absolute top-10 left-0 text-xs text-gray-400">Configure</div>
              <div className="absolute top-10 left-[40%] text-xs text-gray-400">Auto-Documentation</div>
              <div className="absolute top-10 left-[80%] text-xs text-gray-400">Deploy</div>
            </div>
            
            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="bg-navy/80 p-2 rounded">
                <div className="text-xs text-gray-400">Documentation</div>
                <div className="text-teal font-semibold">Auto-Generated</div>
              </div>
              <div className="bg-navy/80 p-2 rounded">
                <div className="text-xs text-gray-400">Resource Optimization</div>
                <div className="text-teal font-semibold">Built-in</div>
              </div>
              <div className="bg-navy/80 p-2 rounded">
                <div className="text-xs text-gray-400">Compliance Confidence</div>
                <div className="text-teal font-semibold">High</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BeforeAfterVisualization;