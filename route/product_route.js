const {getproduct,postproduct,putproduct,deleteproduct}=require('../controller/productcontroller')
const mongoose = require('mongoose')
const auth = require('../middlewaer/auth')

const route = require('express').Router()

route.get('/',getproduct)

route.post('/',auth,postproduct)

route.put('/:id',putproduct)

route.delete('/:id',deleteproduct)

module.exports = route