const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  const toplamsunucu = new Discord.MessageEmbed()

    .setTitle(``)
    .setAuthor(` | Discord Bot Toplam Komut Sayısı`)
    .setDescription(
      `:white_check_mark: **Toplam**  \`` +
        client.guilds.cache.size +
        `\` **Sunucu Vardır!**`
    )
    .setColor("#00ff00")

  return message.channel.send(toplamsunucu);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "botdurum",
  description: "Toplam Kişi",
  usage: "botdurum"
};