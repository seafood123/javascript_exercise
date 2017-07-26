// 모듈로드
var parseString = require("xml2js").parseString;

//테스트용 xml데이터
var xml = "<items>"+
  "<item><name>Banana</name><price>130</price></item>"+
  "<item><name>Apple</name><price>200</price></item>"+
  "<item><name>Kiwi</name><price>230</price></item>"+
  "</items>"
//xml 전달
parseString(xml,function(err,result){
  //파싱된 결과에 대한 처리를 여기에 작성
  console.log(JSON.stringify(result));

  //fruits를 제공하는 가게이름
  //var shop = result.fruits.$.shop;
  //console.log(JSON.stringify(shop));

  //fruits의 이름과 가격 표시
  //var items = result.fruits.item;
  //for (var i in items){
    //var item = items[i];
    //console.log("--name="+item._);
    //console.log("  price=" + item.$.price);
  //}
  console.log("###");
  console.log(result.items.item[0].name[0]);
  console.log(result.items.item[0].price[0]);
});
