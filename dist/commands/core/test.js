"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
let TestCommand = class TestCommand extends framework_1.Command {
    async run(msg) {
        return await msg.channel.send("Testing successfull!!");
    }
};
TestCommand = tslib_1.__decorate([
    decorators_1.ApplyOptions({
        name: 'test',
        description: 'Testing',
    })
], TestCommand);
exports.default = TestCommand;
//# sourceMappingURL=test.js.map