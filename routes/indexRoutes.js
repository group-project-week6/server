const express = require('express')
const router = express.Router()
const textRouter = require('./textRouter')
const userRouter = require('./userRouter')
const imageRouter = require('./imageRouter')

router.get('/', function(req, res){
    res.status(200).json('connect')
})
router.use('/images', imageRouter)
router.use('/users', userRouter)
router.use('/texts', textRouter)

module.exports= router