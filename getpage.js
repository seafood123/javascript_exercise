// 모듈 로드
var client = require("cheerio-httpcli");
var urlType = require("url");

// 다운로드
var url = "http://jpub.tistory.com";
var param = {};

client.fetch(url,param,function(err,$,res){
  //에러체크
  if (err) {
    console.log("Error :",err); return;
  }

  // url의 링크들을 화면에 출력
  $("a").each(function(idx){
    var text = $(this).text();
    var href = $(this).attr('href');

    if(!href) return;

    //상대경로를 절대경로로 변환
    var href2 = urlType.resolve(url,href);

    console.log(text+":"+href);
    console.log(" => "+href2+"\n");
  });
});
