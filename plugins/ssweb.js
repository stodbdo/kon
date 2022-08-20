/*             Create By KilersBotz
*/
let fetch = require('node-fetch')
let handler = async (m, { conn, command, args }) => {
  if (args[0] === 'Nekopoi.care') {
      conn.reply(m.chat, '*Tobat woy*', m)
      reject
  }
  if (args[0] === 'Nhentai.net') {
      conn.reply(m.chat, '*Tobat woy*', m)
      reject
  }
  let full = /f$/i.test(command)
  if (!args[0]) return conn.reply(m.chat, 'Tidak ada url', m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch('https://shot.screenshotapi.net/screenshot?url=' + encodeURIComponent(url) + '&full_page=true&fresh=true&output=image&file_type=png&wait_for_event=load&device=phone&full=on')).buffer()
  let teks = `Nehh Hasil Dari ${url}`
  conn.sendFile(m.chat, ss, 'screenshot.png', teks, m)
}
handler.help = ['ssweb'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^(ssweb)??$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
module.exports = handler