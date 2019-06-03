const router = require("express").Router();
const blogController = require('./blog.controller');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/upload/blog');
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
router.post('/tao-blog', upload.any(), blogController.createBlog);

// Get blog by ID
router.get('/:id', blogController.getBlogById);

// Update blog
router.patch('/:id/update', blogController.updateById);

// Delete blog
router.delete('/:id/delete', blogController.deleteBlog);
module.exports = router;