module.exports = {
    createBlog: (req, res, next) => {
        let listImages = [];
        if (req.files) {
            for( i = 0; i< req.files.length; i++) {
                listImages.push(req.files[i].filename);
            }
        }
        const newBlog = new Blog({
            headerBlog: req.body.headerBlog,
            content: req.body.content,
            province: req.body.province,
            imageSrc: listImages,
        });
        newBlog.save()
            .then(result => {
                res.status(200).json({
                    message: 'Created blog successfully!',
                    createdBlog: newBlog,
                });
            })
            .catch(err => {
                // res.status(500).json({
                //     error : err.message
                // });
                console.log(err.message)
            });
    },
    getListBlog: (req, res, next)=> {
        Blog.find()
            .sort({timePost:-1})
            .exec()
            .then(docs => {
                const response = {
                    count : docs.length,
                    listBlog : docs,
                };
                res.status(200).json(response);
            })
            .catch(err => {
                res.status(500).json({
                    error : err
                })
            });
        
    },
    getBlogById: (req, res, next) => {
        Blog.findById(req.params.id)
            .exec()
            .then(doc => {
                if(doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json({
                        message: "No valid entry found for provided ID",
                    })
                };
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    },
    updateById: (req, res, next) => {
        let listImages = [];
        if (req.files) {
            for( i = 0; i< req.files.length; i++) {
                listImages.push(req.files[i].path);
            }
        };
        const blogUpdated = {
            headerBlog: req.body.headerBlog,
            content: req.body.content,
            province: req.body.province,
            imageSrc: listImages,
            timePost: Date.now(),
        };
        Blog.findByIdAndUpdate(req.params.id)
            .exec()
            .then(result => {
                res.status(200).json({
                    message: 'Blog updated',
                });
            })
            .catch(err => {
                res.status(500).json({
                    error : err,
                });
            });
    },
    deleteBlog:  (req, res, next) => {
        Blog.findByIdAndRemove(req.params.id)
            .exec()
            .then(result => {
                res.status(200).json({
                    message: "Blog deleted",
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err,
                });
            });
    }

}