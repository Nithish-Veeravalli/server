const router = require('express').Router();
let PatientDetails = require('../models/patient.model');

router.route('/').get((req, res) =>{
    PatientDetails.find()
    .then(patient => res.json(patient))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) =>{
    const driverUserID = req.body.driverUserID;
    const username = req.body.username;
    const caseP = req.body.caseP;
    const caseCriticalness = req.body.caseCriticalness;
    const pickUpLoaction = req.body.pickUpLoaction;

    const newPatient = new PatientDetails({
        driverUserID, username, caseP,caseCriticalness, pickUpLoaction
    });

    newPatient.save()
    .then(() => res.json('Patient added!'))
    .catch(err => res.status(400).json('Error '+ err));
});

router.route('/update/:id').post((req, res) =>{
    PatientDetails.findById(req.params.id)
    .then(Patient =>{
        Patient.destination = req.body.destination;
        Patient.polyline = req.body.polyline;
        Patient.hospitalName = req.body.hospitalName;
        Patient.permission = req.body.permission;

        Patient.save()
        .then(() => res.json('Patient information updated'))
        .catch(err => res.status(400).json('Error ' + err));
    }).catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;