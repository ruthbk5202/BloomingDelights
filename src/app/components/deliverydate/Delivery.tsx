'use client'; 

import React from 'react';
import { FaCalendarAlt, FaTruck, FaUser, FaBriefcase } from 'react-icons/fa';
import { IoStarSharp } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import Image from 'next/image';
import "./delivery.css";

const Delivery = () => {
  return (
    <div className="delivery-container">
    
      <div className="features-container">
        {[
          { icon: <FaCalendarAlt size={32} />, text: "Choose your own delivery date" },
          { icon: <FaTruck size={32} />, text: "Super fast delivery" },
          { icon: <FaUser size={32} />, text: "Personal Contact" },
          { icon: <FaBriefcase size={32} />, text: "Various business solutions" }
        ].map((feature, index) => (
          <div key={index} className="feature-box">
            <div className="feature-icon">{feature.icon}</div>
            <div className="feature-text">
              <h3>{feature.text}</h3>
            </div>
          </div>
        ))}
      </div>

     
      <div className='excellent'>
        <button className='button-review' aria-label="5-star rating">
          {[...Array(5)].map((_, i) => (
            <IoStarSharp key={i} />
          ))}
        </button>
        <button className='button-excellent'>
          <h3>Excellent ! 7.8</h3>
          <p>From 2058 reviews</p>
        </button>
        <button className='button-email' aria-label="Email us">
          <HiOutlineMailOpen />
        </button>
      </div>

      <section className='why-bloomingdelights'>
        <h1>Why BloomingDelights ?</h1>
        <h2 className='iamthinking'>Because I&apos;m thinking of you.</h2>
        
        <div className="about-content">
          <p>
            At Blooming Delights, You can easily order the most beautiful bouquets and floral gifts for any occasion. Whether it&apos;s your birthday, thankyou, declaration of love, or just a simple gesture, we&apos;ll make sure your flowers are delivered right toyour door with a personal message.
          </p>
          <p>
            With our extensive range of beautiful flowers for every season and occasion, you&apos;re sure to find what you&apos;re looking for. Choose cheerful tulips, lush roses, or a modern cut-flower bouquet: we&apos;ll make sure your gesture makes an impression.
          </p>
          <ul>
            <li>✓ 7-day freshness guarantee</li>
            <li>✓ Ordered before 1 p.m. = delivered today</li>
            <li>✓ Tested as best</li>
          </ul>
        </div>
        
        <div className="why-image-wrapper">
          <Image 
            src="/assets/images/why.jpg" 
            className='why-img'
            alt="Blooming Delights flowers"
            width={500}
            height={300}
            priority={false}
            loading="lazy"
          />
        </div>

        <div className="additional-info">
          <p>
            Our flowers are arranged daily with attention to detail and a passion for the craft. Thanks to our in-house delivery service, we can be sure your bouquet will be delivered with the utmost care and attention.
            <br /><br />
            Order before 1:00 PM? Same-day delivery is even possible (excluding Sundays and public holidays). Prefer a different delivery date? We&apos;re happy to arrange that. You choose the time, and we&apos;ll take care of the rest.
            <br /><br />
            Ordering for business? With a business account, you&apos;ll enjoy convenient features and exclusive benefits.
            <br /><br />
            *Please note: delivery to the himalayas is unfortunately no longer possible.
          </p>
        </div>
      </section>


      <section className='grid-blooming-delights'>
        <div className="grid-image">
          <Image 
            src="/assets/images/whom.jpg"
            alt="Surprise someone with flowers"
            width={500}
            height={300}
            priority={false}
            loading="lazy"
          />
        </div>
        <div className="grid-content">
          <h3>Who will you surprise with a Bouquet?</h3>
          <p>
            With Blooming Delights you deliver a personal message with a beautiful bouquet. Professionally tied and delivered by a regional florist.
            <br /><br />
            And the best part is: it&apos;s super fast. With a few clicks you have not only arranged a bouquet, but also arranged a smile on the face of the recipient. A loving gesture that gives someone a moment of attention and lets them feel: hey I&apos;m thinking of you. This way you can be a little bit close even from a distance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Delivery;