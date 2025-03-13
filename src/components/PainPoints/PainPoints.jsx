import { motion } from 'framer-motion';

const PainPoint = ({ number, title, description, stat }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: number * 0.1 }}
    className="bg-navy/50 border border-teal/20 rounded-lg p-6"
  >
    <div className="flex items-start">
      <div className="bg-teal/20 text-teal h-8 w-8 rounded-full flex items-center justify-center font-semibold mr-4">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-3">{description}</p>
        <div className="bg-navy/70 px-3 py-2 rounded text-sm">
          <span className="text-teal font-medium">{stat}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const PainPoints = () => {
  const painPoints = [
    {
      number: 1,
      title: "Manual Compliance Documentation",
      description: "Engineers waste hundreds of hours manually documenting models for regulators instead of building valuable features.",
      stat: "200+ hours per model on documentation"
    },
    {
      number: 2,
      title: "Inefficient Model Integration",
      description: "Connecting AI models to financial systems requires specialized expertise and complex configurations.",
      stat: "9+ months average implementation time"
    },
    {
      number: 3,
      title: "Resource Waste & Cost Overruns",
      description: "Overprovisioned infrastructure and inefficient resource management lead to ballooning costs.",
      stat: "40-60% of AI budget wasted"
    }
  ];

  return (
    <section id="problem" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Financial Institutions Are Wasting Millions on AI Implementation
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Three critical challenges prevent financial institutions from realizing AI's full potential
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point) => (
            <PainPoint key={point.number} {...point} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-navy/50 border border-teal/20 rounded-lg px-6 py-3">
            <span className="text-gray-300">
              A major bank abandoned their fraud detection AI after costs exceeded
              <span className="text-teal font-semibold"> $540,000</span> — 
              <span className="text-red-400 font-semibold"> 170% over budget</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;