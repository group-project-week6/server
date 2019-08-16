function errorHandler (err, req, res, next){
    console.log(err)
    res.status(500).json({
        message: "masuk ke error handler"
    })
}

module.exports = errorHandler