//Завершено

const Discord = module.require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    try {
        let bk = require('../botconfig.json');
        let lang = require(`../lang_${bot.lang}.json`);
        let evaled = eval('`' + lang.help + '`');
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
        let emb = new Discord.RichEmbed()
            .setDescription(`**Добро пожаловать на сервер VS Discord!**`)
            .setColor('#000000')
            .addField(`**:dollar: ${msgs[0]}**`, '``бонус``│``казино``│``клан``│``передать``│``профиль``│``шоп``│``значки``│  ``работать`` │``гролл``│``лролл``')
            .addField(`**:gun: ${msgs[1]}**`, '``бан``│``чистка``│``кик``│``мут``│``снятьмут``│``предупреждение``│``снятьпредупреждение``│``репорт``│``сократитьссылку``│``баг``')
            .addField(`**:desktop: ${msgs[2]}**`, '``аватар``│``лаги``│``юзеринфо``│``серверинфо``')
            .addField(`**:tada: ${msgs[3]}**`, '``покурить``│``кусь``│``позвать``│``канекикек``│``потанцевать``│``обнять``│``трап``│``поцеловать``│``ударить``│``уебать``│``кошка``│``собака``│``лиса``│``ролл``│``сапер``│``жениться``│``лайк``│``перевернутьтекст``')
            .addField(`**:loud_sound: ${msgs[4]}**`, '``плей``│``поиск``│``скип``│``стоп``')
            .setFooter(`${msgs[5]}`)
            .setThumbnail('https://cdn.discordapp.com/icons/663457202778013697/7642e25d72438ec448cf379e3431642b');
        bot.send(emb)

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
    name: `help`,
    aliases: [`h`, `помощь`, 'хелп', 'хэлп', 'помогите', 'помогающий', 'помогатор', 'помогитехристаради', 'помощник', 'помогать', 'спасите', 'нупомогите']
};