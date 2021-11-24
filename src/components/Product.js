import React from 'react';
import '../styles/Product.css';


function Product({title, price_int, price_decimal, rating, image})
{
    return(
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small><sup>₹</sup></small>
                    <strong>{price_int}</strong>
                    <small><sup>{price_decimal}</sup></small>
                </p>
                <div className='product__rating'>
                    {
                        Array(rating).fill().map((_,i) => (
                            <p>⭐</p> 
                        ))
                    }
                </div>
            </div>
            <img src={image} alt='Image Not Found.' />
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;