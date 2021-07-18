import { AliasPiece, PieceContext, PieceOptions } from "@sapphire/framework";
import type { Interaction } from "discord.js";

export interface InteractionCommandOptions extends PieceOptions {
  customId: string;
}

export abstract class InteractionCommand extends AliasPiece {
  public customId: string;

  constructor(context: PieceContext, options: InteractionCommandOptions) {
    super(context, { ...options, name: options.customId });
    this.customId = options.customId;
  }

  abstract run(interaction: Interaction): Awaited<unknown>;
}
