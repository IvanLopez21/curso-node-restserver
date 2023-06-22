
const express = require('express')
const cors = require('cors')


class Server {

    constructor() {
      this.app = express();
      this.port = process.env.PORT || 3000;
      this.usuariosPath = '/api/usuarios';

      //Middlewares
      this.middlewares();

      //Rutas
      this.routes();
    }

    middlewares() {
      //CORS
      this.app.use( cors() );
      // Lectura y Parseo del body
      this.app.use( express.json() );
      // Directorio Publico
      this.app.use( express.static('public') );
    }

    routes() {
      this.app.use(this.usuariosPath,require('../routes/usuarios.routes'))
    }

    listen() {
      this.app.listen( this.port, () => {
        console.log('Servidor corriendo en puerto', this.port)
      });  
    }
}

module.exports = Server;
