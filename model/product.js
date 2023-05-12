
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        requird: true
    },
    category: { type: mongoose.Schema.Types.ObjectId,ref: 'category1' },

})

module.exports = mongoose.model('product1', productSchema)