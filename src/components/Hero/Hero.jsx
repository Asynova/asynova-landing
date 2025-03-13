import { motion } from 'framer-motion';
import { useModal } from '../../context/ModalContext';
import BeforeAfterVisualization from '../Visualizations/BeforeAfterVisualization';

const Hero = () => {
  const { openWaitlist } = useModal();

  return (
    <section className="min-h-screen flex flex-col items-center pt-20 md:pt-24">
      <div className="container mx-auto px-4">
        {/* Text content - keep this the same */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tag line */}
            <div className="inline-block bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
              Currently Selecting 5 Beta Partners
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cut AI Implementation from 
              <span className="text-teal"> 9+ Months to Weeks</span>
            </h1>

            {/* Value proposition */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
              <div className="bg-navy/50 border border-teal/20 rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-teal">200+ hrs</div>
                <div className="text-sm text-gray-300">Compliance documentation reduced to under 20</div>
              </div>
              
              <div className="bg-navy/50 border border-teal/20 rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-teal">40-60%</div>
                <div className="text-sm text-gray-300">Infrastructure cost savings</div>
              </div>
              
              <div className="bg-navy/50 border border-teal/20 rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-teal">Weeks</div>
                <div className="text-sm text-gray-300">Not months to implementation</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Asynova automates compliance documentation and streamlines 
              Gemini 2.0 Flash integration for financial institutions.
            </p>

            {/* CTA */}
            <button
              onClick={openWaitlist}
              className="px-8 py-4 bg-teal text-navy font-semibold rounded-lg text-lg hover:opacity-90 shadow-lg"
            >
              Apply for Beta Access →
            </button>
            
            <div className="text-sm text-gray-400 mt-3">
              Currently in development. Beta launch: April 2025
            </div>
          </motion.div>
        </div>
        
        {/* Add visualization below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-8 bg-navy/30 border border-teal/10 rounded-lg p-6"
        >
          <BeforeAfterVisualization />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;