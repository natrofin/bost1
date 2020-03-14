//Завершено
const Discord = module.require("discord.js");

/*module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    let lang = require(`../lang_${bot.lang}.json`);
    let otherlang = require(`../lang_${bot.lang}.json`);
    let olang = otherlang.casino.split('<>');
    let evaled = eval('`' + lang.say + '`');
    let rekl = eval('`' + lang.rekl + '`');
    let noUser = lang.noUser;
    let noNum = lang.noNum;
    let noPerm = lang.noPerm;
    let hBal = lang.hBanals;
    let errz = lang.err;
    let err = errz.split('<>');
    let reaso = lang.reason;
    let reason = reaso.split('<>')
    let msgs = evaled.split('<>');
    let actions = lang.actions.split('<>')
    let admin = lang.admin.split('<>')
    let noMoney = lang.noMoney;
    let embed = new Discord.RichEmbed()
        .setTitle(msgs[0])
        .setFooter(rekl, message.author.avatarURL)
        .setColor('#e22216')
        .setThumbnail('https://discordemoji.com/assets/emoji/1414_FeelsAbdulMan.gif');
    message.channel.send(embed)
    let botmessage = args.join(" ");
    if (!botmessage) {return}
    message.delete().catch();
    bot.send(embed);
}
module.exports.help = {
    name: "say",
    aliases: ["сказать", 'скажи', 'поговори', 'говори']
};*/


module.exports.run = async (bot, message, args) => {
  let msg  ='';
  let sg = '';
  
  for(let i=0; i<args.length;i++){
    msg += args[i]
  }
  
  msg = msg.split(' ')
  
  var js = msg
  var json = JSON.parse(js)
  
exports.run = async (bot, message, args) =>{}

    var dog = new Discord.RichEmbed()
    
    if(!message.member.hasPermission('ADMINISTRATOR')){dog.setDescription('Вам нужны права администратора\nYou need administrator rights');return bot.send(dog)}
    else{
        dog.setColor(json.color)
        .setTitle(json.title)
        .setDescription(json.description)
        .setFooter(json.footer.text, json.footer.iconurl)
        .setThumbnail(json.thumbnail)
        .setImage(json.image)}
    message.channel.send(dog)
}
exports.help = {
    name: 'say',
    aliases: ["сказать", 'скажи', 'поговори', 'говори']
}

