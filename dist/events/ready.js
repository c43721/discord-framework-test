"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadyEvent = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const colorette_1 = require("colorette");
const dev = process.env.NODE_ENV !== 'production';
let ReadyEvent = class ReadyEvent extends framework_1.Event {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "style", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: dev ? colorette_1.yellow : colorette_1.blue
        });
    }
    run() {
        this.printBanner();
        this.printStoreDebugInformation();
    }
    printBanner() {
        const success = colorette_1.green('+');
        const llc = dev ? colorette_1.magentaBright : colorette_1.white;
        const blc = dev ? colorette_1.magenta : colorette_1.blue;
        const line01 = llc('');
        const line02 = llc('');
        const line03 = llc('');
        // Offset Pad
        const pad = ' '.repeat(7);
        console.log(String.raw `
${line01} ${pad}${blc('1.0.0')}
${line02} ${pad}[${success}] Gateway
${line03}${dev ? ` ${pad}${blc('<')}${llc('/')}${blc('>')} ${llc('DEVELOPMENT MODE')}` : ''}
		`.trim());
    }
    printStoreDebugInformation() {
        const { client, logger } = this.context;
        const stores = [...client.stores.values()];
        const last = stores.pop();
        for (const store of stores)
            logger.info(this.styleStore(store, false));
        logger.info(this.styleStore(last, true));
    }
    styleStore(store, last) {
        return colorette_1.gray(`${last ? '└─' : '├─'} Loaded ${this.style(store.size.toString().padEnd(3, ' '))} ${store.name}.`);
    }
};
ReadyEvent = tslib_1.__decorate([
    decorators_1.ApplyOptions({ once: true })
], ReadyEvent);
exports.ReadyEvent = ReadyEvent;
//# sourceMappingURL=ready.js.map