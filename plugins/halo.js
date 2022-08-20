let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn }) => {
  let stiker = await sticker(null, 'https://upload.kilers-beta.eu.org/zOH6rw4hE20n.png', 'BOT ONLINE', 'KilersBotz')
  if (stiker) return conn.sendFile(m.chat, stiker, 'ONLINE.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
}
handler.customPrefix = /^(tes|bot|bot online?|oy bot|hai bot|)$/i
handler.command = new RegExp

module.exports = handler
