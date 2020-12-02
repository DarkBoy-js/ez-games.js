# ez-games.js
- __Made For Discord bots which use Discord.js__
- _**Make Sure To Install [quick.db](https://www.npmjs.com/package/quick.db) Before Using Package!**_
- Report Bugs, Errors, Problems In [Support Server](https://discord.gg/devs)

## Usage 📕
- __Speed Game__
 ```js
const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
client.on('ready', () => {
    console.log('im in!')
})


const ezgames = require('ez-games.js')
client.on('message', async message => {
if(!message.guild) return;
if(message.content.toLowerCase().startsWith('speed')) {
 
let data = await ezgames.speed(message.author.id, message.guild.id, message.author.displayAvatarURL({ format: 'png'}), client.user.username)
  /**
   * user => message.author.id 
   * guild => message.guild.id
   * image => the generated image from api.
   * word => the word that generated from the package
   */
  let embed = new Discord.MessageEmbed()
 .setTitle(`You Have 15Seconds To Type the word`)
 .setImage(data.image)
 .setFooter(message.guild.name , message.guild.iconURL())
 .setTimestamp()
  message.channel.send(embed)
  let author = m => m.author.id === message.author.id;
  let pointcollecter = new Discord.MessageCollector(message.channel, author , { max: 1 , time: 15000 }); 
  pointcollecter.on('collect', async msg => {
      let word = data.word;
      if(msg.content.toLowerCase() === word.toLowerCase()) {
    message.channel.send(`You've Got one Point!`)  
    db.add(`points_${message.author.id}`, 1)
    db.add(`wins_${message.author.id}`, 1)

} else {
    message.channel.send(`Incorrect the right word is ${word.toLowerCase()}`)
    db.add(`loses_${message.author.id}`, 1)
      }
  })
}
})

```
- __Get User Points__
```js
client.on('message',  async message => {
  if(message.content.toLowerCase().startsWith('points')) {
   if(!message.guild) return;
   let data = await ezgames.points(message.author.id)
   /**
    * points => user points  
    * wins => user wins
    * loses => user loses
    */
   message.channel.send(`Total Points: ${data.points}`)
  }
})
```
 
## Why ez-games.js
- Fast and easy to use
- Note : This Package Is Using [Quick.db](https://www.npmjs.com/package/quick.db) (Database)
- This Package Is Made With 💖 By ! Darkboy🍭#9966

