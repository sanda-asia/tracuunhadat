module.exports = app =>{
    const logger = require('morgan');
    const cookieParser = require('cookie-parser');
    const bodyParser   = require('body-parser');
    // var cors = require('cors');


    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
<<<<<<< HEAD
    // app.use(cors);
=======
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin','*');
        res.header('Accees-Control-Allow-Headers',
                    'Origin, X-Requested-With, Content-Type, Acept,Authorization');
        if (req.method === 'OPTIONS') {
            res.header('Access-Controll-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }
        next();
    })
>>>>>>> 718b246fcc3f3fb090571299eb89dba1088c2c8e
}