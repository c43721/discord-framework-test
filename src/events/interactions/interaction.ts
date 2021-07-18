import { Event } from "@sapphire/framework";
import type { Interaction } from "discord.js";

export class InteractionEvent extends Event {
  async run(interaction: Interaction) {
    const { stores } = this.context;

    if (interaction.isMessageComponent()) {
      const interactionListener = stores
        .get("interactions" as any)
        .get(interaction.customID);

      if (!interactionListener) return;

      await interactionListener.run(interaction);
    }
  }
}
