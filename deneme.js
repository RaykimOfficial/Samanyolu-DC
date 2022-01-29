const DBL = require('dblapi.js')
const dbl = new DBL('DBL TOKEN')


dbl.hasVoted(message.author.id).then(voted => {
   if(voted) {




  //buraya komut girilecek


     } else {
         message.channel.send("Bu Komutu Kullanabilmek İçin 12 Saate Bir wwwww Sitesinden Bota Oy Vermeniz Gerekmektedir. Vote Onaylaması Bir Kaç Dakika Sürebilir Lütfen Bekleyiniz.")
     
     }
})