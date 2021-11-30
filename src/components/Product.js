import React from 'react';
import CurrencyFormat from 'react-currency-format';
import '../styles/Product.css';
import { useStateValue } from './StateProvider';



function Product({id, title, price_int, price_decimal, rating, image})
{
    const [state, dispatch] = useStateValue();
    // const [{ cart }, dispatch] = useStateValue();

    // console.log('Items in the Cart are => ', cart);

    const AddToCart = () => {
        // Dispatch item to the Data Layer.
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price_int: price_int,
                rating: rating
            }
        })
    }
    return(
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <CurrencyFormat value={price_int} displayType={'text'} thousandSeparator={true} prefix={'₹'} />
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
            <button onClick={AddToCart}>Add to Cart</button>
        </div>
    );
}

export default Product;