const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "A";

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`saaaaaallly`,"http://twitch.tv/amino12a")
client.user.setStatus("dnd")
});





client.login("NDI2OTI2MTMxODA4MTc0MDgw.DsT99Q.Zt3vCf_ZBKITMsAjt-EQCnXewNQ");
