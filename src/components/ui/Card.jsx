import React from 'react';
import { motion } from 'framer-motion';
import { hoverLift } from '../../utils/animations';

const Card = ({
  children,
  variant = 'default',
  padding = 'md',
  hover = true,
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-200';
  
  const variants = {
    default: 'bg-white',
    glass: 'bg-white/80 backdrop-blur-sm border-white/20',
    elevated: 'bg-white shadow-lg',
  };
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${className}`;
  
  const Component = onClick ? motion.button : motion.div;
  
  return (
    <Component
      className={classes}
      onClick={onClick}
      whileHover={hover && onClick ? hoverLift : {}}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
