const datalist = require('./index.json');
const yanjiangdata = require('./yanjianglist1.json')
const zhiyadata = require('./zhiyalist1.json');
const recorddata = require('./recordlist1.json');
const wanxiangs = require('./wanxiangs.json')

//现场模块的数据
const speek = require("./spotData/speek.json"); 
const countyard = require("./spotData/countyard.json");
const times = require("./spotData/times.json");  //时间线模块的数据
    
const areadata = require('./area.json');

const speek_details = require("./spotData/speek_details.json")  

const detailData = require("./detail.json")
module.exports = function() {
  return {
    datalist,
    yanjiangdata,
    zhiyadata,
    recorddata,
    speek,
    countyard,
    times,
    wanxiangs,
    areadata,
    speek_details,
    detailData //所有演讲的数据

  }
}