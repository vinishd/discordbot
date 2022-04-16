const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { applicationId, guildId, token } = require('./config.json');


const commands = [
    new SlashCommandBuilder().setName('tictactoe').setDescription('Play a game of tic-tac-toe'),
]

const rest = new REST({ version: '9' }).setToken(token)
rest.put(Routes.applicationCommands(applicationId), { body: commands })
    .then(() => console.log('Succsessfully registered application commannds.'))
    .catch(console.error);
