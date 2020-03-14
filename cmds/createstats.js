//Завершено

const Discord = module.require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let evaled = eval('`' + lang.createstats + '`');
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
            .setTitle(`**${msgs[0]}*`)
            .setColor('#e22216')
        if (!message.member.hasPermission(`MANAGE_CHANNELS`)) { embed.setDescription(noPerm); return bot.send(embed); };
        message.guild.createChannel(`${msgs[1]}`, { type: 'voice' }).then(channel => {

            bot.guild.set(`totalUsers_${message.guild.id}`, channel.id)

            channel.overwritePermissions(message.guild.defaultRole, {
                VIEW_CHANNEL: true,
                CONNECT: false,
            })
        });
        let logsname = 'logs'
            let logschannel = message.guild.channels.get(bot.guild.fetch(`logsChannel_${message.guild.id}`));
            if (!logschannel) {
                await message.guild.createChannel(logsname, { type: 'text' }).then(channel => {

                    bot.guild.set(`logsChannel_${message.guild.id}`, channel.id);
                    channel.overwritePermissions(message.guild.defaultRole, {
                        VIEW_CHANNEL: false,
                    });
                });
            }
        message.guild.createChannel(`${msgs[2]}`, { type: 'voice' }).then(channel => {

            bot.guild.set(`totalBots_${message.guild.id}`, channel.id)

            channel.overwritePermissions(message.guild.defaultRole, {
                VIEW_CHANNEL: true,
                CONNECT: false,
            });
            embed.setColor('#31b8c4');
            embed.setDescription(`${msgs[3]}`);
            logschannel.send(embed)
            return bot.send(embed);
        });
    } catch (err) {
        let bk = require('../botconfig.json');
        let a = bot.users.get(bk.admin)
        let errEmb = new Discord.RichEmbed()
            .setTitle(`${err[0]}`)
            .setColor('#ff2400')
            .addField(`**${err.name}**`, `**${err.message}**`)
            .setFooter(`${err[1]} ${a.tag}`, bot.user.avatarURL)
            .setTimestamp();
        bot.send(errEmb);
        console.log(err.stack);
    }

};
module.exports.help = {
    name: `createstats`,
    aliases: [`crs`, 'создатьстатистику']
};