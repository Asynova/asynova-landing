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
            Be Among the First to Transform Your AI Implementation
          </h2>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Financial institutions will implement AI. The question is: will you waste months and 
            millions doing it the hard way, or partner with Asynova to get it right from the start?
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <div className="bg-navy/50 px-6 py-4 rounded-lg border border-teal/10">
              <div className="text-2xl font-bold text-teal">5</div>
              <div className="text-sm text-gray-300">Limited partner spots</div>
            </div>
            
            <div className="bg-navy/50 px-6 py-4 rounded-lg border border-teal/10">
              <div className="text-2xl font-bold text-teal">April 2025</div>
              <div className="text-sm text-gray-300">Beta launch date</div>
            </div>
            
            <div className="bg-navy/50 px-6 py-4 rounded-lg border border-teal/10">
              <div className="text-2xl font-bold text-teal">Zero</div>
              <div className="text-sm text-gray-300">Risk during evaluation</div>
            </div>
          </div>
          
          <button
            onClick={openWaitlist}
            className="px-10 py-4 bg-teal text-navy font-semibold rounded-lg text-lg hover:opacity-90 shadow-lg"
          >
            Apply for Beta Program Now
          </button>
          
          <p className="text-sm text-gray-400 mt-4">
            No commitment required during evaluation period
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;