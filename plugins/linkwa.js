let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
       conn.sendMessage(m.chat, {
  text: `Bantu Ramein Bang Soalnya Sepi`,
  templateButtons: [{
    index: 1,
    urlButton: {
    displayText: `Join Ke Group`,
    url: `https://chat.whatsapp.com/IED3H2bwzD7CkIhYnoLZYd`,
    }
    }, {
    urlButton: {
    displayText: `Salin link`,
    url: `https://www.whatsapp.com/otp/copy/https://chat.whatsapp.com/IED3H2bwzD7CkIhYnoLZYd`
    }
  }],
  footer: 'Bantu Share Link Groupnya'
})
}
    

handler.command = /^(gcbot)$/i
handler.limit = true

module.exports = handler
