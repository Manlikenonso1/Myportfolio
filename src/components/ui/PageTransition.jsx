import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const variants = {
  initial: { opacity: 0, y: 16 },
  enter:   { opacity: 1, y: 0,  transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] } }
};

export default function PageTransition({ children }) {
  const { pathname } = useLocation();

  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
