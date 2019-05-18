const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');

module.exports = app =>{
    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
}