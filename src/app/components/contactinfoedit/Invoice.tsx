import React, {useState} from 'react';

import "./invoice.css";

const Invoice= () => {
  const [isBarVisible, setIsBarVisible]= useState(true);
  const handleCloseButton=()=>{

  }
  return (

    <div >
    { isBarVisible && (
        <div className='invoice-div'>
     <input type="email"></input> 
     <p>Enter your email to get delivery status updates</p>
     <div className="Cancel-save-buttons">
      <div>
        <button className="cancel" onClick={handleCloseButton}>Cancel</button></div>
        <button className="save">Save</button>
     </div>
    </div>
      )}
    </div>
  )
}

export default Invoice;
