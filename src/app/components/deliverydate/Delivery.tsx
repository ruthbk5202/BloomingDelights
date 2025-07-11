import React from 'react';
import { FaCalendarAlt, FaTruck, FaUser, FaBriefcase } from 'react-icons/fa';
import "./delivery.css"; // Import icons from react-icons

const Delivery = () => {
  return (
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
  );
};

export default Delivery;