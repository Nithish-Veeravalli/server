const router = require('express').Router();
const path = require("path");
const multer = require('multer');
let DriverInfo = require('../models/driver.model');

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
})

router.route('/').get((req, res) =>{
    DriverInfo.find()
    .then(driver => res.json(driver))
    .catch(err => res.status(400).json('Error ' + err));
});
router.route('/:mobileNo').get((req, res) =>{
    const num = req.params.mobileNo
    DriverInfo.find({ mobileNo : num })
    .then(driver => res.json(driver))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) =>{
    // const userID = req.body.userID;
    const username = req.body.username;
    const mobileNo = req.body.mobileNo;
    // const image = `http://localhost:1080/licence/${req.file.filename}`

    const newDriver = new DriverInfo({
        // userID, image,
        username, mobileNo, 
    });

    newDriver.save()
    .then(() => res.json('Driver is added'))
    .catch(err => res.status(400).json('Error ' + err));
});

// router.route('/find/:mobileNo').post(upload.single('user'), (req, res) =>{
//     DriverInfo.findById(req.params.mobileNo)
//     // driver.image = `${Date.now()}`
//     .then(driver =>{
//         driver.save()
//         .then(() => res.json('driver granted permission'))
//         .catch(err => res.status(400).json('Error ' + err));
//     }).catch(err => res.status(400).json('Error ' + err));
// });


module.exports = router;