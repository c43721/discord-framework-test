import "reflect-metadata";

import '@sapphire/plugin-logger/register';

import { Logger, LogLevel, SapphireClient } from '@sapphire/framework';
import { config } from "dotenv";

config();

const client = new SapphireClient({
	defaultPrefix: "pls ",
	presence: {
		activity: {
			name: "Watching",
			type: "WATCHING",
		}
	},
	logger: {
		instance: new Logger(LogLevel.Debug),
		level: LogLevel.Debug
	},
	ws: {
		intents: [
			"GUILDS",
			"GUILD_MEMBERS",
			"GUILD_MESSAGES",
			"DIRECT_MESSAGES",
		]
	}
});


client.login(process.env.TOKEN);