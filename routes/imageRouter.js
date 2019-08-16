const express = require('express'),
      router = express.Router(),
      images = require('../helpers/images')
      
const {deleteFile} = require('../helpers/images')
router.get('/', (req, res, next) => {
  res.send({ message: 'Welcome Buddy!' })
})

router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
  })

router.delete('/',deleteFile)

module.exports = router