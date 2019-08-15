const express = require('express')
const router = express.Router()
const textController = require('../controllers/textController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/all', textController.findAll)
router.get('/', textController.find)
router.post('/', textController.create)
router.delete('/:id', authorization, textController.delete)

module.exports = router