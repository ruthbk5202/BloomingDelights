import React from 'react';
import './AddToCartSucceed.css'; // You'll want to create this CSS file

const AddToCartSucceed = () => {
  return (
    <div className="success-container">
      <div className="success-icon">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="48" 
          height="48" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#4BB543" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="feather feather-check-circle"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <h2 className="success-message">Item added to cart successfully!</h2>
    </div>
  );
};

export default AddToCartSucceed;