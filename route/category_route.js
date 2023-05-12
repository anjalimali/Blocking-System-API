const { getcategory, postcategory, putcategory, deletecategory } = require('../controller/categorycontroller')
const mongoose = require('mongoose')

const route = require('express').Router()

route.get('/', getcategory)

route.post('/', postcategory)

route.put('/:id', putcategory)

route.delete('/:id', deletecategory)

module.exports = route