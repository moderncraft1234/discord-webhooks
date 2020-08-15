const Discord = require(`discord.js`);
const {prefix, token } = require(`./config.json`);
const client = new Discord.Client();

client.once(`ready`, () => {
 console.log(`millitary client is up and running all code operational`)
})

client.on(`message`, message => { 
  //console.log(message.content);

  if(message.content.startsWith(`${prefix}kick`)) {
  message.channel.send("a user has been kicked")
  }
  

  
})

client.on(`message`, message => { 
  //console.log(message.content);

  if(message.content.startsWith(`${prefix}help`)) {
  message.channel.send("hi there how can i help you im millitary client im programmed to help you and moderate the server im programmed by villager number 9 the best villager in the world and my prefix is = but im still under development and its also a role play bot and its used for the first time on the army of the replubic server and this bot has =rp-1 all the way to rp-6 and we have =info for more info thanks for reading my help cmd")
  }
  
})

client.on(`message`, message => { 
  //console.log(message.content);

  if(message.content.startsWith(`${prefix}invite-link`)) {
  message.channel.send("https://discord.com/oauth2/authorize?client_id=742026713437044756&scope=bot&permissions=2146958847")
  }
  
})

client.on(`message`, message => { 
  //console.log(message.content);

  if(message.content.startsWith(`${prefix}info`)) {
  message.channel.send("i am a chat bot for some roleplay and probably for some moderation this bot is gonna have a few functions like rp 1 2 and 3 and 4 and on and on al the way to 6 i gonna replenish the rp code every week this will be star wars related roleplay")
  }

})

client.on(`message`, message => { 
  console.log(message.content);

  
})

client.on(`message`, message => { 
  //console.log(message.content);

  if(message.content.startsWith(`${prefix}rp-1`)) {
  message.channel.send("one time there was a jedi on a planet called hoth it was a cold planet he was there for a job he needed to finish it was important that he finished it couse it was about saving the local inhabbitans from the planet doom and the jedi had a camp set up and a huge rescue ship wich is ready to save the local inhabitans and  sooner more poeple would join him")
  }
  
})

client.on(`message`, message => { 
  //console.log(message.content);

  if(message.content.startsWith(`${prefix}rp-2`)) {
  message.channel.send("someday there was someone who was exploring deep space and he found a new planet in the outer rim  it was called vormure this planet had a jungle like climate and the spieces are lizard like spieces that can shape shift this so the guy setted up camp on vormure whaiting for more peeps who will follow him ")
  }
  
})

client.on(`message`, message => { 
  //console.log(message.content);

  if(message.content.startsWith(`${prefix}rp-3`)) {
  message.channel.send("on a planet far far away there was a guy named drydon vos he just left crimson down and he wanted to to something new he found the jedi council and soon he joined the jedi councill as well it was big fr him he was a good jedi he was on a mision on planet hoth to search for a mandolorian who was setting up camp")
  }
  
})

client.on(`message`, message => { 
  //console.log(message.content);

  if(message.content.startsWith(`${prefix}rp-4`)) {
  message.channel.send("one time on somewhere in deep space there was the venator a huge ship and the ship was underway to coruscunt to prepare up the army for a huge war wich would take place on the wookie planet  ")
  }
  
})

client.on(`message`, message => { 
  //console.log(message.content);

  if(message.content.startsWith(`${prefix}rp-5`)) {
  message.channel.send("roleplay back story is curently being written have patience")
  }
  
})

client.on(`message`, message => { 
  //console.log(message.content);

  if(message.content.startsWith(`${prefix}rp-6`)) {
  message.channel.send("roleplay back story is curently being written have patience")
  }
  
})

client.on(`message`, message => { 
  //console.log(message.content);

  if(message.content.startsWith(`${prefix}main-server`)) {
  message.channel.send("https://discord.gg/YEMzA8p")
  }
  

  
})






client.login(token);