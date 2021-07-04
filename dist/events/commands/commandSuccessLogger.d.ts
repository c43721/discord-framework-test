import type { CommandSuccessPayload } from '@sapphire/framework';
import { Event } from '@sapphire/framework';
export declare class CommandSuccessEvent extends Event {
    run({ message, command }: CommandSuccessPayload): void;
    onLoad(): void;
    private shard;
    private command;
    private author;
    private direct;
    private guild;
}
//# sourceMappingURL=commandSuccessLogger.d.ts.map