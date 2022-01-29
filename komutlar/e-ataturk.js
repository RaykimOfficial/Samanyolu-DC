const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

if (!message.guild) {

const EmbedFwhyCode = new Discord.MessageEmbed()//Fwhy Code

    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**","**----------------------------------------------------------**")

return message.author.send(EmbedFwhyCode); }

if (message.channel.type !== 'dm') {//Fwhy Code

const EmbedFwhyCode = new Discord.MessageEmbed()

    .setAuthor('❤️❤️ Mustafa Kemal Ataturk Aniyoruz. ❤️❤️')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setImage(`https://media.discordapp.net/attachments/926184587313430558/926496383488372746/16cada9db0948399f62c58de7a9c5767.gif`)

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
  name: 'atatürk',
  description: 'atatürk ü anarsın',
  usage: 'atatürk'
}; 