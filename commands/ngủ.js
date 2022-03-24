const fs = require("fs-extra");
module.exports.config = {
  name: "ngủ",
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
  if (event.body.indexOf("ngủ") == 0 || (event.body.indexOf("Ngủ") == 0)) {
    let name = (await api.getUserInfo(event.senderID))[event.senderID].name;
    var msg = {
      body: `chúc bạn ngủ ngon mơ đẹp nha! ❤️ ${name} 🥰`,
      attachment: fs.createReadStream(__dirname + `/noprefix/ngu.gif`)
    }
    return api.sendMessage(msg, event.threadID, event.messageID);
  }
}
module.exports.run = async function({ api, event, client, __GLOBAL }) {

}