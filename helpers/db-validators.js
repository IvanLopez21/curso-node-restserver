const Role = require('../models/role')
const Usuario = require('../models/usuario')

const esRoleValido = async (rol = '') => {
  const existeRol = await Role.findOne({rol})
  if (!existeRol) {
    throw new Error(`El rol ${rol} no esta validado en la base de datos`)
  }
};


// Verificar si el correo ya existe
const emailExiste = async( correo = '') => {
  const existeEmail = await Usuario.findOne({correo});
  if (existeEmail) {
    throw new Error(`El correo ${correo} ya esta registrado intenta con otro`)
    }
};

const existeUsuarioPorId = async( id ) => {
  const existeUsuario = await Usuario.findById(id);
  if (!existeUsuario) {
    throw new Error(`El Id ${id} no es valido`)
    }
};
  



module.exports = {
   esRoleValido,
   emailExiste,
   existeUsuarioPorId
}


