import { ApplyOptions } from "@sapphire/decorators";
import type { EventOptions } from "@sapphire/framework";
import { Event } from "@sapphire/framework";
import type { Interaction } from "discord.js";

@ApplyOptions<EventOptions>({
    event: "interaction",
})
export class CommandSuccessEvent extends Event {
    async run(interaction: Interaction) {
        if (interaction.isButton()) {
            await interaction.defer();
            // await interaction.reply({ content: "reply" });
        }
    }
}
