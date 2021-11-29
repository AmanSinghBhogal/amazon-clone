import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // The Sign in Function is defined below.
    const SignIn = event =>
    {
        // The Below Line of code Prevents the page from refreshing.
        event.preventDefault();

        // console.log(`Email is: ${email}`);
        // console.log(`Password is: ${password}`);

        // Fancy FireBase Suff will go here
    }

    // To Register new User the Register function is defined below.
    const RegisterUser = event =>
    {
        event.preventDefault(); // What this function does is that it prevents refreshing of the page when the button is clicked.

        
    }
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
                <input type='email' value={email} onChange={event => setEmail(event.target.value)}></input>

                {/* Password Input */}
                <p>
                    Password: 
                </p>
                <input type='password' value={password} onChange={event => setPassword(event.target.value)}></input>

                {/* Sign In Button */}
                <button type='submit' className='loginpage__signinbtn' onClick={SignIn}>Sign in</button>

                {/* Instructions */}
                <p className='loginpage__instruction'>
                    By continuing, you agree to Clone Amazon's Conditions of Use and Privacy Notice.
                </p>

                {/* Create Account Button */}
                <button className='loginpage__createAccBtn' onClick={RegisterUser}>Create Your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;