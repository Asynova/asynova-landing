import { motion } from 'framer-motion';
import { useModal } from '../../context/ModalContext';
import BeforeAfterVisualization from '../Visualizations/BeforeAfterVisualization';

const Hero = () => {
  const { openWaitlist } = useModal();

  return (
    <section className="min-h-screen flex flex-col items-center pt-20 md:pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Updated tag line */}
            <div className="inline-block bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
              Beta Program: Limited to 5 Partners
            </div>

            {/* Updated Headline - AI Cost Focus */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cut Your AI Costs by
              <span className="text-teal"> 40-60% Instantly</span>
            </h1>

            {/* Updated Value Props - Cost Focused */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
              <div className="bg-navy/50 border border-teal/20 rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-teal">$3K→$1.8K</div>
                <div className="text-sm text-gray-300">Monthly savings on Gemini API</div>
              </div>
              
              <div className="bg-navy/50 border border-teal/20 rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-teal">&lt;100ms</div>
                <div className="text-sm text-gray-300">Response time with caching</div>
              </div>
              
              <div className="bg-navy/50 border border-teal/20 rounded-lg px-4 py-3">
                <div className="text-2xl font-bold text-teal">ML-Powered</div>
                <div className="text-sm text-gray-300">Predictive cost optimization</div>
              </div>
            </div>

            {/* Updated Description */}
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Enterprise-grade AI orchestration platform that reduces your Gemini, 
              OpenAI, and Anthropic API costs through intelligent caching, request 
              optimization, and ML-based prediction.
            </p>

            {/* CTA */}
            <button
              onClick={openWaitlist}
              className="px-8 py-4 bg-teal text-navy font-semibold rounded-lg text-lg hover:opacity-90 shadow-lg"
            >
              Get Early Access (Free for Beta) →
            </button>
            
            <div className="text-sm text-gray-400 mt-3">
              Platform ready for deployment | Launching June 2025
            </div>
          </motion.div>
        </div>
        
        {/* Add trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-8"
        >
          <div className="text-center mb-8">
            <p className="text-gray-400 text-sm">Perfect for fintechs using:</p>
            <div className="flex justify-center gap-8 mt-4">
              <span className="text-teal font-semibold">Gemini 2.5</span>
              <span className="text-gray-500">•</span>
              <span className="text-teal font-semibold">GPT-4</span>
              <span className="text-gray-500">•</span>
              <span className="text-teal font-semibold">Claude 3</span>
            </div>
          </div>
          
          {/* Keep existing visualization */}
          <div className="bg-navy/30 border border-teal/10 rounded-lg p-6">
            <BeforeAfterVisualization />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;