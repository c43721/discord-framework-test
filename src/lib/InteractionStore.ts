import { AliasStore } from "@sapphire/framework";
import { InteractionCommand } from "./InteractionListener";

export class InteractionStore extends AliasStore<InteractionCommand> {
  constructor() {
    super(InteractionCommand as any, { name: "interactions" });
  }
}
