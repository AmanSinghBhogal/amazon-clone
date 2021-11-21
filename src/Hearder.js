import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

function Header(){
    return(
        <div className='header'>
            
            {/* logo image */}
            <img className='header_logo' src="/img/amazon_PNG11.png" alt="Image not found" />

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
            </div>


        </div>
    )
}

export default Header;