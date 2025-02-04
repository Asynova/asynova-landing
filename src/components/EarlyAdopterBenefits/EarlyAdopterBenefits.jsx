import { motion } from 'framer-motion';
import { useModal } from '../../context/ModalContext';

const BenefitCard = ({ title, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-navy/50 border border-teal/20 rounded-lg p-6"
  >
    <div className="text-teal text-2xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const EarlyAdopterBenefits = () => {
  const { openWaitlist } = useModal();

  const benefits = [
    {
      title: "Priority Access",
      description: "Be among the first to use our platform and help shape its development. Direct access to our team for support and feedback.",
      icon: "🚀"
    },
    {
      title: "Lifetime Discount",
      description: "Lock in exclusive beta pricing that will be grandfathered in after our official launch. Save significantly on future costs.",
      icon: "💎"
    },
    {
      title: "Feature Influence",
      description: "Direct input into our product roadmap. Help us prioritize features and integrations that matter most to your team.",
      icon: "🎯"
    },
    {
      title: "Dedicated Support",
      description: "Get personalized onboarding and ongoing support from our technical team throughout the beta period and beyond.",
      icon: "👥"
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
            BETA PROGRAM BENEFITS
          </span>
          <h2 className="text-3xl font-bold mt-4 mb-4">
            Join Our Founding Members
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Early adopters get exclusive benefits and help shape the future of AI orchestration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-gray-300 mb-6">
            Limited spots available in our beta program. Join now to secure your benefits.
          </p>
          <button
            onClick={openWaitlist}
            className="px-8 py-3 bg-teal text-navy font-semibold rounded-lg hover:opacity-90"
          >
            Join Beta Program →
          </button>
          <p className="text-sm text-gray-400 mt-4">
            No commitment required. Cancel anytime during the beta period.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EarlyAdopterBenefits;