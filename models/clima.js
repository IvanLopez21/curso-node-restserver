
const {Schema, model} = require('mongoose')


const ClimaSchema = Schema({

  climas:{
    type: String
  },
  estado:{
    type: Boolean
  }

});

module.exports = model('Clima',ClimaSchema)

