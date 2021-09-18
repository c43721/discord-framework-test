import { ApplyOptions } from "@sapphire/decorators";
import type { SelectMenuInteraction } from "discord.js";
import {
  InteractionCommand,
  InteractionCommandOptions,
} from "../../lib/InteractionListener";

@ApplyOptions<InteractionCommandOptions>({
  customId: "test-select",
})
export class HelloButton extends InteractionCommand {
  run(interaction: SelectMenuInteraction) {
    interaction.reply("From select!!");
  }
}
