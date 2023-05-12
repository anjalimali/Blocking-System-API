const Category = require('../model/categories')

// get product 

exports.getcategory = async (req, res) => {
    try {
        const data = await Category.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// post product

exports.postcategory = async (req, res) => {
    try {
        const data = await Category.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// put products

exports.putcategory = async (req, res) => {
    try {
        const data = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.deletecategory = async (req, res) => {
    try {
        const data = await Category.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, messsage: error.messsage })
    }
}