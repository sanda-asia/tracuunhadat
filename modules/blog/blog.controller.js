module.exports = {
    createBlog: (req, res, next) => {
        let listImages = [];
        if (req.files) {
            for( i = 0; i< req.files.length; i++) {
                listImages.push(req.files[i].path);
            }
        }
        const newBlog = new Blog({
            headerBlog: req.body.headerBlog,
            content: req.body.content,
            imageSrc: listImages,
            // author: req.user.data._id,
        });
        newBlog.save()
            .then(result => {
                res.status(201).json({
                    message: 'Created blog successfully!',
                    createdBlog: newBlog,
                });
            })
            .catch(err => {
                res.status(500).json({
                    error : err
                });
            });
    },
    getListBlog: (req, res, next)=> {
        Blog.find()
            .exec()
            .then(docs => {
                const response = {
                    count : docs.length,
                    listBlog : docs.map(doc => {
                        return {
                            blog: doc
                        }
                    }),
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