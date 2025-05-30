import { motion } from 'framer-motion';

const ProviderCard = ({ name, status, savings, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-navy/50 border border-teal/20 rounded-lg p-6 flex flex-col items-center justify-center relative"
  >
    <div className={`absolute top-2 right-2 ${status === 'Live' ? 'bg-teal/20 text-teal' : 'bg-gray-600/20 text-gray-400'} text-xs px-2 py-1 rounded-full`}>
      {status}
    </div>
    <span className="text-2xl font-bold text-gray-300 mb-2">{name}</span>
    <span className="text-sm text-teal">{savings}</span>
  </motion.div>
);

const Integration = () => {
  const providers = [
    { name: "Gemini", status: "Live", savings: "Save 40-60%", delay: 0.2 },
    { name: "OpenAI", status: "Q3 2025", savings: "Save 35-50%", delay: 0.3 },
    { name: "Claude", status: "Q3 2025", savings: "Save 30-45%", delay: 0.4 },
    { name: "Cohere", status: "Q4 2025", savings: "Save 25-40%", delay: 0.5 },
    { name: "Mistral", status: "Q4 2025", savings: "Save 30-50%", delay: 0.6 }
  ];

  return (
    <section id="integrations" className="py-20 border-t border-teal/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Supported AI Providers
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            One integration to rule them all. Switch providers with zero code changes.
            Our optimization works across all major AI APIs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {providers.map((provider, index) => (
            <ProviderCard key={index} {...provider} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-navy/30 border border-teal/20 rounded-lg p-6 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">How It Works</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-teal/20 text-teal h-12 w-12 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                1
              </div>
              <h4 className="font-semibold mb-2">Drop-in Replacement</h4>
              <p className="text-sm text-gray-300">
                Change api.openai.com to api.asynova.com. That's it.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal/20 text-teal h-12 w-12 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                2
              </div>
              <h4 className="font-semibold mb-2">Automatic Optimization</h4>
              <p className="text-sm text-gray-300">
                We cache, compress, and route intelligently. No configuration needed.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal/20 text-teal h-12 w-12 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                3
              </div>
              <h4 className="font-semibold mb-2">Real-Time Savings</h4>
              <p className="text-sm text-gray-300">
                Watch your costs drop immediately. Track savings in our dashboard.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-8 text-sm text-gray-400">
          Need a specific provider? Beta partners get priority for new integrations.
        </div>
      </div>
    </section>
  );
};

export default Integration;