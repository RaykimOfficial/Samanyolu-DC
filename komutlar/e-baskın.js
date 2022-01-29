const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  if (!message.guild) {

const EmbedFwhyCode = new Discord.MessageEmbed()

      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**","**----------------------------------------------------------**");

return message.author.send(EmbedFwhyCode);
 
}
  if (message.channel.type !== "dm") {

const EmbedFwhyCode = new Discord.MessageEmbed()

      .setAuthor(message.author.username + " Baban Odanı Bastı !!!")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("")
      .setImage("https://media.discordapp.net/attachments/926184587313430558/926487087358828574/internet-kalk-kalk-kalk.gif");

return message.channel.send(EmbedFwhyCode);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "baskın",
  description: "x_REDDAWN_x",
  usage: "baskın"
};
