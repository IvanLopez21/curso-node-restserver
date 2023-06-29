
const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/usuarios.controllers');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido,emailExiste,existeUsuarioPorId } = require('../helpers/db-validators')


const router = Router();

router.get('/', usuariosGet);

router.put('/:id', [
  check('id','No es un ID válido').isMongoId(),
  check('id').custom( existeUsuarioPorId ),
  check('rol').custom( esRoleValido ),
  validarCampos
],usuariosPut);

router.post('/', [
  check('nombre','El correo es obligatorio').not().isEmpty(),
  check('password','El password es obligatorio y mas de 6 caracteres').isLength({min: 6}).not().isEmpty(),
  check('correo','El correo no es valido').isEmail(),
  check('correo').custom( emailExiste ),
  check('rol').custom( esRoleValido ),
  validarCampos
] ,usuariosPost);

router.delete('/', usuariosDelete);

module.exports = router;