import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon, delay, metric, highlight }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-navy/50 border border-teal/20 rounded-lg p-6 hover:border-teal/40 transition-all"
  >
    <div className="text-teal text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    {metric && (
      <div className="text-teal font-semibold text-lg">
        {metric}
      </div>
    )}
    {highlight && (
      <div className="mt-2 text-sm text-gray-400">
        {highlight}
      </div>
    )}
  </motion.div>
);

const Features = () => {
  const features = [
    {
      title: "Smart Caching Engine",
      description: "Automatically detects and caches repeated API calls. No code changes needed.",
      icon: "⚡",
      delay: 0.2,
      metric: "Ready to deploy",
      highlight: "Works with your existing code"
    },
    {
      title: "Real-Time Cost Dashboard",
      description: "See exactly what you're spending on AI, broken down by model, endpoint, and team.",
      icon: "📊",
      delay: 0.3,
      metric: "Built and tested",
      highlight: "Track every request"
    },
    {
      title: "ML Cost Prediction",
      description: "Our multivariate linear regression model helps predict your monthly AI costs.",
      icon: "🔮",
      delay: 0.4,
      metric: "R² score: 0.85",
      highlight: "Based on real ML model"
    },
    {
      title: "Request Optimization",
      description: "Planned feature to compress prompts and optimize token usage without losing quality.",
      icon: "🎯",
      delay: 0.5,
      metric: "Coming soon",
      highlight: "In development"
    },
    {
      title: "Usage Alerts",
      description: "Get notified before you hit budget limits. Set alerts by cost, tokens, or requests.",
      icon: "🚨",
      delay: 0.6,
      metric: "Configurable limits",
      highlight: "Prevent overages"
    },
    {
      title: "Team Analytics",
      description: "Track AI usage by team, project, or API key. Find optimization opportunities.",
      icon: "👥",
      delay: 0.7,
      metric: "User-based tracking",
      highlight: "Built into platform"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Platform Features: What's Built vs. Planned
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Honest overview of our current capabilities and roadmap
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Core platform ready. Advanced features coming with customer feedback.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;