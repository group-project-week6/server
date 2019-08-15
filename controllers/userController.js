require('dotenv').config()
const User = require('../models/user')
const { encrypt } = require('../helpers/hash')
const { decrypt } = require('../helpers/hash')
const { generateToken } = require('../helpers/token')

class UserController {
    static signIn(req, res, next){
        const {username, password} = req.body
        User.findOne({
            username: username
        })
        .then(user => {
            if(user){
                if(decrypt(password,user.password)) {
                    const payload = {
                        id: user._id,
                        username: user.username,
                        email: user.email
                    }
                    const token = generateToken(payload)
                    // console.log(token)
                    res.status(200).json({token})
                } else { 
                    next
                }
            } else {
                next
            }
        })
        .catch(next)
    }

    static register(req,res,next){
        const {username, email, password} = req.body
        User.create({
            username, email, password: encrypt(password)
        })
        .then(data => {
            res.status(201).json({
                message: 'Account is successfully created'
            })
        })
        .catch(next)
    }
}

module.exports = UserController