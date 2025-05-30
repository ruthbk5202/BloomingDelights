import React from 'react';
import { useRouter } from 'next/navigation';
import {useState} from 'react';

const BuyNowButton = () => {
  const [buyNow, setBuyNow] = useState(false);
  const router = useRouter(
    
  );
  const handleBuyNow = () => {
    setBuyNow(true);
   
    router.push('/buynow');
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