import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for safely merging tailwind classes using clsx and tailwind-merge
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function FadeIn({ children, delay = 0, className, direction = "up", ...props }) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.7, 
        ease: [0.21, 0.47, 0.32, 0.98], // Custom cubic-bezier for a smooth organic feel
        delay: delay
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({ children, staggerDelay = 0.1, className, ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStaggerItem({ children, className, direction = "up", ...props }) {
    const directions = {
      up: { y: 40, x: 0 },
      down: { y: -40, x: 0 },
      left: { x: 40, y: 0 },
      right: { x: -40, y: 0 },
    };
  
    return (
      <motion.div
        variants={{
          hidden: { 
              opacity: 0, 
              ...directions[direction]
          },
          visible: { 
              opacity: 1, 
              x: 0, 
              y: 0,
              transition: {
                  duration: 0.7,
                  ease: [0.21, 0.47, 0.32, 0.98]
              }
          }
        }}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
