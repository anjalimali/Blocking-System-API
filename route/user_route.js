
const { postuser,getuser,putuser,deleteuser,getuserid,getusermail,login } = require('../controller/Usercontroller')

const route = require('express').Router()

route.get('/',getuser)

route.get('/:id',getuserid)

route.get('/byemail/:email',getusermail)

route.post('/', postuser)

route.put('/:id',putuser)

route.delete('/:id',deleteuser)

route.post('/login',login)


module.exports = route