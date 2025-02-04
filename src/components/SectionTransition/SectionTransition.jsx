import React, { Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { trackSectionView } from '../../utils/analytics';

const SectionTransition = ({ children, id, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Track when section comes into view
  useEffect(() => {
    if (inView && id) {
      trackSectionView(id);
    }
  }, [inView, id]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Loading placeholder that matches our design
const LoadingPlaceholder = () => (
  <div className="py-20">
    <div className="container mx-auto px-4">
      <div className="animate-pulse space-y-8">
        <div className="h-8 bg-navy/50 rounded w-1/3 mx-auto" />
        <div className="h-4 bg-navy/50 rounded w-2/3 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-48 bg-navy/50 rounded" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// HOC to wrap lazy-loaded components
export const withSectionTransition = (WrappedComponent, id) => {
  return function WithSectionTransition(props) {
    return (
      <Suspense fallback={<LoadingPlaceholder />}>
        <SectionTransition id={id}>
          <WrappedComponent {...props} />
        </SectionTransition>
      </Suspense>
    );
  };
};

export default SectionTransition;