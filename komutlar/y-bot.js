const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setThumbnail("https://distok.top/stickers/755240383084232756/755244148616986634.gif")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Bot Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» s!botdurum :**  Botun Kaç Sunucuda Olduğuna Bakarsınız.
> **» s!çağır :**  Destek Çağırırsınız.
> **» s!istatistik :**   Botun İstatistiğine Erişirsiniz.
> **» s!kullanıcıbilgisi :** Kullanıcı Bilgilerine Ulaşırsınız.
> **» s!ping :**  Botun Pingine Bakarsınız


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
    name: 'yardım-bot', 
    description: 'The Help Command',
    usage: 'help'
};