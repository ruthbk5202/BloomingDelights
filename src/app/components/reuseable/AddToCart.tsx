import React, { ReactNode, ButtonHTMLAttributes, useState } from "react";
import "./AddToCart.css"; 

interface AddToCartProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  dialogMessage?: string;
}

const AddToCart: React.FC<AddToCartProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  dialogMessage = "Item added to cart!",
  ...props
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    setIsDialogOpen(true);
    setTimeout(() => setIsDialogOpen(false), 3000);
  };

  return (
    <>
      <button
        type={type}
        onClick={handleClick}
        disabled={disabled}
        className={`add-to-cart-btn ${className}`}
        {...props}
      >
        {children}
      </button>

      {isDialogOpen && (
        <div className="modal-overlay">
          <div className="dialog-box">
            <p className="dialog-message">{dialogMessage}</p>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="close-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddToCart;
