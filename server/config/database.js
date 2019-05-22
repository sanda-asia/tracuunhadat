const constants = require('./constants');

const mongoose = require('mongoose');

//connection
mongoose.Promise = global.Promise;
mongoose.connect(constants.MONGO_URL,{ useNewUrlParser: true }).then(
  () => console.log('ket noi thanh cong'),
  err => console.log('ket noi that bai')
);