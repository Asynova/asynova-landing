import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-navy/50 border border-teal/20 rounded-lg p-6"
  >
    <div className="text-teal mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      title: "Auto-Model Selection",
      description: "ML evaluates accuracy and cost in real-time to select optimal models for your needs",
      icon: "🤖",
      delay: 0.2
    },
    {
      title: "Cost Control",
      description: "Set budgets and get alerts. Optimize costs across different AI providers",
      icon: "💰",
      delay: 0.3
    },
    {
      title: "Bank-Grade Security",
      description: "SOC 2-ready architecture with end-to-end encryption and compliance monitoring",
      icon: "🔒",
      delay: 0.4
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Built for Financial Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Deploy AI with enterprise-grade security and compliance built-in.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;