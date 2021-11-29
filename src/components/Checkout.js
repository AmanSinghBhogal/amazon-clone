import React from 'react';
import '../styles/Checkout.css';
import CartProduct from './CartProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import Header from './Hearder'

function Checkout()
{
    const [{ cart }, disptch] = useStateValue();

    return(
        <div>
            <Header />
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
                        {/* Cart Product */}

                        {
                            cart.map( i => (
                                <CartProduct 
                                    id = {i.id}
                                    title= {i.title}
                                    price_int= {i.price_int}
                                    rating= {i.rating} 
                                    image= {i.image}
                                />
                            ))
                        }

                    </div>

                </div>

                {/* Right Section of the Page */}
                <div className='checkout__right'>
                    <Subtotal />
                </div>
            </div>
        </div>        
    );
};

export default Checkout;