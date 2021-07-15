import { Precondition } from "@sapphire/framework";
import type { Message } from "discord.js";

const OWNERS = ["176457969465163776"];

export default class OwnerOnly extends Precondition {
    public async run(message: Message) {
        return OWNERS.includes(message.author.id)
            ? this.ok()
            : this.error({ message: "This command can only be used by the owner." });
    }
}
