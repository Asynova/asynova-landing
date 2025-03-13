import { motion } from 'framer-motion';

const DocGenerationVisualization = () => {
  // Sample documents that would need to be manually created
  const documents = [
    "Model Explainability Report",
    "GDPR Compliance Assessment",
    "Bias Detection Analysis",
    "Data Lineage Documentation",
    "Regulatory Framework Mapping",
    "Model Performance Metrics",
    "Security Risk Assessment",
    "Data Privacy Impact Analysis"
  ];

  return (
    <div className="relative bg-navy/70 border border-teal/20 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Compliance Documentation Automation</h3>
        <div className="bg-teal/20 text-teal text-xs px-3 py-1 rounded-full">
          Reduces 200+ Hours to Minutes
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Left side: Manual Documentation */}
        <div>
          <div className="bg-navy/50 p-3 rounded-lg mb-3">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium text-red-400">Manual Process</div>
              <div className="text-xs text-gray-400">200+ Hours</div>
            </div>
            
            <div className="space-y-2">
              {documents.map((doc, index) => (
                <motion.div
                  key={doc}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  className="flex items-center bg-navy/70 p-2 rounded"
                >
                  <div className="h-3 w-3 rounded-full bg-red-400/20 flex items-center justify-center mr-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-400"></div>
                  </div>
                  <div className="text-xs text-gray-300">{doc}</div>
                  <div className="ml-auto text-xs text-red-400">Manual</div>
                </motion.div>
              ))}
              
              <div className="mt-4 p-2 border border-red-400/20 rounded text-xs text-gray-400">
                Requires specialized compliance knowledge and extensive engineering time
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side: Automated With Asynova */}
        <div>
          <div className="bg-navy/50 p-3 rounded-lg mb-3">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium text-teal">Asynova Automation</div>
              <div className="text-xs text-gray-400">Minutes</div>
            </div>
            
            <div className="space-y-2 mb-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="bg-navy/70 p-3 rounded"
              >
                <div className="flex items-center mb-2">
                  <div className="h-4 w-4 rounded-full bg-teal/20 flex items-center justify-center mr-2">
                    <div className="h-2 w-2 rounded-full bg-teal"></div>
                  </div>
                  <div className="text-sm text-teal">One-Click Generation</div>
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {documents.map((doc, index) => (
                    <motion.span
                      key={doc}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 2.5 + (index * 0.1) }}
                      className="text-xs bg-teal/10 text-teal px-2 py-0.5 rounded"
                    >
                      {doc.split(' ')[0]}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.5 }}
              className="p-2 border border-teal/20 rounded text-xs text-gray-400"
            >
              Automatically handles regulatory requirements across frameworks
            </motion.div>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 4 }}
        className="mt-4 bg-navy/40 p-3 rounded-lg"
      >
        <div className="text-sm font-medium mb-2">Benefits</div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-navy/70 p-2 rounded text-center">
            <div className="text-teal text-lg font-bold">85%</div>
            <div className="text-xs text-gray-400">Time Saved</div>
          </div>
          <div className="bg-navy/70 p-2 rounded text-center">
            <div className="text-teal text-lg font-bold">100%</div>
            <div className="text-xs text-gray-400">Compliance Coverage</div>
          </div>
          <div className="bg-navy/70 p-2 rounded text-center">
            <div className="text-teal text-lg font-bold">3-5x</div>
            <div className="text-xs text-gray-400">Faster Updates</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DocGenerationVisualization;