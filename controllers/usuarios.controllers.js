const { response,request } = require('express')
const bcryptjs = require('bcryptjs')


const Usuario = require('../models/usuario');



const usuariosGet = async(req = request, res = response) => {

  const { limite = 5, desde = 0 } = req.query;
  const query = {estado:true}
  
  const resp = await Promise.all([
    Usuario.countDocuments( query ),
    Usuario.find( query )
            .skip( desde )
            .limit( limite )

  ]);

  res.json({
    resp
  });
};

const usuariosPost = async(req, res = response) => {
  
  const { nombre, correo, password, rol} = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol});

  
  //Encriptar contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync( password, salt )

  //Guardar en Mongo
  await usuario.save()

  res.json(usuario);
};

const usuariosPut = async(req, res = response) => {

  const { id } = req.params
  const { _id,password,google,correo,...resto } =  req.body

  //TODO validar contra DB
  if( password ){
    //Encriptar
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync( password, salt )
  }

  const usuario = await Usuario.findByIdAndUpdate( id,resto )

  res.json(usuario);
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - controlador'
  });
};

module.exports = {

  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete

};