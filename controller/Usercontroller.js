const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// get user

exports.getuser = async (req, res) => {
    try {
        const data = await User.find()
        return res.json({ errors: true, data: data })
    } catch (error) {
        return res.json({ errors: true, message: error.message })
    }
}

exports.getuserid = async (req, res) => {
    try {
        const data = await User.findById(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.json({ errors: true, message: error.message })
    }
}

exports.getusermail = async (req, res) => {
    try {
        const data = await User.findOne({ email: req.params.email })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.json({ errors: true, message: error.message })
    }
}

// post user

exports.postuser = async (req, res) => {
    try {
        const Userexit = await User.findOne({ email: req.body.email })
        if (Userexit) return res.status(400).json({ errors: true, message: "User already Exit" })

        // enceyption password
        const salt = await bcrypt.genSalt()
        req.body.password = await bcrypt.hash(req.body.password, salt)

        const data = await User.create(req.body)
        return res.json({ errors: false, data: data })

    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// put user

exports.putuser = async (req, res) => {
    try {
        // enceyption password
        const salt = await bcrypt.genSalt()
        req.body.password = await bcrypt.hash(req.body.password, salt)


        const data = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })

    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// delete user

exports.deleteuser = async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

exports.login = async (req,res)=>{
    try {
        const Userexit = await User.findOne({email:req.body.email})
        if (!Userexit)  return res.json({errors:true,message:"email or password invalid"})

        const validPassword = await bcrypt.compare(req.body.password,Userexit.password)
        if(!validPassword) return res.json({errors:true,message:"email or password invalid"})

        const token = await jwt.sign({id:Userexit._id},process.env.SEC)
        return res.json({errors:false,data:{token:token,User:Userexit}})
        
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}