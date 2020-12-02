const db = require('quick.db')
let {speed , getpoints} = require('./src/games')
module.exports = {
speed: async function(user, guild, boticon , botname) {
let data = await speed(user, guild, boticon , botname)
return data;
},
points: async function(user) {
let data = await getpoints(user)
return data;
}
}
