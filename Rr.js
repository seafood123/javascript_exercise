var R = require("r-script");

var out = R("C:/Users/abc/Desktop/한이음/basedata.R")
var choice = ["북구","삼각동","Q","Q05"];
out.data("광주광역시",choice)
out.callSync();
console.log(out)
