import React from 'react';
import '../styles/Product.css';

function Product()
{
    return(
        <div className='product'>
            <div className='product__info'>
                <p>The Lean Startup</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>100</strong>
                </p>
                <div className='product__rating'>
                    <p>⭐</p> 
                    <p>⭐</p> 
                    <p>⭐</p> 
                </div>
            </div>
            <img src='https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg' alt='Image Not Found.' />
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;