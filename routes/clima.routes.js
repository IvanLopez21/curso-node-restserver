
const { Router } = require('express');
const { climaGet, climaPost } = require('../controllers/clima.controllers');
const { check } = require('express-validator');


const router = Router();


router.get('/', climaGet);

router.post('/', [
  check('climas','Climas es obligatorio').not().isEmpty(),
  check('estado','Estado es obligatorio y es boolean').isBoolean()
] ,climaPost);

module.exports = router;