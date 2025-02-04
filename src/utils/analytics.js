// src/utils/analytics.js

export const GA_TRACKING_ID = 'G-32ZNB2RDKF';

// Keep existing pageview tracking
export const pageview = (url) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Keep existing event tracking but enhance it
export const event = ({ action, category, label, value, extraParams = {} }) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...extraParams,
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
    });
  }
};

// Add new form-specific tracking
export const trackFormStep = (step) => {
  event({
    action: 'waitlist_form_step',
    category: 'Form',
    label: `Step ${step}`,
    value: step,
    extraParams: {
      form_type: 'beta_signup'
    }
  });
};

// Add form submission tracking
export const trackFormSubmission = (formData) => {
  event({
    action: 'waitlist_submit',
    category: 'Form',
    label: formData.company,
    extraParams: {
      company_size: formData.companySize,
      role: formData.role,
      timeline: formData.implementationTimeline,
      beta_interest: formData.betaInterest,
      has_use_case: !!formData.useCase
    }
  });
};

// Add section view tracking
export const trackSectionView = (sectionId) => {
  event({
    action: 'section_view',
    category: 'Engagement',
    label: sectionId,
    extraParams: {
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight
    }
  });
};

// Add CTA click tracking
export const trackCTAClick = (ctaId, location) => {
  event({
    action: 'cta_click',
    category: 'Engagement',
    label: ctaId,
    extraParams: {
      location: location
    }
  });
};