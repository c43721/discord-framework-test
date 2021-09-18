import { ApplyOptions } from "@sapphire/decorators";
import type { ButtonInteraction } from "discord.js";
import {
  InteractionCommand,
  InteractionCommandOptions,
} from "../../lib/InteractionListener";

@ApplyOptions<InteractionCommandOptions>({
  customId: "test-btn",
})
export class UserButton extends InteractionCommand {
  run(interaction: ButtonInteraction) {
    interaction.reply("From button!!");
  }
}
