const express = require('express');
// const fileUpload = require('express-fileupload')
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT || 1080;

app.use(cors());
app.use(express.json())

const uri = "mongodb+srv://db:db@cluster0-l5leq.mongodb.net/wholef1data?retryWrites=true&w=majority";
const mongodOp =  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
mongoose.connect(uri,mongodOp);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const patientDRouter = require('./routes/patientDRouter');
const driverIRouter = require('./routes/driverDetails')

app.use('/patient', patientDRouter);
app.use('/driver', driverIRouter);

app.use('/licence', express.static('upload/images'));

function errHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
      res.json({
          success: 0,
          message: err.message
      })
  }
}
app.use(errHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
