const express = require('express')
const multer = require('multer')
const fs = require('fs-extra')
const router = express.Router()
const imagePath = 'C:\\Users\\Admin\\Desktop\\Node-js-File-Upload\\images\\download.jpg';
// const imagePath = require('../images/download.jpg');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/')
    },
    filename: function (req, file, cb) {
        console.log("filename :", file);
        cb(null, file.originalname)
    }
})


const upload = multer({ storage: storage })

router.post('/', upload.single('file'), function (req, res, next) {
    // remove file
    // With a callback:
    fs.remove('images/hassan.jpg', err => {
        if (err) return console.error(err)
        console.log('success!')
    })
    res.status(200).json({
        message: "file uploaded"
    })
})

// / Use async/await to handle the asynchronous file reading
async function readImage() {
    try {
        const imageData = await fs.readFile(imagePath);
        // Process the image data as needed
        console.log('Image data:', imageData);
    } catch (err) {
        console.error('Error reading image:', err);
    }
}
readImage();





module.exports = router
