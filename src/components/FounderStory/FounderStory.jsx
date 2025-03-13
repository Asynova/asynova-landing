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
            <div className="text-xl text-gray-300 mb-6 italic">
              "While developing a privacy-preserving AI system, I watched a major bank abandon 
              their fraud detection project after costs ballooned by 170%.
              <br/><br/>
              I discovered financial institutions waste 40-60% of their AI budgets on manual 
              compliance documentation and inefficient implementation. What should take weeks 
              stretches into 9+ month ordeals.
              <br/><br/>
              That's when I knew there had to be a better way."
            </div>

            <div className="flex items-center">
              <div className="h-12 w-12 bg-teal/20 rounded-full flex items-center justify-center text-teal">
                DB
              </div>
              <div className="ml-4">
                <div className="font-semibold">Daniel Bitengo</div>
                <div className="text-sm text-gray-400">Founder, Asynova</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-gray-300"
          >
            Currently balancing engineering studies at University of Nairobi while 
            developing Asynova to solve this critical market need.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;