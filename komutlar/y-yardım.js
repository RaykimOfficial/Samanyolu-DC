const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Samanyolu** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `s!istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `s!`")
.setThumbnail("https://www.hareketligifler.net/data/media/515/cekic-hareketli-resim-0024.gif")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Yardım Menüsü** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» s!yardım-eğlence :** Eğlence Komutlarını Gösterir.
> **» s!yardım-csgo :** Csgo Komutlarını Gösterir.
> **» s!yardım-şablon :** Sunucu Şablonları Gösterir.
> **» s!yardım-gif :** Gif Gösterir.
> **» s!yardım-ekonomi :** Ekonomi Komutlarını Gösterir.( Yakında...)
> **» s!yardım-bot :** Bot Komutlarını Gösterir.

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
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};