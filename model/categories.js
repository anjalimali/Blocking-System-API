
const mongoose = require('mongoose')

const  categoryschema = new mongoose.Schema({
    proccessor:{
        type:String,
        requird:true
    },
    price:{
        type:Number,
        requird:true
    },
    creatAt:{
        type:Date,
        default:Date.now()
    }
})


module.exports = mongoose.model('category1',categoryschema)
