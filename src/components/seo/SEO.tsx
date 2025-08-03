/**
 * SEO & Meta Component
 * Handles all SEO, meta tags, and structured data
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Asynova - Multi-Agent AI Orchestration Platform | Cut AI Costs by 60%',
  description = 'Build powerful AI workflows visually. Cut your OpenAI, Claude, and Gemini costs by 60% with semantic caching and smart optimization. Open source core.',
  keywords = 'AI orchestration, multi-agent AI, AI cost optimization, LangChain alternative, AI workflow builder, OpenAI cost reduction, Claude API optimization, Gemini API, semantic caching, visual AI builder',
  image = 'https://asynova.com/og-image.png',
  url = 'https://asynova.com',
  type = 'website',
  structuredData
}) => {
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Asynova",
    "description": description,
    "url": url,
    "logo": "https://asynova.com/logo.png",
    "sameAs": [
      "https://github.com/asynova",
      "https://twitter.com/asynova",
      "https://discord.gg/asynova",
      "https://dev.to/asynova"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@asynova.com",
      "contactType": "technical support",
      "areaServed": "Worldwide",
      "availableLanguage": ["en"]
    }
  };

  // Product structured data for landing page
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Asynova Platform",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "priceSpecification": [
        {
          "@type": "UnitPriceSpecification",
          "price": "0",
          "priceCurrency": "USD",
          "unitText": "1000 API calls/month",
          "name": "Free Tier"
        },
        {
          "@type": "UnitPriceSpecification",
          "price": "49",
          "priceCurrency": "USD",
          "unitText": "MONTH",
          "name": "Pro Plan"
        }
      ],
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Visual workflow builder for AI agents",
      "60% cost reduction through optimization",
      "Multi-model support (OpenAI, Claude, Gemini)",
      "Real-time execution monitoring",
      "Semantic caching and smart model selection",
      "Open source core (MIT license)",
      "5-minute deployment",
      "No vendor lock-in"
    ],
    "screenshot": "https://asynova.com/screenshot.png",
    "softwareVersion": "2.0",
    "releaseNotes": "https://github.com/asynova/releases"
  };

  // FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Asynova reduce AI costs by 60%?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Asynova uses semantic caching, smart model selection, request batching, and prompt compression to optimize every API call. Our algorithms automatically choose the cheapest model that can handle each task."
        }
      },
      {
        "@type": "Question",
        "name": "Is Asynova open source?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our core optimization algorithms are open source under MIT license. The platform that runs the infrastructure is source-available."
        }
      },
      {
        "@type": "Question",
        "name": "Which AI models does Asynova support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Asynova supports OpenAI (GPT-3.5, GPT-4), Anthropic (Claude), Google (Gemini), and many open source models. You can mix and match models in the same workflow."
        }
      }
    ]
  };

  const finalStructuredData = structuredData || [defaultStructuredData, productStructuredData, faqStructuredData];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Asynova" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="3 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Asynova" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:site" content="@asynova" />
      
      {/* Additional Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#000000" />
      
      {/* GitHub Verification */}
      <meta name="github-site-verification" content="asynova" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(Array.isArray(finalStructuredData) ? finalStructuredData : [finalStructuredData])}
      </script>
      
      {/* Preconnect to important domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://api.asynova.com" />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://api.asynova.com" />
    </Helmet>
  );
};

export default SEO;
