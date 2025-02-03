import { motion } from 'framer-motion';

const SecurityFeature = ({ title, description, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex gap-4 items-start"
  >
    <div className="text-teal text-xl">{icon}</div>
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </motion.div>
);

const Security = () => {
  const features = [
    {
      title: "SOC 2 Compliance",
      description: "Built-in security controls and audit trails for SOC 2 compliance",
      icon: "🛡️",
      delay: 0.2
    },
    {
      title: "End-to-End Encryption",
      description: "All data encrypted in transit and at rest with bank-grade security",
      icon: "🔒",
      delay: 0.3
    },
    {
      title: "GDPR Ready",
      description: "Privacy-first design with built-in GDPR compliance features",
      icon: "✓",
      delay: 0.4
    },
    {
      title: "Audit Logging",
      description: "Comprehensive audit trails for all AI model operations",
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
            <h2 className="text-3xl font-bold mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-gray-300 mb-8">
              Built with financial services compliance and security requirements in mind.
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
            {/* Add security visualization or illustration here */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,209,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,209,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Security;