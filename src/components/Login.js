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

            {/* Login page Box */}
            <div className='loginpage__box'>

                {/* Title */}
                <h1>Sign-In</h1>

                {/* Email Input */}
                <p>
                    Email:
                </p>
                <input type='email'></input>

                {/* Password Input */}
                <p>
                    Password: 
                </p>
                <input type='password'></input>

                {/* Sign In Button */}
                <button className='loginpage__signinbtn'>Sign in</button>

                {/* Instructions */}
                <p className='loginpage__instruction'>
                    By continuing, you agree to Clone Amazon's Conditions of Use and Privacy Notice.
                </p>

                {/* Create Account Button */}
                <button className='loginpage__createAccBtn'>Create Your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;