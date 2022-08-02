let handler = async (m, { conn }) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let tod = `
┌─〔 R U N T I M E 〕
├  Bot Aktif Selama ${uptime}
└────
    `
conn.sendMessage(m.chat, {
  text: `${tod}`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Rest Api`,
      url: 'https://api.kilers-beta.eu.org'
    }
  }],
  footer: `${uptime}`
})
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}