const { response,request } = require('express')


const Clima = require('../models/clima.js');



const climaPost = async(req, res = response) => {
  
  const { climas, estado } = req.body;
  const clima = new Clima({ climas,estado});
  console.log(clima)
  

  //Guardar en Mongo
  await clima.save()

  res.json(clima);
};


const climaGet = async(req = request, res = response) => {
  
  const resp = await Promise.all([
    Clima.find()

  ]);

  res.json({
    resp
  });
};


module.exports = {
  climaGet,
  climaPost
};