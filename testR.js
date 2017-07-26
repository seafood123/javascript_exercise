var R = require("r-script");
var out = R("C:\\Users\\abc\\Desktop\\한이음\\basedata.r")
        .data("gwangju1.csv")
        .callSync(function(err,resp){
          console.log(out);
        });
