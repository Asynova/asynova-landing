import { motion } from 'framer-motion';

const MetricCard = ({ value, label, subtext, verified }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-navy/50 border border-teal/20 rounded-lg p-6 text-center hover:border-teal/40 transition-all"
  >
    <div className="text-3xl font-bold text-teal">{value}</div>
    <div className="text-sm text-gray-300 mt-1">{label}</div>
    {subtext && <div className="text-xs text-gray-400 mt-2">{subtext}</div>}
    {verified && <div className="text-xs text-green-400 mt-1">✓ Verified</div>}
  </motion.div>
);

const SocialProof = () => {
  const metrics = [
    {
      value: "$638M",
      label: "Kenya startup funding",
      subtext: "2024 - highest in Africa",
      verified: true
    },
    {
      value: "13%",
      label: "Fintech equity share",
      subtext: "Down from 40% previously",
      verified: true
    },
    {
      value: "R² 0.85",
      label: "ML model accuracy",
      subtext: "Cost prediction algorithm",
      verified: true
    },
    {
      value: "5 min",
      label: "Setup time",
      subtext: "Just change endpoint",
      verified: true
    },
    {
      value: "100%",
      label: "API compatible",
      subtext: "Drop-in replacement",
      verified: true
    },
    {
      value: "0",
      label: "Current customers",
      subtext: "Launching June 2025",
      verified: true
    }
  ];

  return (
    <section id="social-proof" className="py-20 border-t border-teal/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-teal text-sm font-semibold tracking-wider">
            THE FACTS
          </span>
          <h2 className="text-3xl font-bold mt-4 mb-4">
            Real Numbers, Real Platform, Real Opportunity
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Kenya's fintech sector needs AI cost optimization. We built the solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-navy/30 border border-teal/20 rounded-lg p-8 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-4">
            Built in Kenya, For Kenya's Future
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <div className="text-teal text-2xl mb-2">🌍</div>
              <h4 className="font-semibold mb-2">Local Understanding</h4>
              <p className="text-sm text-gray-300">
                Built by a Kenyan founder who understands local fintech challenges and opportunities.
              </p>
            </div>
            <div>
              <div className="text-teal text-2xl mb-2">🚀</div>
              <h4 className="font-semibold mb-2">Beta Program</h4>
              <p className="text-sm text-gray-300">
                First 5 partners get 3 months free + direct founder support. Help shape the product.
              </p>
            </div>
            <div>
              <div className="text-teal text-2xl mb-2">🔮</div>
              <h4 className="font-semibold mb-2">Future Vision</h4>
              <p className="text-sm text-gray-300">
                Today: AI cost optimization. Tomorrow: Banking failure prediction. Building for the long term.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-navy/50 rounded-full border border-teal/20">
            <span className="text-teal mr-2">🔨</span>
            <span className="text-sm">
              Platform built and deployed. Ready for first customers.
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">
            Supporting Kenya's AI Strategy 2025-2030
          </p>
          <p className="text-sm text-gray-500">
            Aligned with national goals for ethical, inclusive AI adoption
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;