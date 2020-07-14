const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PatientDetailsSchema = new Schema ({
    username : { type: String, required: true },
    driverUserID : { type: String, required: true },
    caseP : { type:String, required:true },
    caseCriticalness : { type:String, required:true },
    phoneNumber: {  type: String, required: true },
    pickUpLoaction : { type: String, required: true },
    destination : { type: String },
    polyline : { type: String },
    hospitalName : { type: String },
    permission : { type: Boolean },
},{
    timestamps: true,
});

const PatientDetails = mongoose.model('PatientDetails', PatientDetailsSchema);

module.exports = PatientDetails;