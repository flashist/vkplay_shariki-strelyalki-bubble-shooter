import { BaseAppManager } from "@flashist/appframework/base/managers/BaseAppManager";
import { TutorialManager } from "../../tutorial/managers/TutorialManager";
export declare class GameTutorialManager extends BaseAppManager {
    protected gamePageState: {
        readonly gamePage: {
            readonly state: import("../../game-page/data/state/GamePageState").GamePageState;
            readonly imageProcessProgress: number;
        };
    };
    protected gameLogicState: {
        readonly gameLogic: {
            readonly coins: number;
            readonly maxCompleteLevelIndex: number;
        };
    };
    protected tutorialManager: TutorialManager;
    protected addListeners(): void;
}
