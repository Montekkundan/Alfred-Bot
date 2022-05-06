import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})

client.on('ready', () => {
    console.log('The bot is ready.')
    new WOKCommands(client, {
        // The name of the local folder for your command files
        commandsDir: path.join(__dirname, 'commands'),
        // Allow importing of .ts files if you are using ts-node
        typeScript: true,
        testServers: '970649819536326666',
    })
    .setDefaultPrefix('al.') // Set your prefix here
})

client.login(process.env.TOKEN)