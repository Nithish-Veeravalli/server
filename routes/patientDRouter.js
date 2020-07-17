const router = require('express').Router();
let PatientDetails = require('../models/patient.model');

router.route('/').get((req, res) =>{
    PatientDetails.find()
    .then(patient => res.json(patient))
    .catch(err => res.status(400).json('Error ' + err));
});
router.route('/:drivermobileNo').get((req, res) =>{
    const num = req.params.drivermobileNo
    PatientDetails.find({ drivermobileNo : num , active : true })
    // DriverInfo.find({ mobileNo : num })
    .then(patient => res.json(patient))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) =>{
    // const driverUserID = req.body.driverUserID;
    const username = req.body.username;
    const caseP = req.body.caseP;
    const patientmobileNo = req.body.patientmobileNo;
    const drivermobileNo = req.body.drivermobileNo;
    // const caseCriticalness = req.body.caseCriticalness;
    // const patientLocation = req.body.patientLocation;

    const newPatient = new PatientDetails({
        // driverUserID, caseCriticalness,, patientLocation
        username, caseP,drivermobileNo, patientmobileNo
    });

    newPatient.save()
    .then(() => res.json('Patient added!'))
    .catch(err => res.status(400).json('Error '+ err));
});

router.route('/update/:id').post((req, res) =>{
    PatientDetails.findById(req.params.id)
    .then(Patient =>{
        Patient.destinationLocation = req.body.destinationLocation;
        Patient.driverLocation = req.body.driverLocation;
        Patient.polyline = req.body.polyline;
        // Patient.hospitalName = req.body.hospitalName;
        Patient.permission = req.body.permission;
        Patient.active = req.body.active;

        Patient.save()
        .then(() => res.json('Patient information updated'))
        .catch(err => res.status(400).json('Error ' + err));
    }).catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;