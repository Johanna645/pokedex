import logo from './logo.png';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Link from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pokemons } from './Pokemons';
import { Details } from './Details';

function App() {
  return (
    <div className="App">
      <header className="page-header">
        <img src={logo} className="logo" alt="logo" width="100" height="50" />
        <h1>This is Pokédex!</h1>
      </header>
      <main>
        <div className="container-fluid">
          <div className="row">
            {/* map here   */}
            <Router>
              <Route exact path="/" component={Pokemons} />
              <div className="col-xs-3">
                {/* poke name here in some box, field, button,... */}
                <Route path="/pokemon/:id" component={Details} />
              </div>
            </Router>
          </div>
        </div>
      </main>
      <footer className="footer">
        <span>
          <img src={logo} alt="Pokemon Logo" width={100} height={50} />
        </span>
      </footer>
    </div>
  );
}

export default App;
