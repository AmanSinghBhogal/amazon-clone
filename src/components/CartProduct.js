import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../styles/CartProduct.css';

function CartProduct({id, title, image, price_int, rating})
{
    return(
        <div className = 'cartProduct'>
            <div className='cartProduct__image'>
                <img src={image} alt='Oops! Image Not Found.' />
            </div>

            <div className='cartProduct__info'>
                <p className='cartProduct__title'>{title}</p>
                <p className='cartProduct__price'>
                    <CurrencyFormat value={price_int} displayType={'text'} thousandSeparator={true} prefix={'₹'} />
                </p>
                <div className='cartProduct__rating'>
                    {
                        Array(rating).fill().map((_,i) => (
                            <p>⭐</p> 
                        ))
                    }
                </div>
                <button className='cartProduct__removeBtn'>Remove Item From Cart</button>
            </div>
        </div>
    )
}

export default CartProduct;