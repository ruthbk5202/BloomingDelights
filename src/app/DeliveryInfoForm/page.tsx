import React from 'react';
import "./delivery.css"; 

const DeliveryInfoForm = () => {
  return (
    <div className='delivery-info-container'>
      <div>
            <h2 className='delivery-info-heading'>Delivery Information</h2>
        <form className='delivery-info-form'>
            <div>
            <label >full name</label>
            <input className='' type="text" />
            </div>
            <div>
            <label >phone number</label>
            <input className='' type="text" />
            </div>
            <div>
            <label>region</label>
            <input className='' type="text" />
            </div>
              <div>
            <label >City</label>
            <input className='' type="text" />
            </div>
            <div>
            <label >Building/house no/Floor/Street</label>
            <input className='' type="text" />
            </div>
            <div>
            <label >Colony /Suburb/ Locality/ Landmark</label>
            <input className='' type="text" />
            </div>
             <div>
            <label >Area</label>
            <input className='' type="text" />
            </div>
            <div>
            <label >Address</label>
            <input className='' type="text" />
            </div>
            <div className='delivery-btns'>
        <button className="office-btn">
            office</button>
        <button className="home-btn">
            home</button>
        </div>
        <div>
        <button className="save-btn">
            save</button>
            </div>
        </form>
        </div>
        <div className='delivery-grid-promotion'>
          <form className='delivery-promotion-form'>
            <div className='promotion-code'>
              <input className="promotion-search" placeholder='Enter Store/blooming code'></input>
              <button className='apply-btns'>Apply</button>

            </div>
            <div className='invoice-contact'>
              <h3>Invoice and Contact Info</h3>
              <a  href="/">Edit</a>
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
            <button className='proceed-to-pay'>Proceed to pay</button>
          </form>
        </div>
    </div>
  )
}

export default DeliveryInfoForm;