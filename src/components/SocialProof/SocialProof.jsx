import { motion } from 'framer-motion';

const BackgroundCard = ({ title, items }) => (
  <div className="bg-navy/50 border border-teal/20 rounded-lg p-6">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <span className="text-teal mr-2">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const SocialProof = () => {
  const experience = {
    technical: {
      title: "Technical Experience",
      items: [
        "10+ years in AI/ML engineering",
        "Built enterprise-scale ML platforms",
        "Led AI implementations at major banks",
        "Deep expertise in model optimization"
      ]
    },
    industry: {
      title: "Industry Background",
      items: [
        "Fintech compliance expertise",
        "Enterprise security implementation",
        "Financial services integration",
        "Cloud infrastructure optimization"
      ]
    }
  };

  return (
    <section className="py-20 border-t border-teal/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-teal text-sm font-semibold tracking-wider">
            WHY TRUST US
          </span>
          <h2 className="text-3xl font-bold mt-4 mb-4">
            Built by Engineers, for Engineers
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We've experienced the challenges of AI implementation firsthand. Now we're building the solution we wish we had.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BackgroundCard {...experience.technical} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BackgroundCard {...experience.industry} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-navy/50 rounded-full border border-teal/20">
            <span className="text-teal mr-2">🚧</span>
            <span className="text-sm">
              Currently working with select beta partners in financial services
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-2xl font-bold text-teal">10+</div>
            <div className="text-sm text-gray-300 mt-1">Years Experience</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-2xl font-bold text-teal">50+</div>
            <div className="text-sm text-gray-300 mt-1">AI Models Deployed</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-2xl font-bold text-teal">5+</div>
            <div className="text-sm text-gray-300 mt-1">Financial Institutions</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.linkedin.com/company/asynova"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-teal hover:underline"
          >
            Follow our journey on LinkedIn →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;