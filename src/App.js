import logo from './logo.svg';
import './App.css';
// import './components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home} from './components/Home';
import { About} from './components/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
          <About />
        </Route>
      </Router>
    </div>
  );
}

export default App;
