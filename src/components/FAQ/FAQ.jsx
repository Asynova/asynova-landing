import { motion } from 'framer-motion';
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-teal/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left"
      >
        <span className="text-lg font-semibold">{question}</span>
        <span className="text-teal ml-4">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <div className="pb-4 text-gray-300">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "When will Asynova launch?",
      answer: "We're targeting a beta launch in early 2025. Join our waitlist to be among the first to get access and help shape the product."
    },
    {
      question: "How does the beta program work?",
      answer: "Beta users will get early access to our platform, direct support from our team, and the opportunity to influence our feature roadmap. We'll work closely with you to ensure the platform meets your specific needs."
    },
    {
      question: "What kind of support will early users get?",
      answer: "Beta users receive priority support, including direct access to our technical team, implementation assistance, and regular check-ins to gather feedback and address any issues."
    },
    {
      question: "Will there be special pricing for early adopters?",
      answer: "Yes! Beta users will receive preferential pricing that will be grandfathered in after our official launch. Specific terms will be shared during the beta onboarding process."
    },
    {
      question: "How are you handling security and compliance?",
      answer: "Security and compliance are core priorities. We're building our platform with SOC 2 and GDPR requirements in mind, and we'll work closely with beta users to ensure we meet their specific compliance needs."
    },
    {
      question: "Can we request specific features or integrations?",
      answer: "Absolutely! Beta users have direct input into our product roadmap. We're actively seeking feedback on feature priorities and integration needs."
    }
  ];

  return (
    <section className="py-20 border-t border-teal/10">
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
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            Have more questions? We'd love to hear from you.
          </p>
          <a
            href="mailto:beta@asynova.com"
            className="text-teal hover:underline"
          >
            Contact us about the beta program →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;