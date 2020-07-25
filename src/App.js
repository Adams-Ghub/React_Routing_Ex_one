import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

import './customcss/style.css';



function App() {
  function HomeComponent(){
    return(
      <div>
        <h1>Homepage</h1>
      </div>
    );

  };
  function AboutComponent(){
    return(
      <div>
        <h1>About us</h1>
      </div>
    );

  };
  function ContactComponent(){
    return(
      <div>
        <h1>Contact us</h1>
      </div>
    );

  };
  return (
    <div className="App">
      
      <Router>
        <div >
          <Link to="/home" className="links">Home</Link>
          <Link to="/about" className="links">About</Link>
          <Link to="/contact" className="links">Contact</Link>
          <Route exact={true} path="/home" component={HomeComponent}/>
          <Route exact={true} path="/about" component={AboutComponent}/>
          <Route exact={true} path="/contact" component={ContactComponent}/>
        </div>
      </Router>
    
      
    </div>
  );
}

export default App;
