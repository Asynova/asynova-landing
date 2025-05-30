import { motion } from 'framer-motion';
import { useModal } from '../../context/ModalContext';

const BenefitCard = ({ title, description, icon, highlight }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-navy/50 border border-teal/20 rounded-lg p-6"
  >
    <div className="text-teal text-2xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-300 mb-3">{description}</p>
    {highlight && (
      <div className="text-teal font-semibold">{highlight}</div>
    )}
  </motion.div>
);

const EarlyAdopterBenefits = () => {
  const { openWaitlist } = useModal();

  const benefits = [
    {
      title: "3 Months Free",
      description: "Zero cost during beta. We prove the value, you provide feedback. No credit card required.",
      icon: "🎁",
      highlight: "Worth $1,500+"
    },
    {
      title: "Founder's Pricing",
      description: "Lock in 50% off our standard rates forever. Your rate never increases, even as we add features.",
      icon: "💎",
      highlight: "Save $6,000+ annually"
    },
    {
      title: "Direct Founder Access",
      description: "WhatsApp/phone access to me personally. Get features built specifically for your needs.",
      icon: "📱",
      highlight: "Response within hours"
    },
    {
      title: "White-Glove Setup",
      description: "I'll personally integrate Asynova with your systems. Zero effort on your part.",
      icon: "🤝",
      highlight: "Save weeks of work"
    }
  ];

  return (
    <section className="py-20 bg-navy/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-teal text-sm font-semibold tracking-wider">
            BETA PARTNER BENEFITS
          </span>
          <h2 className="text-3xl font-bold mt-4 mb-4">
            Why Join as a Beta Partner?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The first 5 fintechs get exclusive benefits that will never be offered again
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-navy/30 border border-teal/20 rounded-lg p-8 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">
            The Math is Simple
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <div className="text-gray-400 text-sm">Your AI spend</div>
              <div className="text-2xl font-bold">$5,000/mo</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Your savings</div>
              <div className="text-2xl font-bold text-teal">$2,000/mo</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Your cost</div>
              <div className="text-2xl font-bold text-teal">$0 (beta)</div>
            </div>
          </div>
          <p className="text-gray-300 mb-6">
            You literally cannot lose. Save money or pay nothing.
          </p>
          <button
            onClick={openWaitlist}
            className="px-8 py-3 bg-teal text-navy font-semibold rounded-lg hover:opacity-90"
          >
            Claim Your Beta Spot →
          </button>
          <p className="text-sm text-gray-400 mt-4">
            Only 5 spots. 2 fintechs already interested. Don't wait.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EarlyAdopterBenefits;