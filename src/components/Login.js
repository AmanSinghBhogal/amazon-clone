import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login()
{
    return(
        <div className='loginpage'>  
            <Link to="/">
                <div className='loginpage__logo'>
                    <img src='/img/LoginPageIMg.png' alt='Oops! Image not Found.' />
                </div>
            </Link>
            <div className='loginpage__box'>
                <p>
                    Email:
                </p>
                <input type='email'></input>
                
                <p>
                    Password: 
                </p>
                <input type='password'></input>

            </div>
        </div>
    );
}

export default Login;