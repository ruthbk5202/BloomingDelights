import React from 'react';
import "./delivery.css"; 

const DeliveryInfoForm = () => {
  return (
    <div className='delivery-info-container'>
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
  )
}

export default DeliveryInfoForm