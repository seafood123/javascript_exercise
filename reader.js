var filePath = process.argv[2];
console.log(filePath)
var fs = require("fs");
var csv = require("./csv-read");
csv(filePath);
fs.readFileSync(filePath,{encoding:"utf-8"},function(error,data){
  console.log("good");
});
