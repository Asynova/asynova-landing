import { motion } from 'framer-motion';
import DashboardDemo from '../Visualizations/DashboardDemo';

const PainPoint = ({ title, description, stat }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-navy/50 rounded-lg border border-teal/20"
  >
    <div className="text-3xl font-bold text-red-400 mb-2">{stat}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const Problem = () => {
  const painPoints = [
    {
      stat: "Rising",
      title: "AI API Costs",
      description: "Kenyan fintechs face increasing costs from Gemini and OpenAI APIs with limited visibility into spending."
    },
    {
      stat: "80%",
      title: "Usage Growth",
      description: "AI usage in fintech growing rapidly, but cost optimization tools haven't kept pace."
    },
    {
      stat: "Zero",
      title: "Local Solutions",
      description: "No Kenya-focused platform currently helps fintechs manage and reduce their AI infrastructure costs."
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
            AI Costs Are Growing Faster Than Control
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Kenyan fintechs need cost optimization tools. 
            We built the solution.
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
              Live Platform Demo
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