const {getblog,postblog,putblog,deleteblog} = require('../controller/Blogcontroller')

const route = require('express').Router()

route.get('/',getblog)

route.post('/',postblog)

route.put('/:id',putblog)

route.delete('/:id',deleteblog)

module.exports=route