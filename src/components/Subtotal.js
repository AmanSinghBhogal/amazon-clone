import { display } from '@mui/system';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../styles/Subtotal.css';
import { useStateValue } from './StateProvider';

function Subtotal()
{
    const [{ cart }, dispatch] = useStateValue();

    const total_int = (cart) => {
        let total_Price = 0;
        for(let i=0; i< cart.length; i++)
        {
            total_Price += cart[i].price_int;
        }
        return total_Price;
    }

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
                value = {total_int(cart)}
                displayType ={"text"}
                thousandSeparator = {true}
                prefix = {"₹"}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;