
const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');


class Server {

    constructor() {
      this.app = express();
      this.port = process.env.PORT
      this.usuariosPath = '/api/usuarios';

      // Conectar a base de datos
      this.conectarDb();

      //Middlewares
      this.middlewares();

      //Rutas
      this.routes();
    }

    async conectarDb() {
      await dbConnection();
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