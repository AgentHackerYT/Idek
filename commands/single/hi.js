const { Command } = require('discord.js-commando');

module.exports = class HelloWorldCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'hi',
			aliases: ['hello', 'hey', 'hoi', 'hola'],
			group: 'single',
			memberName: 'hi',
			description: 'Hello.',
			clientPermissions: ['ADD_REACTIONS', 'READ_MESSAGE_HISTORY']
		});
	}

	async run(msg) {
		try {
			await msg.react('👋');
			return null;
		} catch (err) {
			return msg.reply('Hi there!');
		}
	}
};
