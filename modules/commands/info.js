module.exports.config = {
    name: "info"
    , version: "1.0.1"
    , hasPermssion: 0
    , credits: "who?"
    , description: "Xem thông tin của nhóm/người dùng"
    , commandCategory: "người dùng"
    , usages: "[box/user] @tag hoặc [ID]"
    , cooldowns: 3
    , dependencies: {
        request: ""
        , fs: ""
    }
}, module.exports.run = async ({
    api: e
    , event: n
    , args: a
    , Users: t
    , Threads: r
    , Currencies: i
}) => {
    const s = global.nodemodule["fs-extra"]
        , h = global.nodemodule.request
        , c = global.data.threadData.get(parseInt(n.threadID)) || {}
        , o = c.hasOwnProperty("PREFIX") ? c.PREFIX : global.config.PREFIX;
    switch (a[0]) {
        case "thread":
        case "-t":
        case "-b":
        case "box": {
            if (a[1]) {
                let t = await e.getThreadInfo(a[1]);
                var d = (I = (await r.getData(a[1]))
                        .threadInfo)
                    .threadName || "Tên không tồn tại";
                let i = t.imageSrc;
                var g = []
                    , m = [];
                for (let e in t.userInfo) {
                    "MALE" == (D = t.userInfo[e].gender) ? g.push(D): m.push(D)
                }
                var $ = g.length
                    , l = m.length;
                let c = t.approvalMode;
                var p = 0 == c ? "tắt" : 1 == c ? "bật" : "Kh";
                if (i) {
                    var u = () => e.sendMessage({
                        body: `👀 Tên nhóm: ${d}\n🧩 TID: ${n.threadID}\n🦋 Phê duyệt: ${p}\n🐤 Emoji: ${t.emoji}\n🍳 Thông tin: \n👻 ${n.participantIDs.length} thành viên và ${t.adminIDs.length} quản trị viên.\n🤷‍♀️ Gồm ${$} nam và ${l} nữ.\n📩 Tổng số tin nhắn: ${t.messageCount}.`
                        , attachment: s.createReadStream(__dirname + "/cache/1.png")
                    }, n.threadID, (() => s.unlinkSync(__dirname + "/cache/1.png")), n.messageID);
                    return h(encodeURI(`${t.imageSrc}`))
                        .pipe(s.createWriteStream(__dirname + "/cache/1.png"))
                        .on("close", (() => u()))
                }
                e.sendMessage(`👀 Tên nhóm: ${d}\n🐧 TID: ${n.threadID}\n🦋 Phê duyệt: ${p}\n💸 Emoji: ${t.emoji}\n🍳 Thông tin: \n��� Có ${n.participantIDs.length} thành viên và ${I.adminIDs.length} quản trị viên.\n🤷‍♀️ Gồm ${$} nam và ${l} nữ.\n📩 Tổng số tin nhắn: ${t.messageCount}.`, n.threadID, n.messageID);
                break
            }
            let t = await e.getThreadInfo(n.threadID);
            var I;
            d = (I = (await r.getData(n.threadID))
                    .threadInfo)
                .threadName || "Tên không tồn tại";
            let i = t.imageSrc;
            g = [], m = [];
            for (let e in t.userInfo) {
                var D;
                "MALE" == (D = t.userInfo[e].gender) ? g.push(D): m.push(D)
            }
            $ = g.length, l = m.length;
            let c = t.approvalMode;
            p = 0 == c ? "tắt" : 1 == c ? "bật" : "Kh";
            if (i) {
                u = () => e.sendMessage({
                    body: `👀 Tên nhóm: ${d}\n🧩 TID: ${n.threadID}\n🦋 Phê duyệt: ${p}\n🐤 Emoji: ${t.emoji}\n🍳 Thông tin: \n👻 ${t.participantIDs.length} thành viên và ${t.adminIDs.length} quản trị viên.\n🤷‍♀️ Gồm ${$} nam và ${l} nữ.\n📩 Tổng số tin nhắn: ${t.messageCount}.`
                    , attachment: s.createReadStream(__dirname + "/cache/1.png")
                }, n.threadID, (() => s.unlinkSync(__dirname + "/cache/1.png")), n.messageID);
                return h(encodeURI(`${t.imageSrc}`))
                    .pipe(s.createWriteStream(__dirname + "/cache/1.png"))
                    .on("close", (() => u()))
            }
            e.sendMessage(`👀 Tên nhóm: ${d}\n🐧 TID: ${n.threadID}\n🦋 Phê duyệt: ${p}\n💸 Emoji: ${t.emoji}\n🍳 Thông tin: \n🤨 Có ${t.participantIDs.length} thành viên và ${t.adminIDs.length} quản trị viên.\n🤷‍♀️ Gồm ${$} nam và ${l} nữ.\n📩 Tổng số tin nhắn: ${t.messageCount}.`, n.threadID, n.messageID);
            break
        }
        case "-u":
        case "u":
        case "user":
            if (a[1]) {
                if (-1 !== a.join()
                    .indexOf("@")) {
                    var f = Object.keys(n.mentions);
                    let a = "https://facebook.com/" + `${f}`
                        , r = global.data.userName.get(f) || await (await t.getData(f))
                        .name;
                    v = 2 == (_ = (b = ["1", "2"])[Math.floor(Math.random() * b.length)]) ? "Nam" : 1 == _ ? "Nữ" : "Trần Đức Bo";
                    let c = (await i.getData(n.mentions))
                        .money;
                    u = () => e.sendMessage({
                        body: `💦Tên: ${r}\n🏝URL cá nhân: ${a}\n🐧UID: ${f}\n🦋Giới tính: ${v}\n🤑 Số tiền: ${c} đô.`
                        , attachment: s.createReadStream(__dirname + "/cache/1.png")
                    }, n.threadID, (() => s.unlinkSync(__dirname + "/cache/1.png")), n.messageID);
                    return h(encodeURI(`https://graph.facebook.com/${f}/picture?height=720&width=720&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`))
                        .pipe(s.createWriteStream(__dirname + "/cache/1.png"))
                        .on("close", (() => u()))
                } {
                    let r = "https://facebook.com/" + `${a[1]}`
                        , c = await t.getNameUser(a[1]);
                    v = 2 == (_ = (b = ["1", "2"])[Math.floor(Math.random() * b.length)]) ? "Nam" : 1 == _ ? "Nữ" : "Trần Đức Bo";
                    let o = (await i.getData(a[1]))
                        .money;
                    u = () => e.sendMessage({
                        body: `💦Tên: ${c}\n🏝URL cá nhân: ${r}\n🐧UID: ${a[1]}\n🦋Giới tính: ${v}\n🤑 Số tiền: ${o} đô.`
                        , attachment: s.createReadStream(__dirname + "/cache/1.png")
                    }, n.threadID, (() => s.unlinkSync(__dirname + "/cache/1.png")), n.messageID);
                    return h(encodeURI(`https://graph.facebook.com/${a[1]}/picture?height=720&width=720&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`))
                        .pipe(s.createWriteStream(__dirname + "/cache/1.png"))
                        .on("close", (() => u()))
                }
            } {
                "message_reply" == n.type ? id = n.messageReply.senderID : id = n.senderID;
                let a = "https://facebook.com/" + `${id}`
                    , r = await t.getNameUser(id);
                var b, _, v = 2 == (_ = (b = ["1", "2"])[Math.floor(Math.random() * b.length)]) ? "Nam" : 1 == _ ? "Nữ" : "Trần Đức Bo";
                let c = (await i.getData(id))
                    .money;
                var u = () => e.sendMessage({
                    body: `💦Tên: ${r}\n🏝URL cá nhân: ${a}\n🐧UID: ${id}\n🦋Giới tính: ${v}\n🤑 Số tiền: ${c} đô.`
                    , attachment: s.createReadStream(__dirname + "/cache/1.png")
                }, n.threadID, (() => s.unlinkSync(__dirname + "/cache/1.png")), n.messageID);
                return h(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`))
                    .pipe(s.createWriteStream(__dirname + "/cache/1.png"))
                    .on("close", (() => u()))
            }
            default:
                return e.sendMessage(`Bạn có thể dùng:\n\n${o}${this.config.name} user => nó sẽ lấy thông tin của chính bạn.\n\n${o}${this.config.name} user @[Tag] => nó sẽ lấy thông tin người bạn tag.\n\n${o}${this.config.name} box => nó sẽ lấy thông tin box của bạn (số thành viên, số tin nhắn,...)\n\n${o}${this.config.name} user box [uid || tid]`, n.threadID, n.messageID)
    }
};