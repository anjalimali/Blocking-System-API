
const Blog = require('../model/blog')

// get blog
exports.getblog = async (req, res) => {
    try {
        const data = await Blog.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// post blog
exports.postblog = async (req, res) => {
    try {
        const data = await Blog.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// put blog
exports.putblog = async (req, res) => {
    try {
        const data = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// delete blog
exports.deleteblog = async (req, res) => {
    try {
        const data = await Blog.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}
