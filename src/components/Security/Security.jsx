import { motion } from 'framer-motion';
import SecurityVisualization from './SecurityVisualization';

const SecurityFeature = ({ title, description, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex gap-4 items-start"
  >
    <div className="text-teal text-xl">{icon}</div>
    <div>
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-xs bg-teal/20 text-teal px-2 py-1 rounded-full">
          In Development
        </span>
      </div>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </motion.div>
);

const Security = () => {
  const features = [
    {
      title: "SOC 2 Compliance",
      description: "Security controls and audit trails being built to SOC 2 standards",
      icon: "🛡️",
      delay: 0.2
    },
    {
      title: "End-to-End Encryption",
      description: "Implementing bank-grade encryption for data in transit and at rest",
      icon: "🔒",
      delay: 0.3
    },
    {
      title: "GDPR Readiness",
      description: "Privacy-first architecture designed to meet GDPR requirements",
      icon: "✓",
      delay: 0.4
    },
    {
      title: "Audit Logging",
      description: "Building comprehensive audit trail system for AI model operations",
      icon: "📋",
      delay: 0.5
    }
  ];

  return (
    <section id="security" className="py-20 bg-navy/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-bold">
                Security & Compliance Roadmap
              </h2>
            </div>
            <p className="text-gray-300 mb-8">
              We're building our platform with enterprise-grade security and financial services compliance requirements as core principles. Join early to influence our security roadmap.
            </p>
            <div className="grid gap-8">
              {features.map((feature, index) => (
                <SecurityFeature key={index} {...feature} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] bg-navy/30 rounded-lg overflow-hidden"
          >
            <SecurityVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Security;