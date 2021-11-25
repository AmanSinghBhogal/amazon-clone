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
                    <Product 
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses' 
                        price_int={521} 
                        price_decimal={0} 
                        rating={4} 
                        image='https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg'
                    />
                    <Product 
                    title = 'Kenwood KMX750WH/ KMix Stand Mixer 1000W (White)'
                    price_int = {49500}
                    price_decimal = {0}
                    rating = {5}
                    image = 'https://m.media-amazon.com/images/I/51yd+TT6YuL._SL1200_.jpg'
                    />  
                </div>
                <div className='home_row'>
                    <Product 
                    title = 'Samsung Galaxy Watch Active 2 (Bluetooth + LTE, 44 mm) - Silver, Steel Dial, Leather Straps'
                    price_int = {17800}
                    price_decimal = {0}
                    rating = {3}
                    image = 'https://m.media-amazon.com/images/I/71W1oy5wnFL._SL1500_.jpg'
                    />
                    <Product 
                    title = 'Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)'
                    price_int = {2999}
                    price_decimal = {99}
                    rating = {5}
                    image = 'https://m.media-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg'
                    />
                    <Product 
                    title = '2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi + Cellular, 128GB) - Space Grey (3rd Generation)'
                    price_int = {83500}
                    price_decimal = {0}
                    rating = {4}
                    image = 'https://m.media-amazon.com/images/I/81a-rN2A3DS._SL1500_.jpg'
                    />
                </div>
                <div className='home_row'>
                    <Product 
                    title = 'Samsung 27 inch (68.6 cm) Curved Bezel Less, Speakers, Fabric Textured Back Side, FHD, VA Panel with DP, HDMI, VGA, Audio in, Headphone Ports - LC27T550FDWXXL'
                    price_int = {20299}
                    price_decimal = {99}
                    rating = {4}
                    image = 'https://m.media-amazon.com/images/I/91+fneWO62L._SL1500_.jpg'
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;