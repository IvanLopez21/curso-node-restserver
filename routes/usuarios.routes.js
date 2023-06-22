
const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/usuarios.controllers');

const router = Router();

router.get('/', usuariosGet);
router.post('/', usuariosPost);
router.put('/:id', usuariosPut);
router.delete('/', usuariosDelete);

module.exports = router;