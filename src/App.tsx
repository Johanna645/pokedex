import logo from './logo.svg';
//import { Link, BrowserRouter as Router, Route } from 'react-router-dom'; ok, this needs to be imported still somehow, like this it seems to cause an error
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header pt-5">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="container text-center mt-5">
          <h1 className="text-warning">Bootstrap 5 rocknroll</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
