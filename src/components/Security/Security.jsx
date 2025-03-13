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
      icon: "🛡️",
      title: "SOC 2 Compliance",
      description: "Security controls and audit trails built to SOC 2 standards from day one",
      status: "In Development"
    },
    {
      icon: "🔒",
      title: "End-to-End Encryption",
      description: "Bank-grade encryption for all data in transit and at rest",
      status: "In Development"
    },
    {
      icon: "✓",
      title: "GDPR Readiness",
      description: "Privacy-first architecture designed to meet global data protection requirements",
      status: "In Development"
    },
    {
      icon: "📋",
      title: "Audit Logging",
      description: "Comprehensive audit trail system for all AI model operations",
      status: "In Development"
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
                Enterprise-Grade Security from Day One
              </h2>
              <p className="text-gray-300 mb-8">
                We're building Asynova with financial-grade security and compliance as core principles. 
                Every aspect of our platform is designed to meet the stringent requirements of financial institutions.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <SecurityFeature key={index} {...feature} />
                ))}
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