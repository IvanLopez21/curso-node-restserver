
const {Schema, model} = require('mongoose')


const Esp32Schema = Schema({

  temperatura:{
    type: String
  },
  humedad:{
    type: String
  }

});

module.exports = model('Esp32',Esp32Schema)

