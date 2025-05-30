import { motion } from 'framer-motion';

const TrustCard = ({ title, description, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-navy/50 border border-teal/20 rounded-lg p-6"
  >
    <div className="text-teal text-2xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const Trust = () => {
  const trustPoints = [
    {
      title: "Security-First Design",
      description: "Built with encryption and security best practices. Your API keys stay secure. Your data never logged.",
      icon: "🔒",
      delay: 0.2
    },
    {
      title: "No Vendor Lock-in",
      description: "Simple API endpoint change. Switch back anytime. Your code stays the same.",
      icon: "🔓",
      delay: 0.3
    },
    {
      title: "AWS Infrastructure",
      description: "Deployed on reliable AWS services. Built for scale from day one.",
      icon: "☁️",
      delay: 0.4
    },
    {
      title: "Transparent Approach",
      description: "We're honest about our pre-launch status. Real platform, real savings potential, real founder.",
      icon: "💎",
      delay: 0.5
    }
  ];

  return (
    <section id="trust" className="py-20 bg-navy/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Why Trust a 20-Year-Old Founder?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Because I built something real, I'm transparent about everything, 
            and I have nothing to lose by being honest.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {trustPoints.map((point, index) => (
            <TrustCard key={index} {...point} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-navy/50 border border-teal/20 rounded-lg p-8 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Our Beta Promise</h3>
          <p className="text-lg text-gray-300 mb-6">
            Join our beta program and help shape the future of AI cost optimization in Kenya.
            Here's what we promise:
          </p>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-teal">3</div>
              <div className="text-sm text-gray-400">Months free access</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal">24/7</div>
              <div className="text-sm text-gray-400">Direct founder support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal">100%</div>
              <div className="text-sm text-gray-400">Transparency</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            No hidden fees. No false promises. Just a working platform and a founder who cares.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-400">
            Built in Kenya | For Kenyan fintechs | By someone who gets it
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;