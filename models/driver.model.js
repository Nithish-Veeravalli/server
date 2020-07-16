const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DriverDetailsSchema = new Schema ({
    userID : { type:String ,unique: true },
    username : { type: String, unique: true},
    mobileNo: { type:Number },
    image: { type:String }
},{
    timestamps: true,
});

const DriverDetails = mongoose.model('DriverDetails', DriverDetailsSchema);

module.exports = DriverDetails;