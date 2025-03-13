import { motion } from 'framer-motion';
import { useModal } from '../../context/ModalContext';

const BenefitCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-navy/30 border border-teal/20 rounded-lg p-6"
  >
    <div className="text-teal text-2xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const BetaProgram = () => {
  const { openWaitlist } = useModal();

  const benefits = [
    {
      icon: "🚀",
      title: "Implementation Support",
      description: "Direct access to our founding team during setup and testing. Get personalized onboarding for your specific use case."
    },
    {
      icon: "💎",
      title: "Founding Partner Pricing",
      description: "Lock in exclusive pricing that will be grandfathered in after our official launch. Save significantly on future costs."
    },
    {
      icon: "🎯",
      title: "Feature Influence",
      description: "Direct input into our product roadmap. Help us prioritize features and integrations that matter most to your team."
    },
    {
      icon: "👥",
      title: "Dedicated Support",
      description: "Get personalized technical support throughout beta and beyond. Your success is our priority."
    }
  ];

  return (
    <section id="beta-program" className="py-20 bg-navy/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
            Only 5 Spots Available
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Founding Partners Program
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Be among the first 5 financial institutions to implement AI the right way
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-navy/30 border border-teal/20 rounded-lg p-8 max-w-4xl mx-auto"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold mb-2">Application Timeline</h3>
            <p className="text-gray-300">Secure your spot as a founding partner</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 bg-navy/50 rounded-lg p-4 relative">
              <div className="absolute -top-3 left-4 bg-teal/20 text-teal px-2 py-1 text-xs rounded-full">
                Current Stage
              </div>
              <h4 className="font-semibold mt-2 mb-1">Application Period</h4>
              <p className="text-sm text-gray-300">March 2025</p>
              <div className="text-xs text-gray-400 mt-2">Limited to 5 partners</div>
            </div>
            
            <div className="flex-1 bg-navy/50 rounded-lg p-4">
              <h4 className="font-semibold mb-1">Beta Launch</h4>
              <p className="text-sm text-gray-300">April 2025</p>
              <div className="text-xs text-gray-400 mt-2">Early access for partners</div>
            </div>
            
            <div className="flex-1 bg-navy/50 rounded-lg p-4">
              <h4 className="font-semibold mb-1">Full Launch</h4>
              <p className="text-sm text-gray-300">Q3 2025</p>
              <div className="text-xs text-gray-400 mt-2">Founders pricing locked in</div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={openWaitlist}
              className="px-8 py-3 bg-teal text-navy font-semibold rounded-lg hover:opacity-90"
            >
              Apply for Founding Partner Program →
            </button>
            <p className="text-sm text-gray-400 mt-3">
              No commitment required during evaluation period
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BetaProgram;