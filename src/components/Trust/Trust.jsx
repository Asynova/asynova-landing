import { motion } from 'framer-motion';

const SecurityBadge = ({ title, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="bg-navy/50 p-6 rounded-lg border border-teal/20 text-center"
  >
    <div className="text-teal text-2xl mb-3">{icon}</div>
    <h3 className="font-semibold mb-2">{title}</h3>
  </motion.div>
);

const Trust = () => {
  return (
    <section className="py-20 border-t border-teal/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Enterprise-Grade Security & Compliance
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Built with financial services requirements in mind
          </p>
        </motion.div>

        {/* Security Badges */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <SecurityBadge 
            title="SOC 2 Compliance Roadmap"
            icon="🛡️"
          />
          <SecurityBadge 
            title="End-to-End Encryption"
            icon="🔒"
          />
          <SecurityBadge 
            title="GDPR Ready"
            icon="✓"
          />
        </div>

        {/* Integration Partners */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-8">Trusted Integration Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-70">
            {/* Replace with actual partner logos */}
            <div className="text-gray-400">Plaid</div>
            <div className="text-gray-400">Refinitiv</div>
            <div className="text-gray-400">AWS</div>
            <div className="text-gray-400">OpenAI</div>
            <div className="text-gray-400">More coming soon</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;