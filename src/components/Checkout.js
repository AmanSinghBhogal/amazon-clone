import React from 'react';
import '../styles/Checkout.css';
import Subtotal from './Subtotal'

function Checkout()
{
    return(
        <div className='checkout'>

            {/* Left Section of the Page */}
            <div className='checkout__left'>
                
                {/* Checkout Advertisment Image */}
                <img className='checkout__ad' src='/img/checkout__ad.jpg' alt='Opps, Image not found!'></img>

                {/* Cart */}
                <div>

                    {/* Title for the cart */}
                    <h2 className='checkout__title'>
                        Your shopping Cart
                    </h2>

                    {/* Items */}
                    {/* Items */}
                    {/* Items */}

                </div>

            </div>

            {/* Right Section of the Page */}
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;