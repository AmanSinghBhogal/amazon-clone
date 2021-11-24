import React from 'react';
import '../styles/Home.css';
import Product from './Product.js';

function Home()
{
    return(
        <div className='home'>
            <div className='home_container'>
                <div className='home_imgSlide1'>
                    <img  src="/img/slide_2.jpg" alt="OOPS, Image Not Found!" />
                </div>
                <div className='home_row'>
                    <Product />
                    {/* Product */}
                </div>
                <div className='home_row'>
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div>
                <div className='home_row'>
                    {/* Product */}
                </div>
            </div>
        </div>
    );
}

export default Home;