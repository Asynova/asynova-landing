import { motion } from 'framer-motion';

const SecurityVisualization = () => {
  return (
    <div className="relative w-full h-full p-6">
      {/* Preview Badge */}
      <div className="absolute top-4 right-4 bg-teal/20 text-teal px-3 py-1 rounded-full text-sm">
        Security Architecture Preview
      </div>

      {/* Layers Visualization */}
      <div className="h-full flex flex-col justify-center space-y-4">
        {/* API Layer */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-navy/40 border border-teal/20 rounded-lg p-4"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">API Gateway</span>
            <span className="text-xs bg-teal/10 text-teal px-2 py-1 rounded-full">
              Encrypted
            </span>
          </div>
          <div className="mt-2 text-xs text-gray-400">
            Request Validation • Rate Limiting • Access Control
          </div>
        </motion.div>

        {/* Authentication Layer */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-navy/40 border border-teal/20 rounded-lg p-4"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Authentication</span>
            <span className="text-xs bg-teal/10 text-teal px-2 py-1 rounded-full">
              OAuth 2.0
            </span>
          </div>
          <div className="mt-2 text-xs text-gray-400">
            Token Management • Role-Based Access • MFA
          </div>
        </motion.div>

        {/* Data Layer */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-navy/40 border border-teal/20 rounded-lg p-4"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Data Security</span>
            <span className="text-xs bg-teal/10 text-teal px-2 py-1 rounded-full">
              End-to-End
            </span>
          </div>
          <div className="mt-2 text-xs text-gray-400">
            Encryption at Rest • Secure Transit • Key Management
          </div>
        </motion.div>

        {/* Audit Layer */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-navy/40 border border-teal/20 rounded-lg p-4"
        >
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Compliance & Audit</span>
            <span className="text-xs bg-teal/10 text-teal px-2 py-1 rounded-full">
              Real-time
            </span>
          </div>
          <div className="mt-2 text-xs text-gray-400">
            Audit Trails • Activity Logs • Compliance Monitoring
          </div>
        </motion.div>

        {/* Connection Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,209,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,209,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>
      </div>
    </div>
  );
};

export default SecurityVisualization;