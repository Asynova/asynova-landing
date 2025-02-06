import { motion } from 'framer-motion';

const ModelCard = ({ model, accuracy, cost, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-navy/80 border border-teal/20 rounded-lg p-4 mb-4 backdrop-blur-sm"
  >
    <div className="flex justify-between items-center">
      <span className="text-teal font-medium">{model}</span>
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay + 0.3 }}
        className="h-2 w-2 rounded-full bg-teal"
      />
    </div>
    <div className="mt-2 text-sm text-gray-300">
      <div>Expected Accuracy: {accuracy}%+</div>
      <div>Example Cost: From ${cost}/1k calls</div>
    </div>
  </motion.div>
);

const HeroVisualization = () => {
  const models = [
    { model: "GPT-4", accuracy: 95, cost: 0.03, delay: 0.2 },
    { model: "BERT Financial", accuracy: 90, cost: 0.01, delay: 0.4 },
    { model: "FinBERT", accuracy: 85, cost: 0.008, delay: 0.6 }
  ];

  return (
    <div className="relative h-[400px] bg-navy/50 rounded-lg overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,209,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,209,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Model selection visualization */}
      <div className="relative p-6">
        <div className="text-sm text-gray-400 mb-4">Planned Model Integration</div>
        {models.map((model, index) => (
          <ModelCard key={model.model} {...model} />
        ))}
      </div>
    </div>
  );
};

export default HeroVisualization;