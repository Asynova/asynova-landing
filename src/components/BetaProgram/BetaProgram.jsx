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
      icon: "💰",
      title: "3 Months Free",
      description: "Zero cost during beta. Prove the savings before you pay. No credit card required to start saving immediately."
    },
    {
      icon: "🎯",
      title: "Custom Optimization",
      description: "We'll analyze your specific AI usage patterns and optimize for your exact needs. Personalized savings strategy."
    },
    {
      icon: "📞",
      title: "Direct Founder Access",
      description: "WhatsApp/call me directly. I'll personally ensure you save at least 40% or help you optimize until you do."
    },
    {
      icon: "🔒",
      title: "Lock Beta Pricing",
      description: "After free period, pay only 20% of what we save you. When we save you $5K/month, you pay $1K. Forever."
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
          <div className="inline-block bg-red-400/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Only 5 Spots - 0 Taken
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Beta Partner Program
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stop wasting money on AI. Be among the first 5 fintechs to cut costs by 40-60%.
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
            <h3 className="text-xl font-semibold mb-2">Simple Timeline</h3>
            <p className="text-gray-300">From signup to savings in days, not months</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 bg-navy/50 rounded-lg p-4 relative">
              <div className="absolute -top-3 left-4 bg-teal/20 text-teal px-2 py-1 text-xs rounded-full">
                Now
              </div>
              <h4 className="font-semibold mt-2 mb-1">Apply Today</h4>
              <p className="text-sm text-gray-300">5 minute form</p>
              <div className="text-xs text-gray-400 mt-2">Get approved in 24hrs</div>
            </div>
            
            <div className="flex-1 bg-navy/50 rounded-lg p-4">
              <h4 className="font-semibold mb-1">Integration</h4>
              <p className="text-sm text-gray-300">June 2025</p>
              <div className="text-xs text-gray-400 mt-2">Change 1 line of code</div>
            </div>
            
            <div className="flex-1 bg-navy/50 rounded-lg p-4">
              <h4 className="font-semibold mb-1">Start Saving</h4>
              <p className="text-sm text-gray-300">Same day</p>
              <div className="text-xs text-gray-400 mt-2">See savings in real-time</div>
            </div>
          </div>

          <div className="bg-red-400/10 border border-red-400/20 rounded-lg p-4 mb-6">
            <p className="text-center">
              <span className="text-red-400 font-semibold">Warning:</span> Every day you wait costs you money. 
              If you spend $5K/month on AI, you're losing $167/day. That's $1,169/week.
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={openWaitlist}
              className="px-8 py-3 bg-teal text-navy font-semibold rounded-lg hover:opacity-90"
            >
              Claim Your Free Beta Spot →
            </button>
            <p className="text-sm text-gray-400 mt-3">
              No credit card. No commitment. Just savings.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BetaProgram;