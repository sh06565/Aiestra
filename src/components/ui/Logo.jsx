import React from 'react';

const Logo = ({ className = '', size = 'default' }) => {
  const sizeClasses = {
    small: 'text-lg',
    default: 'text-2xl',
    large: 'text-3xl'
  };

  return (
    <div className={`font-bold ${sizeClasses[size]} ${className}`}>
      <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
        aiestra
      </span>
    </div>
  );
};

export default Logo;
