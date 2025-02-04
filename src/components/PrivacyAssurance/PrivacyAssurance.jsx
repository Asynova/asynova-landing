import { motion } from 'framer-motion';

const AssuranceItem = ({ title, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex gap-4"
  >
    <div className="text-teal text-xl">{icon}</div>
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </motion.div>
);

const PrivacyAssurance = () => {
  const assurances = [
    {
      title: "Data Privacy",
      description: "Your data is encrypted in transit and at rest. We follow strict data minimization principles and only collect what's necessary.",
      icon: "🔒"
    },
    {
      title: "Beta Testing Terms",
      description: "Clear agreements that protect your rights and data during the beta phase, with the ability to request data deletion at any time.",
      icon: "📜"
    },
    {
      title: "Communication Control",
      description: "Full control over email preferences and communication frequency. We'll never share your contact information.",
      icon: "✉️"
    },
    {
      title: "Transparent Updates",
      description: "Regular updates about our development progress, compliance status, and any changes that might affect our beta users.",
      icon: "📢"
    }
  ];

  return (
    <section className="py-20 bg-navy/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Your Privacy & Trust Matter
            </h2>
            <p className="text-gray-300">
              Our commitment to transparency and data protection starts from day one
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {assurances.map((assurance, index) => (
              <AssuranceItem key={index} {...assurance} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 p-6 bg-navy/70 rounded-lg border border-teal/20"
          >
            <h3 className="font-semibold mb-4 flex items-center">
              <span className="text-teal mr-2">ℹ️</span>
              Beta Program Data Handling
            </h3>
            <p className="text-sm text-gray-300 space-y-2">
              <span className="block">
                During the beta phase, we collect feedback and usage metrics to improve our platform. All data is anonymized and you can opt out at any time.
              </span>
              <span className="block mt-2">
                We're building with SOC 2 and GDPR compliance in mind, ensuring your data is protected to the highest standards from the start.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <a
              href="/privacy-policy"
              className="text-sm text-teal hover:underline"
            >
              Read our full Privacy Policy →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyAssurance;