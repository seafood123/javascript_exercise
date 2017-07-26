
var R = require("r-script");
var out = R("C:\\Users\\abc\\Desktop\\hanium\\input.R")
.data({wide: '광주광역시', city: '북구', category: '닭/오리요리'})
.callSync();
