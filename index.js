const Discord = require("discord.js");
const bot = new Discord.Client();
var server = new Discord.Guild();

bot.on("ready", () => {
    console.log("Bot avviato.");
    server = bot.guilds.find("name", "PentaDrink 🍹🍾");
    server.setName("PentaDrink");
});

bot.on("guildMemberAdd", (member) => {
    var alcolisti = server.roles.find("name", "Alcolisti Anonimi");
    member.addRole(alcolisti);
});
  
bot.login("NOPE");
