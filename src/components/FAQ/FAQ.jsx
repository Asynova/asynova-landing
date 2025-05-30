import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-teal/10 py-6"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className="text-teal ml-4">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      {isOpen && (
        <div className="mt-3 text-gray-300">
          {answer}
        </div>
      )}
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How much can we actually save?",
      answer: "Most fintechs see 40-60% reduction in AI costs. For example, if you're spending $5,000/month on Gemini APIs, you'll likely save $2,000-3,000/month. The savings come from intelligent caching (30-40%), request optimization (10-15%), and future multi-provider routing (additional 10-20%)."
    },
    {
      question: "How does it work technically?",
      answer: "Simply change your API endpoint from api.openai.com to api.asynova.com. Our platform sits between you and AI providers, automatically caching repeated requests, optimizing token usage, and using ML to predict and prevent cost overruns. Your code stays exactly the same."
    },
    {
      question: "Is this ready for production?",
      answer: "Yes, the core platform is built and deployed on AWS. We're offering 3 months free for beta partners to prove the value before you pay. You can start saving money immediately while we add more features based on your feedback."
    },
    {
      question: "What AI providers do you support?",
      answer: "Currently supporting Gemini (all models). OpenAI and Anthropic Claude coming in Q3 2025. Our architecture supports any REST-based AI API, so we can add new providers based on demand."
    },
    {
      question: "How is this different from just using the APIs directly?",
      answer: "Direct API usage means you pay for every request, even duplicates. You have no cost visibility until the bill arrives. We provide intelligent caching, real-time cost tracking, predictive budgeting, and future features like automatic provider switching for optimal pricing."
    },
    {
      question: "What's the catch? Why is beta free?",
      answer: "No catch. We need real usage data to optimize our algorithms. You get 3 months free, we get valuable feedback. After beta, pricing starts at $500/month for small fintechs, scaling based on your savings (we typically charge 20-30% of what we save you)."
    },
    {
      question: "How secure is this?",
      answer: "Enterprise-grade security with end-to-end encryption. We never store your prompts or responses - only metadata for caching. SOC 2 compliance in progress. Your data never leaves your preferred region (we support AWS Kenya region)."
    },
    {
      question: "Can we trust a platform built by one person?",
      answer: "Fair question. The platform is built on proven AWS infrastructure with 99.9% uptime SLA. The code is production-grade with automated testing and monitoring. Plus, you're not locked in - you can switch back to direct APIs anytime by changing one line of code."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-navy/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Common Questions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Straight answers about how we save you money
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;