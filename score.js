var R = require('r-script');

var res = R('example.R')
  .data({wide: '광주광역시', city: '서구', category: '닭/오리요리',  date: '201706'})
  .callSync();

console.log(res);
