var express = require('express');
var router = express.Router();
const gameController=require('../controllers/game.controller')

/* ruta para comenzar el juego*/
router.post('/',gameController.startGame);
/* ruta para bet form page. */
router.get('/', (req,res) => {
    res.render('betForm');
  });
  

module.exports = router;