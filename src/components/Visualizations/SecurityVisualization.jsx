import { motion } from 'framer-motion';

const SecurityVisualization = () => {
  return (
    <div className="relative bg-navy/70 border border-teal/20 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Enterprise-Grade Security Architecture</h3>
        <div className="bg-teal/20 text-teal text-xs px-3 py-1 rounded-full">
          Built for Financial Services
        </div>
      </div>
      
      <div className="relative min-h-[300px]">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,209,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,209,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        {/* Layer visualization */}
        <div className="relative z-10">
          {/* User/Client layer */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 px-4 py-3 bg-navy/70 border border-teal/20 rounded-lg"
          >
            <div className="flex justify-between items-center">
              <div className="text-sm font-medium">Financial Institution Systems</div>
              <div className="bg-navy/50 text-xs px-2 py-0.5 rounded">Client Layer</div>
            </div>
          </motion.div>
          
          {/* Connect arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="mx-auto h-6 w-0.5 bg-teal/30"
          ></motion.div>
          
          {/* API Security Layer */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-3 px-4 py-3 bg-navy/70 border border-teal/20 rounded-lg"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium">API Security Layer</div>
              <div className="bg-teal/10 text-teal text-xs px-2 py-0.5 rounded">In Development</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-navy/50 p-2 rounded text-xs">
                <div className="text-teal mb-1">Authentication</div>
                <div className="text-gray-400">OAuth 2.0 & MFA</div>
              </div>
              <div className="bg-navy/50 p-2 rounded text-xs">
                <div className="text-teal mb-1">Request Validation</div>
                <div className="text-gray-400">Input Sanitization</div>
              </div>
              <div className="bg-navy/50 p-2 rounded text-xs">
                <div className="text-teal mb-1">Rate Limiting</div>
                <div className="text-gray-400">DDoS Protection</div>
              </div>
            </div>
          </motion.div>
          
          {/* Connect arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.1 }}
            className="mx-auto h-6 w-0.5 bg-teal/30"
          ></motion.div>
          
          {/* Core Platform Layer */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mb-3 px-4 py-3 bg-navy/70 border border-teal/20 rounded-lg"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium">Core Orchestration Layer</div>
              <div className="bg-teal/10 text-teal text-xs px-2 py-0.5 rounded">In Development</div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-navy/50 p-2 rounded text-xs">
                <div className="text-teal mb-1">Compliance Engine</div>
                <div className="text-gray-400">Automated Documentation</div>
              </div>
              <div className="bg-navy/50 p-2 rounded text-xs">
                <div className="text-teal mb-1">Model Orchestration</div>
                <div className="text-gray-400">Gemini 2.0 Flash Integration</div>
              </div>
            </div>
          </motion.div>
          
          {/* Connect arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.7 }}
            className="mx-auto h-6 w-0.5 bg-teal/30"
          ></motion.div>
          
          {/* Data Security Layer */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="px-4 py-3 bg-navy/70 border border-teal/20 rounded-lg"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium">Data Security Layer</div>
              <div className="bg-teal/10 text-teal text-xs px-2 py-0.5 rounded">In Development</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-navy/50 p-2 rounded text-xs">
                <div className="text-teal mb-1">Encryption</div>
                <div className="text-gray-400">AES-256 at Rest</div>
              </div>
              <div className="bg-navy/50 p-2 rounded text-xs">
                <div className="text-teal mb-1">Data Isolation</div>
                <div className="text-gray-400">Tenant Separation</div>
              </div>
              <div className="bg-navy/50 p-2 rounded text-xs">
                <div className="text-teal mb-1">Audit Logging</div>
                <div className="text-gray-400">Tamper-Resistant</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Compliance badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.3 }}
        className="mt-6 flex flex-wrap justify-center gap-3"
      >
        <div className="bg-navy/50 border border-teal/20 px-3 py-1 rounded-full text-xs">
          SOC 2 Standards
        </div>
        <div className="bg-navy/50 border border-teal/20 px-3 py-1 rounded-full text-xs">
          GDPR Compliant
        </div>
        <div className="bg-navy/50 border border-teal/20 px-3 py-1 rounded-full text-xs">
          End-to-End Encryption
        </div>
        <div className="bg-navy/50 border border-teal/20 px-3 py-1 rounded-full text-xs">
          Access Controls
        </div>
      </motion.div>
    </div>
  );
};

export default SecurityVisualization;