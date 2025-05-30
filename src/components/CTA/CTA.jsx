import { motion } from 'framer-motion';
import { useModal } from '../../context/ModalContext';

const CTA = () => {
  const { openWaitlist } = useModal();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-navy/30 border border-teal/20 rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Stop Burning Money on AI APIs
          </h2>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Every day you wait, you're wasting thousands on inefficient AI usage. 
            Join 5 forward-thinking fintechs who refuse to overpay.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <div className="bg-navy/50 px-6 py-4 rounded-lg border border-teal/10">
              <div className="text-2xl font-bold text-teal">$1.8K</div>
              <div className="text-sm text-gray-300">Save per month minimum</div>
            </div>
            
            <div className="bg-navy/50 px-6 py-4 rounded-lg border border-teal/10">
              <div className="text-2xl font-bold text-teal">5 min</div>
              <div className="text-sm text-gray-300">Integration time</div>
            </div>
            
            <div className="bg-navy/50 px-6 py-4 rounded-lg border border-teal/10">
              <div className="text-2xl font-bold text-teal">Free</div>
              <div className="text-sm text-gray-300">For 3 months (beta)</div>
            </div>
          </div>
          
          <button
            onClick={openWaitlist}
            className="px-10 py-4 bg-teal text-navy font-semibold rounded-lg text-lg hover:opacity-90 shadow-lg"
          >
            Claim Your Beta Spot →
          </button>
          
          <p className="text-sm text-gray-400 mt-4">
            Only 5 spots. First come, first served. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;