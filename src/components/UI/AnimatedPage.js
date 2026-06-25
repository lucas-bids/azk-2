import { motion } from "framer-motion";

const pageTransition = {
  duration: 0.22,
  ease: [0.22, 1, 0.36, 1],
};

const AnimatedPage = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
