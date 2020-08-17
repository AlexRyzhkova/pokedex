import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Pokemons from "./pages/Pokemons";

// function waitFor(time) {
//   return new Promise((resolve) => setTimeout(resolve, time));
// }

function App() {
  // mount das erste mal rendern
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/pokemons/:name">
            <Pokemons />
          </Route>

          <Route path="/items">ITEMS</Route>
          <Route path="/">
            <Redirect to="/pokemons" />
          </Route>
        </Switch>
        <footer>
          <Link to="/pokemons">Pokemons</Link>
          <Link to="/items">Items</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
