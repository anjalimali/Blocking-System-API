require('dotenv/config')
const product_route = require('./route/product_route')
const category_route = require('./route/category_route')
const user_route = require('./route/user_route')
const Blog_route = require('./route/blog_route')
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')

const app = express()
// middleware
app.use(express.json())
app.use(cors())

// default
app.get('/', (req, res) => {
    res.send("this is home")
})

// main
app.use('/api/blog', Blog_route)

app.use('/api/user', user_route)

app.use('/api/product',product_route)

app.use('/api/cateory',category_route)

app.listen(process.env.PORT, () => {
    console.log("listing on port 5000");
})

async function main() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
main()