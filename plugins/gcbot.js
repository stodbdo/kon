let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn, args, usedPrefix, command, text }) => {
conn.sendMessage(m.chat, {
  text: `Berikut link Group BOT\n Jangan lupa Join dan Share`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Salin link Group`,
      url: 'https://www.whatsapp.com/otp/copy/https://chat.whatsapp.com/IED3H2bwzD7CkIhYnoLZYd'
    }
  }],
  footer: wm
})
}
handler.tags = ['info']
handler.command = /^(gcbot|groupbot)$/i

module.exports = handler