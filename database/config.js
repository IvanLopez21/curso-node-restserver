require('dotenv').config();

const mongoose = require('mongoose')


const dbConnection = async() => {
  
  try {
    await mongoose.connect( process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
     console.log('Conexion Acertada...')
  } catch (error) {
    console.log(error)
    throw new Error('Error en coneccion')
  }
}

module.exports = {

  dbConnection

}