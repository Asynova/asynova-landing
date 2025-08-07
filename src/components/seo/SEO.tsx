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
  title = 'Asynova - AI Cost Optimization Platform | Save Up to 70% on AI API Costs',
  description = 'Cut your OpenAI, Claude, and Gemini costs by up to 70% with quality-first optimization. Pay only 20% of what you save. Connect your API keys and start saving immediately.',
  keywords = 'AI cost optimization, OpenAI cost reduction, Claude API optimization, Gemini API savings, AI API cost tracker, quality-first optimization, smart caching, intelligent model selection',
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
      "https://github.com/asynova/asynova-core",
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
    "name": "Asynova Cost Optimizer",
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
          "unitText": "Free tier with own API keys",
          "name": "Free Optimization"
        },
        {
          "@type": "UnitPriceSpecification",
          "price": "20",
          "priceCurrency": "USD",
          "unitText": "Percent of savings only",
          "name": "Pro Dashboard"
        }
      ],
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Up to 70% AI cost reduction",
      "Quality-first optimization approach", 
      "Multi-provider support (OpenAI, Claude, Gemini)",
      "Real-time savings tracking",
      "Advanced caching and intelligent model selection",
      "Open source core (MIT license)",
      "5-minute setup",
      "Pay only from savings"
    ],
    "screenshot": "https://asynova.com/screenshot.png",
    "softwareVersion": "1.0",
    "releaseNotes": "https://github.com/asynova/asynova-core/releases"
  };

  // FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Asynova reduce AI costs by up to 70%?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Asynova uses advanced caching, intelligent model selection within providers, request batching, and prompt compression. Connect multiple providers (OpenAI, Claude, Gemini) for maximum savings through cross-provider optimization."
        }
      },
      {
        "@type": "Question", 
        "name": "How does the pricing work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You pay only 20% of what we save you. No upfront costs, no fixed fees. If we save you $1000/month, you pay us $200 and keep $800. If we don't save you money, you pay nothing."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to give you my API keys?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you connect your own OpenAI, Claude, and/or Gemini API keys. We optimize your requests but you pay the providers directly for reduced costs. Your keys are encrypted and never stored in plain text."
        }
      },
      {
        "@type": "Question",
        "name": "Will optimization affect response quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use conservative quality-first defaults. Our system intelligently classifies tasks and only uses cheaper models when quality won't be affected. You have full control over optimization aggressiveness."
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
