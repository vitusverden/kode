const botConfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online`);
    bot.user.setActivity("youtube", {type: "WATCHING"});
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    let prefix = botConfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0]
    let args = messageArray.slice(1)
    if (cmd == `${prefix}kick`) {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!kUser) return message.channel.send("Kan ikke finde brugeren!");
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("nah jeg lytter ikke til dig")
        if (kUser.hasPermission("KICK_MEMBERS") && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("nah ham har jeg ikke lyst til at kicke")
        let kReason = args.join(" ").slice(22)

        let kickEmbed = new Discord.RichEmbed
        .setDescription("KICK")
        .setColor("#d40012")
        .addField("Kicked bruger", `${kUser}, med id ${kUser.id}`)
        .addField("Kicked af", `<@${message.author.id}> med id ${message.author.id}`)
        .addField("Grund", kReason)

        message.delete(1000);
        return message.channel.sendMessage(kickEmbed)

        //VIRKER IKKE
        /*
        tror at det er fordi jeg har højere rank end den
        skal bruge et test acc
        på min ejen server
        måske bare en anden bot
        */
    } else if(cmd == `${prefix}botinfo`) {

        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#7d6625")
        .setThumbnail(bicon)
        .addField("Bot navn", bot.user.username)
        .addField("Dato lavet", bot.user.createdAt);
        return message.channel.send(botembed);
    } else if (cmd == `${prefix}say`){
        message.delete(1000);
        return message.channel.send(message.content.slice(5, message.content.length));
    } else if (cmd == `${prefix}serverinfo`){
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#7d6625")
        .setThumbnail(sicon)
        .addField("Server navn", message.guild.name)
        .addField("Dato lavet", message.guild.createdAt)
        .addField("Dato du joinede", message.member.joinedAt)
        .addField("Totale medlemmer", message.guild.memberCount);
        return message.channel.send(serverembed);
    }
});

bot.login(botConfig.token);