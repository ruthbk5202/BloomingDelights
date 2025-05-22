
import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface AddToCartProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const AddToCart: React.FC<AddToCartProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` px-4 py-2 rounded bg-pink-500 text-white custom-btn ${className}`}
      {...props}
    >
      {children}
  
    </button>
  );
};

export default AddToCart;