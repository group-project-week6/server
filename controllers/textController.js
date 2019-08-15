const Text = require('../models/text')

class TextController {
    static create(req, res, next) {
        let { id } = req.decode
        let { title, link } = req.body
        Text.create({title, link, userId: id})
        .then(data => {
            res.status(201).json(data)
        })
        .catch(next)
    }

    static findAll(req, res, next) {
        Text.find().populate()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next)
    }

    static find(req, res, next) {
        let { id } = req.decode
        Text.find({userId: id}).populate()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next)
    }

    static delete() {

    }
}

module.exports = TextController