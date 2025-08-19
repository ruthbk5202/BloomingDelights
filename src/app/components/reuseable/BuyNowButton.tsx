import React from 'react';
import { useRouter } from 'next/navigation';


const BuyNowButton = () => {

  const router = useRouter(
    
  );
  const handleBuyNow = () => {
   
   
    router.push('/DeliveryInfoForm');
  };
  return (
    <div>
        <button className="px-4 py-2 rounded bg-pink-500 text-white custom-btn" onClick={handleBuyNow}>
            Buy Now
        </button>
    </div>
  )
}

export default BuyNowButton;