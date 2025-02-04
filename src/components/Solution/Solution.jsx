import { motion } from 'framer-motion';
import DashboardDemo from '../Visualizations/DashboardDemo';

const StepItem = ({ number, title, description, status }) => (
  <div className="flex gap-4">
    <div className="text-teal text-xl">{number}</div>
    <div>
      <div className="flex items-center gap-3">
        <h3 className="font-semibold mb-2">{title}</h3>
        <span className="text-xs bg-teal/20 text-teal px-2 py-1 rounded-full">
          {status}
        </span>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const Solution = () => {
  const steps = [
    {
      number: "1",
      title: "Upload Your Data",
      description: "Secure API connections and direct upload options for financial data",
      status: "In Development"
    },
    {
      number: "2",
      title: "Auto-Select Models",
      description: "Intelligent model selection and chaining based on your specific needs",
      status: "Coming Soon"
    },
    {
      number: "3",
      title: "Monitor & Optimize",
      description: "Real-time monitoring and automatic optimization of performance and costs",
      status: "Planned"
    }
  ];

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
            Our Vision: Simplified AI Implementation
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're building a platform where AI implementation will be as simple as three steps.
            Join our beta to help shape this vision.
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
            {steps.map((step, index) => (
              <StepItem key={index} {...step} />
            ))}
          </motion.div>

          {/* Right: Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] bg-navy/30 rounded-lg overflow-hidden"
          >
            {/* Preview Badge */}
            <div className="absolute top-4 left-4 bg-teal/20 text-teal px-3 py-1 rounded-full text-sm">
              Platform Preview
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,209,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,209,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <DashboardDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;