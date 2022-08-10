let { MessageType } = require('@adiwajshing/baileys')
let link = require("new-scrape")
let fetch = require('node-fetch')
let handler = async(m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw `Contoh: ${usedPrefix + command} group bot`
	  link.linkwa(text)
      .then(a => a[Math.floor(Math.random() * a.length)])
       .then(b => 
conn.sendMessage(m.chat, {
  text: `Berikut link Group BOT\n Jangan lupa Join dan Share`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Salin link Group`,
      url: `https://www.whatsapp.com/otp/copy/${b.link}`
    }
  }],
  footer: wm
})
)}
handler.command = /^(t|tes)$/i

module.exports = handler