const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const {v4: uuidv4 } = require('uuid');

const gameSchema=new Schema({
    id:{
        type:String,
        default:uuidv4(),
    },
    gamers:[{
        id:{
            type:String,
            default:uuidv4(),
        },
        name:{
            type:String,
            trim:true,
        }
    }],
})

module.exports=CreateGame=mongoose.model('createGame',gameSchema)