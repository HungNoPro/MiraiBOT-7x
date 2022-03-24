const fs = require("fs-extra");
module.exports.config = {
  name: "codegenshin",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - mod by HungNoPro",
  description: "no prefix",
  commandCategory: "Không cần dấu lệnh",
  usages: "Yo Yo",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("code") == 0 || (event.body.indexOf("Code") == 0)|| 
 (event.body.indexOf("Có code") == 0)|| (event.body.indexOf("có code") == 0)) {
    var msg = {
      body: '❀Những code còn hiệu lực:❀ \n1.GENSHINGIFT \n2.ZSPDKSC3V8V5\n3.AB7CKBVQULE5\n4.3TPUKSV8C5X9\n5.UT7C2TD8C5ZD\n=======\nLink nhập code: https://genshin.hoyoverse.com/m/vi/gift',
      attachment: fs.createReadStream(__dirname + `/noprefix/ver 2.8.gif`)
    }
    api.sendMessage(msg, threadID, messageID);
  }
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}