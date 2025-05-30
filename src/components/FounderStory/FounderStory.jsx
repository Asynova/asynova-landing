import { motion } from 'framer-motion';

const FounderStory = () => {
  return (
    <section className="py-20 bg-navy/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Why I Built Asynova</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-navy/30 border border-teal/20 rounded-xl p-8 mb-10"
          >
            <div className="text-xl text-gray-300 mb-6">
              "I was building an AI system when I saw my AWS bill: $200 for testing alone. 
              I realized if I'm struggling with costs, what about Kenyan fintechs running millions of requests?
              <br/><br/>
              I discovered they're wasting 40-60% on duplicate requests, inefficient prompts, 
              and zero cost visibility. No one was solving this.
              <br/><br/>
              So I built the solution myself. Enterprise-grade caching, ML cost prediction, 
              real-time monitoring. Everything a fintech needs to control AI costs.
              <br/><br/>
              Today, it saves money. Tomorrow, it will predict banking failures before they happen."
            </div>

            <div className="flex items-center">
              <div className="h-12 w-12 bg-teal/20 rounded-full flex items-center justify-center text-teal font-bold">
                DB
              </div>
              <div className="ml-4">
                <div className="font-semibold">Daniel Bitengo</div>
                <div className="text-sm text-gray-400">Founder & Builder, Asynova</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-gray-300 mb-4">
              Built in Kenya. For Kenya. By someone who gets it.
            </p>
            <p className="text-sm text-gray-400">
              100% focused on making AI affordable for African finance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;