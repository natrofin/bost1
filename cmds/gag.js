const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    var dog = new Discord.RichEmbed()
        .setColor("#6600ff")
        .setTitle('<:man:566860523635736577>  И так, друзья!  <:man:566860523635736577>')
        .setDescription(`**@everyone \n Собираюсь делать интро :exclamation:ХУЯКС:exclamation:. \nУ вашего никнейма есть возможность появиться на видео. \nДля этого вам нужно только написать в этом чате \"ХОЧУ\"**`)
        .setURL(`https://vk.com/videos-143718949?z=video-143718949_456239066%2Fclub143718949%2Fpl_-143718949_-2`)
        .setImage(`https://cdn.discordapp.com/attachments/636552582919094283/639501377533509664/6f475f7a6be3cca1.gif`)
        //.addField(`click](https://vk.com/videos-143718949?z=video-143718949_456239066%2Fclub143718949%2Fpl_-143718949_-2)`)
        .setTimestamp()
  message.channel.send(dog)
}
exports.help = {
    name: 'gag',
    aliases: ["gag"]
}