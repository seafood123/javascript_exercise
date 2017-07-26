var fs = require("fs");
console.log(2)
var data = fs.readFile('data.txt',{encoding:'utf8'},function(err,data){
  console.log(3)
  console.log(data);
});
console.log(4)
