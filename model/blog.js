
const mongoose = require('mongoose')

const blogschema = new mongoose.Schema({
    title:{
        type:String,
        requird:true
    },
    content:{
        type:String,
        requird:true
    },
    slug:{
        type:String,
        requird:true
    },
    creatAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('blog',blogschema)