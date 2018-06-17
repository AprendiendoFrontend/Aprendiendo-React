import React, { Component } from "react";
import PokemonList from "./01-props/pokemonList";
import data from "./data/pokemons.json";
/**
 * Para ejecutar el primer ejercicio has de importar lo siguiente:
 * import PokemonList from './01-props/pokemonList'
 * import data from "./data/pokemons.json"
 *
 * Luego, en el render, deberías utilizar el componente así
 *   render () {
      return (
        <div className="App">
          <PokemonList pokemons={data}/>
        </div>
      );
    }
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonList pokemons={data} />
      </div>
    );
  }
}

export default App;
