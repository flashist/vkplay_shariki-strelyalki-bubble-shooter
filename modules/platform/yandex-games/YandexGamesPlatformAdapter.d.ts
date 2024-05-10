import { PlatformAdapter } from "../abstract/PlatformAdapter";
export declare class YandexGamesPlatformAdapter extends PlatformAdapter {
    sdk: any;
    protected playerSdk: any;
    protected internalInit(params?: any): Promise<void>;
    gameIsReadyCallback(): Promise<void>;
    checkIfLeaderboardAvailable(): Promise<boolean>;
    setLeaderboardScore(score: number, leaderboardId?: string, extraData?: any, checkForPrevMaxScore?: boolean): Promise<boolean>;
    checkIfAskToReviewAvailable(): Promise<boolean>;
    internalAskToReview(): Promise<boolean>;
    checkIfAskToInstallAvailable(): Promise<boolean>;
    internalAskToInstall(): Promise<boolean>;
    protected initPlayer(): Promise<void>;
    protected getSdkPlayerData(): Promise<any>;
    protected setSdkPlayerData(data: any): Promise<boolean>;
}
