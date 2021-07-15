import type { Message } from "discord.js";
import { ApplyOptions } from "@sapphire/decorators";
import { Args, Command, CommandOptions } from "@sapphire/framework";

@ApplyOptions<CommandOptions>({
    name: "test",
    description: "Testing",
    strategyOptions: {
        flags: ["t"],
    },
})
export default class TestCommand extends Command {
    async run(msg: Message, args: Args) {
        const isTestFlag = args.getFlags("t");

        if (isTestFlag) return await msg.channel.send("Args!");

        return await msg.channel.send("Testing successfull!");
    }
}
