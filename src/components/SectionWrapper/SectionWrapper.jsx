import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { trackSectionView } from '../../utils/analytics';

const SectionWrapper = ({ children, id, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  React.useEffect(() => {
    if (inView && id) {
      trackSectionView(id);
    }
  }, [inView, id]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;