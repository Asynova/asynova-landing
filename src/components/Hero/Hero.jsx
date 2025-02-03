import { motion } from 'framer-motion';
import HeroVisualization from './HeroVisualization';
import { useModal } from '../../context/ModalContext';

const Hero = () => {
    const { openWaitlist } = useModal();

  return (
    <section className="relative min-h-screen flex items-center">
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
              AI ORCHESTRATION FOR FINANCIAL SERVICES
            </span>
            
            {/* Headline */}
            <h1 className="mt-6 text-4xl lg:text-5xl font-bold">
              Automate AI Model Selection for 
              <span className="text-teal"> Financial Apps</span>
            </h1>
            
            {/* Subheadline */}
            <p className="mt-4 text-lg text-gray-300">
              Deploy compliant AI workflows in minutes. Optimize costs, security, and performance automatically.
            </p>

            {/* Trust Indicators */}
            <div className="mt-6 flex space-x-4 text-sm text-gray-300">
              <span>SOC 2 Ready</span>
              <span>•</span>
              <span>GDPR Compliant</span>
              <span>•</span>
              <span>Bank-Grade Security</span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex space-x-4">
              <button 
                onClick={openWaitlist}
                className="px-6 py-3 bg-teal text-navy font-semibold rounded-lg hover:opacity-90">
                Join Early Access →
              </button>
              <button className="px-6 py-3 border border-teal text-teal font-semibold rounded-lg hover:bg-teal/10">
                See How It Works
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