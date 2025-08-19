import React from 'react';
import "./invoice.css";

const Invoice= () => {
  return (
    <div>
        <div className='invoice-div'>
     <input type="email"></input> 
     <p>Enter your email to get delivery status updates</p>
     <div className="cancel-save-buttons">
        <button className="cancel">Cancel</button>
        <button className="save">Save</button>
     </div>
    </div>
    </div>
  )
}

export default Invoice;
