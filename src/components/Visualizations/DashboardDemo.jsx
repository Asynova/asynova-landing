import { motion } from 'framer-motion';

const DashboardDemo = () => {
  return (
    <div className="relative h-full w-full p-4">
      {/* Model Selection Interface */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-navy/70 rounded-lg p-4 mb-4 border border-teal/20"
      >
        <div className="flex justify-between items-center mb-3">
          <span className="text-teal font-medium">Model Selection</span>
          <span className="text-sm text-gray-400">Auto-optimized</span>
        </div>
        <div className="space-y-2">
          {/* Model cards */}
          <div className="flex justify-between items-center bg-navy/50 p-2 rounded">
            <span>GPT-4</span>
            <span className="text-teal">98% accuracy</span>
          </div>
          <div className="flex justify-between items-center bg-navy/50 p-2 rounded">
            <span>BERT Financial</span>
            <span className="text-teal">95% accuracy</span>
          </div>
        </div>
      </motion.div>

      {/* Performance Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-navy/70 rounded-lg p-4 border border-teal/20"
      >
        <div className="flex justify-between items-center mb-3">
          <span className="text-teal font-medium">Real-time Metrics</span>
          <span className="text-sm text-gray-400">Last 24h</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-navy/50 p-3 rounded">
            <div className="text-sm text-gray-400">Cost</div>
            <div className="text-lg">$0.03/call</div>
          </div>
          <div className="bg-navy/50 p-3 rounded">
            <div className="text-sm text-gray-400">Latency</div>
            <div className="text-lg">124ms</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardDemo;