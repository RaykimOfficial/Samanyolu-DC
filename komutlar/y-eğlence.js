const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setThumbnail("https://img1.picmix.com/output/stamp/normal/7/6/0/8/1538067_3f766.gif")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» s!31 :** Botu Güldürürsünüz.
> **» s!atatürk :** Atatürkü Anarsınız.
> **» s!aduketçek :** Etiketlediğiniz kişiye aduket çekersiniz.
> **» s!balık-tut :** Denizde balık tutarsınız.
> **» s!beşlik :** Etiketlediğiniz kişiyle beşlik çakarsınız.
> **» s!ara155 :** Polisi aramanıza yarar.
> **» s!efkarım :** Şu anda olan efkarınızı ölçersiniz.
> **» s!ejderha-yazı :** Ejderha temalı logo üretirsiniz.
> **» s!espri :** Bot sizin için espri yapar.
> **» s!hesapla :** Belirttiğiniz matematik işlemini bot yapar.
> **» s!kartopu :** Etiketlediğiniz kişiye kartopu atarsınız.
> **» s!kaç-cm :** Bot malafat uzunluğunuzu söyler.
> **» s!kralol :** Kral olmanıza yarar.
> **» s!tokat :** Etiketlediğiniz kişiyi tokatlarsınız.
> **» s!yazıtura :** Bot ile yazı-tura oyununu oynarsınız.
> **» s!yılbaşı :** Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.
> **» s!öp :** Etiketlediğiniz kişiyi öpmenize yarar.
> **» s!şekerye :** Bot size şeker ikram eder.
> **» s!taksimdayı :** Taksim Dayı Konuşur.
> **» s!baskın :** Baban Odanı Basar.
> **» s!aşk-ölç :** Birisi İle Aranızdaki Aşkı Ölçer.
> **» s!twerk :** Tahmin Bile Edemezsiniz.
> **» s!adamasmaca :** Adam Asmaca Oynarsınız.
> **» s!zarat :** Zar Atarsınız.
> **» s!anime :** Anime Yazarsınız.
> **» s!altınyazı :** Altından Yazı Yazarsınız.
> **» s!alev :** Alevden Yazı Yazarsınız.
> **» s!şanslısayım :** Şanslı Sayını Öğrenirsin.
> **» s!kullanıcıbilgi :** Kullanıcı Bilgini Öğrenirsin.
> **» s!kapaklaflar :** Birine Laf Sokarsınız
> **» s!korona-ol :** Koronaya Yakalanırsınız.
> **» s!söyle :** Bot Sizi Taklid Eder (Yazdığınızı Söyler.)
> **» s!stresçarkı :** Stres Çarkı Çevirirsiniz.
> **» s!düello :** Etiketlediğiniz kişiile düello yaparsınız.
> **» s!emojiyazı :** Emojili Yazarsınız.
> **» s!sor :** Sorduğunuz Soruyu Bot Yanıtlar (Değişik Cevaplar Verebilir).

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
    name: 'yardım-eğlence', 
    description: 'The Help Command',
    usage: 'help'
};