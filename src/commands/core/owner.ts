import { Message, MessageActionRow } from "discord.js";
import { ApplyOptions } from "@sapphire/decorators";
import { Command, CommandOptions } from "@sapphire/framework";

@ApplyOptions<CommandOptions>({
    name: "owner",
    description: "Owner",
    preconditions: ["OwnerOnly"],
})
export default class OwnerCommand extends Command {
    async run(msg: Message) {
        const row1 = new MessageActionRow().addComponents({
            customID: "test-btn",
            type: "BUTTON",
            style: "PRIMARY",
            label: "Test button?!",
        });
        return await msg.channel.send({ content: "Test", components: [row1] });
    }
}
