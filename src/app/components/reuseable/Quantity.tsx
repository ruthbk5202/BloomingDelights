import { useState } from 'react';

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => Math.max(1, prev - 1)); // Never goes below 1

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={decrement}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
      >
        -
      </button>
      
      <span className="w-8 text-center">{quantity}</span>
      
      <button 
        onClick={increment}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
      >
        +
      </button>
    </div>
  );
};
export default QuantityButton;