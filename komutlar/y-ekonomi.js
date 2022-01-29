const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setThumbnail("https://media2.giphy.com/media/Fo5y4K3GD3RYijvsCS/giphy.gif")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Gif Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» s!gif-kadın :**  Kadın Gifi Gösterir.
> **» s!gif-erkek :**  Erkek Gifi Gösterir.
> **» s!gif-çift :**   Çift Yani Aşk Gifi Gösterir.
> **» s!gif-hayvan :** Hayvan Gifi Gösterir.
> **» s!gif-bebek :**  Bebek Gifi Gösterir.
> **» s!gif-anime :**  Anime Gifi Gösterir.


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
    name: 'yardım-ekoeko', 
    description: 'The Help Command',
    usage: 'help'
};