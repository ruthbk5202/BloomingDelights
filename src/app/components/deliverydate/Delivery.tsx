import React from 'react';
import { FaCalendarAlt, FaTruck, FaUser, FaBriefcase } from 'react-icons/fa';
import { IoStarSharp } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import "./delivery.css";

const Delivery = () => {
  const Card=[
    {

    }
  ]
  return (
    <div>
    <div className="features-container">
      {/* Feature 1: Choose your own delivery date */}
      <div className="feature-box">
        <div className="feature-icon">
          <FaCalendarAlt size={32} />
        </div>
        <div className="feature-text">
          <h3>Choose your own delivery date</h3>
         
        </div>
      </div>

      {/* Feature 2: Super fast delivery */}
      <div className="feature-box">
        <div className="feature-icon">
          <FaTruck size={32} />
        </div>
        <div className="feature-text">
          <h3>Super fast delivery</h3>
         
        </div>
      </div>

      {/* Feature 3: Personal contact */}
      <div className="feature-box">
        <div className="feature-icon">
          <FaUser size={32} />
        </div>
        <div className="feature-text">
          <h3>Personal Contact</h3>
          
        </div>
      </div>

      {/* Feature 4: Various business solutions */}
      <div className="feature-box">
        <div className="feature-icon">
          <FaBriefcase size={32} />
        </div>
        <div className="feature-text">
          <h3>Various business </h3>
          <h3>solutions</h3>
       
        </div>
      </div>
    </div>
    <div className='excellent'>
      <button className='button-review'>
      <IoStarSharp  />
      <IoStarSharp />
      <IoStarSharp />
      <IoStarSharp />
      <IoStarSharp /> 
      </button>
      <button className='button-excellent'>
        <h3>Excellent ! 7.8</h3>
        <p>From 2058 reviews</p>
      </button>
      <button className='button-email'>
      <HiOutlineMailOpen />
      </button>
    </div>
    <div className='why-bloomingdelights'>
      <h1>Why BloomingDelights ?</h1>
      <h2 className='iamthinking'>Because I'm thinking of you.

      </h2>
      <p>At Blooming Delights, You can easily order the most beautiful bouquets and floral gifts for any occasion. Whether it's your birthday, thankyou, declaration of love, or just a simple gesture, we'll make sure your flowers are delivered right toyour door with a personal message </p>
      <p>With our extensive range of beautiful flowers for every season and occasion, you're sure to find what you're looking for. Choose cheerful tulips, lush roses, or a modern cut-flower bouquet: we'll make sure your gesture makes an impression.
<p>
  
    <ul>
      <li>
✓ 7-day freshness guarantee</li>
<li>
✓ Ordered before 1 p.m. = delivered today</li>
<li>
✓ Tested as best</li></ul></p>

Our flowers are arranged daily with attention to detail and a passion for the craft. Thanks to our in-house delivery service, we can be sure your bouquet will be delivered with the utmost care and attention.

Order before 1:00 PM? Same-day delivery is even possible (excluding Sundays and public holidays). Prefer a different delivery date? We're happy to arrange that. You choose the time, and we'll take care of the rest.

Ordering for business? With a business account, you'll enjoy convenient features and exclusive benefits.

*Please note: delivery to the himalayas is unfortunately no longer possible.</p>
    </div>
    </div>
  );
};

export default Delivery;