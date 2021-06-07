import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import About from './About';
import NotFound from './NotFound';
import PokemonDetails from './PokemonDetails';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Pokedex</Link> <Link to="/about">About</Link>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <h1> Pokedex </h1>
                  <Pokedex pokemons={pokemons} />
                </>
              );
            }}
          />
          <Route
            path="/pokemons/:id"
            render={(props) => (
              <PokemonDetails {...props} pokemons={pokemons} />
            )}
          />
          <Route path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
