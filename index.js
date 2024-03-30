 const { Client, Intents, Collection } = require('discord.js');



const { clintId } = require('./config.json');


const Discord = require('discord.js');

const fs = require("fs");


const Canvas = require("canvas");


const path = require('node:path');


process.on("unhandledRejection", error => {
  return;
});

const express = require('express');//npm i express
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const mongoose = require("mongoose");


const client = new Discord.Client({
  allowedMentions: { parse: ['users', 'roles'], repliedUser: true },


  //  ws: { properties: { $browser: 'Discord iOS' } },
  messageCacheMaxSize: 999999,
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_BANS,

    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,

    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ]
});
client.commands = new Collection();
client.events = new Collection();
['commands', 'events'].forEach(handler => {
  require(`./handlers/${handler}`)(client);
})

// لازم يكون تحت تعريف client
setInterval(() => {
  if (!client || !client.user) {
    console.log('Client not login')
    console.log('Restart project')
    process.kill(1)
  }
}, 12000)
// كل 12 ثانية يفحص لا تحط اقل

const { MessageEmbed, Permissions, MessageAttachment, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const DiscordModal = require('discord-modal')
DiscordModal(client)
const db = require('pro.db')
const qdb = require("quick.db")
const ms = require("ms")

const { MongoClient, ServerApiVersion } = require('mongodb');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const uri = "mongodb+srv://fss2:faris1@cluster0.nhyfa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri).then(() => console.log("Database connected"))
module.exports.client = client;
/*const wID = data.get(`Webhook_${message.guild.id}`).id
  const wToken = data.get(`Webhook_${message.guild.id}`).token
  
  const wc = new Discord.WebhookClient(wID, wToken)
  wc.send({
      content: message.content,
      username: message.author.username,
      avatarURL: message.author.avatarURL()
  });
      } 
      
      else {
  message.channel.createWebhook(message.author.username, {
      avatar: message.author.avatarURL(),
  }).then(async wb => {
    wb.send(message.content)
    data.set(`Webhook_${message.guild.id}`, {id: wb.id, token: wb.token})
  })
      }*\
/*
const { Database } = "quickmongo";
const db = new Database(uri);
 
db.on("ready", () => {
    console.log("Connected to the database");
    
});
 db.connect(); */
const { lineReply, lineReplyNoMention } = require("discord-reply")
const prefix = '='


client.on("ready", async () => {
  const ac = db.get(`activity`)
  const ac1 = db.get(`activity-type`)
  if (!ac || !ac1) return;
  if (ac1 == "STREAMING") {
    client.user.setActivity(`${ac}`, { type: `${ac1}`, url: `https://www.twitch.tv/${ac}` })
    return;
  }
  client.user.setActivity(`online`, { type: `` })
})

client.on('ready', async () => {



  console.log(`|≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠|`);
  console.log(
    `|≠ CLIENT NAME : [ ${client.user.username} ]                  ≠|`
  );
  console.log(
    `|≠ CLIENT TAG : [ ${client.user.discriminator
    } ]                          ≠|`
  );
  console.log(`|≠ CLIENT ID : [ ${client.user.id} ]             ≠|`);
  console.log(
    `|≠ CLIENT SERVERS COUNT : [ ${client.guilds.cache.size
    } ]                   ≠|`
  );
  console.log(
    `|≠ CLIENT CHANNELS COUNT : [ ${client.channels.cache.size
    } ]                ≠|`
  );
  console.log(
    `|≠ CLIENT USERS COUNT : [ ${client.users.cache.size
    } ]                    ≠|`
  );
  console.log(`|≠ CLIENT PING : [ ${client.ws.ping} ] XD                        ≠|`
  );
  console.log(
    `|≠ CLIENT CREATED AT : [ ${client.user.createdAt.toLocaleString()} ]  ≠|`
  );
  console.log(`|≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠|`);
});




const { clientId, testGuildId } = require("./config.json");
const colors = require("colors");


const { PermissionFlagsBits} = require("discord.js");











let owner = ['722620921747210372', '742891837680779295', '925573341732040715', '832714152391737355']
client.on('messageCreate', async message => {
  if(message.content.startsWith(prefix + 'set-playing')) {
  if(!owner.includes(message.author.id)) return;
  const ac = message.content.split(" ").slice(1).join(" ")
  if(!ac) return message.channel.send('**Activity ?**')
  client.user.setActivity(ac,{ type : 'PLAYING' })
  message.channel.send(`**Set Activity ${ac} ✅**`)
  }
  if(message.content.startsWith(prefix + 'set-listening')) {
  if(!owner.includes(message.author.id)) return;
  const ac = message.content.split(" ").slice(1).join(" ")
  if(!ac) return message.channel.send('**Activity ?**')
  client.user.setActivity(ac,{ type : 'LISTENING' })
  message.channel.send(`**Set Activity ${ac} ✅**`)
  }
  if(message.content.startsWith(prefix + 'set-watching')) {
  if(!owner.includes(message.author.id)) return;
  const ac = message.content.split(" ").slice(1).join(" ")
  if(!ac) return message.channel.send('**Activity ?**')
  client.user.setActivity(ac,{ type : 'WATCHING' })
  message.channel.send(`**Set Activity ${ac} ✅**`)
  }
  if(message.content.startsWith(prefix + 'set-competing')) {
  if(!owner.includes(message.author.id)) return;
  const ac = message.content.split(" ").slice(1).join(" ")
  if(!ac) return message.channel.send('**Activity ?**')
  client.user.setActivity(ac,{ type : 'COMPETING' })
  message.channel.send(`**Set Activity ${ac} ✅**`)
  }
  if(message.content.startsWith(prefix + 'set-streaming')) {
  if(!owner.includes(message.author.id)) return;
  const ac = message.content.split(" ").slice(1).join(" ")
  if(!ac) return message.channel.send('**Activity ?**')
  client.user.setActivity(ac,{ type : 'STREAMING', url : `https://www.twitch.tv/${ac}`})
  message.channel.send(`**Set Activity ${ac} ✅**`)
  }
});
              
































const suggestChannels = [
  '1133440554391310488',
  '1133440737535606825'
  // يمكنك إضافة المزيد من معرفات القنوات هنا
];

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (suggestChannels.includes(message.channel.id) && message.content.trim() !== '') {
    try {
      await message.delete();
    } catch (error) {
      console.error('حدث خطأ أثناء محاولة حذف الرسالة:', error);
    }

    const embed = new MessageEmbed()
      .setTitle('**New Suggestion**')
      .setDescription(`\n${message.content}`)
      .setColor('BLUE')
      .setFooter(`by: ${message.author.username}`);

    try {
      const sentMessage = await message.channel.send({ embeds: [embed] });
      await sentMessage.react('<:1_2:1134056040657334322>');  
      await sentMessage.react('<:2_6:1134085823680229377>'); 
    } catch (error) {
      console.error('حدث خطأ أثناء محاولة إرسال رسالة جديدة:', error);
    }
  }
});





let loggedMembers = [];

if (fs.existsSync('./loggedMembers.json')) {
  const data = fs.readFileSync('./loggedMembers.json');
  loggedMembers = JSON.parse(data);
}

function saveData() {
  fs.writeFileSync('./loggedMembers.json', JSON.stringify(loggedMembers, null, 2), (err) => {
    if (err) throw err;
    console.log('تم حفظ البيانات بنجاح!');
  });
}

function generateEmbed() {
  let description = 'Police Department Log In <:2_bsmh:1134085611494580334> \n';
  if (loggedMembers.length > 0) {
    description += `Police Logged In : ${loggedMembers.length} <:2_4:1134085480540033116> \n\n`;
    description += loggedMembers.map((m, index) => `\n \n ${index + 1}- ${m.member} <:Dark135:1135078872891793418>`).join('');
  } else {
    description += 'Undefined Police Officers <:1_web:1134055210562637965>';
  }

  return new MessageEmbed()
    .setTitle('Police Records <:5Canc7LM15:1061988425139503114>')
    .setDescription('**' + description + '**')
    .setFooter('MDT')
    .setColor('#6f0a00');
}
client.on('messageCreate', async (message) => {
  if (!message.guild) return;


  const requiredRoleId = '1002040579024228352'; 
  if (message.content === '=reset') {
   
    const requiredRole = message.guild.roles.cache.get(requiredRoleId);

    
    if (requiredRole && message.member.roles.cache.has(requiredRole.id)) {
      loggedMembers = [];
      saveData();
      await message.channel.send('تم إعادة تهيئة البيانات بنجاح.');
    } else {
      await message.channel.send('لا يمكنك استخدام هذا الأمر.');
    }
  }




  if (message.content === '=login') {
    const embed = generateEmbed();

    const loginButton = new MessageButton()
      .setCustomId('login_button')
      .setLabel('Sign Up')
      .setEmoji('<a:YAZ:1118415817311277197>')
      .setStyle('SECONDARY');

    const logoutButton = new MessageButton()
      .setCustomId('logout_button')
      .setLabel('Sign Out')
      .setEmoji('<a:YGR7:1118415819911733329>')
      .setStyle('SECONDARY');

    const row = new MessageActionRow().addComponents(loginButton, logoutButton);

    const sentMessage = await message.channel.send({ embeds: [embed], components: [row] });
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  const member = interaction.member;
  const policeRoleName = '𝗗𝗖 | Founders';

  const hasPoliceRole = member.roles.cache.some(role => role.name === policeRoleName);

  if (interaction.customId === 'login_button') {
    if (!hasPoliceRole) {
      await interaction.reply({ content: 'لا يمكنك استخدام هذا الزر.', ephemeral: true });
      return;
    }

    if (!loggedMembers.some((m) => m.member === member.toString())) {
      loggedMembers.push({ member: member.toString() });
      saveData();

      const embed = generateEmbed();

      await interaction.message.edit({ embeds: [embed] });
      await interaction.reply({ content: `**You Have Been Sign up As ${loggedMembers.length} <:DL:1187144734809018419>**`, ephemeral: true });

      setTimeout(() => {
        const index = loggedMembers.findIndex((m) => m.member === member.toString());
        if (index !== -1) {
          loggedMembers.splice(index, 1);
          saveData();

          const embed = generateEmbed();
          interaction.message.edit({ embeds: [embed] });
        }
      }, 2.5 * 60 * 60 * 1000);
    } else {
      await interaction.reply({ content: '**You Are Already Sign Up Before <:2_Fekra:1134085826788200509>**', ephemeral: true });
    }
  } else if (interaction.customId === 'logout_button') {
    if (!hasPoliceRole) {
      await interaction.reply({ content: '**You Can’t Yes This Button <:2_Warne:1134085602233569350> **', ephemeral: true });
      return;
    }

    const index = loggedMembers.findIndex((m) => m.member === member.toString());

    if (index !== -1) {
      loggedMembers.splice(index, 1);
      saveData();

      const embed = generateEmbed();

      await interaction.message.edit({ embeds: [embed] });
      await interaction.reply({ content: '**You Have Been Sign Out <:DL:1187144736499306557> **', ephemeral: true });
    } else {
      await interaction.reply({ content: '**You Are Already Sign Out <:2_Warn:1134085595971453051> **', ephemeral: true });
    }
  }
});







const titles = [
  '** <:Online:1153850547787546826> You Have Successfully Complete Hacking** <a:9gif16:1059915674799067177> ',
  '** <:Online:1153850547787546826> You Have Successfully Complete Hacking** <a:9gif16:1059915674799067177>  ',
  ' ** :5_Canc_Skull: You Have Failed :9gif15: **'
];

const images = [
  'https://media.discordapp.net/attachments/1119848363903438908/1171607538530275448/image0.gif?ex=655d4b8c&is=654ad68c&hm=85c7eddf0ce73b0b0eff2c78cf8284787d0a6f347aaac96ce179fd264d431ef8&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171607538530275448/image0.gif?ex=655d4b8c&is=654ad68c&hm=85c7eddf0ce73b0b0eff2c78cf8284787d0a6f347aaac96ce179fd264d431ef8&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='
];



client.on('messageCreate', (msg) => {
  if (msg.content === '$Fleeca-Hack') {
    const randomIndex = Math.floor(Math.random() * titles.length);
    const embed = new MessageEmbed()
      .setTitle(titles[randomIndex])
      .setImage(images[randomIndex]);
    msg.channel.send({ embeds: [embed] });

   
    }
});

















const titles2 = [
  '** <:emoji_184:1149691548146073640> You Have Done Drilling <a:9gif16:1059915674799067177> **',
  '** <:emoji_184:1149691548146073640> You Have Done Drilling <a:9gif16:1059915674799067177> ** ',
  ' ** <:5_Canc_Skull:1080225853750907022> You Have Failed <a:9gif15:1059915714175172678> **  '
];

const images2 = [
  'https://media.discordapp.net/attachments/1119848363903438908/1171611406936850483/IMG_2022.jpg?ex=655d4f26&is=654ada26&hm=1693e9d13b32ba8d2c3c96a87a220c3130b991ab43ddccae66fce4e618bb5a52&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171611406936850483/IMG_2022.jpg?ex=655d4f26&is=654ada26&hm=1693e9d13b32ba8d2c3c96a87a220c3130b991ab43ddccae66fce4e618bb5a52&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='
];



client.on('messageCreate', (msg) => {
  if (msg.content === '$Fleeca-Drill') {
    const randomIndex = Math.floor(Math.random() * titles2.length);
    const embed = new MessageEmbed()
      .setTitle(titles2[randomIndex])
      .setImage(images2[randomIndex]);
    msg.channel.send({ embeds: [embed] });

   
    }
}); 








const titles3 = [
  ' ** You Have Found The Vangelico Key <:emoji_160:1141926403365937152>**',
  ' ** You Have Earn 90000 Cash <:4money:1062015002330021939> ** ',
  ' ** You Have Earn 90000 Cash <:4money:1062015002330021939> ** ',
  '** You Have Earn 90000 Cash <:4money:1062015002330021939> **',
  '** You Have Earn 90000 Cash <:4money:1062015002330021939> **',
  '** You Have Earn 50000 Cash <:4money:1062015002330021939> **',
   '** You Have Earn 50000 Cash <:4money:1062015002330021939> **',
   '** You Have Earn 50000 Cash <:4money:1062015002330021939> **',
   '** You Have Earn 50000 Cash <:4money:1062015002330021939> **',
   '** <:5_Canc_Skull:1080225853750907022> You Have Failed <a:9gif15:1059915714175172678> **'
];

const images3 = [
  'https://media.discordapp.net/attachments/1119848363903438908/1171612196980146247/IMG_2023.jpg?ex=655d4fe3&is=654adae3&hm=d0c07be36dd295ac881267e9e241fafb44b937e0a0bc0c2d007d8c8685e2ff5e&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171612266739793930/IMG_2021.jpg?ex=655d4ff3&is=654adaf3&hm=9dabe1cff4da71dc99ffd33dc66f2cc676489d4db4c68f6ef0c190038887828a&=',
   'https://media.discordapp.net/attachments/1119848363903438908/1171612266739793930/IMG_2021.jpg?ex=655d4ff3&is=654adaf3&hm=9dabe1cff4da71dc99ffd33dc66f2cc676489d4db4c68f6ef0c190038887828a&=',
   'https://media.discordapp.net/attachments/1119848363903438908/1171612266739793930/IMG_2021.jpg?ex=655d4ff3&is=654adaf3&hm=9dabe1cff4da71dc99ffd33dc66f2cc676489d4db4c68f6ef0c190038887828a&=',
    'https://media.discordapp.net/attachments/1119848363903438908/1171612266739793930/IMG_2021.jpg?ex=655d4ff3&is=654adaf3&hm=9dabe1cff4da71dc99ffd33dc66f2cc676489d4db4c68f6ef0c190038887828a&=',

   'https://media.discordapp.net/attachments/1119848363903438908/1171612344116318258/IMG_2024.jpg?ex=655d5006&is=654adb06&hm=f9a4ef96f14faec716fd9291f19f1437e89403ffe1ec2bd1563a3c3ab5ec204d&=',
   'https://media.discordapp.net/attachments/1119848363903438908/1171612344116318258/IMG_2024.jpg?ex=655d5006&is=654adb06&hm=f9a4ef96f14faec716fd9291f19f1437e89403ffe1ec2bd1563a3c3ab5ec204d&=',
   'https://media.discordapp.net/attachments/1119848363903438908/1171612344116318258/IMG_2024.jpg?ex=655d5006&is=654adb06&hm=f9a4ef96f14faec716fd9291f19f1437e89403ffe1ec2bd1563a3c3ab5ec204d&=',
   'https://media.discordapp.net/attachments/1119848363903438908/1171612344116318258/IMG_2024.jpg?ex=655d5006&is=654adb06&hm=f9a4ef96f14faec716fd9291f19f1437e89403ffe1ec2bd1563a3c3ab5ec204d&=',

   'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='
];

                                        

client.on('messageCreate', (msg) => {
  if (msg.content === '$Fleeca-Earn') {
    const randomIndex = Math.floor(Math.random() * titles3.length);
    const embed = new MessageEmbed()
      .setTitle(titles3[randomIndex])
      .setImage(images3[randomIndex]);
    msg.channel.send({ embeds: [embed] });

   
    }
}); 









const titles4 = [

' ** The Safe Is Now Open **<a:9gif16:1059915674799067177>',
  '** The Safe Is Now Open **<a:9gif16:1059915674799067177> ',
  '** <:5_Canc_Skull:1080225853750907022> You Have Failed <a:9gif15:1059915714175172678> **'



  
  
];

const images4 = [

  'https://media.discordapp.net/attachments/1119848363903438908/1171624944073982064/image0.gif?ex=655d5bc2&is=654ae6c2&hm=b15b3f33aadff096a9bfab3d2f2013e54aee677d0e5763b17a976246bbc8cdfa&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171624944073982064/image0.gif?ex=655d5bc2&is=654ae6c2&hm=b15b3f33aadff096a9bfab3d2f2013e54aee677d0e5763b17a976246bbc8cdfa&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='

  
];



client.on('messageCreate', (msg) => {
  if (msg.content === '$House-Safe') {
    const randomIndex = Math.floor(Math.random() * titles4.length);
    const embed = new MessageEmbed()
      .setTitle(titles4[randomIndex])
      .setImage(images4[randomIndex]);
    msg.channel.send({ embeds: [embed] });

   
    }
}); 











const titles5 = [

'**<:8_LockPick:1054152432730525777>You Have Successfully Complete **<a:9gif16:1059915674799067177>',
  '**<:8_LockPick:1054152432730525777>You Have Successfully Complete **<a:9gif16:1059915674799067177>',
  '** <:5_Canc_Skull:1080225853750907022> You Have Failed <a:9gif15:1059915714175172678> **'



  
  
];

const images5 = [

  'https://media.discordapp.net/attachments/1119848363903438908/1171626538555416586/image0.gif?ex=655d5d3e&is=654ae83e&hm=ddbbb35a705b8d303ad55235ca26f4eab2c4e2bb41f0c3fb202aeee00d6b6587&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171626538555416586/image0.gif?ex=655d5d3e&is=654ae83e&hm=ddbbb35a705b8d303ad55235ca26f4eab2c4e2bb41f0c3fb202aeee00d6b6587&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='

  
];



client.on('messageCreate', (msg) => {
  if (msg.content === '$House-Lockpicking') {
    const randomIndex = Math.floor(Math.random() * titles5.length);
    const embed = new MessageEmbed()
      .setTitle(titles5[randomIndex])
      .setImage(images5[randomIndex]);
    msg.channel.send({ embeds: [embed] });

   
    }
}); 








const titles6 = [

'** You Have Earn 20000 Cash <:4money:1062015002330021939> **',
  '** You Have Earn 20000 Cash <:4money:1062015002330021939> **',
  '** You Have Have Earn 10000 Cash ** <:4money:1062015002330021939>',
  '** You Have Have Earn 10000 Cash ** <:4money:1062015002330021939>',
  '** You Have Found A Fleeca Card <:emoji_185:1149691595348774982> **',
  '** <:5_Canc_Skull:1080225853750907022> You Have Failed <a:9gif15:1059915714175172678> **'



  
  
];

const images6 = [

  'https://media.discordapp.net/attachments/1119848363903438908/1171770791705186365/IMG_2029.jpg?ex=655de397&is=654b6e97&hm=f87cc420e83635f9cb4d53e02c342a5b50f70ee3cc3c5a9a379ee85319f7f167&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171770791705186365/IMG_2029.jpg?ex=655de397&is=654b6e97&hm=f87cc420e83635f9cb4d53e02c342a5b50f70ee3cc3c5a9a379ee85319f7f167&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171770910685012048/IMG_2029.jpg?ex=655de3b3&is=654b6eb3&hm=40bd3a969b93187db0bece9c8c882340d2783b06049db0bf467ba048e3d28051&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171770910685012048/IMG_2029.jpg?ex=655de3b3&is=654b6eb3&hm=40bd3a969b93187db0bece9c8c882340d2783b06049db0bf467ba048e3d28051&=',
  
  'https://media.discordapp.net/attachments/1119848363903438908/1171771123994738698/IMG_2029.jpg?ex=655de3e6&is=654b6ee6&hm=d8914413908e7dc35355bd4774abe4284ef422fd351544fddedd53e6ef34011e&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='

  
];



client.on('messageCreate', (msg) => {
  if (msg.content === '$House-Earn') {
    const randomIndex = Math.floor(Math.random() * titles6.length);
    const embed = new MessageEmbed()
      .setTitle(titles6[randomIndex])
      .setImage(images6[randomIndex]);
    msg.channel.send({ embeds: [embed] });

   
    }
}); 













const titles7 = [

'** You Have Earn 2000 Cash **<:4money:1062015002330021939>'
  
];

const images7 = [
'https://media.discordapp.net/attachments/1119848363903438908/1171786125581492244/image0.gif?ex=655df1df&is=654b7cdf&hm=325f303d6ada227ef2b5b512f7f1a5b5e84331055ce75d1bbb61b7bb504daa71&='  
];



client.on('messageCreate', (msg) => {
  if (msg.content === '$Earn-Cashier-1') {
    const randomIndex = Math.floor(Math.random() * titles7.length);
    const embed = new MessageEmbed()
      .setTitle(titles7[randomIndex])
      .setImage(images7[randomIndex]);
    msg.channel.send({ embeds: [embed] });

   
    }
});












const titles8 = [

'** You Have Earn 500 Cash **<:4money:1062015002330021939>'

];

const images8 = [
'https://media.discordapp.net/attachments/1119848363903438908/1171787762559635456/image0.gif?ex=655df365&is=654b7e65&hm=a4ba54a79c52493d0cc9b619f25f771a0c77c75a15af6ecbab18eae4f0f7fd1d&='
];



client.on('messageCreate', (msg) => {
  if (msg.content === '$Earn-Cashier-2') {
    const randomIndex = Math.floor(Math.random() * titles8.length);
    const embed = new MessageEmbed()
      .setTitle(titles8[randomIndex])
      .setImage(images8[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});












const titles9 = [

'** The Safe Is Now Open **<a:9gif16:1059915674799067177>'

];

const images9 = [


  
'https://media.discordapp.net/attachments/1119848363903438908/1171792976154988564/image0.gif?ex=655df840&is=654b8340&hm=ecb242f592954a2bcf9eb824a70886ae3ad9617e012b75bb7db0ed4dee2f3f9c&='

  
];



client.on('messageCreate', (msg) => {
  if (msg.content === '$Safe-Lockpick') {
    const randomIndex = Math.floor(Math.random() * titles9.length);
    const embed = new MessageEmbed()
      .setTitle(titles9[randomIndex])
      .setImage(images9[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});



















const titles10 = [

'**You Have Found A House Keys **<:emoji_3:1141926452678361221> ',
  '** You Have Earn 1000 Cash **<:4money:1062015002330021939>',
  '** <:5_Canc_Skull:1080225853750907022> You Have Failed ** <a:9gif15:1059915714175172678>',
  '** <:5_Canc_Skull:1080225853750907022> You Have Failed ** <a:9gif15:1059915714175172678>'
  
];

const images10 = [



'https://media.discordapp.net/attachments/1119848363903438908/1171795856249344040/image0.gif?ex=655dfaef&is=654b85ef&hm=237c579f500a93e6344e2299849d8ce30721ea091bea2dcb5a275f0ddaa7e25f&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1171795856249344040/image0.gif?ex=655dfaef&is=654b85ef&hm=237c579f500a93e6344e2299849d8ce30721ea091bea2dcb5a275f0ddaa7e25f&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&=',
  'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='

];



client.on('messageCreate', (msg) => {
  if (msg.content === '$Earn-Safe') {
    const randomIndex = Math.floor(Math.random() * titles10.length);
    const embed = new MessageEmbed()
      .setTitle(titles10[randomIndex])
      .setImage(images10[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});












const titles11 = [

'** You Have Successfully Lockpicking **<a:9gif16:1059915674799067177>'

];

const images11 = [



'https://media.discordapp.net/attachments/1119848363903438908/1171800361305124886/IMG_2037.jpg?ex=655dff21&is=654b8a21&hm=87e172e9fa6f915d1753ec48d6fe829398a73cb06ff930ab88a3c913efcc19d5&='


];



client.on('messageCreate', (msg) => {
  if (msg.content === '$Store-Lockpicking') {
    const randomIndex = Math.floor(Math.random() * titles11.length);
    const embed = new MessageEmbed()
      .setTitle(titles11[randomIndex])
      .setImage(images11[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});











const titles13 = [

'** <:Online:1153850547787546826> You Have Successfully <a:9gif16:1059915674799067177> **',
  '**<:2_DLWorld:1156686780574220319> You Have Failed <a:9gif15:1059915714175172678>**'

];

const images13 = [



'https://media.discordapp.net/attachments/1119848363903438908/1171607538530275448/image0.gif',
  'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='


];



client.on('messageCreate', (msg) => {
  if (msg.content === '$ATM-Hack') {
    const randomIndex = Math.floor(Math.random() * titles13.length);
    const embed = new MessageEmbed()
      .setTitle(titles13[randomIndex])
      .setImage(images13[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});



















const titles15 = [

'** You Have Earn 1500 ** <:4money:1062015002330021939>',
  '** You Have Earn 500 ** <:4money:1062015002330021939>',
  '** There Is No Money In the ATM ** <a:DL_Offline:1164472972183076955>'
  

];

const images15 = [



'https://media.discordapp.net/attachments/1119848363903438908/1171806474771648603/IMG_2038.webp?ex=655e04d2&is=654b8fd2&hm=e1b04df0d0ba06f38ffa527df15664174ef514e71df110351e114dea7bc874a6&=&width=687&height=671',

  
'https://media.discordapp.net/attachments/1119848363903438908/1171806474771648603/IMG_2038.webp?ex=655e04d2&is=654b8fd2&hm=e1b04df0d0ba06f38ffa527df15664174ef514e71df110351e114dea7bc874a6&=&width=687&height=671',

  
  'https://media.discordapp.net/attachments/1119848363903438908/1171806878007824477/IMG_2039.jpg?ex=655e0532&is=654b9032&hm=3365643f6d5d283405d32abb245d3e0827919d0bbb8f7018554b20669f8030ce&='

];



client.on('messageCreate', (msg) => {
  if (msg.content === '$ATM-Earn') {
    const randomIndex = Math.floor(Math.random() * titles15.length);
    const embed = new MessageEmbed()
      .setTitle(titles15[randomIndex])
      .setImage(images15[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});






















const titles17 = [

'** You Have Cutt The Paint ** <a:9gif16:1059915674799067177>'

];

const images17 = [



'https://media.discordapp.net/attachments/1119848363903438908/1172004823600742410/image0.gif?ex=655ebd8c&is=654c488c&hm=d93dca75d94777618068662d0a1048c9be94af3a7628c591ac662dc8a426fc23&='


];



client.on('messageCreate', (msg) => {
  if (msg.content === '$Paint-Cutt-1') {
    const randomIndex = Math.floor(Math.random() * titles17.length);
    const embed = new MessageEmbed()
      .setTitle(titles17[randomIndex])
      .setImage(images17[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});










const titles18 = [

'** You Have Cutt The Paint ** <a:9gif16:1059915674799067177>'

];

const images18 = [



'https://media.discordapp.net/attachments/1119848363903438908/1172014643330437140/image0.gif?ex=655ec6b1&is=654c51b1&hm=65cd7a8330a2368f4876c5cef53d870b51688f916941ac2aa34f09a59af81d5c&='


];



client.on('messageCreate', (msg) => {
  if (msg.content === '$Paint-Cutt-2') {
    const randomIndex = Math.floor(Math.random() * titles18 .length);
    const embed = new MessageEmbed()
      .setTitle(titles18[randomIndex])
      .setImage(images18[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});









const titles19 = [

'** You Have Earn 2x Rolex Watches** <:emoji_328:1172024394617454592>',

  '** You Have Earn 3x Rolex Watches** <:emoji_328:1172024394617454592>',
  '** You Have Earn 4x Rolex Watches** <:emoji_328:1172024394617454592>',
  '** You Have Earn 5x Rolex Watches** <:emoji_328:1172024394617454592>'
];

const images19 = [



'https://media.discordapp.net/attachments/1119848363903438908/1172014961233510451/image0.gif?ex=655ec6fd&is=654c51fd&hm=8585e898a54506bb099563b5fc7f0a37cb11d27422189a174cfd3825f80300e7&=',

  'https://media.discordapp.net/attachments/1119848363903438908/1172014961233510451/image0.gif?ex=655ec6fd&is=654c51fd&hm=8585e898a54506bb099563b5fc7f0a37cb11d27422189a174cfd3825f80300e7&=',






'https://media.discordapp.net/attachments/1119848363903438908/1172014961233510451/image0.gif?ex=655ec6fd&is=654c51fd&hm=8585e898a54506bb099563b5fc7f0a37cb11d27422189a174cfd3825f80300e7&=',


'https://media.discordapp.net/attachments/1119848363903438908/1172014961233510451/image0.gif?ex=655ec6fd&is=654c51fd&hm=8585e898a54506bb099563b5fc7f0a37cb11d27422189a174cfd3825f80300e7&='

  
];



client.on('messageCreate', (msg) => {
  if (msg.content === '$First-Glass-Earn') {
    const randomIndex = Math.floor(Math.random() * titles19 .length);
    const embed = new MessageEmbed()
      .setTitle(titles19[randomIndex])
      .setImage(images19[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});


















const titles20 = [

'** You Have Earn 7x Diamond Ring ** 💍',
  '** You Have Earn 6x Diamond Ring ** 💍',
  '** You Have Earn 2x Diamond Ring ** 💍',
  '** You Have Earn 4x Diamond Ring ** 💍',
];

const images20 = [



'https://media.discordapp.net/attachments/1119848363903438908/1172018110417600543/image0.gif?ex=655ec9ec&is=654c54ec&hm=142fff95fcc3dc9e39442d68cf5a600ffbbd4ce5ee2e8d302930cba77068ecfa&=',









'https://media.discordapp.net/attachments/1119848363903438908/1172018110417600543/image0.gif?ex=655ec9ec&is=654c54ec&hm=142fff95fcc3dc9e39442d68cf5a600ffbbd4ce5ee2e8d302930cba77068ecfa&=',




'https://media.discordapp.net/attachments/1119848363903438908/1172018110417600543/image0.gif?ex=655ec9ec&is=654c54ec&hm=142fff95fcc3dc9e39442d68cf5a600ffbbd4ce5ee2e8d302930cba77068ecfa&=',




'https://media.discordapp.net/attachments/1119848363903438908/1172018110417600543/image0.gif?ex=655ec9ec&is=654c54ec&hm=142fff95fcc3dc9e39442d68cf5a600ffbbd4ce5ee2e8d302930cba77068ecfa&='

  
];



client.on('messageCreate', (msg) => {
  if (msg.content === '$Second-Glass-Earn') {
    const randomIndex = Math.floor(Math.random() * titles20 .length);
    const embed = new MessageEmbed()
      .setTitle(titles20[randomIndex])
      .setImage(images20[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});















const titles21 = [

'** You Have Earn 5x Gold Necklace ** <:emoji_319:1172024397079531560>',
  '** You Have Earn 1x Gold Necklace ** <:emoji_319:1172024397079531560>',
  '** You Have Earn 3x Gold Necklace ** <:emoji_319:1172024397079531560>',
  '** You Have Earn 6x Gold Necklace ** <:emoji_319:1172024397079531560>'
];

const images21 = [



'https://media.discordapp.net/attachments/1119848363903438908/1172019034963837009/image0.gif?ex=655ecac8&is=654c55c8&hm=921f35cfc957b33f328ded8c772439f07710bb5050c314ae64466c14ceb0d140&=',





  
'https://media.discordapp.net/attachments/1119848363903438908/1172019034963837009/image0.gif?ex=655ecac8&is=654c55c8&hm=921f35cfc957b33f328ded8c772439f07710bb5050c314ae64466c14ceb0d140&=',





  
'https://media.discordapp.net/attachments/1119848363903438908/1172019034963837009/image0.gif?ex=655ecac8&is=654c55c8&hm=921f35cfc957b33f328ded8c772439f07710bb5050c314ae64466c14ceb0d140&=',



  
'https://media.discordapp.net/attachments/1119848363903438908/1172019034963837009/image0.gif?ex=655ecac8&is=654c55c8&hm=921f35cfc957b33f328ded8c772439f07710bb5050c314ae64466c14ceb0d140&='

];



client.on('messageCreate', (msg) => {
  if (msg.content === '$Third-Glass-Earn') {
    const randomIndex = Math.floor(Math.random() * titles21.length);
    const embed = new MessageEmbed()
      .setTitle(titles21[randomIndex])
      .setImage(images21[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});











const titles22 = [

'** <:Online:1153850547787546826> System Hacked <a:9gif16:1059915674799067177>**',


  '**<:2_DLWorld:1156686780574220319> You Have Failed <a:9gif15:1059915714175172678>**',
  '**<:2_DLWorld:1156686780574220319> You Have Failed <a:9gif15:1059915714175172678>**'

];

const images22 = [



'https://media.discordapp.net/attachments/1119848363903438908/1172021230950424638/IMG_2062.jpg?ex=655eccd4&is=654c57d4&hm=8c04b2c7657910d921176a47ca0e670180a663c9ebd5eda28ff6baa04484a715&=',


'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&=',
  
'https://media.discordapp.net/attachments/1119848363903438908/1172020599988695080/image0.gif?ex=655ecc3e&is=654c573e&hm=6ebc1193f5a3ada660d2a8618eaf7a15eafbbc785f628fffe8e61c96485a2c6e&='

];



client.on('messageCreate', (msg) => {
  if (msg.content === '$𝖵angelico-Hack') {
    const randomIndex = Math.floor(Math.random() * titles22.length);
    const embed = new MessageEmbed()
      .setTitle(titles22[randomIndex])
      .setImage(images22[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});












const titles23 = [

'** You Have Successfully Broke The Door ** <a:9gif16:1059915674799067177>'

];

const images23 = [



'https://media.discordapp.net/attachments/1119848363903438908/1172021455714787378/IMG_2059.webp?ex=655ecd0a&is=654c580a&hm=2cba766b9aeb45f5731a7af77ac35c6cca3d72ede6c92e82b0127af9523aa250&=&width=1193&height=671'


];



client.on('messageCreate', (msg) => {
  if (msg.content === '$𝖵angelico-Open') {
    const randomIndex = Math.floor(Math.random() * titles23.length);
    const embed = new MessageEmbed()
      .setTitle(titles23[randomIndex])
      .setImage(images23[randomIndex]);
    msg.channel.send({ embeds: [embed] });


    }
});















client.on('messageCreate', (message) => {
  if (message.content === '=Check in') {
    const embed = new MessageEmbed()
      .setDescription(` ** \n لقد قام [  <@${message.author.id}> ] بتعبئة بياناته <:6_Rulesg:1105613704415940728>**  `)


      
       .setTitle(` \`\`\`\     يمنع منعاً باتاً الهروب من الشرطه داخل المستشفي ويمنع الخروج من عند المستشفي الا  عند انتهاء خط الإنعاش . \`\`\`\ `)
      .setImage(' https://media.discordapp.net/attachments/1119848363903438908/1173042629676646500/image0.gif?ex=65628414&is=65500f14&hm=cac87e4143b751fb7d5f69ef6ed5e972e4f6b632120c1e3e62975cccac3c906c&= ')
      .setColor('BLACK')
      
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  }
});








client.on('messageCreate', (message) => {
  if (message.content === '=Spray') {
    const embed = new MessageEmbed()

       .setTitle(`You Have Successfully Sprayed <a:9gif16:1059915674799067177>`)
      
      .setDescription(` ** 
يرجي منك تصوير الجدار الذي تقوم بالبخ عليه وصوره للموقع بالخريطه  

- بعد الانتهاء من البخ قم باستعمال الامر 
[!use Spray]** <:emoji_223:1168250803950198784> `)

      .setImage(' https://media.discordapp.net/attachments/1119848363903438908/1173049056814174298/image0.gif?ex=65628a11&is=65501511&hm=bcb3cff90ea13079ef26180d7ca65a0065f3c3943144e3f9167b914c93b88092&= ')
      .setColor('BLACK')
      
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  }
});





client.on('messageCreate', (message) => {
  if (message.content === '=Spray-Remover') {
    const embed = new MessageEmbed()
      .setTitle(` ** You have Successfully Remove The Graffiti ** <a:9gif15:1059915714175172678> `)

      .setImage(' https://media.discordapp.net/attachments/1119848363903438908/1173049430866415677/image0.gif?ex=65628a6a&is=6550156a&hm=dd5de3e8cc56f1ba25a47ab989439938a33cf7972ae889c5f1b2de5c460c5e8f&= ')
      .setColor('BLACK')

      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  }
});






client.on('messageCreate', (message) => {
  if (message.content === '=Priority-0') {

       message.delete();
      message.channel.messages.fetch({ limit: 2 })
        .then(messages => {
          const messagesToDelete = messages.filter(msg => msg.id !== message.id);
          message.channel.bulkDelete(messagesToDelete);
        });

    const embed = new MessageEmbed()
      .setImage('https://cdn.discordapp.com/attachments/1119848363903438908/1172669886309335070/FE36AA3C-C972-4B4C-8094-682FA52999B1.jpg?ex=656a6370&is=6557ee70&hm=d512b85e620c89c7c77cce16b6a2aea54cb3d7ae5a4a62f19c3b2c81b129c30a&')
      .setColor('BLUE')
      .setTimestamp();

   channel.send({ embeds: [embed],  content: `||<@&1133824240366387250> ||` });
  }
});









client.on('messageCreate', (message) => {
  if (message.content === '=Priority-1') {

       message.delete();
      message.channel.messages.fetch({ limit: 2 })
        .then(messages => {
          const messagesToDelete = messages.filter(msg => msg.id !== message.id);
          message.channel.bulkDelete(messagesToDelete);
        });

    const embed = new MessageEmbed()
      .setImage('https://cdn.discordapp.com/attachments/1119848363903438908/1172669903560519781/9EBD89BA-427F-4510-B2F6-038B27041BAF.jpg?ex=656a6374&is=6557ee74&hm=aec7e88efbe827b7cc81b3c23c7209846db4f1311ba0c9ee9ec4d1217163a656&')
      .setColor('BLUE')
      .setTimestamp();

    message.channel.send({ embeds: [embed],  content: `||<@&1133824240366387250> ||` });
  }
});





client.on('messageCreate', (message) => {
  if (message.content === '=Priority-2') {

       message.delete();
      message.channel.messages.fetch({ limit: 2 })
        .then(messages => {
          const messagesToDelete = messages.filter(msg => msg.id !== message.id);
          message.channel.bulkDelete(messagesToDelete);
        });

    const embed = new MessageEmbed()
      .setImage('https://cdn.discordapp.com/attachments/1119848363903438908/1172669920757170176/4EA6580B-1B45-45E7-A4E8-BF28F837DA2E.jpg?ex=656a6378&is=6557ee78&hm=0325c1cf758e8f5f0fcb814d42b1087334ece6a232ab79c247befbd9c4269171&')
      .setColor('BLUE')
      .setTimestamp();

    message.channel.send({ embeds: [embed],  content: `||<@&1133824240366387250> ||` });
  }
});





client.on('messageCreate', (message) => {
  if (message.content === '=Priority-3') {

       message.delete();
      message.channel.messages.fetch({ limit: 2 })
        .then(messages => {
          const messagesToDelete = messages.filter(msg => msg.id !== message.id);
          message.channel.bulkDelete(messagesToDelete);
        });

    const embed = new MessageEmbed()
      .setImage('https://cdn.discordapp.com/attachments/1119848363903438908/1172669940298432633/08BEF0E7-369B-4D6F-A1DB-9D16E0F1A1FC.jpg?ex=656a637c&is=6557ee7c&hm=1306dd498a3ac159c5f41e3b0328f226674672543190af6b7d32f9c12079e747&')
      .setColor('BLUE')
      .setTimestamp();

    message.channel.send({ embeds: [embed],  content: `||<@&1133824240366387250> ||` });
  }
});




client.on('messageCreate', (message) => {
  if (message.content === '=Priority-4') {

       message.delete();
      message.channel.messages.fetch({ limit: 2 })
        .then(messages => {
          const messagesToDelete = messages.filter(msg => msg.id !== message.id);
          message.channel.bulkDelete(messagesToDelete);
        });

    const embed = new MessageEmbed()
      .setImage('https://cdn.discordapp.com/attachments/1119848363903438908/1172669954001223700/D8A8B869-CC9D-4531-844C-2C08ABAA9EA9.jpg?ex=656a6380&is=6557ee80&hm=df1b5cd7aae157a206f4eb45b26f44b427c6dd6a34f66cde4adf87472d973d86&')
      .setColor('BLUE')
      .setTimestamp();

    message.channel.send({ embeds: [embed],  content: `||<@&1133824240366387250> ||` });
  }
});




client.on('messageCreate', (message) => {
  if (message.content === '=Priority-5') {

       message.delete();
      message.channel.messages.fetch({ limit: 2 })
        .then(messages => {
          const messagesToDelete = messages.filter(msg => msg.id !== message.id);
          message.channel.bulkDelete(messagesToDelete);
        });

    const embed = new MessageEmbed()
      .setImage('https://cdn.discordapp.com/attachments/1119848363903438908/1172669980467281940/E9DDBB46-9C84-4678-82EC-0FBE16D8DF96.jpg?ex=656a6386&is=6557ee86&hm=a3c516641d126f0c277f66bbd49ce46d0c7e4d1a3d9f2786f624687c3caa2d5f&')
      .setColor('BLUE')
      .setTimestamp();

    message.channel.send({ embeds: [embed],  content: `||<@&1133824240366387250> ||` });
  }
});






const titles24 = [

'__**<:5Canc_7LM101:1065026800402567300> : Successfully Repair Vehicle ✅ \n  ~ Your Pill = 250 <:4money:1062015002330021939>**__',
'__**<:5Canc_7LM101:1065026800402567300> : Successfully Repair Vehicle ✅\n ~ Your Pill = 500 <:4money:1062015002330021939>**__',
  '__**<:5Canc_7LM101:1065026800402567300> : Successfully Repair Vehicle ✅\n ~ Your Pill = 750 <:4money:1062015002330021939>**__'
];





client.on('messageCreate', (msg) => {
  if (msg.content === '=repair') {
    const randomIndex = Math.floor(Math.random() * titles24.length);
    const embed = new MessageEmbed()
      .setTitle(titles24[randomIndex]);
      
    msg.channel.send({ embeds: [embed] });


    }
});





client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

 
  const specificChannelId = '1133440732309508187'; 

  if (message.content.length === 1 && message.channel.id === specificChannelId) {
    const member = message.guild.members.cache.get(message.author.id);
    const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

    if (muteRole && member) {

    
   
      await member.roles.add(muteRole);
      setTimeout(async () => {
        await member.roles.remove(muteRole);
      },  1 * 60 * 60 * 1000); // مدة الـ 1 ساعات بالمللي ثانية

      
      await message.delete();
      const Embed = new MessageEmbed()
  .setColor('#ff0000')
  .setTitle(' Warning ')
  .setDescription(` **لقد قمت بمخالفة قوانين الروم وقد تم اعطائك ميوت لمده  ساعه واحده بناء على ذلك** `);

const sentMessage = await message.channel.send({ embeds: [Embed] });


setTimeout(() => {
  sentMessage.delete();
}, 20000); // 60 ثانية = دقيقة واحدة

     
      const muteEmbed = new MessageEmbed()
.setAuthor('Devil Life Mangment')
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setColor('#ff0000')
.setTitle('*** Warning ***\n **لقد قمت بمخالفة قوانين الروم وقد تم اعطائك ميوت لمده ساعه واحده بناء على ذلك** ')
.setDescription(`*** Your Message Was :\n *** ${message.content}


*** Mute Duration: *** \n
 1 hours  



 `)

  
      
      await message.author.send({ embeds: [muteEmbed] });
    }
  }
});











const channelIds =  ['1176547896238288896', '1153807604775125042', '1133440786692845568', '1133440788198604890', '1170874241542017096', '1148712923829641297', '1148713030918619238', '1148713965380194535', '1133440779260542996', '1184642629758091264', '1133440780988588122', '1133440783538716772', '1185646612110909552', '1185646612110909552', '1133440792908812358', '1183575499822354523', '1178738211011428453', '1178680758416723968', '1183449163933962321', '1140940700209401877', '1002040693302239334'
];
const roleId = '1002040579024228352';
  







client.on('messageCreate', async (message) => {

  if (message.content === '=on' && message.channel.id === '1002040693302239334') {
    message.channel.send('** Successfully <a:9gif16:1059915674799067177>**');

    try {
      for (const channelId of channelIds) {
        const channel = await client.channels.fetch(channelId);
        if (channel) {
          await channel.permissionOverwrites.edit(roleId, { VIEW_CHANNEL: true });
          console.log(`تم اضهار الشات في القناة ${channel.name}.`);
        } else {
          console.log(`لا يمكن العثور على القناة بالأيدي المعطاة: ${channelId}.`);
        }
      }
    } catch (error) {
      console.error('حدث خطأ أثناء محاولة اضهار الشات:', error);
    }


    const targetChannelID = '1002040693302239334';

    if (!message.guild) return;
    
    const embed = new MessageEmbed()
      .setTitle('اشتغل السيرفر حياكم الله جميعاً <:Online:1153850547787546826>')
      .setDescription('to join Server , See buttons below image \n > Server STATUS <:Sqdz_Online:1174463041857912984>')
      .setColor('GREEN')
      .setThumbnail('https://media.discordapp.net/attachments/1159609187374989447/1176984627257294939/22BFDE49-97F7-444A-8420-52ED24EBACB6.png?ex=6570db5a&is=655e665a&hm=567320c97e38432325d80be6f97dfabd53c78b1bf548fbd03e2ce7648fd97d1d&');

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel('Server Rules')
          .setEmoji('1173726106248028271')
          .setStyle('LINK')
          .setURL('https://discord.com/channels/1052965352704852098/1133440538465546390/1146811270192971937'),
        new MessageButton()
          .setLabel('Server Voting')
          .setEmoji('1173726106248028271')
          .setStyle('LINK')
          .setURL('https://discord.com/channels/1052965352704852098/1133440754971312241')
      );

    const targetChannel = message.guild.channels.cache.get(targetChannelID);

    if (!targetChannel) return console.error('القناة المستهدفة غير موجودة.');

    try {
      const messages = await targetChannel.messages.fetch({ limit: 1 });
      const lastBotMessage = messages.filter(msg => msg.author.bot).first();

      if (lastBotMessage) {
        await lastBotMessage.delete();
      } else {
        console.error('الرسالة غير موجودة أو لا يمكن الوصول إليها.');
      }

      await targetChannel.send({ embeds: [embed], components: [row], content: '||<@&1133824240366387250>||' });
    } catch (error) {
      console.error('حدث خطأ أثناء محاولة حذف الرسالة أو إرسال الأمبيد:', error);
    }
  }
});























client.on('messageCreate', async (message) => {

  if (message.content === '=off' && message.channel.id === '1002040693302239334') {
    message.channel.send('** Successfully <a:9gif16:1059915674799067177>**');

    try {
      for (const channelId of channelIds) {
        const channel = await client.channels.fetch(channelId);
        if (channel) {
          await channel.permissionOverwrites.edit(roleId, { VIEW_CHANNEL: false });
          console.log(`تم اخفاء الشات في القناة ${channel.name}.`);
        } else {
          console.log(`لا يمكن العثور على القناة بالأيدي المعطاة: ${channelId}.`);
        }
      }
    } catch (error) {
      console.error('حدث خطأ أثناء محاولة إخفاء الشات:', error);
    }


    const targetChannelID = '1133440733928509631';

    if (!message.guild) return;

    
    const embed = new MessageEmbed()
      .setTitle('** السيرفر حالياً متوقف نراكم قريباً <:2_DLWorld:1156686780574220319> **')
      .setDescription('> Server STATUS <:Sqdz_Error:1174463206417235999>')
      .setColor('RED')
      .setThumbnail('https://media.discordapp.net/attachments/1159609187374989447/1176984627257294939/22BFDE49-97F7-444A-8420-52ED24EBACB6.png?ex=6570db5a&is=655e665a&hm=567320c97e38432325d80be6f97dfabd53c78b1bf548fbd03e2ce7648fd97d1d&');

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel('Server Rules')
          .setEmoji('1173726106248028271')
          .setStyle('LINK')
          .setURL('https://discord.com/channels/1052965352704852098/1133440538465546390/1146811270192971937'),
        new MessageButton()
          .setLabel('Server Voting')
          .setEmoji('1173726106248028271')
          .setStyle('LINK')
          .setURL('https://discord.com/channels/1052965352704852098/1133440754971312241')
      );

    const targetChannel = message.guild.channels.cache.get(targetChannelID);

    if (!targetChannel) return console.error('القناة المستهدفة غير موجودة.');

    try {
      const messages = await targetChannel.messages.fetch({ limit: 1 });
      const lastBotMessage = messages.filter(msg => msg.author.bot).first();

      if (lastBotMessage) {
        await lastBotMessage.delete();
      } else {
        console.error('الرسالة غير موجودة أو لا يمكن الوصول إليها.');
      }

      await targetChannel.send({ embeds: [embed], components: [row], content: '||<@&1133824240366387250>||' });
    } catch (error) {
      console.error('حدث خطأ أثناء محاولة حذف الرسالة أو إرسال الأمبيد:', error);
    }
  }
});









client.on("messageCreate", async message => {
  
  const targetChannelID = '1002040693302239334'; 

  if (message.content === '=busy' && message.channel.id === '1002040693302239334') { 
    message.channel.send('** Successfully <a:9gif16:1059915674799067177>**')
    
    if (!message.guild) return;
    
    const embed = new MessageEmbed()
      .setTitle('** السيرفر حالياً مشغول بالعدد الكامل {30} <:Restart:1177023270667698296>** ')
      .setDescription('> Server STATUS <:Sqdz_Idle:1174463039140007956>')
      .setColor('ORANGE')
      .setThumbnail('https://media.discordapp.net/attachments/1159609187374989447/1176984627257294939/22BFDE49-97F7-444A-8420-52ED24EBACB6.png?ex=6570db5a&is=655e665a&hm=567320c97e38432325d80be6f97dfabd53c78b1bf548fbd03e2ce7648fd97d1d&');
    
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel('Server Rules')
        .setEmoji('1173726106248028271')
          .setStyle('LINK')
          .setURL('https://discord.com/channels/1052965352704852098/1133440538465546390/1146811270192971937'),
        new MessageButton()
          .setLabel('Server Voting')
        .setEmoji('1173726106248028271') 
          .setStyle('LINK')
          .setURL('https://discord.com/channels/1052965352704852098/1133440754971312241')
      );

    const targetChannel = message.guild.channels.cache.get(targetChannelID); 
    
    if (!targetChannel) return console.error('القناة المستهدفة غير موجودة.');

    try {
      const messages = await targetChannel.messages.fetch({ limit: 1 });
      const lastBotMessage = messages.filter(msg => msg.author.bot).first();

      if (lastBotMessage) {
        await lastBotMessage.delete();
      }

      await targetChannel.send({ embeds: [embed], components: [row], content: '||<@&1133824240366387250>||' });
    } catch (error) {
      console.error('حدث خطأ أثناء محاولة حذف الرسالة أو إرسال الأمبيد:', error);
    }
  }
});









client.on("messageCreate", async message => {
  
  const targetChannelID = '1002040693302239334'; // ايدي القناة التي تريد إرسال الرسالة إليها

  if (message.content === '=restart' && message.channel.id === '1002040693302239334') { // ايدي القناة التي يجب أن يتم استخدام الأمر فيها

    message.channel.send('** Successfully <a:9gif16:1059915674799067177>**')
    if (!message.guild) return;
    
    const embed = new MessageEmbed()
      .setTitle('** تجديد للسيرفر حالياً يمكن للجميع الدخول الان <:0B76B5B49374494BA14A93BF6AEE9090:1177024767698673684>** ')
      .setDescription('> Server STATUS <:Sqdz_Offline:1174463250939793449>')
      .setColor('#838383')
      .setThumbnail('https://media.discordapp.net/attachments/1159609187374989447/1176984627257294939/22BFDE49-97F7-444A-8420-52ED24EBACB6.png?ex=6570db5a&is=655e665a&hm=567320c97e38432325d80be6f97dfabd53c78b1bf548fbd03e2ce7648fd97d1d&');
    
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel('Server Rules')
        .setEmoji('1173726106248028271')
          .setStyle('LINK')
          .setURL('https://discord.com/channels/1052965352704852098/1133440538465546390/1146811270192971937'),
        new MessageButton()
          .setLabel('Server Voting')
        .setEmoji('1173726106248028271') 
          .setStyle('LINK')
          .setURL('https://discord.com/channels/1052965352704852098/1133440754971312241')
      );

    const targetChannel = message.guild.channels.cache.get(targetChannelID); 
    
    if (!targetChannel) return console.error('القناة المستهدفة غير موجودة.');

    try {
      const messages = await targetChannel.messages.fetch({ limit: 1 });
      const lastBotMessage = messages.filter(msg => msg.author.bot).first();

      if (lastBotMessage) {
        await lastBotMessage.delete();
      }

      await targetChannel.send({ embeds: [embed], components: [row], content: '||<@&1133824240366387250>||' });
    } catch (error) {
      console.error('حدث خطأ أثناء محاولة حذف الرسالة أو إرسال الأمبيد:', error);
    }
  }
});































client.on("message", message => {
  if (message.content === 'سلام عليكم') {
    message.channel.send(`** وعليكم السلام ورحمة الله وبركاته . 
- ${message.author} **`)
  }
});



client.on("messageCreate", message => {
  if (message.content === 'سلام عليكم ورحمة الله وبركاته') {
    message.channel.send(`** وعليكم السلام ورحمة الله وبركاته . 
- ${message.author} **`)
  }
});
//السلام

client.on("messageCreate", message => {
  if (message.content === 'السلام عليكم') {
    message.channel.send(`** وعليكم السلام ورحمة الله وبركاته . 
- ${message.author} **`)
  }
})
//السلام

client.on("messageCreate", message => {
  if (message.content === 'السلام عليكم ورحمة الله وبركاته') {
    message.channel.send(`** وعليكم السلام ورحمة الله وبركاته . 
- ${message.author} **`)
  }
});





//Report 
client.on("messageCreate", message => {
  if (message.content === '/بلاغ ') {
    message.channel.send(`__**تم ارسال بلاغك للرقابة سوف بتوجهلك الان الجمس اتمني منك الثبات في موقعك وعدم التحدث مع المخالف

- <@1133824072250298489> 🛠️
- ${message.author} **__`)
  }
});

//997
client.on("messageCreate", message => {
  if (message.content === '/997') {
    message.channel.send(`**Your report has been sent to the EMS , <a:emoji1:1140941709996462140>
and they are heading to you** <:2_ems:1134056016330371133>

** Your Location [ ${message.author} ] ** <:2_DLGPS:1154081094254211092>`)
  }
});




//911
client.on("messageCreate", message => {
  if (message.content === '/911') {
    message.channel.send(` **Your report has been sent to the police, <a:Emoji:1140939573501886636>
and they are heading to you** <:police2:1152940749692883035>

** Your Location [ ${message.author} ] ** <:2_DLGPS:1154081094254211092> `)
  }
});




let messages = [
  "__** you have found 5 gunpowder **__ ( <:8Barod:1054420508885651567> )",

 "__** You Have Been Found 1 Aluminium ( <:8_1metalB:1106575996683046922> ) **__",
  
    "__** Empty **__",

  "__** You Have Been Foun 2 iron **__ ( <:8_1metalx:1106575941578276988> )",


  "__** You Have Been Found 3 Steal ( <:8_1metalz:1106575990211223642> ) **__",

  "__** You Have Been Found 3 GunPowder **__ (<:8Barod:1054420508885651567>)",

  " __** You Have Been Found 1 iron **__ ( <:8_1metalx:1106575941578276988> ) ",


 "__** You Have Been Found 3 Aluminium ( <:8_1metalB:1106575996683046922> ) **__",
  
  "__** Empty **__",

  "__** You Have Been Found 7 GunPowder **__ (<:8Barod:1054420508885651567>)",

  "__**  You Have Been Found 1 Plastic **__ (<:8Blastic:1054421302506684436>)",


   "__** You Have Been Found 3 Aluminium ( <:8_1metalB:1106575996683046922> ) **__",
    
  "__** You Have Been Found 3 Plastic **__ (<:8Blastic:1054421302506684436>)",


  "__** You Have Been Found 3 Copper ( <:8_1Metals:1106575867628507187> ) **__",


  "__** You Have Been Found 1 Steal ( <:8_1metalz:1106575990211223642> ) **__",

   "__** You Have Been Found 5 Aluminium ( <:8_1metalB:1106575996683046922> ) **__",
  
  "__** You Have Been Found 3 GunPowder **__ (<:8Barod:1054420508885651567>)",


  "__** You Have Been Found 3 Steal ( <:8_1metalz:1106575990211223642> ) **__",

  "__** You Have Been Found 3 Copper ( <:8_1Metals:1106575867628507187> ) **__",

  
  "__** You Have Been Found 8 iron **__ ( <:8_1metalx:1106575941578276988> ) ",

  
  "__** Empty **__",

  
  "__** Empty **__",

  

  "__** You Have Been Found Paper 📃 **__",

  "__** You Have Been Found Nothing 😀 **__",


 " __** You Have Been Found 3 Steal ( <:8_1metalz:1106575990211223642> ) **__",
  

  " __** You Have Been Found 3 Wires **__ (<:8Elctric:1054421747425882182>)",

  " __** You Have Been Found 3 Wires **__ (<:8Elctric:1054421747425882182>)",

  " __** You Have Been Found 3 Wires **__ (<:8Elctric:1054421747425882182>)",


  " __** You Have Been Found 5 Plastic **__ (<:8Blastic:1054421302506684436>)",


  "__** You Have Been Found 5 Steal ( <:8_1metalz:1106575990211223642> ) **__",


  "__** You Have Been Found 5 Copper ( <:8_1Metals:1106575867628507187> ) **__",
]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("/تجميع")) {
    msg.reply({
      embeds: [
        new Discord.MessageEmbed()
          .setDescription(messages[Math.floor(Math.random() * messages.length)])
      ]
    })
  }
})

//سرقة بقالة

let bg = [
  "https://media.discordapp.net/attachments/1133433706036592831/1140842618952089700/973B022F-702D-4E04-BF3D-A39831B8518A.jpg",

  "https://media.discordapp.net/attachments/1133433706036592831/1140842619719647262/1C1C89BA-F8A3-4A1A-93C0-248A4875AD65.jpg",

  "https://media.discordapp.net/attachments/1133433706036592831/1140842619467997276/CA34D19B-7BD0-4009-A0B2-B009AC523499.jpg",
  "https://media.discordapp.net/attachments/1133433706036592831/1140842619224723596/51A7D39D-13E5-4B71-9AF6-7522C59BEF3D.jpg",
  "https://media.discordapp.net/attachments/1133433706036592831/1140842620474622022/BFDBB43F-5159-4497-846F-A93867A1DDC9.jpg",
  "https://media.discordapp.net/attachments/1133433706036592831/1140842620222971904/D0CF7DB0-2C10-4E4F-BFAC-90984A7D79D1.jpg",
  "https://media.discordapp.net/attachments/1133433706036592831/1140842619979698227/969F39DF-51D2-4369-A141-01A98891AD1A.jpg",
  "https://media.discordapp.net/attachments/1133433706036592831/1140842621225402408/FA77E51E-7C11-4C44-93C1-94058D367EE9.jpg",
  "https://media.discordapp.net/attachments/1133433706036592831/1140842620969558016/E81B8AAF-7666-4BA5-9910-DF95A289CBA7.jpg",
  "https://media.discordapp.net/attachments/1133433706036592831/1140842620730478623/40B8996C-C1B1-413C-B28F-F3EBFDE16522.jpg", 
  ""
]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("$كاشير")) {
    msg.channel.send(bg[Math.floor(Math.random() * bg.length)])
      
    
  }
})
//كاشير

let KK  = [
  "https://cdn.discordapp.com/attachments/1124790110299373601/1141865681260912650/B1F78819-1DA1-499E-9599-0148CF3509CF.jpg",
  
  "https://cdn.discordapp.com/attachments/1124790110299373601/1141865681260912650/B1F78819-1DA1-499E-9599-0148CF3509CF.jpg",
  
  "https://cdn.discordapp.com/attachments/1124790110299373601/1141865694011592724/C81E3F59-B846-4F93-9201-122D048641AE.jpg",
  
  "https://cdn.discordapp.com/attachments/1124790110299373601/1141865694011592724/C81E3F59-B846-4F93-9201-122D048641AE.jpg",


  
"https://cdn.discordapp.com/attachments/1124790110299373601/1141873037092860054/EF0215B1-80CB-4C5C-A5F2-D7D564094B4A.jpg",
  
"https://cdn.discordapp.com/attachments/1124790110299373601/1141865746893385838/736FAE37-8C34-4797-B8BE-4CFDEF2CE4EA.jpg",
  
"https://cdn.discordapp.com/attachments/1124790110299373601/1141865757060378694/8BF7E4E2-D16E-4B64-9A61-38A2B68826B1.jpg",



  
"https://cdn.discordapp.com/attachments/1124790110299373601/1141865681260912650/B1F78819-1DA1-499E-9599-0148CF3509CF.jpg",
  
"https://cdn.discordapp.com/attachments/1124790110299373601/1141865681260912650/B1F78819-1DA1-499E-9599-0148CF3509CF.jpg",
  
"https://cdn.discordapp.com/attachments/1124790110299373601/1141865766396899440/D21BD337-CE39-4202-BFC5-46EAE8A28339.jpg",

  
"https://cdn.discordapp.com/attachments/1124790110299373601/1141865681260912650/B1F78819-1DA1-499E-9599-0148CF3509CF.jpg",
  
"https://cdn.discordapp.com/attachments/1124790110299373601/1141865681260912650/B1F78819-1DA1-499E-9599-0148CF3509CF.jpg",

  
  
"https://cdn.discordapp.com/attachments/1124790110299373601/1141865681260912650/B1F78819-1DA1-499E-9599-0148CF3509CF.jpg",
  
"https://cdn.discordapp.com/attachments/1124790110299373601/1141865681260912650/B1F78819-1DA1-499E-9599-0148CF3509CF.jpg",

  
"https://cdn.discordapp.com/attachments/1124790110299373601/1141874655116922900/6F59CCBA-7E12-4802-A0B5-A2B6D2862BC5.jpg",

  
"https://cdn.discordapp.com/attachments/1124790110299373601/1141865792858767400/335013F7-2747-4898-BC05-A6AE9C5DEE19.jpg"

  
]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("$بقاله")) {
    msg.channel.send(KK [Math.floor(Math.random() * KK.length)])
  } 
}) 

//منرل
let MN = [
  "https://media.discordapp.net/attachments/1133433706036592831/1140842580163174410/BABA2D0D-909B-4F37-8653-3A8F788759EA.jpg",
  
  "https://media.discordapp.net/attachments/1133433706036592831/1140842582071586886/C5ADE4F3-33B7-4A51-AB74-0A49C78CC91D.jpg",
  
  "https://media.discordapp.net/attachments/1133433706036592831/1140842581526323270/BDBAEB3E-A14A-406E-BCE3-333D063B6505.jpg",
  "https://media.discordapp.net/attachments/1133433706036592831/1140842580851040326/64CED064-5FB6-4897-A73F-7E2D9F97556D.jpg",
  "https://media.discordapp.net/attachments/1133433706036592831/1140842580377092146/7732E0F6-4C75-47E2-86E2-15966218195C.jpg",
  "https://media.discordapp.net/attachments/1133433706036592831/1140842581081735178/AB7DA105-D8CB-4DC6-B8A9-239382B8346D.jpg",
  "https://media.discordapp.net/attachments/1133433706036592831/1140842580632940644/A4868625-5B7C-42AC-B02C-B7F8DCB24634.jpg",
  "https://media.discordapp.net/attachments/1133433706036592831/1140842581828321331/BDE0BF39-2838-4C65-8FC2-DFA04683D06F.jpg",

  
   
]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("$منزل")) {
    msg.channel.send(MN[Math.floor(Math.random() * MN.length)])
  }
})

let US  = [
  "https://cdn.discordapp.com/attachments/1058461990575673356/1150811586039132190/AB1E1045-6155-4454-81C5-68B5B58C3BA0.jpg",
  
  "https://cdn.discordapp.com/attachments/1058461990575673356/1150811973546676224/E493DDE7-C97A-4967-BF74-5FF9E83F4C43.jpg",
  
  "https://cdn.discordapp.com/attachments/1058461990575673356/1150811995868770364/C2946C96-90BA-4BDD-B510-B733732AEDD1.jpg",
  
  "https://cdn.discordapp.com/attachments/1058461990575673356/1150812014764101692/C85FD835-9F9A-4270-94C1-43ADB6256725.jpg",


  
"https://cdn.discordapp.com/attachments/1058461990575673356/1150812030316576828/FA740AF4-CB05-4F39-9AA4-0C04DAE27ECC.jpg",
  
"https://cdn.discordapp.com/attachments/1058461990575673356/1150812048293367939/0A8AA86F-A362-4885-BB10-44A9B3CE83AE.jpg",
  
"https://cdn.discordapp.com/attachments/1058461990575673356/1150812078307807303/F7A4741E-6361-4F91-82E4-91AC721CD0BC.jpg",



  
"https://cdn.discordapp.com/attachments/1058461990575673356/1150811586039132190/AB1E1045-6155-4454-81C5-68B5B58C3BA0.jpg",
  
"https://cdn.discordapp.com/attachments/1058461990575673356/1150811586039132190/AB1E1045-6155-4454-81C5-68B5B58C3BA0.jpg",
  
"https://cdn.discordapp.com/attachments/1058461990575673356/1150811973546676224/E493DDE7-C97A-4967-BF74-5FF9E83F4C43.jpg",

  
"https://cdn.discordapp.com/attachments/1058461990575673356/1150811973546676224/E493DDE7-C97A-4967-BF74-5FF9E83F4C43.jpg",
  
"https://cdn.discordapp.com/attachments/1124790110299373601/1141865681260912650/B1F78819-1DA1-499E-9599-0148CF3509CF.jpg",

  
  
"https://cdn.discordapp.com/attachments/1058461990575673356/1150812095877754892/4966C4D1-6B94-4640-AA01-D767FC5F820B.jpg",
  
"https://cdn.discordapp.com/attachments/1058461990575673356/1150812095877754892/4966C4D1-6B94-4640-AA01-D767FC5F820B.jpg",

  
"https://cdn.discordapp.com/attachments/1058461990575673356/1150812105075867770/E988B14F-B6B5-4008-99BE-16A8A75729F1.jpg",

  
"https://cdn.discordapp.com/attachments/1058461990575673356/1150812116341751849/85009AB0-C5D4-4B79-B5B2-58769ED4BBE9.jpg"

  
]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("$فليكا")) {
    msg.channel.send(US [Math.floor(Math.random() * US.length)])
  } 
}) 


















let US2  = [
  "https://cdn.discordapp.com/attachments/1158738199032627221/1163523024935473232/5F19E683-9574-494E-9077-7597D221E54F.jpg?ex=653fe242&is=652d6d42&hm=eba1f629c2067761f9296e373c1541b2cbb86cd654a6e5de1afc3f17935b00e4&",

  
  "https://cdn.discordapp.com/attachments/1158738199032627221/1163523024935473232/5F19E683-9574-494E-9077-7597D221E54F.jpg?ex=653fe242&is=652d6d42&hm=eba1f629c2067761f9296e373c1541b2cbb86cd654a6e5de1afc3f17935b00e4&",

  
  "https://cdn.discordapp.com/attachments/1158738199032627221/1163523024935473232/5F19E683-9574-494E-9077-7597D221E54F.jpg?ex=653fe242&is=652d6d42&hm=eba1f629c2067761f9296e373c1541b2cbb86cd654a6e5de1afc3f17935b00e4&",

  
  "https://cdn.discordapp.com/attachments/1158738199032627221/1163523024935473232/5F19E683-9574-494E-9077-7597D221E54F.jpg?ex=653fe242&is=652d6d42&hm=eba1f629c2067761f9296e373c1541b2cbb86cd654a6e5de1afc3f17935b00e4&",

  
  "https://cdn.discordapp.com/attachments/1158738199032627221/1163523024935473232/5F19E683-9574-494E-9077-7597D221E54F.jpg?ex=653fe242&is=652d6d42&hm=eba1f629c2067761f9296e373c1541b2cbb86cd654a6e5de1afc3f17935b00e4&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163523037317042368/C252F880-00CD-42EA-8AA3-23AC35EA9D0D.jpg?ex=653fe245&is=652d6d45&hm=d1aedb11ec4e489431306a874e35e1747c6451c35eecd077051a275523308a97&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163523037317042368/C252F880-00CD-42EA-8AA3-23AC35EA9D0D.jpg?ex=653fe245&is=652d6d45&hm=d1aedb11ec4e489431306a874e35e1747c6451c35eecd077051a275523308a97&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163523037317042368/C252F880-00CD-42EA-8AA3-23AC35EA9D0D.jpg?ex=653fe245&is=652d6d45&hm=d1aedb11ec4e489431306a874e35e1747c6451c35eecd077051a275523308a97&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163523037317042368/C252F880-00CD-42EA-8AA3-23AC35EA9D0D.jpg?ex=653fe245&is=652d6d45&hm=d1aedb11ec4e489431306a874e35e1747c6451c35eecd077051a275523308a97&",





  "https://cdn.discordapp.com/attachments/1158738199032627221/1163523006316957706/094CD872-C7DD-48B2-A71B-CC19FC619E4F.jpg?ex=653fe23d&is=652d6d3d&hm=2c53e37291e6813f209715fdf28ec4c0e08317c7a4994f20f50bf5d2be2ac7e9&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163523006316957706/094CD872-C7DD-48B2-A71B-CC19FC619E4F.jpg?ex=653fe23d&is=652d6d3d&hm=2c53e37291e6813f209715fdf28ec4c0e08317c7a4994f20f50bf5d2be2ac7e9&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163523006316957706/094CD872-C7DD-48B2-A71B-CC19FC619E4F.jpg?ex=653fe23d&is=652d6d3d&hm=2c53e37291e6813f209715fdf28ec4c0e08317c7a4994f20f50bf5d2be2ac7e9&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163523006316957706/094CD872-C7DD-48B2-A71B-CC19FC619E4F.jpg?ex=653fe23d&is=652d6d3d&hm=2c53e37291e6813f209715fdf28ec4c0e08317c7a4994f20f50bf5d2be2ac7e9&",


  
  "https://cdn.discordapp.com/attachments/1158738199032627221/1163523016123228170/5E5D4629-9979-42E6-A5F1-BE5B81609DDB.jpg?ex=653fe240&is=652d6d40&hm=3ec38b7c24d83de208a4b4c24ca70b1c1b2a476bbc9da01a2f846ea4d230b9e9&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163523016123228170/5E5D4629-9979-42E6-A5F1-BE5B81609DDB.jpg?ex=653fe240&is=652d6d40&hm=3ec38b7c24d83de208a4b4c24ca70b1c1b2a476bbc9da01a2f846ea4d230b9e9&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163523016123228170/5E5D4629-9979-42E6-A5F1-BE5B81609DDB.jpg?ex=653fe240&is=652d6d40&hm=3ec38b7c24d83de208a4b4c24ca70b1c1b2a476bbc9da01a2f846ea4d230b9e9&",



  "https://cdn.discordapp.com/attachments/1158738199032627221/1163522997160792105/17EC2572-EF90-4B8D-830B-9372BFAF5B35.jpg?ex=653fe23b&is=652d6d3b&hm=a41df4731848fc5fe79b9fdfef07281fa8fd1b6956b06b7d009f16695ba3dd35&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163588542006562816/CBE357FF-3F5A-4F4E-9AD4-6F9C5CF1E748.jpg?ex=65401f46&is=652daa46&hm=56dbaf60127a89e7074371d9d8299c275b71a4f92310241849e66de74a022078&"



  

  
  
]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("$مجوهرات")) {
    msg.channel.send(US2 [Math.floor(Math.random() * US2.length)])
  } 
}) 









let US3  = [
  
"https://cdn.discordapp.com/attachments/1158738199032627221/1163589338555219988/C5ADE4F3-33B7-4A51-AB74-0A49C78CC91D.jpg?ex=65402004&is=652dab04&hm=1b5162bd1e9f76234a3075a920ffbef43a8bf669cb049e93f9fb36a6e7ff9f76&",

  
"https://cdn.discordapp.com/attachments/1158738199032627221/1163589338555219988/C5ADE4F3-33B7-4A51-AB74-0A49C78CC91D.jpg?ex=65402004&is=652dab04&hm=1b5162bd1e9f76234a3075a920ffbef43a8bf669cb049e93f9fb36a6e7ff9f76&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589338555219988/C5ADE4F3-33B7-4A51-AB74-0A49C78CC91D.jpg?ex=65402004&is=652dab04&hm=1b5162bd1e9f76234a3075a920ffbef43a8bf669cb049e93f9fb36a6e7ff9f76&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589338555219988/C5ADE4F3-33B7-4A51-AB74-0A49C78CC91D.jpg?ex=65402004&is=652dab04&hm=1b5162bd1e9f76234a3075a920ffbef43a8bf669cb049e93f9fb36a6e7ff9f76&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589360965402674/BDBAEB3E-A14A-406E-BCE3-333D063B6505.jpg?ex=6540200a&is=652dab0a&hm=fa9444e4764b0fb08a595875d1cacb0138af9d674b5decfebd536678227c7190&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589360965402674/BDBAEB3E-A14A-406E-BCE3-333D063B6505.jpg?ex=6540200a&is=652dab0a&hm=fa9444e4764b0fb08a595875d1cacb0138af9d674b5decfebd536678227c7190&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589360965402674/BDBAEB3E-A14A-406E-BCE3-333D063B6505.jpg?ex=6540200a&is=652dab0a&hm=fa9444e4764b0fb08a595875d1cacb0138af9d674b5decfebd536678227c7190&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589395052499064/AB7DA105-D8CB-4DC6-B8A9-239382B8346D.jpg?ex=65402012&is=652dab12&hm=70597810d24857fa6a94f70c374c73278c337fd8a1f729378dc319945abb1fd7&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589395052499064/AB7DA105-D8CB-4DC6-B8A9-239382B8346D.jpg?ex=65402012&is=652dab12&hm=70597810d24857fa6a94f70c374c73278c337fd8a1f729378dc319945abb1fd7&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589395052499064/AB7DA105-D8CB-4DC6-B8A9-239382B8346D.jpg?ex=65402012&is=652dab12&hm=70597810d24857fa6a94f70c374c73278c337fd8a1f729378dc319945abb1fd7&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589406259687485/BABA2D0D-909B-4F37-8653-3A8F788759EA.jpg?ex=65402014&is=652dab14&hm=5f7f045630c2c9fcd0738bdc29c4327a4433752b8930c6518d33cdeb62226f08&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589406259687485/BABA2D0D-909B-4F37-8653-3A8F788759EA.jpg?ex=65402014&is=652dab14&hm=5f7f045630c2c9fcd0738bdc29c4327a4433752b8930c6518d33cdeb62226f08&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589406259687485/BABA2D0D-909B-4F37-8653-3A8F788759EA.jpg?ex=65402014&is=652dab14&hm=5f7f045630c2c9fcd0738bdc29c4327a4433752b8930c6518d33cdeb62226f08&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589416435056690/7732E0F6-4C75-47E2-86E2-15966218195C.jpg?ex=65402017&is=652dab17&hm=f45c897146fb21599da44c12c5f778cbc36d9fa7ea494f9030f6c72858194171&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589416435056690/7732E0F6-4C75-47E2-86E2-15966218195C.jpg?ex=65402017&is=652dab17&hm=f45c897146fb21599da44c12c5f778cbc36d9fa7ea494f9030f6c72858194171&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589416435056690/7732E0F6-4C75-47E2-86E2-15966218195C.jpg?ex=65402017&is=652dab17&hm=f45c897146fb21599da44c12c5f778cbc36d9fa7ea494f9030f6c72858194171&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589376425607178/A4868625-5B7C-42AC-B02C-B7F8DCB24634.jpg?ex=6540200d&is=652dab0d&hm=c2d38049c6cc6c4cbdeb02f72101cc55cb3d868b7138b6ab5ab018f5bc8d29ad&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589376425607178/A4868625-5B7C-42AC-B02C-B7F8DCB24634.jpg?ex=6540200d&is=652dab0d&hm=c2d38049c6cc6c4cbdeb02f72101cc55cb3d868b7138b6ab5ab018f5bc8d29ad&",

  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589376425607178/A4868625-5B7C-42AC-B02C-B7F8DCB24634.jpg?ex=6540200d&is=652dab0d&hm=c2d38049c6cc6c4cbdeb02f72101cc55cb3d868b7138b6ab5ab018f5bc8d29ad&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589353445019648/C86F12DD-2647-4991-901F-E4FE751B101F.jpg?ex=65402008&is=652dab08&hm=0983582d4c230649b42a1be84f6641f22091d849958abb3d09eb4665c8366846&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589353445019648/C86F12DD-2647-4991-901F-E4FE751B101F.jpg?ex=65402008&is=652dab08&hm=0983582d4c230649b42a1be84f6641f22091d849958abb3d09eb4665c8366846&",


  " https://cdn.discordapp.com/attachments/1158738199032627221/1163589353445019648/C86F12DD-2647-4991-901F-E4FE751B101F.jpg?ex=65402008&is=652dab08&hm=0983582d4c230649b42a1be84f6641f22091d849958abb3d09eb4665c8366846& ",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589385300746291/64CED064-5FB6-4897-A73F-7E2D9F97556D.jpg?ex=6540200f&is=652dab0f&hm=f3d85aa1a08ca9d95f19b6ec8d5e847fd66a76663c6910b2794257667b2cde6e&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589385300746291/64CED064-5FB6-4897-A73F-7E2D9F97556D.jpg?ex=6540200f&is=652dab0f&hm=f3d85aa1a08ca9d95f19b6ec8d5e847fd66a76663c6910b2794257667b2cde6e&",


  "https://cdn.discordapp.com/attachments/1158738199032627221/1163589385300746291/64CED064-5FB6-4897-A73F-7E2D9F97556D.jpg?ex=6540200f&is=652dab0f&hm=f3d85aa1a08ca9d95f19b6ec8d5e847fd66a76663c6910b2794257667b2cde6e&",


 "https://cdn.discordapp.com/attachments/1158738199032627221/1163589446113968249/43782097-6109-4FD1-B3F7-B22DAFEDE6E2.jpg?ex=6540201e&is=652dab1e&hm=d037737241516e3eb89ebca01cddbcca538d52510f7442dbef07fe1ec9bb012c&",
  


"https://cdn.discordapp.com/attachments/1158738199032627221/1163589446113968249/43782097-6109-4FD1-B3F7-B22DAFEDE6E2.jpg?ex=6540201e&is=652dab1e&hm=d037737241516e3eb89ebca01cddbcca538d52510f7442dbef07fe1ec9bb012c&"



]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("$سرقة منزل")) {
    msg.channel.send(US3 [Math.floor(Math.random() * US3.length)])
  } 
}) 











//قمامه
let GM = [
  "__** لقد حصلت على اثاث **__ ( 🛋️ )",
  "__** لقد حصلت على اثاث **__ ( 🛋️ )",
  "__** لقد حصلت على قمامة **__ ( 🚮 )", 
  "__** لقد حصلت على قمامة **__ ( 🚮 )",
  "__** لقد حصلت على حليب **__ ( 🥛 )",
  "__** لقد حصلت على حليب **__ ( 🥛 )",
  "__** لقد حصلت على فضلات قط **__ (  🐈  )",
  "__** لقد حصلت على فضلات قط **__ (  🐈  )",
  "__** لقد حصلت على قطعة خشب **__ ( 🪵 )",
  "__** لقد حصلت على قطعة خشب **__ ( 🪵 )",
  "__** لقد حصلت على علبة تونة **__( 🍣 )",
  "__** لقد حصلت على علبة تونة **__( 🍣 )",
  "__** لقد حصلت على علبة تونة **__( 🍣 )",
  "__** لقد حصلت على قطعة خشب **__ ( 🪵 )",
  "__** لقد حصلت على فضلات قط **__ (  🐈  )",
  "__** لقد حصلت على حليب **__ ( 🥛 )",
"__** لقد حصلت على قمامة **__ ( 🚮 )",
"__** لقد حصلت على اثاث **__ ( 🛋️ )",
"__** لقد حصلت على فأر ميت **__( 🐀 )", 
"__** لقد حصلت على فأر ميت **__( 🐀 )", 
"__** لقد حصلت على فأر ميت **__( 🐀 )",

  "__** لقد حصلت على قطعة الماس **__( 💎 )"
]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("$قمامة")) {
    msg.reply({
      embeds: [
        new Discord.MessageEmbed()
          .setDescription(GM[Math.floor(Math.random() * GM.length)])
      ]
    })
  }
})

// سمك

let SM = [
  "__** You Have Been Found a Fish **__ (🐟)",

  "__** You Have Been Found a Fish **__ (🐟)"
]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("-Fishing")) {
    msg.reply({
      embeds: [
        new Discord.MessageEmbed()
          .setDescription(SM[Math.floor(Math.random() * SM.length)])
      ]
    })
  }
})




        



let K = [
  "__** You Have Been Got a Wood **__ (🪵)",

  "__** You Have Been Got a Wood **__ (🪵)",

  "__** You Have Been Got a Wood **__ (🪵)",

  "__** You failed to assemble the wood**__ (❌)    __ you look very weak 🫢 __"
]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("-Wooding")) {
    msg.reply({
      embeds: [
        new Discord.MessageEmbed()
          .setDescription(K[Math.floor(Math.random() * K.length)])
      ]
    })
  }
})

//دجاج
let DG = [
  "__** You have found a Chicken **__ (🐓)",

  "__** You have found a Chicken **__ (🐓)"
]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith(`-Chickening`)) {
    msg.reply({
      embeds: [
        new Discord.MessageEmbed()
          .setDescription(DG[Math.floor(Math.random() * DG.length)])
      ]
    })
  }
})

//حيوان
let Y = [
  "__** You have found a rabbit **__ (🐰)",

  "__** You have found a rabbit **__ (🐰)",

  "__** You have found a rabbit **__ (🐰)",

  "__** You have found a bear **__ (🐻)",

  "__** You have found a deer **__ (🦌)"
]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("-Hunting")) {
    msg.reply({
      embeds: [
        new Discord.MessageEmbed()
          .setDescription(Y[Math.floor(Math.random() * Y.length)])
      ]
    })
  }
})


//حشيش

let HSH = [

  "** You planted the drug plant ** (:seedling:)"

]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("-Planting")) {
    msg.reply({
      embeds: [
        new Discord.MessageEmbed()
          .setDescription(HSH[Math.floor(Math.random() * HSH.length)])
            .setImage('https://media.discordapp.net/attachments/1143863023166038146/1175770100452819065/GMP_RGlzY29yZEdIMDE.gif')
      ]
    })
  }
})

//حشيش
let SH = [

  "** You have got a weed plant ** (🌱)",

  "** You have got a weed plant ** (🌱)",

  "** You have got a weed plant ** (🌱)",

"** You have got a bunch of weed **(🌲)",

"** You have got a weed ** (<:emoji_264:1179054772939149433>)"

]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("-Harvesting")) {
    msg.reply({
      embeds: [
        new Discord.MessageEmbed()
          .setDescription(SH[Math.floor(Math.random() * SH.length)])
      ]
    })
  }
}) 

let T = [
  "**__ تم تصليح مركبتك 🚘 ( <a:e10:1059563791773335582>__**  )                                                **__ سعر التصليح : 500$  __** ( 💶 ) ",



  "**__ تم تصليح مركبتك 🚘 ( <a:e10:1059563791773335582>__**  )                   															**__ سعر التصليح : 500$ __** ( <:4money:1062015002330021939> ) "
]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("$تصليح المركبه")) {
    msg.reply({
      embeds: [
        new Discord.MessageEmbed()
          .setDescription(T[Math.floor(Math.random() * T.length)])
      ]
    })
  }
})
//تكسير
let I = [
  "__** You have found a rock (🪨)**__",

  "__** You have found a rock (🪨)**__",

  "__** You have found a rock (🪨)**__",

  "__** You have found a rock (🪨)**__",


  "__** You have found a rock (🪨)**__",

  "__** You have found a rock (🪨)**__",

  "__** You have found a rock (🪨)**__",

  "__** You have found a rock (🪨)**__",

  "__** You have found a rock (🪨)**__",

  "__** You have found a rock (🪨)**__",

  "__** You have found a rock (🪨)**__",

  "__** You have found a rock (🪨)**__",

  "__** You have got nothing , go work harder **__",

  "__** You have found a Ruby (<:emoji_266:1178700363105308754>) **__ "
]
client.on("messageCreate", async msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("-Cracking")) {
    msg.reply({
      embeds: [
        new Discord.MessageEmbed()
          .setDescription(I[Math.floor(Math.random() * I.length)])
      ]
    })
  }
})

client.on('messageCreate', message => { //
  if (message.content === '/997') {
    const channel = client.channels.cache.get('1187340959046963240');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage(' https://media.discordapp.net/attachments/1133433706036592831/1171586660136386710/IMG_1943.png?ex=655d381a&is=654ac31a&hm=2f4ee9bc877866896e46c6e532343333a1bf2152a011d03e69d774f1035f7e9b&= ')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1104400549849333854>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});



client.on('messageCreate', message => { //
  if (message.content === '$كاشير') {
    const channel = client.channels.cache.get('1187340959046963240');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage('https://media.discordapp.net/attachments/1133433706036592831/1171589264681750658/C78CB64E-4BA3-41BA-A599-4323B5634FB8.jpg?ex=655d3a87&is=654ac587&hm=3f13fb9e1b7f0d38a4bae7c600204e343a6385a1c4a57bdc5b3736a3a0fa17bf&= ')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1104400549849333854>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});





client.on('messageCreate', message => { //
  if (message.content === '$Store-Lockpicking') {
    const channel = client.channels.cache.get('1187340959046963240');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage('https://media.discordapp.net/attachments/1133433706036592831/1171589264681750658/C78CB64E-4BA3-41BA-A599-4323B5634FB8.jpg?ex=655d3a87&is=654ac587&hm=3f13fb9e1b7f0d38a4bae7c600204e343a6385a1c4a57bdc5b3736a3a0fa17bf&= ')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1104400549849333854>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});








client.on('messageCreate', message => { //
  if (message.content === '$بقاله') {
    const channel = client.channels.cache.get('1187340959046963240');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage(' https://media.discordapp.net/attachments/1133433706036592831/1171586660136386710/IMG_1943.png?ex=655d381a&is=654ac31a&hm=2f4ee9bc877866896e46c6e532343333a1bf2152a011d03e69d774f1035f7e9b&= ')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1104400549849333854>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});






client.on('messageCreate', message => { //
  if (message.content === '$سرقة منزل') {
    const channel = client.channels.cache.get('1187340959046963240');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage(' https://media.discordapp.net/attachments/1133433706036592831/1171586771503562842/IMG_1946.png?ex=655d3835&is=654ac335&hm=154b920f2525947b4c99b0f07a054cd4d03a021d842a19eea69e41979dd821f3&= ')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1104400549849333854>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});








client.on('messageCreate', message => { //
  if (message.content === '$House-Lockpicking') {
    const channel = client.channels.cache.get('1187340959046963240');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage(' https://media.discordapp.net/attachments/1133433706036592831/1171586771503562842/IMG_1946.png?ex=655d3835&is=654ac335&hm=154b920f2525947b4c99b0f07a054cd4d03a021d842a19eea69e41979dd821f3&= ')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1104400549849333854>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});









client.on('messageCreate', message => { //
  if (message.content === '$فليكا') {
    const channel = client.channels.cache.get('1187340959046963240');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage(' https://media.discordapp.net/attachments/1133433706036592831/1171587499420811314/IMG_1945.png?ex=655d38e2&is=654ac3e2&hm=57714d96fdf2824bbe2bedc8b8148c384455a8831a7df2b521fefb75a8d6f81b&= ')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1104400549849333854>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});






client.on('messageCreate', message => { //
  if (message.content === '$Fleeca-Hack') {
    const channel = client.channels.cache.get('1187340959046963240');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage(' https://media.discordapp.net/attachments/1133433706036592831/1171587499420811314/IMG_1945.png?ex=655d38e2&is=654ac3e2&hm=57714d96fdf2824bbe2bedc8b8148c384455a8831a7df2b521fefb75a8d6f81b&= ')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1104400549849333854>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});






 
client.on('messageCreate', message => { //
  if (message.content === '$ATM-Hack') {
    const channel = client.channels.cache.get('1187340959046963240');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage('https://media.discordapp.net/attachments/1143418695209717882/1171244400186241034/IMG_1947.png')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1104400549849333854>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});






client.on('messageCreate', message => { //
  if (message.content === '/911') {
    const channel = client.channels.cache.get('1187340959046963240');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage(' https://media.discordapp.net/attachments/1133433706036592831/1171592141785546902/4024DF5C-E7B3-41D1-9BD5-A6B3FED5B658.jpg?ex=655d3d35&is=654ac835&hm=d233ba7b2e4fddb7458a6bc43dc3ced80f1c420bbe761b9166ec49127d6ab5a7&=')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1104400549849333854>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});








client.on('messageCreate', message => { //
  if (message.content === '$مجوهرات') {
    const channel = client.channels.cache.get('1187340959046963240');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage('https://media.discordapp.net/attachments/1133433706036592831/1171589020682293278/IMG_1967.png?ex=655d3a4d&is=654ac54d&hm=dd988c99eaa95494a4012485aef7ecc5aeaba833c59676baf9fad13c7f47ef75&=')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1104400549849333854>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});









client.on('messageCreate', message => { //
  if (message.content === '$𝖵angelico-Hack') {
    const channel = client.channels.cache.get('1187340959046963240');
    

    
    const exampleEmbed = new Discord.MessageEmbed() // 
      
      .setColor('BLACK')
      .setImage(' https://media.discordapp.net/attachments/1133433706036592831/1171589020682293278/IMG_1967.png?ex=655d3a4d&is=654ac54d&hm=dd988c99eaa95494a4012485aef7ecc5aeaba833c59676baf9fad13c7f47ef75&= ')
    
      .setTimestamp();

    channel.send({  embeds : [exampleEmbed] , content : ` ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ <@&1104400549849333854>  `}); // يتم إرسال Embed إلى القناة المحدد 
 } 
});







//مسح
client.on("messageCreate", async message => {
  if (message.content.startsWith(prefix + 'مسح')) {


    const args = message.content.split(' ')
    let amount = Number(args[1]) || 100

    const permission = message.member.permissions.has("ADD_REACTIONS");
    const me = message.guild.me.permissions.has("ADD_REACTIONS");
    if (!permission) return message.reply(":x: **You don't have permission to use this command**")
    if (!me) return message.reply("**:rolling_eyes: - I couldn't clear this channel. Please check my permissions.**")

    args[1] = args[1] ? parseInt(args[1]) : 100;
    if (isNaN(args[1])) return message.reply({ content: `🙄 **Please provide valid number**` }).catch((err) => {
      console.log(err.message)
    });

    if (amount > 100) return message.reply(":rolling_eyes: **You can't delete more than __100__ messages**`").cache((err) => {
      console.log(err.message)
    })
    if (amount < 1) return message.reply(':rolling_eyes: **You need to delete at least __1__ messages**').catch((err) => {
      console.log(err.message)
    })

    message.delete().catch((err) => {
      console.log(err.message)
    })

    let messages = await message.channel.messages.fetch({ limit: amount })
    messages = messages.filter(m => Date.now() - (new Date(m.createdTimestamp)).getTime() <= (14 * 24 * 60 * 60000))
    message.channel.bulkDelete(messages).catch(err => console.log(err.message))

    let button = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle('SUCCESS')
          .setCustomId('d')
          .setEmoji('🗑️')
      )
    message.channel.send({
      content: `\`\`\`js
 ${messages.size} messages have been deleted.\`\`\`
`, components: [button]
    }).then(replymessage => {

      client.on('interactionCreate', async button => {
        if (button.customId === "d") {
          replymessage.delete()
        }
      })
    }).catch((err) => {
      console.log(err.message)
    })
  }
})

//اسم


client.on('messageCreate', message => {


  let k7l = prefix + 'اسم'

  if (!message.content.startsWith(k7l)) return;


  if (!message.member.roles.cache.has('1134077616660430938')) return message.reply(`ماعندك صلاحية`)

  let member = message.mentions.members.first();
  let nikc = message.content.split(" ").slice('2').join(" ");



  if (!member) return message.reply('منشن الشخص')
  if (!nikc) return message.reply('اكتب الاسم الي تبيه')


  message.reply(`:white_check_mark: لقد تم تغيير الاسم المستعار للعضو **${member}** الى **${nikc}** ! `).then(m => {
    member.setNickname(nikc)
  })





})

//ban




client.on("messageCreate", async message => {
  if (message.author.bot) return;
  let c = message.content.split(' ')
  if (c[0] == '=ban') {
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) return;

    let argss = message.content.split(' ')
    let user = message.guild.members.cache.get(argss[1]) || message.mentions.members.first();
    if (!user) return message.reply(`** 😕 Please mention member or id **`);
    if (user.roles.highest.position > message.member.roles.highest.position && message.author.id !== message.guild.fetchOwner().id) return message.reply(`** ❌ You can't ban this user**`);

    if (!user.bannable) return message.reply(`** ❌ You can't ban this user**`);
    await user.ban().catch(err => { console.log(err) });
    await message.reply(`✅**${user.user.tag} banned from the server!**✈️`);
  }
})

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (message.content.startsWith('/unban')) {
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply(`** 😕 You don't have permissions **`);
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) return;
    let args = message.content.split(' ')
    let id = args[1];
    if (!id) return message.reply(`** 😕 Please mention member or id **`);
    if (isNaN(id)) {
      return message.reply(`** 😕 Please mention member or id **`);
    } else {
      message.guild.members.unban(id).then(mmm => {
        message.reply(`✅** ${mmm.tag} unbanned!**`)
      }).catch(err => message.reply(`**I can't find this member in bans list**`));
    }
  }
})


//فتح وقفل
client.on("messageCreate", temon => {
  if (temon.content == prefix + 'قفل') {

    if (!temon.member.roles.cache.has('1134077616660430938')) return temon.reply(' الأمر خاص للإدارة العليا')
    temon.channel.permissionOverwrites.edit(
      temon.guild.roles.everyone, {
      SEND_MESSAGES: false,
      ADD_REACTIONS: false,
      SEND_MESSAGES_IN_THREADS: false,
      CREATE_PRIVATE_THREADS: false,
      CREATE_PUBLIC_THREADS: false
    }

    )
    let g = new MessageEmbed()
      .setDescription(`**__ تـم اغـلاق الـشـات <a:MT_Right:1112841794896531526>  __**                                                **__ويـرجـى مـن جـمـيـع مـن لـديـهـم الـصـلاحـيـات عـدم الـكـتابـة بـدون سـبـب حـتى لايـتـم مـعـاقـبـتـهـم وشـكـراً لـكــم <a:MT_Right:1112841794896531526> __** **${temon.channel}**🔒 `)
      .setColor('RED')
    temon.channel.send({ embeds: [g], content: `${temon.member}` })
  }

  if (temon.content == prefix + 'فتح') {

    if (!temon.member.roles.cache.has('1134077616660430938')) return temon.reply('الامر خاص للإداره العليا')
    temon.channel.permissionOverwrites.edit(
      temon.guild.roles.everyone, {
      SEND_MESSAGES: null,
      ADD_R3ACTIONS: null,
      SEND_MESSAGES_IN_THREADS: null,
      CREATE_PRIVATE_THREADS: null,
      CREATE_PUBLIC_THREADS: null

    }
    )
    let y = new MessageEmbed()
      .setDescription(`**__ تـم فـتـح الـشـات اسـتـمـتـعـو<a:9gif16:1059915674799067177> __** **${temon.channel}**🔓`)
      .setColor('GREEN')
    temon.channel.send({ embeds: [y], content: `${temon.member}` })
  }

})

  



const messageID = '1146811270192971937' ; 

client.on('messageCreate', async (message) => {
  if (message.content === '-edit') {
    const channel = message.channel;
    const fetchedMessage = await channel.messages.fetch(messageID);
    const embed = fetchedMessage.embeds[0]; 
    embed.setDescription(`**جميع القوانين التابعه للسيرفر نرجوا منك إتباع جميع القوانين لكي لا يتم محاسبتك**`); 
    fetchedMessage.edit({ embeds: [embed] }); 
  }
});



  client.on("messageCreate", async M7MD => {
    if (M7MD.author.bot) return;
    if (M7MD.content === "-rules") {
      if (M7MD.author.bot) return;
      const row = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageSelectMenu()
            .setCustomId(`help_${M7MD.author.id}`)

            .setPlaceholder("يرجى الإختيار")
            .addOptions(
              {
                label: " القوانين العامة",
                emoji:"<:2_Paper:1134085833356492800>",
                value: "1",
              }, {
              label: "المناطق الآمنة",
                emoji: "<:2_Paper:1134085833356492800>",
              value: "2",
            }, {
              label: " آلية التحذيرات ",
                emoji: "<:2_Paper:1134085833356492800>",
              value: "3",
            }, {
              label: " قوانين الأجرام ",
                emoji: "<:2_Paper:1134085833356492800>",
              value: "4",
            }, {
              label: "قوانين المطاعم ",
                emoji: "<:2_Paper:1134085833356492800>",
              value: "5",
            }, {
              label: "قوانين الدسكورد ",
                emoji: "<:2_Paper:1134085833356492800>",
              value: "8",
            }, {
              label: "اعدادات العبة",
                emoji: "<:2_Paper:1134085833356492800>",
              value: "7",
            }
            )
        )


      const embed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle("القوانين")
        .setDescription(`**> جميع القوانين التابعه لسيرفر
> DL𝗥𝗣 ™
    > اي قانون يخالف سيتم محاسبة المخالف من قبل الادارة**`)
      .setImage('https://media.discordapp.net/attachments/1138987234519949433/1139022653240381481/IMG_0747.png')

        let msg = await M7MD.channel.send({
          embeds: [embed],
          components: [row],
          fetchReply: true, 
          content: `| <@&1134070395566313472> <@&1133824240366387250> |` 
        });


    }
  });
  client.on('interactionCreate', async (collected) => {


      if (collected.isSelectMenu()) {
        let value = collected.values[0];
        const embed = new Discord.MessageEmbed().setColor("#ff0000");

        if (value === "1") {

          embed.setTitle(`**# - General laws**`);
          embed.setDescription(`
**
1- يجب عليك فهم معنى RP بقياسه الحياه الواقعيه

‏2- (RDM) هو القتل العشوائي ويعرضك الى (باند نهائي)

‏3- (VDM) دهس الاشخاص بطريقه عشوائية يعرضك الى تحذير اول بحيث انك تستخدم المركبه كسلاح للقتل 

4- يجب عليك تقدير حياتك والخوف عليها

5- يجب التصرف وفق الشخصيه وتقمصها

6- في حال إنشاء شخصيه اخرى يمنع وجود اي تشابه بالشخصيه الثانيه أي (شعر الرأس او شعر الوجه او العيون)

7- يمنع منعاً باتاً استخدام اي ثغره او الغش داخل السيرفر ويعرضك الى (باند نهائي)

 8-في حال حدوث مخالفه امامك يجب عليك الانسحاب من الموقع وتبلغ الاداره بالمخالفه والايدي الخاص بالمخالف، في حال الكذب ستتم محاسبتك محاسبه قصوى وبشكل مباشر

9- في حال كنت اعزل وتم تهديدك بسلاح ناري او ابيض يجب عليك الخوف على حياتك

10- يجب ان يكون اسم الشخصيه واقعي 

11- يمنع استخدام الاسلحه الغير الواقعيه والمتفجره

12- اثناء اختيار ملامح الشخصيه يمنع اختيار ملامح غير واقعيه

13- استخدام اسلحه واغراض ليست بالحقيبه يعرضك للمسائله والمحاسبه

 14- يمنع تقليد الكركترات والاسماء الموجوده بالسيرفر

15- يمنع دخول البيت او الشقه اثناء سيناريو قائم

16- يمنع لبس الملابس العسكريه والجيشية ومن ضمنها البطاقات والحزام العسكري 

 **
 
  \`\`\`\
[ جميع القوانين قابلة للتغيير والتعديل وجميع الحقوق محفوظة لدى سيرفر DL ].
\`\`\`\

DLRP Managment  <:1_1:1134078199664480276>
`);

           
          await collected.reply({ embeds: [embed], ephemeral: true });



          
          const additionalEmbed = new Discord.MessageEmbed()
            
            .setColor("#0000ff");
          additionalEmbed.setTitle(`**# - General laws**`);
          additionalEmbed.setDescription(`**
          
  17 - تمنع الشخصنه بجميع اشكالها وانواعها  

18- عدم ترابط شخصيتك الاولى بالشخصيه الثانيه أي ( ولد عمي ، ولد عمك ، انا اعرف ولد عمك)
يجب عليك تسمية كل شي بأسم كركتره
(يمنع تكرار الاسامي بين الكركترات)
 
 19- يجب عليك تقمص شخصيتك مع الكل حتى لو خويك مجرم ماتتساهل معه ابدا وتعامله بشكل جدي او العكس اذا كنت مجرم

20- يمنع على الشخص الميت أثناء سيناريو العوده إليه مره اخرى

21- يمنع على المسعفين التواجد في مواقع اطلاق النار الا بعد التأكد التام من وقف   النار
 
22- يمنع نقل الاموال والاغراض بين 
شخصياتك

23- يمنع التواصل الغير الشرعي مع اي لاعب اخر في برنامج اثناء تواجدكم داخل السيرفر (  Meta Gaming )
 
24- استخدام معلومه ما اخذتها داخل السيرفر، سواء كانت من الدسكورد ،تويتش او برنامج اخر يعرضك الى المحاسبه القصوى

25- يمنع الستريم سنايب (باند نهائي)

26- يجب عليك الخوف على ممتلكاتك ومركباتك وعدم التهور بالقياده والسرعه دون وجود سبب

27- يمنع القفز بالسيارات في جميع الحالات  
 
28- خروجك من السيرفر اثناء سيناريو جاري سيعرضك للمحاسبه

29- في حال تم اسقاطك تنسى اخر 10 دقايق بما فيها من اسقطك

30- يمنع الكذب بـ ( سحر او صداع او باخذ حبه او الخ ... يعرضك للمحاسبه القصوى)
 
 31- يمنع التحدث خارج الرول بلاي ويعرضك الى (باند نهائي)

32- في حال خروجك من السيرفر بحسابك بالدسكورد لن تتم اعاده لك رتبك السابقه بما فيها رتب التفعيل **
 
  \`\`\`\
[ جميع القوانين قابلة للتغيير والتعديل وجميع الحقوق محفوظة لدى سيرفر DL ].
\`\`\`\

**DLRP Managment  <:1_1:1134078199664480276>**
`);
          
  
          
    await collected.followUp({ embeds: [additionalEmbed], ephemeral: true });

          
        } else if (value === "2") {

          embed.setTitle(`**# - Safe areas**`);
          embed.setDescription(`**
- مراكز الشرطة 
- المستشفيات 
- الشقق العامة
- المطاعمو الكافيهات
- ورشات تصليح المركبات 
- السجن 
- المحكمة ومركز الوظائف
- المنجم 
- حجز المركبات 
- معارض السيارات
- مركز الاعلام 
- صيد السمك 
- تأجير السيارات 
- محلات الاسلحة

( جميع المناطق المذكورة مواقفها تعتبر امنة أيضاً ) **

 \`\`\`\
[ جميع القوانين قابلة للتغيير والتعديل وجميع الحقوق محفوظة لدى سيرفر DL ].
\`\`\`\

**DLRP Managment  <:1_1:1134078199664480276> **
`);




          } else if (value === "3") {

          embed.setTitle(`**# - الية التحذيرات والباندات
Warn and Banned System**`);
          embed.setDescription(`**

1- <@&1133824241473695865> ( Banned 1 Day)

2- <@&1133824242992025721> ( Banned 3 Days )

3- <@&1133824244443271321> ( Banned 7 Days + reavtive )

4- <@&1133824245072416869> ( نهائي مع احقية طلب فرصة عند مرور كل شهر ) 

5- <@&1133824246951448786> **

** <a:MT_Right:1112841794896531526> الية ازاله التحذيرات

1 - بعد مرور كل اسبوع سيتم ازاله تحذير
** 
** DLRP Managment <:1_1:1134078199664480276> ** 
`);


          
        } else if (value === "4") {

          embed.setTitle(`**# - Criminal laws**`);
          embed.setDescription(`**
   
1- يمنع الاتفاق مع اي شخص ليصبح رهينة

2- يمنع طلب تاكسي او عسكري او محامي وخطفه

3-مدة رهن الرهينة (20 د) الا في حال بدأ السرقه او السيناريو يلغى الوقت

4- يمنع سرقة المواطن الا بسبب وجود عداوه سواء كان رهينه او غيره

5- يمنع طلب اكثر من  1500 دولار على الرهينة  

6- حد المجموعات او العائلات او المسموح فقط 7 اشخاص 

7- الحد الاقصى للعصابه داخل القيم 8 (لا يوجد حد معين للعصابه خارج القيم)

8- يمنع الاعتداء على مفاوض الشرطه ومفاوض المجرمين خلال التفاوض ويجب عليك التفاوض بجديه 

9-  يمنع مقاومة السلاح الناري بسلاح ابيض مهما كانت الحاله

10- يمنع اطلاق النار او خطف العسكري في اي قضية مروريه

11- يُمنع على إي فرد او جماعة السرقة ثم الانتظار لفترة في نفس الموقع سواء للتفاوض او غيره او الانتظار خارج الموقع ثم المعاودة وسرقة الموقع مره آخرى.

12- يمنع منعاً باتاً مشاركة الرهينة للخاطفين في منتصف السيناريو

13- يمنع تقليد ملابس احد العصابات 

14- يمنع الخطف والتهديد في حال وجود مواطن او اثنين  من المدنيين او اكثر

15- يجب عليك تعيين التدخل الخارجي قبل الابتداء بالسرقة

16- يمنع  خطف مواطن لأجل طلب اخراج شخص من السجن

17- يسمح بطلب واحد لكل رهينه ( يمنع طلب طلبين للرهينه الواحده)

18- يمنع تحالف عصابتين على عصابه اخرى  
**
\`\`\`\
 تسلسل السرقات :

Store Robbery (1-4)
House Robbery (2-5)
Jewelery Robbery (3-7)
Art gallery robbery:(3-8)
Paleto bank:(6-11)
Pacific bank:(7-11) 

\`\`\`\
**
ملاحظه : ينتهي سيناريو السرقه اما بالقاء لقبض عليك من قبل الشرطه او هروبك من الموقع بشكل نهائي + دخول العصابة يكون عن طريق الاحتكاك وليس تقديم
**
  \`\`\`\
[ جميع القوانين قابلة للتغيير والتعديل وجميع الحقوق محفوظة لدى سيرفر DL ].
\`\`\`\

**DLRP Managment  <:1_1:1134078199664480276>  **
`);

          
        } else if (value === "5") {

          embed.setTitle(`**# - Restaurant laws**`);
          
          embed.setDescription(`**
1 - واجب على جميع المواطنين احترام المطاعم بشكل كامل وتقدير الموظفين اثناء عملهم وعدم الاسائه لهم بكل الطرق

2 - يجب على الجميع التقيد باسعار الوجبات وعدم الاصرار والمفاوضة وازعاج الموظفين

3 - يمنع منعا باتا لبس ملابس موظفين المطاعم والتحايل بكونك موظف فالمطعم

4 - يمنع منعا باتا الوقوف بشكل خاطئ في مواقف المطاعم ويجب الالتزام بالمواقف المحدده للمطعم  ويحق للموظف ابلاغ الشرطة وعدم البيع

5 - يجب على الجميع احترام المطعم والوقوف بشكل منظم لحصولك على الطعام 

**
 \`\`\`\
[ جميع القوانين قابلة للتغيير والتعديل وجميع الحقوق محفوظة لدى سيرفر DL ].
\`\`\`\

**DLRP Managment  <:1_1:1134078199664480276>**`);

          
          await collected.reply({ embeds: [embed], ephemeral: true });

          
          const additionalEmbed = new Discord.MessageEmbed()
            
            .setColor("#0000ff");

            additionalEmbed.setTitle(`**# - Restaurant laws**`);
          additionalEmbed.setDescription(`**
q
**
 \`\`\`\
[ جميع القوانين قابلة للتغيير والتعديل وجميع الحقوق محفوظة لدى سيرفر DL ].
\`\`\`\

**DLRP Managment  <:1_1:1134078199664480276>**`);

          
  await collected.followUp({ embeds: [additionalEmbed], ephemeral: true });

          
        } else if (value === "7") {

          embed.setTitle(`**# - How to hide the map**`);
          embed.setDescription(`** طريقه اخفاء الخريطه **
           \`\`\`\
[ جميع القوانين قابلة للتغيير والتعديل وجميع الحقوق محفوظة لدى سيرفر DL ].
\`\`\`\

**DLRP Managment  <:1_1:1134078199664480276> ** `);
          embed.setImage(`https://cdn.discordapp.com/attachments/1090735758014418964/1094823090682331217/IMG_7118.jpg`);
          
          await collected.reply({ embeds: [embed], ephemeral: true });

          
          const additionalEmbed = new Discord.MessageEmbed()
            
            
            .setColor("#00ff00");

          additionalEmbed.setTitle(`**# - How to hide ID**`);
          additionalEmbed.setDescription(`** طريقه اخفاء الايديات **
 \`\`\`\
[ جميع القوانين قابلة للتغيير والتعديل وجميع الحقوق محفوظة لدى سيرفر DL ].
\`\`\`\

**DLRP Managment  <:1_1:1134078199664480276>**`);

          additionalEmbed.setImage(`https://cdn.discordapp.com/attachments/1090735758014418964/1094823072231600198/IMG_7117.jpg`);

          
    await collected.followUp({ embeds: [additionalEmbed], ephemeral: true });

          
        } else if (value === "8") {

          embed.setTitle(`**# - Discord rules**`);
          
    embed.setDescription(`**
1- احترام الجميع و عدم السب و اهانة اي شخص  مهما كانت الظروف ولو بطريقة غير مباشرة

2- عدم وضع الروابط او وضع روابط تحتوي دعوات لسيرفرات اخرى

3- عدم التدخل في شؤون الاخرين او شخصنة الحوارات

4- عدم الخوض بالامور الدينية او السياسية او التطرق لها بأي شكل من الاشكال

5- يمنع انتحال الشخصيات الإدارية ومن يخالف القانون هذا سوف يتبند

6- يمنع السخرية والإستهزاء من الآخرين ، وسيتم منعه من الكتابة بجميع الشاتات واذا تكرر الامر قد تصل
الى التحذير

7- يمنع الاستفسار بالشات العام ، عندك استفسار او سؤال توجه الى الدعم الفني ( في حال انك خالفت راح يجيك ميوت ) **

 \`\`\`\
[ جميع القوانين قابلة للتغيير والتعديل وجميع الحقوق محفوظة لدى سيرفر DL ].
\`\`\`\

DLRP Managment  <:1_1:1134078199664480276>`);
        }

        await collected.reply({ embeds: [embed], ephemeral: true });
      }

  
    

    
  });
    
 
     
  client.login(process.env.token);