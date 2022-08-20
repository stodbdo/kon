let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
let ss = await (await fetch('https://api.zacros.my.id/randomimg/loli')).buffer()
conn.sendFile(m.chat, ss, 'lolicon.png', 'Lu Mau Apain Bang🗿', m)
}
handler.help = ['loli']
handler.tags = ['internet']
handler.command = /^(loli)$/i
handler.limit = true
module.exports = handler