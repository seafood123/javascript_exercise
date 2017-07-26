var fs = require("fs");
var path = require("path");
var filePath = path.join(__dirname)

module.exports = function(filePath){
  var data = fs.readFileSync(filePath,{encoding : "utf8"});
  var rows = data.split("\n");
  var result = [];

  for(var rowIndex in rows){
    var row = rows[rowIndex].split(",");
    if(rowIndex ==="0"){var columns = row;}
    else{
      var data = {}; // 빈 객체를 생성하고 여기에 데이터를 추가한다
      for(var columnIndex in columns){
        var column = columns[columnIndex];
        data[column] = row[columnIndex];
      }
      result.push(data);
    }
  }
  console.log(result);
}
