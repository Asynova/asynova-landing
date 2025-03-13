import { motion } from 'framer-motion';
import DocGenerationVisualization from '../Visualizations/DocGenerationVisualization';
import CostVisualization from '../Visualizations/CostVisualization';

const SolutionFeature = ({ icon, title, description, status }) => (
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
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const Solution = () => {
  const features = [
    {
      icon: "📄",
      title: "Automated Compliance Documentation",
      description: "Generate regulator-ready documentation while you implement. Cuts documentation time from 200+ hours to under 20.",
      status: "In Development"
    },
    {
      icon: "🔌",
      title: "Gemini 2.0 Flash Integration",
      description: "Streamlined connection with optimized settings for financial use cases. Our first supported model with more planned.",
      status: "In Development"
    },
    {
      icon: "📊",
      title: "Cost Tracking & Optimization",
      description: "Real-time visibility into AI implementation costs with alerts and optimization recommendations.",
      status: "Coming Soon"
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
            Our Solution: AI Orchestration Built for Financial Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're building a platform that solves these challenges, starting with Gemini 2.0 Flash integration
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
            <h3 className="text-2xl font-semibold">See Our Solution in Action</h3>
          </motion.div>
          
          <div className="space-y-12">
            {/* Documentation Automation Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <DocGenerationVisualization />
            </motion.div>
            
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

        {/* Three-Step Implementation Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <div className="bg-navy/50 border border-teal/20 rounded-lg p-6 max-w-2xl">
            <h3 className="text-xl font-semibold mb-3 text-center">Our Three-Step Implementation Process</h3>
            
            <div className="space-y-6 mt-6">
              <div className="flex items-start">
                <div className="bg-teal/20 text-teal h-8 w-8 rounded-full flex items-center justify-center font-semibold mr-4 shrink-0">
                  1
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">Upload Your Data</h4>
                    <span className="text-xs bg-teal/20 text-teal px-2 py-0.5 rounded-full">
                      In Development
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">
                    Secure API connections and direct upload options for financial data
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal/20 text-teal h-8 w-8 rounded-full flex items-center justify-center font-semibold mr-4 shrink-0">
                  2
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">Configure Compliance Settings</h4>
                    <span className="text-xs bg-teal/20 text-teal px-2 py-0.5 rounded-full">
                      In Development
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">
                    Select relevant regulatory frameworks and let Asynova handle documentation
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal/20 text-teal h-8 w-8 rounded-full flex items-center justify-center font-semibold mr-4 shrink-0">
                  3
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">Deploy & Monitor</h4>
                    <span className="text-xs bg-teal/20 text-teal px-2 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">
                    Track performance, costs, and compliance in real-time with optimization recommendations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;