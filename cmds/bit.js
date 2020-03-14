//Завершено

const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    let lang = require(`../lang_${bot.lang}.json`);
    let rekl = eval('`' + lang.rekl + '`');
    let evaled = eval('`' + lang.bit + '`');
    let noUser = lang.noUser;
    let noNum = lang.noNum;
    let noPerm = lang.noPerm;
    let hBal = lang.hBanals;
    let errz = lang.err;
    let err = errz.split('<>');
    let reaso = lang.reason;
    let zreason = reaso.split('<>')
    let msgs = evaled.split('<>');
    let actions = lang.actions.split('<>')
    let admin = lang.admin.split('<>')
    let noMoney = lang.noMoney;
    let rUser = message.guild.member(message.mentions.users.first()) || message.author;
    let emb = new Discord.RichEmbed()
        .setDescription(`${message.author} ${msgs[0]} ${rUser}`)
        .setColor('RANDOM')
        .setImage(`https://cdn.discordapp.com/attachments/663472154519797780/679773783183196170/7HWv.gif`)
        .setFooter(rekl)
    bot.send(emb)
};
module.exports.help = {
    name: "bit",
    aliases: ["кусь",]
};