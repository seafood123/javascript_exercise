var mysql = require("mysql");
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '0000',
  database : 'o2'
});

connection.connect();
/*
var sql = 'SELECT * FROM topic';
connection.query(sql, function(err,rows,fields){
  if(err){
    console.log(err);
  } else {
    for(var i=0; i<rows.length; i++){
      console.log(rows[i].description);
    }
  }
});

var sql = 'INSERT INTO topic (title,description,author) Values(?,?,?)';
var params = ['Supervisor','Watcher','graphittie'];
connection.query(sql,params,function(err,rows,fields){
  if(err){
    console.log(err);
  } else{
    console.log(fields);
  }
})
var sql = 'UPDATE topic SET title=?,author=? WHERE id=?';
var params = ['npm','leezche',2];
connection.query(sql,params,function(err,rows,fields){
  if(err){
    console.log(err);
  } else{
    console.log(rows);
  }
})
*/
var sql = 'DELETE FROM topic WHERE id=?';
var params = [1];
connection.query(sql,params,function(err,rows,fields){
  if(err){
    console.log(err);
  } else{
    console.log(rows);
  }
})

connection.end();
