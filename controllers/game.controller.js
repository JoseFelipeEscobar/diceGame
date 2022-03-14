const Game=require('../models/createGame.model')
const { uuid } = require('uuidv4');


//guarda los jugadores que van a jugar
exports.createGame=function(req,res){
    try{
        const{gamers}=req.body;
        const gameModel=new Game({
        gamers:[{
            id:uuid(),
            name:gamers[0],
        },{
            id:uuid(),
            name:gamers[1]
        },{            
            id:uuid(),
            name:gamers[2],
        }]
        })
        gameModel.save()
            .then((result)=>res.json({
                id:result.id,
                type:"",
                gamers:[gamers[0],gamers[1],gamers[2]]
                // [0].name,result.gamers[1].name,result.gamers[2].name,
            }))
            .catch((err)=>console.log(err));
    }
    catch(err){
        console.log(err)
    }
}

//para ver el estado del juego
exports.gameStatus=function(req,res){
    const {gameid}=req.params;
    Game.findOne({gameid})  
        .then(result=>{ res.json({
            id: result.id,
            gamers: {
                id1: {
                    id: result.gamers[0].id,
                    name: result.gamers[0].name
                },
                id2: {
                    id: result.gamers[1].id,
                    name: result.gamers[1].name
                },
                id3: {
                    id: result.gamers[2].id,
                    name: result.gamers[2].name
                },
            },
            inProgress: false,
            winner: {
                id: result.gamers[1].id,
                name: result.gamers[1].name
            }
        })
        })
        .catch(err=>console.log(err));
}

exports.startGame=function(req,res){
    const {betGamers}=req.body;
    const {gameid}=req.params;
    Game.findOne(gameid)
        .then(result=>{
            let obj={};
            obj[result.gamers[0].id]=betGamers[0];
            obj[result.gamers[1].id]=betGamers[1];
            obj[result.gamers[2].id]=betGamers[2];
        
            res.json({
                id:uuid(),
                type:"" ,
                gamerbet:obj
            })
        })
        .catch(err=>console.log(err));
}
exports.winner=function(req,res){
    const {gameid}=req.params;
    Game.findOne(gameid)
        .then(result=>{
            let winner=Math.floor(Math.random() * 4);
            res.json({
                id:result.gamers[winner].id,
                name:result.gamers[winner].name,
            })
        })
        .catch(err=>{
            console.log(err)
            console.log("no encontro el juego")
        });
}


