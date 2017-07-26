// url 모듈 로드
var urltype = require("url");

// 상대 경로를 절대 경로로 변환
var base = "http://kujirahand.com/url/test/index.html";
var u1 = urltype.resolve(base,"a.html");
console.log("u1 = " + u1);
