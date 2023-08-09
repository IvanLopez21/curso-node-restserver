
const { Router } = require('express');
const { esp32Post } = require('../controllers/esp32.controllers');
const { check } = require('express-validator');


const router = Router();


router.post('/', [
  check('temperatura','Temperatura es obligatorio').not().isEmpty(),
  check('humedad','Humedad es obligatorio').not().isEmpty()
] ,esp32Post);

module.exports = router;