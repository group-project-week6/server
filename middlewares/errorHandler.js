function errorHandler (err, req, res, next){
    console.log("masuk ke error handler")
    res.status(500).json({
        message: "masuk ke error handler"
    })
}

module.exports = errorHandler