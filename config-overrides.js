const path = require('path');

module.exports = function override(config) {
  // Fix Three.js BatchedMesh module resolution issue
  config.resolve.alias = {
    ...config.resolve.alias,
    'three': path.resolve('./node_modules/three')
  };
  
  // Ignore source map warnings from @mediapipe
  config.ignoreWarnings = [
    {
      module: /node_modules\/@mediapipe/,
      message: /Failed to parse source map/
    }
  ];
  
  // Ensure proper module resolution
  config.resolve.extensions = [...config.resolve.extensions, '.ts', '.tsx'];
  
  // Optimize Three.js imports
  config.module.rules.push({
    test: /\.js$/,
    include: /node_modules\/three/,
    sideEffects: false
  });
  
  return config;
};
