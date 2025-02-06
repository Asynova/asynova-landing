import { motion } from 'framer-motion';

const DashboardDemo = () => {
  return (
    <div className="relative h-full w-full p-4">
      {/* Preview Label */}
      <div className="absolute top-2 right-2 bg-teal/20 text-teal px-3 py-1 rounded-full text-sm">
        Preview Demo
      </div>

      {/* Model Selection Interface */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-navy/70 rounded-lg p-4 mb-4 border border-teal/20"
      >
        <div className="flex justify-between items-center mb-3">
          <span className="text-teal font-medium">Planned Model Selection</span>
          <span className="text-sm text-gray-400">Example Interface</span>
        </div>
        <div className="space-y-2">
          {/* Model cards */}
          <div className="flex justify-between items-center bg-navy/50 p-2 rounded">
            <span>GPT-4</span>
            <span className="text-teal/70">Expected accuracy: 95%+ accuracy</span>
          </div>
          <div className="flex justify-between items-center bg-navy/50 p-2 rounded">
            <span>BERT Financial</span>
            <span className="text-teal/70">Expected accuracy: 90%+ accuracy</span>
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
          <span className="text-teal font-medium">Target Performance</span>
          <span className="text-sm text-gray-400">Example Metrics</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-navy/50 p-3 rounded">
            <div className="text-sm text-gray-400">Estimated Costs</div>
            <div className="text-lg opacity-75">Starting from $0.03/call</div>
          </div>
          <div className="bg-navy/50 p-3 rounded">
            <div className="text-sm text-gray-400">Target Response Time</div>
            <div className="text-lg opacity-75">Sub-second responses</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardDemo;