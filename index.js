const Discord = require("discord.js");
const bot = new Discord.Client();
var server = new Discord.Guild();

bot.on("ready", () => {
    console.log("Bot avviato.");
    server = bot.guilds.find("name", "PentaDrink 🍹🍾");
});

bot.on("guildMemberAdd", (member) => {
    var alcolisti = guildG.roles.find("name", "Alcolisti Anonimi");
    member.addRole(alcolisti);
});
  

bot.login("MzkzNzMxMDI2NDYwOTk5Njkw.DR6CUw.l6KtZZEiyFl67H-Qln5pR_Dfh5M");