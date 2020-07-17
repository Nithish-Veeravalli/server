const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PatientDetailsSchema = new Schema ({
    username : { type: String, required: true },
    // driverUserID : { type: String, required: true },
    caseP : { type:String, required:true },
    // caseCriticalness : { type:String, required:true },
    drivermobileNo: {  type: Number, required: true },
    patientmobileNo: { type:Number, required: true  },
    // patientLocation : { type: String, required: true },
    destinationLocation : {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
          },
          coordinates: {
            type: [Number],
          }
    },
    driverLocation : {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
        },
        coordinates: {
          type: [Number],
        }
      },
    polyline : { type: String },
    // hospitalName : { type: String },
    permission : { type: Boolean },
    active : { type: Boolean },
    
},{
    timestamps: true,
});

const PatientDetails = mongoose.model('PatientDetails', PatientDetailsSchema);

module.exports = PatientDetails;