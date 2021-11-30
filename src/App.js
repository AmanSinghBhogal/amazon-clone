import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {
    const [state, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
          console.log(`The user is: ${authUser}`);
          if(authUser)
          {
              // the User just logged in or the user was logged out
              dispatch({
                type: "SET_USER",
                user: authUser
              })
          }
          else
          {
              dispatch({
                type: "SET_USER",
                user: null
              })
          }
        })
    }, []);

  return (
      <Router>
          <div className="app">
            <Routes>
                {/* In React-routers version 6 the SWitch is replaced by Routes */} 

                {/* Login Page */}
                <Route exact path = "/login" element = { <Login /> } />

                {/* Checkout Page */}
                <Route exact path = "/checkout" element={ <Checkout /> } />

                {/* Home Page Rendering */}
                <Route exact path = "/" element={ <Home /> } />

            </Routes>
          </div>
      </Router>
  );
}

export default App;
