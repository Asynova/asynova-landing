import { motion } from 'framer-motion';

const BeforeAfterVisualization = () => {
  return (
    <div className="relative w-full">
      <div className="absolute top-2 left-4 bg-teal/20 text-teal px-3 py-1 rounded-full text-xs">
        Live Cost Breakdown
      </div>
      
      {/* Mobile-optimized visualization */}
      <div className="md:hidden space-y-6 mt-8 pt-4">
        <div className="bg-navy/70 border border-red-400/30 rounded-lg p-4">
          <h3 className="text-sm font-medium flex items-center mb-3">
            <span className="text-red-400 mr-2">💸</span> 
            <span>Without Asynova</span>
          </h3>
          
          <div className="space-y-2">
            <div className="bg-navy/80 p-2 rounded">
              <div className="text-xs text-gray-400">Monthly AI Spend</div>
              <div className="text-red-400 font-bold text-xl">$5,000</div>
            </div>
            <div className="bg-navy/80 p-2 rounded">
              <div className="text-xs text-gray-400">Wasted on Duplicates</div>
              <div className="text-red-400 font-semibold">$1,500/mo</div>
            </div>
            <div className="bg-navy/80 p-2 rounded">
              <div className="text-xs text-gray-400">Unoptimized Tokens</div>
              <div className="text-red-400 font-semibold">$1,000/mo</div>
            </div>
          </div>
        </div>
        
        <div className="bg-navy/70 border border-teal/30 rounded-lg p-4">
          <h3 className="text-sm font-medium flex items-center mb-3">
            <span className="text-teal mr-2">✓</span> 
            <span>With Asynova</span>
          </h3>
          
          <div className="space-y-2">
            <div className="bg-navy/80 p-2 rounded">
              <div className="text-xs text-gray-400">New Monthly Spend</div>
              <div className="text-teal font-bold text-xl">$2,500</div>
            </div>
            <div className="bg-navy/80 p-2 rounded">
              <div className="text-xs text-gray-400">Monthly Savings</div>
              <div className="text-teal font-semibold">$2,500/mo</div>
            </div>
            <div className="bg-navy/80 p-2 rounded">
              <div className="text-xs text-gray-400">Annual Savings</div>
              <div className="text-teal font-semibold">$30,000/yr</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop visualization */}
      <div className="hidden md:grid md:grid-cols-2 gap-6 mt-8">
        {/* Before - High Costs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-navy/70 border border-red-400/30 rounded-lg p-6"
        >
          <h3 className="text-lg font-medium flex items-center mb-4">
            <span className="text-red-400 mr-2">💸</span> 
            <span>Without Asynova</span>
          </h3>
          
          <div className="space-y-4">
            {/* Cost breakdown */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Base AI API Costs</span>
                <span className="text-red-400 font-semibold">$3,000</span>
              </div>
              <div className="w-full bg-navy/50 rounded h-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '60%' }}
                  transition={{ duration: 1 }}
                  className="h-full bg-red-400/70 rounded"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Duplicate Requests</span>
                <span className="text-red-400 font-semibold">$1,500</span>
              </div>
              <div className="w-full bg-navy/50 rounded h-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '30%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-red-400/70 rounded"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Inefficient Prompts</span>
                <span className="text-red-400 font-semibold">$500</span>
              </div>
              <div className="w-full bg-navy/50 rounded h-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '10%' }}
                  transition={{ duration: 1, delay: 1 }}
                  className="h-full bg-red-400/70 rounded"
                />
              </div>
            </div>
            
            <div className="pt-4 border-t border-navy/50">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total Monthly</span>
                <span className="text-red-400 font-bold text-2xl">$5,000</span>
              </div>
              <div className="text-sm text-gray-400 mt-1">
                Annual cost: $60,000
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* After - Optimized Costs */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="bg-navy/70 border border-teal/30 rounded-lg p-6"
        >
          <h3 className="text-lg font-medium flex items-center mb-4">
            <span className="text-teal mr-2">✓</span> 
            <span>With Asynova</span>
          </h3>
          
          <div className="space-y-4">
            {/* Optimized breakdown */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Optimized API Costs</span>
                <span className="text-teal font-semibold">$2,100</span>
              </div>
              <div className="w-full bg-navy/50 rounded h-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '84%' }}
                  transition={{ duration: 1, delay: 2 }}
                  className="h-full bg-teal/70 rounded"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Cached Responses</span>
                <span className="text-teal font-semibold">$0</span>
              </div>
              <div className="w-full bg-navy/50 rounded h-2">
                <div className="h-full bg-teal/30 rounded" />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Token Optimization</span>
                <span className="text-teal font-semibold">$400</span>
              </div>
              <div className="w-full bg-navy/50 rounded h-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '16%' }}
                  transition={{ duration: 1, delay: 2.5 }}
                  className="h-full bg-teal/70 rounded"
                />
              </div>
            </div>
            
            <div className="pt-4 border-t border-navy/50">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total Monthly</span>
                <span className="text-teal font-bold text-2xl">$2,500</span>
              </div>
              <div className="text-sm text-gray-400 mt-1">
                Annual cost: $30,000
              </div>
              <div className="mt-2 bg-teal/20 text-teal px-3 py-1 rounded-full text-sm inline-block">
                You save $30,000/year
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BeforeAfterVisualization;