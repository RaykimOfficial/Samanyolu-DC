const Discord = require('discord.js')

exports.run = function(bot, message) {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  message.channel.send(new Discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setColor(message.guild.me.displayHexColor)
    .setTitle('🎲 Attığın Zar: ' + CrewCode ()));

    function CrewCode() {
        var rand = ['1', '2', '3', '4', '5', '6'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

exports.conf = {
  enabled: true,
  aliases: ['zar'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'zarat',
  description: 'Zar Atın',
  usage: 'zar'
};
//doMagicDiceVoodoo