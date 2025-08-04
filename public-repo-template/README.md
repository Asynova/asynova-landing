# Asynova Core - AI Cost Optimization Algorithms

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/%40asynova%2Fcore.svg)](https://badge.fury.io/js/%40asynova%2Fcore)

Open-source algorithms that power [Asynova's](https://asynova.com) 60% cost reduction for AI APIs.

## 🚀 Why Asynova Core?

Every AI application faces the same problem: **API costs spiral out of control**. We've solved this with production-tested algorithms that cut costs by 60% without sacrificing quality.

### Real Results from Production:
- **Blog Generation**: $12 → $4.80 per workflow
- **Data Analysis**: $45 → $18 per pipeline  
- **Customer Service Bot**: $200 → $80 per day

## 🛠️ Installation

```bash
npm install @asynova/core
# or
yarn add @asynova/core
```

## 💡 Quick Start

```javascript
import { CostOptimizer } from '@asynova/core';

// Initialize the optimizer
const optimizer = new CostOptimizer({
  enableCaching: true,
  semanticThreshold: 0.85,
  modelSelection: 'auto'
});

// Optimize any AI request
const result = await optimizer.optimizeRequest({
  prompt: "Summarize this article about climate change",
  content: articleText,
  maxTokens: 500
});

console.log(`Cost saved: ${result.savingsPercent}%`);
console.log(`Model used: ${result.model}`);
```

## 📊 How It Works

### 1. Semantic Deduplication
Instead of making the same API call twice, we cache semantically similar requests:

```javascript
// These two prompts will be matched as similar:
"Summarize this article"
"Can you provide a summary of this article"

// Result: 100% cost savings on the second request
```

### 2. Smart Model Selection
Not every task needs GPT-4 or Gemini Pro:

```javascript
// Simple task → Cheaper model (Gemini Flash)
"Extract email addresses from this text"

// Complex task → Premium model (Gemini Pro)
"Analyze the psychological implications of this research paper"

// Result: 40-70% cost reduction through intelligent routing
```

### 3. Request Batching
Combine multiple small requests into efficient batches:

```javascript
// Instead of 10 separate API calls
const results = await optimizer.batchProcess([
  { prompt: "Translate 'Hello' to Spanish" },
  { prompt: "Translate 'Goodbye' to Spanish" },
  // ... 8 more translations
]);

// Result: 80% reduction in API overhead
```

## 🔧 Advanced Usage

### With Redis for Production Caching

```javascript
import Redis from 'ioredis';
import { CostOptimizer } from '@asynova/core';

const redis = new Redis();

const optimizer = new CostOptimizer({
  cacheAdapter: redis,
  cacheTTL: 3600, // 1 hour
  enableSemanticSearch: true
});
```

### Custom Model Routing

```javascript
const optimizer = new CostOptimizer({
  modelRouter: (task) => {
    if (task.complexity < 0.3) return 'gemini-flash';
    if (task.complexity < 0.7) return 'gemini-pro';
    return 'gpt-4';
  }
});
```

### Monitoring Savings

```javascript
optimizer.on('savings', (event) => {
  console.log(`Saved ${event.amount} on ${event.model}`);
  // Send to your analytics
});
```

## 📈 Benchmarks

| Workload Type | Traditional Cost | With Asynova Core | Savings |
|---------------|------------------|-------------------|---------|
| Blog Pipeline | $12.50 | $5.00 | 60% |
| Data Analysis | $45.00 | $18.00 | 60% |
| Translation Batch | $8.00 | $2.40 | 70% |
| Code Generation | $15.00 | $6.00 | 60% |

## 🏗️ Architecture

```
┌─────────────────┐
│   Your App      │
└────────┬────────┘
         │
┌────────▼────────┐
│  Asynova Core   │
├─────────────────┤
│ • Semantic Cache│
│ • Model Router  │
│ • Batch Queue   │
│ • Cost Tracker  │
└────────┬────────┘
         │
┌────────▼────────┐
│   AI APIs       │
│ • OpenAI        │
│ • Gemini        │
│ • Claude        │
└─────────────────┘
```

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Setup

```bash
# Clone the repo
git clone https://github.com/Asynova/asynova-core.git
cd asynova-core

# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build
```

## 📚 Full Documentation

Visit [docs.asynova.com](https://docs.asynova.com) for complete API documentation.

## 🚀 Want More?

This open-source library provides the core algorithms. For a complete solution with:
- Visual workflow builder
- Multi-agent orchestration
- Real-time monitoring
- Team collaboration
- Priority support

Check out [Asynova Platform](https://asynova.com) - free for up to 1,000 API calls/month.

## 📄 License

MIT © [Asynova](https://github.com/Asynova)

---

Built with ❤️ by developers who were tired of choosing between features and bankruptcy.