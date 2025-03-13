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
      question: "When will Asynova launch?",
      answer: "We're targeting a beta launch in April 2025. Currently, we're in week 5 of our 8-week development sprint and selecting our initial 5 beta partners. Join our waitlist to be considered for early access."
    },
    {
      question: "Is this ready for production use?",
      answer: "The platform is currently in development. Our beta partners will have early access to test and provide feedback, helping us refine the platform before it's used for production workloads. We expect beta testing to last 2-3 months before moving to production readiness."
    },
    {
      question: "What if we use different AI models than Gemini 2.0?",
      answer: "While our initial MVP focuses on Gemini 2.0 Flash integration, our architecture is designed to support multiple models. Our beta partners will help us prioritize which additional integrations to build next. We plan to add support for other leading models based on partner feedback."
    },
    {
      question: "How secure is the platform?",
      answer: "Security is our foundation. We're building with SOC 2 compliance standards and end-to-end encryption from day one. Our security architecture documentation is available for review by beta partners, and we welcome your security team's input during the evaluation process."
    },
    {
      question: "What are the requirements to join the beta program?",
      answer: "We're looking for financial institutions actively planning AI implementation in the next 3-6 months, who can commit to providing regular feedback. While we don't require a specific size, ideal partners have technical teams ready to engage with our platform and share their implementation challenges."
    },
    {
      question: "How much will Asynova cost after launch?",
      answer: "Final pricing will be determined based on beta feedback, but we're planning a tiered subscription model starting at approximately $3,000/month for smaller fintechs and scaling based on usage. As a founding partner, you'll receive preferential pricing that remains locked in after our official launch."
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
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about joining our beta program
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