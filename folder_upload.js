var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var formidable = require("formidable");
var fs = require("fs");
var multer = require('multer');
var _storage = multer.diskStorage({
  destination: function (req,file,cb){
    cb(null, 'uploads')
  },
  filename: function (req,file,cb){
    cb(null, file.originalname);
  }
})
var upload = multer({storage:_storage});
app.use('/user',express.static('uploads'))
