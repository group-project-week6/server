if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const logger = require('morgan')
const indexRoutes = require('./routes/indexRoutes')
const errorHandler = require('./middlewares/errorHandler')

app.use(cors())
app.use(logger('dev'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

mongoose.connect("mongodb+srv://billy:monyet@clustertype40-z9sli.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
.then(success => {
    console.log('mongoose connected')
})
.catch(err => {
    console.log(err.message)
})

app.use('/', indexRoutes)

app.use(errorHandler)

app.listen(PORT, (req, res) => {
    console.log(`connected to port ${PORT}`)
})