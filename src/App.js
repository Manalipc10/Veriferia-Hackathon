import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Sponsors} from './components'
import './App.css';
// import './components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, About } from '../components'


function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/">
        <Sponsors/>
      </Route>
    </Router>
    </div>
  );
}

export default App;

