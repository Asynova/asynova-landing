import { motion } from 'framer-motion';
//import DocGenerationVisualization from '../Visualizations/DocGenerationVisualization';
import CostVisualization from '../Visualizations/CostVisualization';

const SolutionFeature = ({ icon, title, description, status, savings }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-navy/50 border border-teal/20 rounded-lg p-6"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="text-teal text-xl">{icon}</div>
      <span className="text-xs bg-teal/20 text-teal px-2 py-1 rounded-full">
        {status}
      </span>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 mb-3">{description}</p>
    {savings && (
      <div className="text-teal font-semibold">
        {savings}
      </div>
    )}
  </motion.div>
);

const Solution = () => {
  const features = [
    {
      icon: "💰",
      title: "Intelligent Request Caching",
      description: "Cache repeated API calls automatically. Reduce redundant requests by up to 70% without changing your code.",
      status: "Ready Now",
      savings: "Save 30-40% instantly"
    },
    {
      icon: "🤖",
      title: "ML-Powered Cost Prediction",
      description: "Our models predict your AI costs with 85% accuracy, helping you budget and optimize before bills arrive.",
      status: "Ready Now",
      savings: "Prevent budget overruns"
    },
    {
      icon: "🔀",
      title: "Multi-Provider Routing",
      description: "Automatically route requests to the cheapest provider (Gemini, OpenAI, Claude) based on your requirements.",
      status: "Coming Q3",
      savings: "Additional 20% savings"
    }
  ];

  return (
    <section id="solution" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Enterprise-Grade AI Cost Optimization
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Purpose-built for African fintech infrastructure and challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <SolutionFeature key={index} {...feature} />
          ))}
        </div>

        {/* Visualizations Section */}
        <div className="max-w-5xl mx-auto mt-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-semibold">Real Platform, Real Savings</h3>
          </motion.div>
          
          <div className="space-y-12">
            {/* Cost Optimization Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CostVisualization />
            </motion.div>
          </div>
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <div className="bg-navy/50 border border-teal/20 rounded-lg p-6 max-w-2xl">
            <h3 className="text-xl font-semibold mb-3 text-center">Get Started in 5 Minutes</h3>
            
            <div className="space-y-6 mt-6">
              <div className="flex items-start">
                <div className="bg-teal/20 text-teal h-8 w-8 rounded-full flex items-center justify-center font-semibold mr-4 shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Replace Your API Endpoint</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Change api.openai.com to api.asynova.com - that's it!
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal/20 text-teal h-8 w-8 rounded-full flex items-center justify-center font-semibold mr-4 shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Keep Your Existing Code</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    No SDK changes, no refactoring. We're 100% compatible.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal/20 text-teal h-8 w-8 rounded-full flex items-center justify-center font-semibold mr-4 shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Save 40% Immediately</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    Watch your costs drop in real-time. No optimization needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Beta partners get 3 months free + direct founder support
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;