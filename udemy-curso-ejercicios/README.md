
# Ejercicios prácticos del curso Aprendiendo React
En este repositorio encontrarás una serie de ejercicios que te servirán para afianzar los conceptos que has ido aprendiendo durante el curso y sobretodo para practicarlos.
Aunque verás que tienes todo el código resultante disponible te recomiendo que lo escribas todo tú y que lo utilices sólo como consulta en el caso de que te quedes atascado en algún ejercicio concreto.

### Instalación del entorno
- Abre una terminal, crea una carpeta nueva con `mkdir udemy-curso-ejercicios` y muévete dentro haciendo:
- `cd udemy-curso-ejercicios``
- Una vez creada la carpeta, asegúrate que estás dentro. Inicializa tu proyecto npm ejecutando: `npm init -y`
- Copia el contenido del archivo `package.json` de la raiz de la carpeta `udemy-curso-ejercicios` y reemplaza el que acabas de crear, de esta forma simplificamos la creación de scripts y la instalación de dependencias.
- Con el package.json configurado ya puedes ejecutar: `npm install && npm start` para instalar dependencias e iniciarlo.
- Recuerda que `npm install` buscará un archivo llamado `package.json` en la raiz de la carpeta del proyecto. Asegúrate de que estás en la carpeta adecuada antes de ejecutarlo.
- Crea una carpeta `src` en la raiz del proyecto. Esta carpeta nos servirá para incluir las subcarpetas de cada uno de los ejercicios que vayas haciendo. 
- Por último copia la carpeta `public` y su contenido a la raiz de tu carpeta proyecto. Aquí es donde está el archivo `index.html` que contiene el nodo `<div id="root"></div>` que es el punto de anclaje de nuestros ejercicios.

### Descripción del entorno
Una vez instalado el entorno ya tienes todo lo necesario para comenzar los ejercicios. Utilizaremos el componente `App` que se encuentra dentro de la carpeta `src` en el archivo `App.js` como contenedor e iremos importando de uno en uno los componentes correspondientes a cada uno de los ejercicios situados en sus carpetas correspondientes. El componente App es el que vemos en el navegador cuando ejecutamos `npm start`.
Crea la siguiente

## 01 Ejercicio Props
En este ejercicio importaremos los datos contenidos en un archivo externo en formato `JSON`, los pasaremos como prop a un componente llamado `PokemonList` y mostraremos un listado de pokemons con sus nombres, imágenes y propiedades.

#### Paso 1 - Preparando el componente App
- Crea una carpeta llamada `01.props` y dentro crea un archivo JavaScript llamado `pokemonList.js`.
- Crea otra llamada `data` que contendrá el archivo de datos que utilizaremos en este ejercicio. Copia el archivo `pokemons.json` del repositorio y pégalo en tu proyecto.
- En el archivo `App.js` situado en la raiz importamos el componente `PokemonList` y el archivo de datos json:

```javascript
  import PokemonList from "./01-props/pokemonList";
  import data from "./data/pokemons.json";
```
En este mismo archivo `App.js` es donde indicaremos al componente `App` que queremos que nos renderice el componente `PokemonList` que acabamos de importar pasándole el archivo de datos `pokemons.json`.
De esta forma estamos pasando por una **prop** llamada `pokemons` la variable `data` que contiene el objeto JSON que hemos importado previamente.

```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonList pokemons={data} />
      </div>
    );
  }
}
```

#### Paso 2 - Editando el componente PokemonList:
- En este paso editaremos el archivo `pokemonList.js` que hemos creado en el ejercicio anterior y crearemos el componente que se encargará de mostrar tantas tarjetas pokemon con su imagen, nombre y características como nodos disponga el archivo de datos `pokemons.json`.
- Primero importamos React:
```javascript
import React, { Component } from "react"
```
- Creamos una clase llamada `PokemonList` que extienda de Component. Como necesita un método render, de momento haremos que nos renderice un `Hola Mundo!`:

```javascript
export default class PokemonList extends Component {
  render() {
    return (
      <h1>Hola Mundo!</h1>
    )
  }
}
```

