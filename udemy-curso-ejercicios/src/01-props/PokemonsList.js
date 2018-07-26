import React, { Component } from "react";

export class PokemonsList extends Component {
  render() {
    // Mediante el destructuring podemos crear una variable y asignarle el valor de la referencia que corresponda con el mismo nombre
    // más información sobre destructuring aquí:
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
    const { pokemons } = this.props;

    // La variable pokemons contiene un array de objetos que podemos iterar mediante el método map
    // Accedemos a cada una de las propiedades mediante la sintaxis de objeto
    const list = pokemons.map((pokemon, index) => {
      return (pokemon = (
        // Como class es una palabra reservada en Javascript,
        // utilizaremos className para añadir una clase a un elemento JSX
        <div key={index} className="pokemon-item">
          <h1>{pokemon.name}</h1>
          <img src={pokemon.image} alt={pokemon.name} />
          <ul className="pokemon-specs">
            <li>{pokemon.specs.type}</li>
            <li>{pokemon.specs.abilities}</li>
          </ul>
        </div>
      ));
    });

    // Para evaluar una variable y renderizar su contenido la envolvemos entre llaves {}
    // De esta forma {list} evaluará el resultado de mapear el array de objetos que llega por props
    return (
      <div className="pokemon-container">
        <h1 className="pokemon-heading">Pokemon List</h1>
        {list}
      </div>
    );
  }
}
