import { motion } from 'framer-motion';
import HeroVisualization from './HeroVisualization';
import { useModal } from '../../context/ModalContext';

const Hero = () => {
  const { openWaitlist } = useModal();

  const scrollToVision = () => {
    // Find the solution section element
    const solutionSection = document.getElementById('solution');
    if (solutionSection) {
      solutionSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tag */}
            <span className="text-teal text-sm font-semibold tracking-wider">
              LAUNCHING SOON: AI ORCHESTRATION FOR FINANCIAL SERVICES
            </span>
            
            {/* Headline */}
            <h1 className="mt-6 text-4xl lg:text-5xl font-bold">
              Simplify AI Implementation for 
              <span className="text-teal"> Financial Apps</span>
            </h1>
            
            {/* Subheadline */}
            <p className="mt-4 text-lg text-gray-300">
              We're building a platform to automate AI model selection and compliance. Join our early access program to shape the future of AI orchestration.
            </p>

            {/* Security Roadmap */}
            <div className="mt-6 flex space-x-4 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <span>Security First</span>
                <span className="bg-teal/20 text-teal px-2 py-0.5 rounded-full text-xs">In Progress</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <span>Compliance Ready</span>
                <span className="bg-teal/20 text-teal px-2 py-0.5 rounded-full text-xs">Roadmap</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex space-x-4">
              <button 
                onClick={openWaitlist}
                className="px-6 py-3 bg-teal text-navy font-semibold rounded-lg hover:opacity-90"
              >
                Join Beta Program →
              </button>
              <button 
                onClick={scrollToVision}
                className="px-6 py-3 border border-teal text-teal font-semibold rounded-lg hover:bg-teal/10"
              >
                View Product Vision
              </button>
            </div>
          </motion.div>

          {/* Right Column - Placeholder for now */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HeroVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;