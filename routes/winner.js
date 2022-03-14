const express=require('express')
const router=express.Router();
const gameController=require('../controllers/game.controller')
//ruta para mostrar el estaddo del juego
router.get('/:id',gameController.gameStatus); //

// router.get('/', gameController.gameStatus);
router.get('/:id/winner',gameController.winner);

module.exports = router;