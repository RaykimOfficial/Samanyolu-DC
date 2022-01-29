const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setThumbnail("https://www.hareketligifler.net/data/media/505/hediye-ve-armagan-hareketli-resim-0015.gif")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Sunucu Şablonları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» Nirvana** = https://discord.new/f72xKjEnPRJ8
> **» Legatus** = https://discord.new/Vqg4s7gczzDU
> **» Join For Join** = https://discord.new/bZSe2FCXSKqB
> **» Perdo İnfaz Kurumu** = https://discord.new/R8euA5U9SHYy
> **» Mert| Nmw** = https://discord.new/G23fzCmMs3aw
> **» Normal Sunucu** = https://discord.new/JUUbfvb4NrJ7
> **» Redania** = https://discord.new/bZQz8fH5suAJ
> **» Jailbreak Server** = https://discord.new/4pbPpNwTzn8B
> **» Pes Etmez** = https://discord.new/rD4WxVUcgyYQ
> **» Gaming Şablon** = https://discord.new/6AAvBHVbzKeR
> **» Forum Şablon** = https://discord.new/ftqvybjtkuc3
> **» Roleplay Şablon** = https://discord.new/uQe5V6Q6CJtW

**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/davetlinkiniz)**
> :round_pushpin: **Komut hakkında detaylı bilgi için: !yardım**
> :airplane: **Aktif discord.js sürümüm: v12.3.5**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/pVbw8Gp2Hf)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=925810451500130364&permissions=8&scope=bot)** **•** **[Web-Site](https://samanyolu-bot.glitch.me/)**
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım-şablon', 
    description: 'The Help Command',
    usage: 'help'
};