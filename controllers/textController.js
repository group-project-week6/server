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
        Text.find().populate('userId')
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next)
    }

    static find(req, res, next) {
        let { id } = req.decode
        Text.find({userId: id}).populate('userId')
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next)
    }

    static delete(req,res,next) {
        let id = req.params.id

        Text.findByIdAndDelete(id)
        .then(response=>{
            res.status(200).json(response)
        })
        .catch(next)
    }

    static update(req,res,next){
        
        console.log(req.body.id)
        let id = req.body.id
        let updatedData = {}

        req.body.title && (updatedData.title = req.body.title)
        req.body.link && (updatedData.link=req.body.link)

        Text.findByIdAndUpdate(id, updatedData, {new:true})
        .then(response=>{
            res.status(200).json(response)
        })
        .catch(next)
    }
}

module.exports = TextController