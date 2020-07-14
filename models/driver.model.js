const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DriverDetailsSchema = new Schema ({
    userID : { type:String, required:true ,unique: true },
    username : { type: String, unique: true},
    cellPhoneNo: { type:Number, required:true },
},{
    timestamps: true,
});

const DriverDetails = mongoose.model('DriverDetails', DriverDetailsSchema);

module.exports = DriverDetails;