import React, { Component } from "react";
import {PokemonsList} from './PokemonsList'
import data from "./data/pokemons.json";
import "./index.css";

export class Ex01 extends Component {
  render() {
    return <PokemonsList pokemons={data} />
  }
}
