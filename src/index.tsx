/**
 * Asynova Revolutionary Landing Page
 * Bootstrap File
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Metric } from 'web-vitals';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create root element
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render app with strict mode for better development experience
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring
reportWebVitals((metric: Metric) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }
  
  // Send to analytics in production
  if (process.env.NODE_ENV === 'production' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
});

// Service Worker for PWA support
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}

// Quantum easter egg
console.log(
  '%c🚀 Welcome to the Future of African Finance 🚀',
  'background: linear-gradient(135deg, #00d4ff, #b829ff); color: white; font-size: 24px; font-weight: bold; padding: 20px;'
);
console.log(
  '%c⚡ Built with Quantum Technology by Asynova ⚡',
  'color: #00d4ff; font-size: 14px; padding: 10px;'
);
