const router = require("express").Router();
const blogController = require('./blog.controller');
const multer = require('multer');
const auth = require('../../services/auth.service')
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './static/upload/blog');
    },
    filename: function (req, file, callback) {
      callback(null, Date.now()+ file.originalname);
    }
  });
const upload = multer({ 
    storage : storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
});
  

// Get list blog
router.get('/', blogController.getListBlog);

// Create blog
router.post('/', auth.checkAdmin, upload.array('images'), blogController.createBlog);

// Get blog by ID
router.get('/:id', blogController.getBlogById);

// Update blog
router.put('/:id', auth.checkAdmin, upload.array('images'), blogController.updateById);

// Delete blog
router.delete('/:id', auth.checkAdmin, blogController.deleteBlog);
module.exports = router;