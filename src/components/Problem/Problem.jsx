import { motion } from 'framer-motion';
import DashboardDemo from '../Visualizations/DashboardDemo';

const Problem = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Building AI-Powered Fintech Apps Shouldn't Require a PhD
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="p-6 bg-navy/50 rounded-lg border border-teal/20">
              <h3 className="text-xl font-semibold mb-2">Time-Consuming Integration</h3>
              <p className="text-gray-300">Spend weeks integrating AI models that break in production</p>
            </div>
            
            <div className="p-6 bg-navy/50 rounded-lg border border-teal/20">
              <h3 className="text-xl font-semibold mb-2">Cost vs Accuracy Battle</h3>
              <p className="text-gray-300">Struggle to balance costs vs. accuracy for financial data</p>
            </div>
            
            <div className="p-6 bg-navy/50 rounded-lg border border-teal/20">
              <h3 className="text-xl font-semibold mb-2">Compliance Overhead</h3>
              <p className="text-gray-300">Waste engineering hours on compliance instead of innovation</p>
            </div>
          </motion.div>

          {/* Right: Solution Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] bg-navy/30 rounded-lg overflow-hidden"
          >
            {/* Add grid background like in HeroVisualization */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,209,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,209,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
            
            {/* We can add a comparison visualization here */}
            <div className="relative h-[400px] bg-navy/30 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,209,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,209,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <DashboardDemo />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;