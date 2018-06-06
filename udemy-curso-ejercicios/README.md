
# Ejercicios prácticos del curso Aprendiendo React

## Instalación del entorno
```
npm install && npm start
```
Una vez instalado el entorno ya tienes todo lo necesario para comenzar los ejercicios. Utilizaremos el componente `App` situado en el archivo `App.js` como contenedor e iremos importando de uno en uno los componentes correspondientes a cada uno de los ejercicios situados en sus carpetas correspondientes. El componente App es el que vemos en el navegador cuando ejecutamos `npm start`.

### Ejercicio Proptypes
En este ejercicio importaremos los datos contenidos en un archivo externo en formato `JSON`, los pasaremos como prop a un componente llamado `PokemonList` y mostraremos un listado de pokemons con sus nombres, imágenes y propiedades.

Paso 1:
En el archivo `App.js` importamos el componente `PokemonList` y el archivo de datos json:

```javascript
  import PokemonList from "./exercises/props/pokemonList";
  import data from "./data/pokemons.json";
```
En este mismo archivo `App.js` tenemos que indicarle que queremos que nos renderice el componente que acabamos de importar:

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
De esta forma estamos pasando por una **prop** llamada `pokemons` el contenido de la variable `data` que hemos importado previamente.

Ahora, iremos a la carpeta `exercises` y crearemos un archivo llamado `pokemonList.js`. Aquí definiremos el componente que listará tantos pokemos como contenga el archivo de datos.

