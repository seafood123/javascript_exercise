var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./routes/index")
var rscripts = require("./routes/rscript")

app.locals.pretty=true;
app.set('views','./views');
app.set('view engine','jade');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',routes);
app.use("/rscript",rscripts)
app.get('/template',function(req,res){
  res.render('temp',{time:Date(),_title : "jade"});
});
app.get('/form',function(req,res){
  res.render("form");
});
app.post('/form_receiver',function(req,res){
  var title = req.body.title;
  var discription = req.body.discription;
  res.send(title);
  res.send(discription);
});
app.get('/form_receiver',function(req,res){
  var title = req.query.title;
  var discription = req.query.discription;
  res.send(title+','+discription);
});
app.get('/topic',function(req,res){
  var topics = [
    'javascript is....',
    'nodejs is....',
    'express is....'
  ];
  var output = `
    <a href="/topic?id=0">Javascript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br><br>
    ${topics[req.query.id]}
  `
  res.send(output);
});
app.get("/topic/:id/:mode",function(req,res){
  res.send(req.params.id+','+req.params.mode)
});
app.get('/',function(req,res){
  res.send("Hello!");
});
app.get("/route",function(req,res){
  res.send('굿즈,<img src"/pic.jpg">"')
});
app.get('/dynamic',function(req,res){
  var lis = '';
  for(var i=0;i<5;i++){
    lis = lis + '<li>coding</li>';
  }
  var time = Date();
  var output = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
        Hello Dynamic!
        ${time}
        <ul>
        ${lis}
        </ul>

    </body>
  </html>
`;
  res.send(output);
})
app.get('/login',function(req,res){
  res.send("<h1>로그인 해주세요!</h1>");
});

app.listen(3000,function(){
  console.log("Connected 3000 port!");
});
