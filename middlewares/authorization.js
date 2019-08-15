module.exports = (req, res, next) => {
    const Text = require('../models/text')
    const { id } = req.decode
    const textId = req.textid
    Text.findById(textId)
    .then(data => {
        if(data.userId == id){
            next()
        }
    })
    .catch(next)
}