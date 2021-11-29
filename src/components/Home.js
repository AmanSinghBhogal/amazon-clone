import React from 'react';
import '../styles/Home.css';
import Product from './Product.js';
import Header from './Hearder'

function Home()
{
    return(
        <div>
            <Header />
            <div className='home'>
                <div className='home_container'>
                    <div className='home_imgSlide1'>
                        <img  src="/img/slide_2.jpg" alt="OOPS, Image Not Found!" />
                    </div>
                    <div className='home_row'>
                        <Product 
                            id = {101}
                            title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses' 
                            price_int={521} 
                            rating={4} 
                            image='https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg'
                        />
                        <Product 
                        id = {102}
                        title = 'Kenwood KMX750WH/ KMix Stand Mixer 1000W (White)'
                        price_int = {49500}
                        rating = {5}
                        image = 'https://m.media-amazon.com/images/I/51yd+TT6YuL._SL1200_.jpg'
                        />  
                    </div>
                    <div className='home_row'>
                        <Product 
                        id = {103}
                        title = 'Samsung Galaxy Watch Active 2 (Bluetooth + LTE, 44 mm) - Silver, Steel Dial, Leather Straps'
                        price_int = {17800}
                        rating = {3}
                        image = 'https://m.media-amazon.com/images/I/71W1oy5wnFL._SL1500_.jpg'
                        />
                        <Product 
                        id = {104}
                        title = 'Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)'
                        price_int = {2999}
                        rating = {5}
                        image = 'https://m.media-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg'
                        />
                        <Product 
                        id = {105}
                        title = '2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi + Cellular, 128GB) - Space Grey (3rd Generation)'
                        price_int = {83500}
                        rating = {4}
                        image = 'https://m.media-amazon.com/images/I/81a-rN2A3DS._SL1500_.jpg'
                        />
                    </div>
                    <div className='home_row'>
                        <Product 
                        id = {106}
                        title = 'Samsung 27 inch (68.6 cm) Curved Bezel Less, Speakers, Fabric Textured Back Side, FHD, VA Panel with DP, HDMI, VGA, Audio in, Headphone Ports - LC27T550FDWXXL'
                        price_int = {20299}
                        rating = {4}
                        image = 'https://m.media-amazon.com/images/I/91+fneWO62L._SL1500_.jpg'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;