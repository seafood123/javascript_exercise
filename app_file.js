var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');
var _storage = multer.diskStorage({
  destination: function (req,file,cb){
    cb(null, 'uploads')
  },
  filename: function (req,file,cb){
    cb(null, file.originalname);
  }
})
var upload = multer({storage: _storage});  // 사용자가 업로드한 파일이 어디에 저장되어야 하는지를 설정
app.use('/user',express.static('uploads'));
app.use(bodyParser.urlencoded({extended:false}));
app.set('views','./views_file');
app.set('view engine','jade');
app.locals.pretty = true;       // jade파일 줄바꿈 해주는 거
app.listen(3000,function(){
  console.log("Connected, 3000 PORT");
});

app.get('/topic/new',function(req,res){
  fs.readdir('data',function(err,files){
    if(err){
      console.log(err);
      res.status(500).send('INTERNET SERVER ERROR');
    }
  res.render('new',{topics:files});
});
});

// 중복을 하나로 통합하기!!
app.get(['/topic','/topic/:id'],function(req,res){
  fs.readdir('data',function(err,files){
    if(err){
      console.log(err);
      res.status(500).send('INTERNET SERVER ERROR');
    }
    var id = req.params.id;
    if(id){
      // id 값이 있을때
      fs.readFile('data/'+id,'utf8',function(err,data){
        if(err){
          console.log(err);
          res.status(500).send('INTERNET SERVER ERROR');
        }
        res.render('view',{topics:files, title:id, description:data});
      });
    }
    else{
      // id 값이 없을때
      res.render('view',{topics : files, title:'Welcome', description:'HELLO, JAVASCRIPT FOR SERVER'});
    }

  })

})


//app.get('/topic',function(req,res){
  //fs.readdir('data',function(err,files){
    //if(err){
      //console.log(err);
      //res.status(500).send('INTERNET SERVER ERROR');
    //}
    //res.render('view',{topics : files});
  //})

//});

//app.get('/topic/:id',function(req,res){
  //var id = req.params.id;
  //fs.readdir('data',function(err,files){
    //if(err){
      //console.log(err);
      //res.status(500).send('INTERNET SERVER ERROR');
//    }
//    fs.readFile('data/'+id,'utf8',function(err,data){
//      if(err){
//        console.log(err);
//        res.status(500).send('INTERNET SERVER ERROR');
//      }
//      res.render('view',{topics:files, title:id, description:data});
//    });
//  });
//});

app.post('/topic',function(req,res){
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile('data/'+title,description,function(err){
    if(err){
      console.log(err);
      res.status(500).send('INTERNET SERVER ERROR');
    }
    res.redirect('/topic/'+title);
  });
});

app.get('/upload',function(req,res){
  res.render('uploadform');
});

app.post('/upload',upload.single('userfile'),function(req,res){
  console.log(req.file);
  res.send('UPLOADED : '+req.file.filename);
});
