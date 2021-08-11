import { ApplyOptions } from "@sapphire/decorators";
import type { Interaction } from "discord.js";
import {
  InteractionCommand,
  InteractionCommandOptions,
} from "../../lib/InteractionListener";

@ApplyOptions<InteractionCommandOptions>({
  customId: "test-btn",
})
export class UserButton extends InteractionCommand {
  run(interaction: Interaction) {
    if (interaction.isButton()) {
      interaction.reply("From button!!");
    }
  }
}
