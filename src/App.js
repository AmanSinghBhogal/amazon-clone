import './App.css';
import Header from './components/Hearder';
import Home from './components/Home';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
        <div className="app">

          {/* Header is Rendered no matter what so we keep it outside the <Routes></Routes> component */}

          <Header />

          {/* In React-routers version 6 the SWitch is replaced by Routes */}

          <Routes>

              {/* Checkout Page */}
              <Route exact path="/checkout" element={ <Checkout /> } />

              {/* Home Page Rendering */}
              <Route exact path = "/" element={ <Home /> } />


          </Routes>
        </div>
    </Router>
    
  );
}

export default App;
