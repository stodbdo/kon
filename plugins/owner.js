let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let handler  = async (m, { conn, text }) => {
let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:KilersBotz
TEL;type=CELL;type=VOICE;waid=6287701656619:6287701656619
END:VCARD`
   conn.sendMessage(m.chat, {
            contacts: {
                displayName: 'KilersBotz',
                contacts: [{ vcard }]
            }
        })

}
handler.command = /^(owner|own|\?)$/i
handler.group = false
handler.limit = false
handler.fail = null
module.exports = handler