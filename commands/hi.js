const fs = require("fs-extra");
module.exports.config = {
  name: "hi",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - mod by HungNoPro",
  description: "no prefix",
  commandCategory: "Không cần dấu lệnh",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Hi") == 0 || (event.body.indexOf("Chào") == 0) || (event.body.indexOf("Hello") == 0)) {
    let name = (await api.getUserInfo(event.senderID))[event.senderID].name;
    var msg = {
      body: `Chào cậu yêu dấu ❤️ ${name} ,chúc cậu 1 ngày vui vẻ 💖🥰`,
      attachment: fs.createReadStream(__dirname + `/noprefix/hi.gif`)
    }
    return api.sendMessage(msg, event.threadID, event.messageID);
  }
}
module.exports.run = async function({ api, event, client, __GLOBAL }) {

}