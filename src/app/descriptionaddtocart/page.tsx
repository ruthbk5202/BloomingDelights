import React from 'react';
import { RiDeleteBin7Line } from "react-icons/ri";
import { CiShop } from "react-icons/ci";
import { PiGreaterThan } from "react-icons/pi";
import Image from "next/image";
import "./description.css";

const DescriptionAfterAddtocart = () => {
  return (
    <div className='container-description'>
        <div className='description-addtocart-container'>
            <div className='select-all'>
                <div className='select-checkbox'>
                <input type="checkbox"className='check-box-for-selection'></input>
                <p>Select ALL </p></div>
                <div className='delete-button'>
                    <RiDeleteBin7Line />
                <p>Delete</p>

                </div>
            </div>
            <div className='order-summary'>
            </div>
            <div className='product-list'>
                <div className='product-list-nav'>
                    <input type="checkbox"></input>
                    <CiShop />
                    <p> Ecom store</p>
                      <PiGreaterThan />
                </div>
                <div>
                    <input type="checkbox" ></input>
                    <Image src="" alt=""></Image>
                    <p></p>
                </div>
</div>
        </div>
    </div>
  )
}

export default DescriptionAfterAddtocart;