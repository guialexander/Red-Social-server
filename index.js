//Importar Dependencias
const app = require('./app');

// conexión a base de batos



//crear servidor node

//configurar el cors

//convertir los datos del body a objetos js

//cargar conf rutas

//poner servidor a escuchar peticiones a http



const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running 🤖🚀:Alien: at http://localhost:${port}/`);
});

module.exports = app;


