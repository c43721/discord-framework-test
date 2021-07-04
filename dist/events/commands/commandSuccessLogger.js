"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandSuccessEvent = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const colorette_1 = require("colorette");
let CommandSuccessEvent = class CommandSuccessEvent extends framework_1.Event {
    run({ message, command }) {
        var _a, _b;
        const shard = this.shard((_b = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.shardID) !== null && _b !== void 0 ? _b : 0);
        const commandName = this.command(command);
        const author = this.author(message.author);
        const sentAt = message.guild ? this.guild(message.guild) : this.direct();
        this.context.logger.debug(`${shard} - ${commandName} ${author} ${sentAt}`);
    }
    onLoad() {
        this.enabled = this.context.logger.level <= 20 /* Debug */;
        return super.onLoad();
    }
    shard(id) {
        return `[${colorette_1.cyan(id.toString())}]`;
    }
    command(command) {
        return colorette_1.cyan(command.name);
    }
    author(author) {
        return `${author.username} [${colorette_1.cyan(author.id)}]`;
    }
    direct() {
        return colorette_1.cyan('Direct Messages');
    }
    guild(guild) {
        return `${guild.name} [${colorette_1.cyan(guild.id)}]`;
    }
};
CommandSuccessEvent = tslib_1.__decorate([
    decorators_1.ApplyOptions({ event: framework_1.Events.CommandSuccess })
], CommandSuccessEvent);
exports.CommandSuccessEvent = CommandSuccessEvent;
//# sourceMappingURL=commandSuccessLogger.js.map