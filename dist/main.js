"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("@sapphire/plugin-logger/register");
const framework_1 = require("@sapphire/framework");
const dotenv_1 = require("dotenv");
dotenv_1.config();
const client = new framework_1.SapphireClient({
    defaultPrefix: "pls ",
    presence: {
        activity: {
            name: "Watching",
            type: "WATCHING",
        }
    },
    logger: {
        instance: new framework_1.Logger(20 /* Debug */),
        level: 20 /* Debug */
    },
    ws: {
        intents: [
            "GUILDS",
            "GUILD_MEMBERS",
            "GUILD_MESSAGES",
            "DIRECT_MESSAGES",
        ]
    }
});
client.login(process.env.TOKEN);
//# sourceMappingURL=main.js.map