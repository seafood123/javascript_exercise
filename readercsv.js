var filePath = process.argv[2];
var fs = require("fs");
var csv = require("./csv")
csv(filePath)
fs.readFile(filePath,{encoding:"utf-8"},function(err,data){
  console.log("good")
})
