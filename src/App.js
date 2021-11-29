import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Checkout from './components/Checkout';
import Login from './components/Login';

function App() {
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
