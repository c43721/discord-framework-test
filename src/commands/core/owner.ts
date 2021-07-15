import type { Message } from "discord.js";
import { ApplyOptions } from "@sapphire/decorators";
import { Command, CommandOptions } from "@sapphire/framework";

@ApplyOptions<CommandOptions>({
    name: "owner",
    description: "Owner",
    preconditions: ["OwnerOnly"],
})
export default class OwnerCommand extends Command {
    async run(msg: Message) {
        return await msg.channel.send("Owner only!!");
    }
}
