import { ReactNode } from "react";

interface WireframeButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "large";
  onClick?: () => void;
  className?: string;
}

export function WireframeButton({ 
  children, 
  variant = "primary", 
  onClick,
  className = ""
}: WireframeButtonProps) {
  const baseStyles = "border-2 font-medium transition-colors";
  
  const variantStyles = {
    primary: "bg-gray-800 text-white border-gray-900 min-h-14 px-6 py-4",
    secondary: "bg-white text-gray-800 border-gray-400 min-h-12 px-5 py-3",
    large: "bg-gray-800 text-white border-gray-900 min-h-20 px-6 py-5 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className} w-full`}
    >
      {children}
    </button>
  );
}
