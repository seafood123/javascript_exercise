var client = require("cheerio-httpcli");
var cheerio = require("cheerio");
var urlType = require("url");
var query = process.argv[2];
var request = require("request");
var fs = require("fs");
var savedir = __dirname + "/img";
var url = "https://www.google.co.kr/search?q=%EA%B0%95%EC%95%84%EC%A7%80&source=lnms&tbm=isch&sa=X&ved=0ahUKEwivsMCmhYrVAhXIULwKHSCFC_0Q_AUICigB&biw=758&bih=714"
var savedir = __dirname + "/img";
if(!fs.existsSync(savedir)){
  fs.mkdirSync(savedir);
}

request(url,function(err,res,html){
  var $ = cheerio.load(html);
  console.log($);
})
//console.log(fname);
//request(src).pipe(fs.createWriteStream(fname))
