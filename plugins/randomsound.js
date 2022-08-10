//const { getBuffer } = require('./lib/buff.js')
let handler = async (m) => {
let rand = Math.floor(Math.random() * 70)
omkeh = await getBuffer(`https://sound.kilers-beta.eu.org/sound${rand}.mp3`)
//conn.sendFile(m.chat, omkeh, 'sound.mp3', 'sound.mp3', m)
conn.sendFile(m.chat, omkeh, 'sound.mp3', '', m, false, { mimetype: 'audio/mp4' })

    })
 console.log(`Random Sound ${rand}`)
//conn.sendFile(m.chat, res.audio, 'audio.mp3', '', m)
}
const fetch = require('node-fetch')
const axios = require('axios')
const fs = require('fs')

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
handler.help = ['randomsound']
handler.tags = ['lainnya']
handler.command = /^(randomsound|sound)$/i
handler.limit = true

module.exports = handler