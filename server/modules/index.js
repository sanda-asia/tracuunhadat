var createError = require('http-errors');

module.exports = app => {
    // model global
    global.User = require("./users/users.model");
    
    global.Classified = require("./classified/classified.model");

    global.Blog = require("./blog/blog.model");

    global.Project = require("./project/project.model")
    //router
    const userRouter = require("./users/user.routes");
    // const settingRouter = require("./setting/setting.routers");

    const classifiedRouter = require("./classified/classidied.routes");

    const projectRouter = require("./project/project.routes");

    const blogRouter = require("./blog/blog.routes");

    app.use('/user', userRouter);
    // app.use('/setting', settingRouter);
    
    app.use('/classified', classifiedRouter);

    app.use('/blog', blogRouter);

    app.use('/project', projectRouter);

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