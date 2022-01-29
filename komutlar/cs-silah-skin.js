const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = [
"https://cs.money/img/main/slider-items/cs/9.png",
"https://cs.money/img/main/slider-items/cs/15.png",
"https://cs.money/img/main/slider-items/cs/4.png",
"https://cs.money/img/main/slider-items/cs/13.png",
"https://static1.millenium.org/article_old/images/contenu/actus/CSGO/guide_armes/cs_go_top10_skin_cyrex.png",
"https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_cyrex_light_large.ef2fb1e4d88e8eb7c0efe12e231a773ca1792a4d.png",
"https://cdn1.dotesports.com/wp-content/uploads/2020/05/01080751/AK-47-The-Empress.png",
"https://cdn1.dotesports.com/wp-content/uploads/2020/05/01080840/AUG-Akihabara-Accept.png",
"https://cdn1.dotesports.com/wp-content/uploads/2020/05/01080834/SG-553-Integrale.png",
"https://cdn1.dotesports.com/wp-content/uploads/2020/05/01080720/PP-Bizon-Judgement-of-Anubis.png",
"https://cdn1.dotesports.com/wp-content/uploads/2020/05/01080826/M4A1-S-Chantico%E2%80%99s-Fire.png",
"https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_hellfire_light_large.d3675840da1d60e19ba26fc11539e9351a0ec892.png",
"https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_evil_daimyo_light_large.c208ba252c0d8902caa973a634cbfa945508a716.png"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

  .setTitle(`**${message.author.username}** Skin Paketi Açtı ! `)
	.setImage("https://www.yazilimaktif.com/wp-content/uploads/2019/12/csgolive.png")
	.setAuthor('Samanyolu 🌟')
	.setFooter(`Paketi açan ( ${message.author.username} ) | Skin Fiyatı: **80$ ** | Bu Skin Çok Güzle Benziyor Kullanılır Bence : )`)
	.setColor("#FF0000")
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [''],

  permLevel: 0

};

exports.help = {

  name: 'silah-skin-aç',

  description: 'OxyTyche',

  usage: 'karı'

};