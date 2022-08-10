let { MessageType } = require('@adiwajshing/baileys')
let link = require("new-scrape")
let fetch = require('node-fetch')
let handler = async(m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw `Contoh: ${usedPrefix + command} group bot`
	  link.linkwa(text)
      .then(a => a[Math.floor(Math.random() * a.length)])
       .then(b => 
conn.sendMessage(m.chat, {
  text: `*Nama Group : ${b.nama}`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Salin link`,
      url: `https://www.whatsapp.com/otp/copy/${b.link}`
    }
  }],
  footer: 'Create By KilersBotz'
})
)}
handler.help = ['linkwa <text>']
handler.tags = ['lainnya']
handler.command = /^(linkwa)$/i
handler.limit = true
module.exports = handler