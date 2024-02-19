const express = require('express')
const multer = require('multer')
const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        console.log("filename :", file, uniqueSuffix);
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})
const upload = multer({ storage: storage })

router.post('/', upload.single('file'), function (req, res, next) {
    res.status(200).json({
        message: "file uploaded"
    })
})



module.exports = router
