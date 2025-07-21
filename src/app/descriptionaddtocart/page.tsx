import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { CiShop } from "react-icons/ci";
import { PiGreaterThan } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import "./description.css";

const DescriptionAfterAddtocart = () => {
  return (
    <div className="container-description">
      <div className="description-addtocart-container">
      
        <div className="left-column">
          <div className="select-all">
            <div className="select-checkbox">
              <input type="checkbox" className="check-box-for-selection" />
              <p>Select ALL</p>
            </div>
            <div className="delete-button">
              <RiDeleteBin7Line />
              <p>Delete</p>
            </div>
          </div>

          <div className="product-list">
            <div className="product-list-nav">
              <input type="checkbox" />
              <CiShop />
              <p>Ecom store</p>
              <PiGreaterThan />
            </div>
            <div className="product-list-items">
              <input type="checkbox" />
              <Image
                src="/assets/images/flower-1.jpg"
                alt="Product"
                className="description-image"
                width={80}
                height={80}
              />
              <p className="product-description">description</p>
              <div className="price-container">
                <p className="current-price">Rs. 40,000</p>
                <p className="original-price">Rs. 41,500</p>
              </div>
              <div className="quantity-control">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>

  
        <div className="order-summary">
          <div className="order-summary-header">
            <p>Location</p>
            <div className="add-shipping">
              <CiLocationOn />
              <p>Add Shipping Address</p>
            </div>
          </div>
          <div className="summary-content">
            <h3>Order Summary</h3>
            <div className="order-summary-details">
              <p>Subtotal(0 items)</p>
              <p>Rs. 0</p>
            </div>
            <div className="shipping-fee-details">
              <p>Shipping Fee</p>
              <p>Rs. 0</p>
            </div>
            <div className="apply-coupon">
              <input 
                type="text" 
                placeholder="Enter coupon code" 
                className="apply-search-box" 
              />
              <button className="button-apply">Apply</button>
            </div>
            <div className="order-total">
              <p>Total</p>
              <p>Rs. 0</p>
            </div>
            <button className="proceed-to-checkout-button">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      </div>
 
  );
};

export default DescriptionAfterAddtocart;