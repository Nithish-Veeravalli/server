const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'driverLicences/' })
let DriverInfo = require('../models/driver.model');

router.route('/').get((req, res) =>{
    DriverInfo.find()
    .then(driver => res.json(driver))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post(upload.single('driverLicenceImage') ,(req, res) =>{
    const userID = req.body.userID;
    const username = req.body.username;
    const cellPhoneNo = req.body.cellPhoneNo;
    console.log(req.file)

    const newDriver = new DriverInfo({
        userID, username, cellPhoneNo, 
    });

    newDriver.save()
    .then(() => res.json('Driver is added'))
    .catch(err => res.status(400).json('Error ' + err));
});

// router.route('/update/:id').post((req, res) =>{
//     DriverInfo.findById(req.params.id)
//     .then(driver =>{
//         driver.permission = req.body.permission;

//         driver.save()
//         .then(() => res.json('driver granted permission'))
//         .catch(err => res.status(400).json('Error ' + err));
//     }).catch(err => res.status(400).json('Error ' + err));
// });

module.exports = router;