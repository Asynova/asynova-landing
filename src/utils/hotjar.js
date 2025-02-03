export const triggerHotjarEvent = (eventName) => {
    if (typeof window.hj === 'function') {
      window.hj('event', eventName);
    }
  };