'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...
var multer = require('multer')
var upload = multer({dest:'uploads/'})

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post("/api/fileanalyse",upload.single('upfile'),(req,res)=>{
  console.log(req.file)
  let name = req.file.originalname;
  let size = req.file.size;   
  res.send({filename:name,size:size})
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
