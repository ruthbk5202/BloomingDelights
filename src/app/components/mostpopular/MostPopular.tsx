import React from 'react';
import { HiMinus } from "react-icons/hi";
import './mostpopular.css';

const MostPopular = () => {
    const popularProducts = [
        {
            id: 1,
            name: "Rose Bouquet",
            image: "assets/images/flower-1.jpg",
            price: "$29.99",},
        {
            id: 2,
            name: "Rose Bouquet",
            image: "assets/images/flower-2.jpg",
            price: "$29.99",},
        {
            id: 3,
            name: "Rose Bouquet",
            image: "assets/images/flower-3.jpg",
            price: "$29.99",},
        {
            id: 4,
            name: "Roseloo",
            image: "assets/images/flower-lilly.jpg",
            price: "$29.99",}
    ];
  return (
    <div>
        <div className='popular-product-list'>
           <HiMinus className='lia' />
        <h1>Most <span>Popular</span> Products</h1>
          <HiMinus className='lia' />
        </div>
        <div className='popular-products-container'>
            {popularProducts.map((product) => (
                <div key={product.id} className='popular-product-item'>
                    <img src={product.image} alt={product.name} className='popular-product-image' />
                   
                    <p className='popular-product-price'>{product.price}</p>
                </div>
            ))}
        </div>
        <div className='customer-say'>
            <h1>What do <span>customers </span>say about us?</h1>
        </div>
    </div>
  )
}

export default MostPopular;