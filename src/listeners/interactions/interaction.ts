import { Listener } from "@sapphire/framework";
import type { Interaction } from "discord.js";

export class InteractionEvent extends Listener {
  async run(interaction: Interaction) {
    const { stores } = this.container;

    if (interaction.isMessageComponent()) {
      const interactionListener = stores
        .get("interactions" as any)
        .get(interaction.customId);

      if (!interactionListener) return;

      await interactionListener.run(interaction);
    }
  }
}
