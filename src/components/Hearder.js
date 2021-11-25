import React from 'react';
import '../styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className='header'>
            
            <Link to="/">
                {/* logo image */}
                <img className='header_logo' src="/img/amazon_PNG11.png" alt="Image not found" />
            </Link>

            {/* Search Bar */}
            <div className='header_search' >
                <input className='header_searchInput' type="text" />
                <SearchIcon className='header_searchIcon' />
            </div>

            {/* Header Nav */}
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello, Guest</span>
                    <span className='header_optionLineTwo'>Sign In</span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Orders</span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>
                <Link to="/checkout" style={{textDecoration: "none", color: "white"}}>
                    <div className='header_optionBasket header_option'>
                        <ShoppingCartIcon/>
                        <span className='header_optionLineTwo header_basketCount'>0</span>
                    </div>
                </Link>
            </div>


        </div>
    );
}

export default Header;