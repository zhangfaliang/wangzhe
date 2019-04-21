var pageUrl = {
  hashStr: "",
  urlStr: "https://github.com/zhangfaliang/wanzheshipin/raw/master",
  fileStr: "/1/",
  sufFixStr: ".mp4",
  outputLength: 17 //视频数组的长度
};

function rand(maxNum, minNum, length) {
  var arr = new Array(length);
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    var item = Math.ceil(Math.random() * (maxNum - minNum + 1) + minNum);
    if (res.indexOf(item) > -1) {
      --i;
      continue;
    }
    res.push(parseInt(item, 10));
  }
  return res;
}
var randomNumList = rand(16, 0, 17);
var common = {
  pageUrl,
  randomNumList
};

module.exports = common;
