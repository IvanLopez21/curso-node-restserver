const { response,request } = require('express')


const Esp32 = require('../models/esp32.js');



const esp32Post = async(req, res = response) => {
  
  const { temperatura, humedad } = req.body;
  const esp32 = new Esp32({ temperatura,humedad});
  console.log(esp32)

  //Guardar en Mongo
  await esp32.save()

  res.json(esp32);
};



module.exports = {
  esp32Post
};