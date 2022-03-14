const express=require('express')
const router=express.Router();
const gameController=require('../controllers/game.controller')


/**save game */
router.post('/', gameController.createGame);

/* GET form page. */
router.get('/', (req, res) => {
    res.render('index');
  });

module.exports = router;

