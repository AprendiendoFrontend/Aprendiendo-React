
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

