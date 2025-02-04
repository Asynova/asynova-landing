import { motion } from 'framer-motion';
import DashboardDemo from '../Visualizations/DashboardDemo';

const PainPoint = ({ title, description }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-navy/50 rounded-lg border border-teal/20"
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
    <div className="mt-3 text-sm text-teal">
      We're building the solution
    </div>
  </motion.div>
);

const Problem = () => {
  const painPoints = [
    {
      title: "Time-Consuming Integration",
      description: "Engineers currently spend weeks integrating AI models, with frequent production issues."
    },
    {
      title: "Cost vs Accuracy Battle",
      description: "Finding the right balance between costs and accuracy for financial data is a constant challenge."
    },
    {
      title: "Compliance Overhead",
      description: "Teams waste valuable engineering hours on compliance instead of focusing on innovation."
    }
  ];

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
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're building a platform to solve these common challenges in AI implementation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Pain Points */}
          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <PainPoint key={index} {...point} />
            ))}
          </div>

          {/* Right: Solution Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] bg-navy/30 rounded-lg overflow-hidden"
          >
            <div className="absolute top-4 left-4 bg-teal/20 text-teal px-3 py-1 rounded-full text-sm">
              Our Planned Solution
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,209,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,209,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <DashboardDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;