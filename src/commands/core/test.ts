import type { Message } from "discord.js";
import { ApplyOptions } from "@sapphire/decorators";
import { Command, CommandOptions } from "@sapphire/framework";

@ApplyOptions<CommandOptions>({
	name: 'test',
	description: 'Testing',
})
export default class TestCommand extends Command {

	async run(msg: Message) {
		return await msg.channel.send("Testing successfull!!");
	}
	
}