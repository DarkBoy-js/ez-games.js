const db = require('quick.db');
module.exports = {
speed: async function(user, guild, boticon , botname){
 let names = [
    "amazing",
    "howareu",
    "supermarket",
    "coffee shop",
    "youtube",
    "discord",
    "darkhosting",
    "roblox",
    "fortnite",
    "Google",
    "netflix",
    "becool",
    "yessir",
    "minecraft",
    "anime",
    "sub2pewdiepew",
    "winner",
    "soundcould",
    "googleclood",
    "becool",
    "knife",
    "boozkia",
    "onepunch",
    "onepiece",
    "crunchyroll",
    "animecould",
    "apexlegends",
    "trohpey",
    "ps5",
    "goodhub",
    "master",
    "speed",
     "hru",
     "imfine",
     "fr",
     "omg",
     "thisissoepic",
     "ucanwin",
     "tbh",
     "meme"
]
const randomword = names[Math.floor(Math.random() * names.length)];
let random = [
    `https://dynamic.brandcrowd.com/asset/logo/d588330f-b11c-4482-baff-49323323a8c0/logo?v=4&text=${randomword}`,
    `https://dynamic.brandcrowd.com/asset/logo/8ffdc28c-ea27-4b0c-89c3-3f9a9b40e5fd/logo?v=4&text=${randomword}`,
    `https://dynamic.brandcrowd.com/asset/logo/963fcb8b-1ba3-46f1-82bd-8e92a5a024d1/logo?v=4&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=dance-logo&text=${randomword}`,
    `https://dynamic.brandcrowd.com/asset/logo/c1e008df-5207-463e-a6a7-a823174d0bda/logo?v=4&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=robot-logo&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=arcade-logo&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=emperor-logo&text=${randomword}`,
    `https://dynamic.brandcrowd.com/asset/logo/b5e150af-101d-4e96-9518-dff66548dc31/logo?v=4&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=matrix-logo&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=skate-logo&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spider-men-logo&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spaceships-logo&text=${randomword}`,
    `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=wrestler-logo&text=${randomword}`
]
const randomimage = random[Math.floor(Math.random() * random.length)];

let data = {
user: user,
word: randomword,
guild: guild    ,
image: randomimage , 
}
return data;
},
getpoints: async function(user) {
    let points = db.get(`points_${user}`)
    let wins = db.get(`wins_${user}`)
    let loses = db.get(`loses_${user}`)
    let data = {
        total: `${points || '0'}`,
        wins: `${wins || '0'}`,
        lose: `${loses || '0'}`,
    }
    return data;
}
}
