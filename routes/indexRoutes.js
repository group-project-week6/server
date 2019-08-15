const express = require('express')
const router = express.Router()
const textRouter = require('../routes/textRouter')
const userRouter = require('../routes/userRouter')


router.get('/', function(req, res){

    res.send('masuk ke indexRoutes')
})



module.exports= router