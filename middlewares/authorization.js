module.exports = (req, res, next) => {
    const Text = require('../models/text')
    const { id } = req.decode
    // console.log(req.decode)
    const textId = req.params.id
    Text.findById(textId)
    .then(data => {
        if(data.userId == id){
            next()
        }
    })
    .catch(next)
}