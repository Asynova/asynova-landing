import { motion } from 'framer-motion';

const IntegrationLogo = ({ name, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-navy/50 border border-teal/20 rounded-lg p-6 flex flex-col items-center justify-center relative"
  >
    {/* Add "Planned" badge */}
    <div className="absolute top-2 right-2 bg-teal/20 text-teal text-xs px-2 py-1 rounded-full">
      Planned
    </div>
    {/* Replace with actual logos later */}
    <span className="text-gray-300 font-medium">{name}</span>
  </motion.div>
);

const Integration = () => {
  const integrations = [
    { name: "Plaid", delay: 0.2 },
    { name: "Refinitiv", delay: 0.3 },
    { name: "OpenAI", delay: 0.4 },
    { name: "AWS", delay: 0.5 },
    { name: "HuggingFace", delay: 0.6 }
  ];

  return (
    <section id="integrations" className="py-20 border-t border-teal/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Planned Integration Partners
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're building integrations with leading financial data providers and AI models.
            Join the waitlist to influence our integration roadmap.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {integrations.map((integration, index) => (
            <IntegrationLogo key={index} {...integration} />
          ))}
        </div>

        <div className="text-center mt-8 text-sm text-gray-400">
          More integration partners coming soon. Have a specific integration request?
          Let us know when you join the waitlist.
        </div>
      </div>
    </section>
  );
};

export default Integration;