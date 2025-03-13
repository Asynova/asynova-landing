import { motion } from 'framer-motion';

const CostVisualization = () => {
  // Sample cost data
  const costData = [
    { day: 'Mon', optimized: 342, unoptimized: 680 },
    { day: 'Tue', optimized: 378, unoptimized: 750 },
    { day: 'Wed', optimized: 412, unoptimized: 820 },
    { day: 'Thu', optimized: 356, unoptimized: 710 },
    { day: 'Fri', optimized: 389, unoptimized: 775 },
    { day: 'Sat', optimized: 256, unoptimized: 510 },
    { day: 'Sun', optimized: 198, unoptimized: 395 },
  ];

  // Find the highest value for scaling
  const maxValue = Math.max(...costData.map(d => Math.max(d.optimized, d.unoptimized)));
  
  // Calculate height percentage based on value
  // eslint-disable-next-line no-unused-vars
  const getHeight = value => `${(value / maxValue) * 100}%`;

  return (
    <div className="relative bg-navy/70 border border-teal/20 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Real-Time Cost Optimization</h3>
        <div className="bg-teal/20 text-teal text-xs px-3 py-1 rounded-full">
          Reduces Costs by 40-60%
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm font-medium">AI Implementation Costs This Week</div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center">
              <div className="h-3 w-3 bg-red-400/70 mr-1 rounded"></div>
              <span>Without Optimization</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 bg-teal/70 mr-1 rounded"></div>
              <span>With Asynova</span>
            </div>
          </div>
        </div>
        
        {/* Chart */}
        <div className="relative h-48 mt-6">
          {/* Y-axis */}
          <div className="absolute left-0 inset-y-0 w-12 flex flex-col justify-between text-right pr-2">
            <div className="text-xs text-gray-400">$800</div>
            <div className="text-xs text-gray-400">$600</div>
            <div className="text-xs text-gray-400">$400</div>
            <div className="text-xs text-gray-400">$200</div>
            <div className="text-xs text-gray-400">$0</div>
          </div>
          
          {/* Grid lines */}
          <div className="absolute left-12 right-0 inset-y-0">
            {[0, 1, 2, 3, 4].map(i => (
              <div 
                key={i}
                className="absolute left-0 right-0 border-t border-gray-700/30"
                style={{ top: `${i * 25}%` }}
              ></div>
            ))}
          </div>
          
          {/* Bars - Fixed implementation with manual height */}
          <div className="absolute left-12 right-0 bottom-0 h-full flex items-end justify-between px-2">
            {costData.map((data, i) => (
              <div key={data.day} className="relative flex flex-col items-center w-12 h-full">
                {/* Unoptimized cost bar - static implementation */}
                <div 
                  className="absolute bottom-0 w-5 bg-red-400/70 rounded-t"
                  style={{ 
                    height: `${(data.unoptimized / maxValue) * 100}%`,
                    left: '0px'
                  }}
                ></div>
                
                {/* Optimized cost bar */}
                <div 
                  className="absolute bottom-0 w-5 bg-teal/70 rounded-t"
                  style={{ 
                    height: `${(data.optimized / maxValue) * 100}%`,
                    right: '0px'
                  }}
                ></div>
                
                {/* X-axis label */}
                <div className="absolute -bottom-6 text-xs text-gray-400 w-full text-center">{data.day}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-navy/50 p-3 rounded-lg">
          <div className="text-sm mb-2">Weekly Spending</div>
          <div className="flex justify-between">
            <div>
              <div className="text-xs text-gray-400">Without Optimization</div>
              <div className="text-red-400 font-semibold">$4,640</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400">With Asynova</div>
              <div className="text-teal font-semibold">$2,331</div>
            </div>
          </div>
          <div className="mt-2 text-right text-xs text-teal">49.8% Savings</div>
        </div>
        
        <div className="bg-navy/50 p-3 rounded-lg">
          <div className="text-sm mb-2">Optimization Opportunities</div>
          <div className="space-y-2">
            <div className="flex items-center text-xs">
              <div className="h-2 w-2 rounded-full bg-teal mr-2"></div>
              <span className="text-gray-300">Right-sizing model selection</span>
              <span className="ml-auto text-teal">22%</span>
            </div>
            <div className="flex items-center text-xs">
              <div className="h-2 w-2 rounded-full bg-teal mr-2"></div>
              <span className="text-gray-300">Batch processing implementation</span>
              <span className="ml-auto text-teal">18%</span>
            </div>
            <div className="flex items-center text-xs">
              <div className="h-2 w-2 rounded-full bg-teal mr-2"></div>
              <span className="text-gray-300">Efficient resource allocation</span>
              <span className="ml-auto text-teal">14%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostVisualization;