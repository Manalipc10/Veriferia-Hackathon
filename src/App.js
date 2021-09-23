import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Sponsors, Home} from './components'
import './App.css';
// import './components/About'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Home} from './components/Home';
// import { About} from './components/About';


function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/">
        <Home/>
        {/* <About/> */}
        <Sponsors/>
      </Route>
    </Router>
    </div>
  );
}

export default App;

