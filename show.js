var client = require("cheerio-httpcli");
var urlType = require("url");
var query = process.argv[2];
var url = "https://ko.wikipedia.org/wiki/"+encodeURIComponent(query);
var param = {};
var savedir = __dirname + "/img";
var fs = require("fs");
var request = require("request");
if(!fs.existsSync(savedir)){
  fs.mkdirSync(savedir);
}

client.fetch(url,param,function(err,$,res){
  if(err){console.log("error"); return;}
  $("img").each(function(idx){
    var src = $(this).attr("src");
    src = urlType.resolve(url,src);
    var fname = urlType.parse(src).pathname;
    console.log(fname);
    var fname = savedir + "/"+ fname.replace(/[^a-zA-Z0-9\.]+/g,'_');
    request(src).pipe(fs.createWriteStream(fname));

  });
});
