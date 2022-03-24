module.exports.config = {
    name: "daoly",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "tdunguwu",
    description: "Những câu đạo lý cực thấm",
    commandCategory: "Other",
    usages: "",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args}) {
  const axios = require('axios');
  const request = require('request');
  const fs = require('fs');
  const { threadID, messageID } = event;
  const data = ["1","2"]; //thêm ngồn từ gì tùy bạn
  const daoly = data[Math.floor(Math.random() * data.length)];
  var anh = [
      "https://i.imgur.com/iSAejSB.jpg",
    ]; //ảnh sao tùy bạn
    const link = anh[Math.floor(Math.random() * anh.length)];
    
     var callback = () => api.sendMessage({body:`${daoly}`,attachment: fs.createReadStream(__dirname + "/cache/daoly.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/daoly.png"),event.messageID);
                return request(encodeURI(`${link}`)).pipe(fs.createWriteStream(__dirname + '/cache/daoly.png')).on('close', () => callback());
      
  }
  //nếu bạn có api ảnh thì làm như sau
  //axios.get('thay api vao day').then(res => {
  //let ext = res.data.url.substring (res.data.url.lastIndexOf(".") + 1); 
 // let callback = function () {
         // api.sendMessage({
         //   body: `${daoly}`,
        //    attachment: fs.createReadStream(__dirname + `/cache/daoly.${ext}`)
        //  }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/daoly.${ext}`), event.messageID);
      //  };
      //  request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/daoly.${ext}`)).on("close", callback);
    //  })    
 // }