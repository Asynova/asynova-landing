import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon, delay, status }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-navy/50 border border-teal/20 rounded-lg p-6"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="text-teal">{icon}</div>
      <span className="text-xs bg-teal/20 text-teal px-2 py-1 rounded-full">
        {status}
      </span>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      title: "Auto-Model Selection",
      description: "Building ML system to evaluate accuracy and cost in real-time for optimal model selection",
      icon: "🤖",
      delay: 0.2,
      status: "In Development"
    },
    {
      title: "Cost Control",
      description: "Implementing budget controls and alerts to optimize costs across AI providers",
      icon: "💰",
      delay: 0.3,
      status: "Coming Soon"
    },
    {
      title: "Planned Bank-Grade Security",
      description: "Designing architecture with SOC 2 standards and end-to-end encryption in mind",
      icon: "🔒",
      delay: 0.4,
      status: "Planned"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Features We're Building
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform is being developed with enterprise-grade security and compliance as core principles. 
            Join the beta to influence our feature roadmap.
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