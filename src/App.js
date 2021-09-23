import logo from './logo.svg';
import './App.css';
// import './components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, About } from '../components'


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Header />
          <Home />
          <About />
        </Route>
       
      </Router>
    </div>
  );
}

export default App;
