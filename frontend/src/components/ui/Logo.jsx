import { motion } from 'framer-motion';

const Logo = ({ 
  className = '', 
  size = 40, 
  animated = true,
  showText = false,
  textColor = 'auto'
}) => {
  const drawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 2, ease: 'easeInOut' }, opacity: { duration: 0.8 } },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 1.2, ease: 'easeOut' } },
  };

  const Paths = ({ motionPath }) => {
    const PathComp = motionPath ? motion.path : 'path';
    const props = motionPath ? { variants: drawVariants } : {};
    
    return (
      <>
        {/* Letter G */}
        <PathComp d="M 45 30 L 25 30 L 25 70 L 45 70 L 45 50 L 35 50" stroke="#06b6d4" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} />
        {/* Letter P */}
        <PathComp d="M 60 70 L 60 30 L 75 30 Q 85 30 85 45 Q 85 60 75 60 L 60 60" stroke="#06b6d4" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} />
      </>
    );
  };

  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        initial={animated ? "hidden" : "visible"}
        animate="visible"
      >
        <Paths motionPath={animated} />
      </motion.svg>
      
      {showText && (
        <motion.span
          variants={textVariants}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          className={`font-display font-bold text-xl ${
            textColor === 'white' || className.includes('text-white') 
              ? 'text-white' 
              : textColor === 'dark'
              ? 'text-gray-900'
              : 'text-gray-900'
          }`}
        >
          Gatepass
        </motion.span>
      )}
    </motion.div>
  );
};

export default Logo;
