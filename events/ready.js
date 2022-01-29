const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
//ukqzn
var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("dnd");
  var oyun = [
    "💎 Yep yeni Komutlar. 💎",
    "s!yardım | s!31 | s!espiri",
    "🌟 Bir Bot'dan Daha Fazlası. 🌟",
    "💙 Kurucu: Raykim Official 💙",
    "💰 Tamanen Ücretsizdir! 💰",
    "😊 Amacı Kendisinden Büyük Olan Bot. 😊",
    "💠 Bir Sorun Olduğunda s!çağrı yazın. 💠",
    
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "Grand Theft Auto: San Andreas");
  }, 2 * 2500);
};