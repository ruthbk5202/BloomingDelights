"use client";
import React from 'react';
import Link from 'next/link';
import "./delivery.css"; 

const DeliveryInfoForm = () => {
  return (
    <div className='delivery-info-container'>
      <div>
        <h2 className='delivery-info-heading'>Delivery Information</h2>
        <form className='delivery-info-form'>
          <div>
            <label htmlFor="fullName">full name</label>
            <input id="fullName" name="fullName" className='' type="text" />
          </div>
          <div>
            <label htmlFor="phoneNumber">phone number</label>
            <input id="phoneNumber" name="phoneNumber" className='' type="tel" />
          </div>
          <div>
            <label htmlFor="region">region</label>
            <input id="region" name="region" className='' type="text" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input id="city" name="city" className='' type="text" />
          </div>
          <div>
            <label htmlFor="buildingInfo">Building/house no/Floor/Street</label>
            <input id="buildingInfo" name="buildingInfo" className='' type="text" />
          </div>
          <div>
            <label htmlFor="locality">Colony /Suburb/ Locality/ Landmark</label>
            <input id="locality" name="locality" className='' type="text" />
          </div>
          <div>
            <label htmlFor="area">Area</label>
            <input id="area" name="area" className='' type="text" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input id="address" name="address" className='' type="text" />
          </div>
          <div className='delivery-btns'>
            <button type="button" className="office-btn">
              office
            </button>
            <button type="button" className="home-btn">
              home
            </button>
          </div>
          <div>
            <button type="submit" className="save-btn">
              save
            </button>
          </div>
        </form>
      </div>
      <div className='delivery-grid-promotion'>
        <form className='delivery-promotion-form'>
          <div className='promotion-code'>
            <input 
              className="promotion-search" 
              placeholder='Enter Store/blooming code'
              name="promotionCode"
            />
            <button type="button" className='apply-btns'>Apply</button>
          </div>
          <div className='invoice-contact'>
            <h3>Invoice and Contact Info</h3>
            <Link href="/">
              Edit
            </Link>
          </div>
          <div className='order-summary'>
            <h3>Order Summary</h3>
            <div className='order-summary-items'>
              <p>items Total(1 items)</p> <h3>Rs. 299</h3>
            </div>
            <div className='order-summary-items'>
              <p>Delivery Fees</p> <h3>Rs.100</h3>
            </div>
          </div>
          <div className='order-summary-total'>
            <p>Total: </p><h3>375</h3>
          </div>
          <button type="button" className='proceed-to-pay'>Proceed to pay</button>
        </form>
      </div>
    </div>
  )
}

export default DeliveryInfoForm;