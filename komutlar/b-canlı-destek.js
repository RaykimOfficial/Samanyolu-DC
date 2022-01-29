const Discord = require("discord.js");
//MANERE CODE, YENİLENMİŞ CANLI DESTEK SİSTEMİ...
exports.run = async (client, message, params) => {
  let user = client.channels.cache.get('929028660655169666')
//MANERE CODE, BY DEVELOPMENT
  const juke = await client.channels.cache.get(message.channel.id).createInvite();
  message.delete({timeout: 3000});
//BY MANERE CODE, KODLAMA EKİBİ
  const embed = new Discord.MessageEmbed()
    .setTitle("Samanyolu")
    .setDescription("**Yapımcımı Çağırdım**")
    .setFooter("Uzun Bir Süre Cevap Verilmez ise Destek Sunucusuna Gelin!");
  message.channel.send(embed);

  const invite = new Discord.MessageEmbed()
    .setAuthor("• Talep")
    .addField(
      "**• Kullanıcı Adı **",
      message.author.username + "#" + message.author.discriminator
    )
    .addField("**• Sunucu Adı **", message.guild.name)
    .setDescription(juke.url);
  user.send(invite)
};
//MANERE CODE EKİBİ
exports.conf = {
  aliases: ["canlıdestek", "canlı-destek"]
};

exports.help = {
  name: "çağır",
  description: "Botun Yapımcısına Mesaj Gönderir!",
  usage: "çağır"
}; 





