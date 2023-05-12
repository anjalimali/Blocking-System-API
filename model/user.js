
const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    name:{
        type:String,
        requird:true
    },
    email:{
        type:String,
        requird:true
    },
    password:{
        type:String,
        requird:true
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('auth_user',userschema)