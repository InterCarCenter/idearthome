
import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  className?: string;
  [key: string]: any;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) => {
  const base = "relative px-10 py-5 font-bold uppercase tracking-widest text-xs transition-all duration-500 z-10 overflow-hidden inline-flex items-center justify-center gap-3";
  
  const variants = {
    primary: "bg-[#1A1A1A] text-white btn-liquid",
    secondary: "bg-[#C4A484] text-white btn-liquid",
    outline: "border-2 border-[#1A1A1A] text-[#1A1A1A] hover:text-white btn-liquid",
    whatsapp: "bg-[#25D366] text-white rounded-full px-6 py-3"
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
