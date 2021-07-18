import { AliasPiece } from "@sapphire/framework";
import { InteractionCommand } from "./InteractionListener";

export class InteractionStore extends AliasPiece {
  constructor() {
    super(InteractionCommand as any, { name: "interactions" });
  }
}
