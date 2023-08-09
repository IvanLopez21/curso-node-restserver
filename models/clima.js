
const {Schema, model} = require('mongoose')


const ClimaSchema = Schema({

  climas:{
    type: String
  },
  estado:{
    type: String
  }

});

module.exports = model('Clima',ClimaSchema)

