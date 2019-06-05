var express = require('express');
const constants = require('./config/constants');


var app = express();

require('./config/database');
require('./config/middlewares')(app);

require('./modules/index')(app);



app.listen(constants.PORT, err => {
    if (err) {
      throw err;
    } else {
      console.log(`Server running on port: ${constants.PORT} `);
    }
});
  