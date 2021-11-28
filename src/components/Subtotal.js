import { display } from '@mui/system';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../styles/Subtotal.css';
import { getCartTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Subtotal()
{
    const [{ cart }, dispatch] = useStateValue();

    // Approach #2: using for loop to calculate the cart total

    // This function calculates the total price either this can be used or a selector can be used.
    // const total_int = (cart) => {

    //     let total_Price = 0;
        
    //     for(let i=0; i< cart.length; i++)
    //     {
    //         total_Price += cart[i].price_int;
    //     }
    //     return total_Price;
    // }

    return(
        <div className='subtotal'>
            <CurrencyFormat 
                renderText = {(value) =>(
                    <>

                    <p>
                        Subtotal ({cart?.length} items): <strong>{value}</strong><small><sup>00</sup></small>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox' />This order contains a Gift.
                    </small>

                    </>
                )} 
                decimalScale = {2}
                value = {getCartTotal(cart)}
                displayType ={"text"}
                thousandSeparator = {true}
                prefix = {"₹"}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;