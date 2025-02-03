import { motion } from 'framer-motion';
import DashboardDemo from '../Visualizations/DashboardDemo';

const Solution = () => {
  return (
    <section className="py-20 bg-navy/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            How It Works in 60 Seconds
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            No code. No DevOps. Just AI that works.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Step-by-Step Process */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="text-teal text-xl">1</div>
              <div>
                <h3 className="font-semibold mb-2">Upload Your Data</h3>
                <p className="text-gray-300">Connect your financial data through secure APIs or upload directly</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-teal text-xl">2</div>
              <div>
                <h3 className="font-semibold mb-2">Auto-Select Models</h3>
                <p className="text-gray-300">Platform automatically selects and chains optimal AI models</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-teal text-xl">3</div>
              <div>
                <h3 className="font-semibold mb-2">Monitor & Optimize</h3>
                <p className="text-gray-300">Real-time cost and performance metrics with automatic optimization</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] bg-navy/30 rounded-lg overflow-hidden"
          >
            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,209,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,209,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
            
            {/* We can add an animated workflow visualization here */}
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

export default Solution;