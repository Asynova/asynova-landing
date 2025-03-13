export const trackPageview = (url) => {
  if (window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: url
    });
  }
};

export const trackEvent = (action, category, label, value) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

export const trackWaitlistOpen = () => {
  trackEvent('waitlist_open', 'Engagement', 'Waitlist Form Opened');
};

export const trackWaitlistSubmit = (company, role) => {
  trackEvent('waitlist_submit', 'Conversion', company, role);
};

export const trackSectionView = (sectionId) => {
  trackEvent('section_view', 'Engagement', sectionId);
};