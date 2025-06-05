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
  title = 'Asynova - Operational Intelligence for African Finance',
  description = 'Predict and prevent banking system failures before they cascade. Save millions with AI-powered operational intelligence for African financial institutions.',
  keywords = 'banking AI, system failure prediction, operational intelligence, African fintech, M-Pesa integration, banking system monitoring, failure prevention, cost optimization, financial technology Kenya',
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
      "https://linkedin.com/company/asynova",
      "https://twitter.com/asynova"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-XXX-XXXXX",
      "contactType": "sales",
      "areaServed": ["KE", "NG", "ZA", "EG"],
      "availableLanguage": ["en", "sw"]
    },
    "offers": {
      "@type": "Offer",
      "name": "Operational Intelligence Platform",
      "description": "AI-powered system failure prediction for banks",
      "priceCurrency": "USD",
      "price": "10000",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "10000",
        "priceCurrency": "USD",
        "unitText": "MONTH"
      }
    }
  };

  // Product structured data for landing page
  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Asynova Platform",
    "applicationCategory": "FinancialSoftware",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "24",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": [
      "Real-time failure prediction",
      "M-Pesa integration monitoring",
      "Cost optimization AI",
      "Multi-bank pattern recognition",
      "24/7 system monitoring"
    ]
  };

  const finalStructuredData = structuredData || [defaultStructuredData, productStructuredData];

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
      <meta name="revisit-after" content="7 days" />
      
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
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="sw" href={`${url}/sw`} />
      
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
