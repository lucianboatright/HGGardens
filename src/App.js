import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from "./Components/Navbar"

import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Pictures from './Components/Pictures'
import AlderneyGarden from './Components/AlderneyGarden'
import ShaleGarden from './Components/ShaleGarden'
import WallGarden from './Components/WallGarden'
import PaletGarden from './Components/PaletGarden'
import AlderneyFinish from './Components/AlderneyFinish'
// import LawnGarden from './Components/LawnGarden'



function App() {

  return (
    
    <Router>
      <div className="main">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Pictures" component={Pictures} />
          <Route exact path="/AlderneyGarden" component={AlderneyGarden} />
          <Route exact path="/AlderneyFinish" component={AlderneyFinish} />
          {/* <Route exact path="/LawnGarden" component={LawnGarden} /> */}
          <Route exact path="/WallGarden" component={WallGarden} />
          <Route exact path="/ShaleGarden" component={ShaleGarden} />
          <Route exact path="/PaletGarden" component={PaletGarden} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
