var createError = require('http-errors');

module.exports = app => {
    // model global
    global.User = require("./users/users.model");
    
    //router
    const userRouter = require("./users/user.routes");
    const settingRouter = require("./setting/setting.routers");

    app.use('/user', userRouter);
    app.use('/setting', settingRouter);
    

    app.use('/', (req,res,next)=> res.json({"message": "Hello my api"}));

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
    next(createError(404));
    });

    // error handler
    app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
    });
}