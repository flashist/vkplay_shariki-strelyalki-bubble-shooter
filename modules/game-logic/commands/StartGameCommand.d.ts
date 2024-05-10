import { BaseAppCommand } from "@flashist/appframework/base/commands/BaseAppCommand";
export declare class StartGameCommand extends BaseAppCommand {
    protected gameLogicState: {
        readonly gameLogic: {
            readonly coins: number;
            readonly maxCompleteLevelIndex: number;
        };
    };
    protected executeInternal(): Promise<void>;
}
