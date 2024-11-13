require('dotenv').config()
const { Client } = require('discord.js-selfbot-v13')
const client = new Client()

client.on('ready', async () => {
    const channel = await client.channels.fetch(process.env.BUMP_CHANNEL)

    const sendBump = async () => {
        await channel.sendSlash('コマンドID', 'コマンド名')
        console.count('bump!')
        setTimeout(sendBump, 3601000) 
    }

    sendBump()
})

client.login(process.env.TOKEN)

/*BOT名: 'コマンドID', 'コマンド名'
  DISBOARD: '302050872383242240', 'bump'
  Discoall: '903541413298450462', 'up'
  ディス速: '761562078095867916', 'dissoku up'
*/
