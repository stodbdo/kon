let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://upload.kilers-beta.eu.org/8dF7c0Pnf20D.png'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '6287858946160@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://upload.kilers-beta.eu.org/8dF7c0Pnf20D.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://upload.kilers-beta.eu.org/8dF7c0Pnf20D.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: ` *• SEWA BOT & UP TO PREMIUM •*
        
1. Grup / 30 Hari
Rp. 15.000 Dana
Rp. 15.000 Pulsa

2. Premium / 30 Hari
Rp. 10.000 Dana
Rp. 10.000 Pulsa

3. Premium + Grup / 30 Hari
Rp. 20.000 Dana
Rp. 20.000 Pulsa

wa.me/${owner[0]}
*Bukan Bot!!!*
*Owner ${conn.user.name}*
`,
  buttonText: 'Yang Mau Order Langsung Chat Owner',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'4233709263420596'}]}],
  headerImage: { productId: '4233709263420596',
  jpegThumbnail: baper },
  businessOwnerJid: `6287858946160@s.whatsapp.net`
  },
  footerText: ' ',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa|sewabot|buyprem)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }