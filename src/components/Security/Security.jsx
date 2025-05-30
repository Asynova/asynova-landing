import { motion } from 'framer-motion';
import SecurityVisualization from '../Visualizations/SecurityVisualization';

const SecurityFeature = ({ icon, title, description, status }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex gap-4"
  >
    <div className="text-teal text-xl">{icon}</div>
    <div>
      <div className="flex items-center gap-2 mb-1">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-xs bg-teal/20 text-teal px-2 py-0.5 rounded-full">
          {status}
        </span>
      </div>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </motion.div>
);

const Security = () => {
  const features = [
    {
      icon: "🔒",
      title: "Zero Data Storage",
      description: "We never store your prompts or responses. Only metadata for caching. Your AI data stays yours.",
      status: "Live"
    },
    {
      icon: "🛡️",
      title: "End-to-End Encryption",
      description: "Bank-grade TLS 1.3 encryption. Your API keys are encrypted at rest with AES-256.",
      status: "Live"
    },
    {
      icon: "🏛️",
      title: "SOC 2 Type II",
      description: "Currently pursuing certification. Built to enterprise security standards from day one.",
      status: "In Progress"
    },
    {
      icon: "📋",
      title: "Complete Audit Trail",
      description: "Every API call logged for compliance. Export reports anytime for your auditors.",
      status: "Live"
    }
  ];

  return (
    <section id="security" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Your AI Data is Sacred
              </h2>
              <p className="text-gray-300 mb-8">
                We're a proxy, not a storage system. Your sensitive financial data never touches our servers. 
                We only cache metadata to save you money, never the actual content.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <SecurityFeature key={index} {...feature} />
                ))}
              </div>

              <div className="mt-8 p-4 bg-navy/50 border border-teal/20 rounded-lg">
                <p className="text-sm text-gray-300">
                  <span className="text-teal font-semibold">Pro tip:</span> You can switch back to 
                  direct API calls anytime by changing one line of code. No vendor lock-in.
                </p>
              </div>
            </motion.div>

            {/* Security Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <SecurityVisualization />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;