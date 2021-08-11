import { ApplyOptions } from "@sapphire/decorators";
import type { Interaction } from "discord.js";
import {
  InteractionCommand,
  InteractionCommandOptions,
} from "../../lib/InteractionListener";

@ApplyOptions<InteractionCommandOptions>({
  customId: "test-select",
})
export class HelloButton extends InteractionCommand {
  run(interaction: Interaction) {
    if (interaction.isSelectMenu()) {
      interaction.reply("From select!!");
    }
  }
}
