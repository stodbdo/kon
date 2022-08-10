//let fetch = require('node-fetch')
const fetch = require('node-fetch')
const axios = require('axios')
const fs = require('fs')
let handler = async(m, { conn, text, args }) => {
if (args[0] === 'Nekopoi.care') {
      conn.reply(m.chat, '*nama apaan tuh🗿*', m)
      reject
  }
  if (args[0] === 'Nhentai.net') {
      conn.reply(m.chat, '*afaan tuh*', m)
      reject
  }
if (!args[0]) return conn.reply(m.chat, 'Tidak ada text', m)
let tolol = await getBuffer(`https://kilersbotz.nasiwebhost.com/serti/tolol.php?nama=${text}`)
conn.sendFile(m.chat, tolol, 'tolol.png', 'Ohhh Lu Tolol Ya Bang🗿', m)
}
handler.help = ['sertitolol <text>']
handler.tags = ['lainnya']
handler.command = /^(sertitolol|sertifikattolol)$/i
handler.limit = true

const getBuffer = async (url, options) => {

	try {

		options ? options : {}

		const res = await axios({

			method: "get",

			url,

			headers: {

				'DNT': 1,

				'Upgrade-Insecure-Request': 1

			},

			...options,

			responseType: 'arraybuffer'

		})

		return res.data

	} catch (e) {

		console.log(`Error : ${e}`)

	}

}
module.exports = handler