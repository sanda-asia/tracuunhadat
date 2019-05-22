const router = require("express").Router();
const classifiedController = require("./classified.controller");
const auth = require("../../services/auth.service");
var multer  = require('multer');


router.post("/create-post", classifiedController.createPost); //auth

router.put("/update-post/:id", classifiedController.updatePost); //auth

router.delete("/delete-post/:id", classifiedController.deletePost); //auth



module.exports = router;