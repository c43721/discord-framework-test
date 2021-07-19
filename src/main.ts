import "reflect-metadata";

import "@sapphire/plugin-logger/register";

import { Logger, LogLevel, SapphireClient } from "@sapphire/framework";
import { config } from "dotenv";
import { InteractionStore } from "./lib/InteractionStore";

config();

const client = new SapphireClient({
  defaultPrefix: "pls ",
  logger: {
    instance: new Logger(LogLevel.Debug),
    level: LogLevel.Debug,
  },
  intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
});

client.stores.register(new InteractionStore());

client.login(process.env.TOKEN);
