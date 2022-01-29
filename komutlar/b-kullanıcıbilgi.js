const { Discord, MessageEmbed } = require('discord.js')
const moment = require('moment')
moment.locale('tr')

exports.run = function(client, message, args) {
 if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  const kisi = message.mentions.users.first() || message.author;
 var x
 switch (kisi.presence.status) {
     case 'online': x ='Aktif Durumda'
     break;
     case 'dnd': x='Rahatsız Edilmesinden Hoşlanmıyor'
     break;
     case 'offline': x=''
     break;
     case 'idle': x='Şuan Kendisi Boşta'
     break
 }
 var f =''
 if(kisi.presence.activities.map(a=>a.state)) f=kisi.presence.activities.map(a=>a.state)
 if(kisi.presence.activities.map(a=>a.state) =='') f='Yok'
 let k 
 if(kisi.lastMessageChannelID) k= `<#${kisi.lastMessageChannelID}>`
 if(!kisi.lastMessageChannelID) k= `Yok`
 const m = message.guild.members.cache.find(a=>a.id == kisi.id)
 const CrewCodeembed = new MessageEmbed()
  .setThumbnail(kisi.displayAvatarURL({size:4096,dynamic:true}))
        .setColor('#00FF0A')
        .addField('Kullanıcı adı:',kisi.username)
        .addField('Kullanıcı tagı:',kisi.tag)
        .addField('Kullanıcı ID:',kisi.id)
        .addField('Kullanıcı #:',kisi.discriminator)
        .addField('Kullanıcı botmu:',kisi.bot? 'Evet':'Hayır')
        .addField('Kullanıcı oluşturulma tarihi:',moment(kisi.createdAt).format("YYYY-MMMM-D  0h:mm:ss"))
        .addField('Son mesajı:',kisi.lastMessage? kisi.lastMessage:'Yok')
        .addField('Son mesaj attıgı kanal',k)
        .addField('Rolleri:',m.roles.cache.filter(a=>a.name !="@everyone").map(a=>a))
        .addField('Sunucuya girme zamanı:',moment(m.joinedAt).format('YYYY-MMMM-D 0h:mm:ss'))
        .setFooter(`${client.user.username} Kullanıcı bilgi sistemi.`,message.guild.iconURL({dynamic:true}))
        .setTimestamp()        
        message.channel.send(CrewCodeembed)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kullanıcı-bilgi","kullanıcıbilgi"],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcıbilgi',
};