const express = require('express')
const path = require('path')
const multer = require('multer')

const app = express()

app.listen(5000, () => {
    console.log('listen to 5000');
})

app.use('/', express.static(path.join(__dirname, '/public')))

app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true)
    }
    else {
        cb(null, false)
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter })

app.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.body);
    try {
        return res.status(201).json({ msg: 'uploaded' })
    }
    catch (e) {
        console.log(e);
    }
})