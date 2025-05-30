import React from 'react';

const CostVisualization = () => {
  // Real API cost data example
  const costData = [
    { day: 'Mon', optimized: 342, unoptimized: 680 },
    { day: 'Tue', optimized: 378, unoptimized: 750 },
    { day: 'Wed', optimized: 412, unoptimized: 820 },
    { day: 'Thu', optimized: 356, unoptimized: 710 },
    { day: 'Fri', optimized: 389, unoptimized: 775 },
    { day: 'Sat', optimized: 256, unoptimized: 510 },
    { day: 'Sun', optimized: 198, unoptimized: 395 },
  ];

  const maxValue = Math.max(...costData.map(d => Math.max(d.optimized, d.unoptimized)));

  return (
    <div className="relative bg-navy/70 border border-teal/20 rounded-lg p-4 md:p-6">
      <div className="flex justify-between items-center mb-4 md:mb-6 flex-wrap">
        <h3 className="text-base md:text-lg font-medium">Real-Time API Cost Tracking</h3>
        <div className="bg-teal/20 text-teal text-xs px-3 py-1 rounded-full">
          Live Dashboard Preview
        </div>
      </div>
      
      {/* Mobile view - simplified */}
      <div className="md:hidden">
        <div className="bg-navy/50 p-3 rounded-lg mb-4">
          <div className="text-sm mb-2">This Week's AI Spend</div>
          <div className="flex items-center mb-3">
            <div className="w-full bg-navy/70 h-6 rounded-full overflow-hidden relative">
              <div 
                className="absolute left-0 top-0 bottom-0 bg-red-400/70 rounded-l-full"
                style={{ width: '100%' }}
              ></div>
              <div 
                className="absolute left-0 top-0 bottom-0 bg-teal/70 rounded-l-full"
                style={{ width: '50.2%' }}
              ></div>
            </div>
          </div>
          
          <div className="flex justify-between text-sm">
            <div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-red-400/70 mr-1 rounded"></div>
                <span className="text-xs text-gray-400">Direct API Calls</span>
              </div>
              <div className="text-red-400 font-semibold">$4,640</div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end">
                <div className="h-2 w-2 bg-teal/70 mr-1 rounded"></div>
                <span className="text-xs text-gray-400">Through Asynova</span>
              </div>
              <div className="text-teal font-semibold">$2,331</div>
            </div>
          </div>
          <div className="mt-2 text-right text-xs text-teal">You saved $2,309</div>
        </div>
        
        <div className="bg-navy/50 p-3 rounded-lg">
          <div className="text-sm mb-2">Where Your Savings Come From</div>
          <div className="space-y-2">
            <div className="flex items-center text-xs">
              <div className="h-2 w-2 rounded-full bg-teal mr-2"></div>
              <span className="text-gray-300">Cached API responses</span>
              <span className="ml-auto text-teal">35%</span>
            </div>
            <div className="flex items-center text-xs">
              <div className="h-2 w-2 rounded-full bg-teal mr-2"></div>
              <span className="text-gray-300">Token optimization</span>
              <span className="ml-auto text-teal">15%</span>
            </div>
            <div className="flex items-center text-xs">
              <div className="h-2 w-2 rounded-full bg-teal mr-2"></div>
              <span className="text-gray-300">Request batching</span>
              <span className="ml-auto text-teal">10%</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop view */}
      <div className="hidden md:block">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm font-medium">Daily Gemini API Costs</div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center">
                <div className="h-3 w-3 bg-red-400/70 mr-1 rounded"></div>
                <span>Direct API</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 bg-teal/70 mr-1 rounded"></div>
                <span>Via Asynova</span>
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
            
            {/* Bars */}
            <div className="absolute left-12 right-0 bottom-0 h-full flex items-end justify-between px-2">
              {costData.map((data, i) => (
                <div key={data.day} className="relative flex flex-col items-center w-12 h-full">
                  {/* Unoptimized cost bar */}
                  <div 
                    className="absolute bottom-0 w-5 bg-red-400/70 rounded-t transition-all hover:bg-red-400"
                    style={{ 
                      height: `${(data.unoptimized / maxValue) * 100}%`,
                      left: '0px'
                    }}
                  ></div>
                  
                  {/* Optimized cost bar */}
                  <div 
                    className="absolute bottom-0 w-5 bg-teal/70 rounded-t transition-all hover:bg-teal"
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
            <div className="text-sm mb-2">Weekly Summary</div>
            <div className="flex justify-between">
              <div>
                <div className="text-xs text-gray-400">Without Asynova</div>
                <div className="text-red-400 font-semibold">$4,640</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-400">With Asynova</div>
                <div className="text-teal font-semibold">$2,331</div>
              </div>
            </div>
            <div className="mt-2 text-right">
              <span className="text-xs text-gray-400">Total saved: </span>
              <span className="text-teal font-semibold">$2,309</span>
            </div>
          </div>
          
          <div className="bg-navy/50 p-3 rounded-lg">
            <div className="text-sm mb-2">Optimization Breakdown</div>
            <div className="space-y-2">
              <div className="flex items-center text-xs">
                <div className="h-2 w-2 rounded-full bg-teal mr-2"></div>
                <span className="text-gray-300">Smart caching</span>
                <span className="ml-auto text-teal">$810</span>
              </div>
              <div className="flex items-center text-xs">
                <div className="h-2 w-2 rounded-full bg-teal mr-2"></div>
                <span className="text-gray-300">Token reduction</span>
                <span className="ml-auto text-teal">$695</span>
              </div>
              <div className="flex items-center text-xs">
                <div className="h-2 w-2 rounded-full bg-teal mr-2"></div>
                <span className="text-gray-300">Request batching</span>
                <span className="ml-auto text-teal">$804</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostVisualization;