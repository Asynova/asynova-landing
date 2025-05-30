import { motion } from 'framer-motion';

const PainPoint = ({ number, title, description, stat }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: number * 0.1 }}
    className="bg-navy/50 border border-teal/20 rounded-lg p-6 hover:border-red-400/50 transition-all"
  >
    <div className="flex items-start">
      <div className="bg-red-400/20 text-red-400 h-8 w-8 rounded-full flex items-center justify-center font-semibold mr-4 shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-3">{description}</p>
        <div className="bg-red-400/10 border border-red-400/20 px-3 py-2 rounded text-sm">
          <span className="text-red-400 font-medium">{stat}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const PainPoints = () => {
  const painPoints = [
    {
      number: 1,
      title: "Zero Cost Visibility",
      description: "You don't know how much you're spending on AI until the bill arrives. No real-time tracking, no budgets, just surprises.",
      stat: "Most fintechs overspend by 40%+"
    },
    {
      number: 2,
      title: "Paying for Duplicates",
      description: "Same credit check run 100 times? You pay 100 times. AI providers don't care if you're repeating requests.",
      stat: "30-40% of requests are duplicates"
    },
    {
      number: 3,
      title: "Inefficient Token Usage",
      description: "Verbose prompts, unoptimized responses, no batching. Every wasted token is money burned.",
      stat: "$8 per million output tokens adds up fast"
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
            Your AI Bills Are Out of Control
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Every Kenyan fintech faces these three expensive problems. 
            Until now, there was no solution.
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
          <div className="bg-navy/50 border border-red-400/20 rounded-lg px-6 py-4 max-w-3xl mx-auto">
            <p className="text-lg">
              <span className="text-red-400 font-semibold">Significant costs</span> wasted monthly across 
              <span className="text-red-400 font-semibold"> Kenyan fintechs</span> on unoptimized AI usage
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Every day without optimization is money lost.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;