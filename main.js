require('dotenv').config();
const Discord = require('discord.js');

const guilds = Discord.Intents.FLAGS.GUILDS;
const messages =  Discord.Intents.FLAGS.GUILD_MESSAGES;
const emoticons = Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS;

const GateInt = [guilds, messages, emoticons];
//GateInt is a variable that's storing the Gateway Bot Intents
const client = new Discord.Client({intents: [GateInt]});
//Gateway Intents are mandatory for creating a Discord bot, it's as if you 'd be importing discord libraries and adding bot permissions.

const prefix= '!';
const TOKEN = "OTMxNjYyMDM1NjQ3ODU2NjUx.YeHr4g.FqAAw9LmVNPogyWI-XslbG9PveQ";

client.once('ready', () =>{
console.log('Creepy ejzis logged in.');
});

//Basic knowledge: 'let' is a local variable, 'var' is global.

client.on('message', message =>
{
  const siteURL = process.env.MY_SITE;
  const youtubeURL = process.env.YOUTUBE;
  const tiktokURL = process.env.TIKTOK;
  const openseaURL = process.env.OPENSEA;
  const discordURL = process.env.DISCORD;
  const instagramURL = process.env.INSTAGRAM;
  const VerifyChannelID = '928994922546216970';
  const SpamChannelId = '933821919852118056';
  const BotTestChannelId = '928727515504193578';
  var AllowedChannels = [SpamChannelId ,BotTestChannelId];
  // const arrays don't allow you to change the array name, but does
  var messaging = Discord.Message;

  if(!message.content.startsWith(prefix) || message.author.bot || !AllowedChannels.includes(message.channel.id))
  return;

  const command = message.content.slice(prefix.length).split(/ +/).shift().toLowerCase();
  const ROLES = message.member.roles;
  function SendMessage(URL)
  {
    message.channel.send(URL);
  }

  switch(command)
  {
    case 'ejzis':
      message.channel.send('Here I am <:ejzis:909530455387275294>');
      break;
    case 'highestrole':
      message.channel.send(ROLES.highest.toString());
      break;
      //The bot sends highest role the user has.
    case 'goodbye':
      message.channel.send('Goodbye, see you soon! <:ejzis_wink:909530436210933800>');
      break;
    case 'youtube':
      message.channel.sendTyping();
      setTimeout(SendMessage, 3000, youtubeURL);
      break;
    case 'tiktok':
      message.channel.sendTyping();
      setTimeout(SendMessage, 3000, tiktokURL);
      break;
    case 'opensea':
      message.channel.sendTyping();
      setTimeout(SendMessage, 3000, openseaURL);
      break;
    case 'site':
      message.channel.sendTyping();
      setTimeout(SendMessage, 3000, siteURL);
      break;
    case 'createinvite':
      message.channel.sendTyping();
      setTimeout(SendMessage, 3000, discordURL);
      break;    
    /*case 'deletemessage':
      message.channel.delete();*/
    case 'instagram':
      message.channel.sendTyping();
      setTimeout(SendMessage, 3000, instagramURL);
      break;   
    default:
      message.channel.send('Invalid command entered, please try again.');
      //Informs the user about the fact that he/she entered an invalid command.
  }
});

client.login(TOKEN);