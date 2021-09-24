import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {About, Sponsors} from './components'
import './App.css';


function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/">
        {/* <Home/> */}
        {/* <About/> */}
        <Sponsors/>
        <About/>
      </Route>
    </Router>
    </div>
  );
}

export default App;

