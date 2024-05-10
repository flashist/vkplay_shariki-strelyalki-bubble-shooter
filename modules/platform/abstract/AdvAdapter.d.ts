import { BaseAppManager } from "@flashist/appframework";
import { Rectangle, SoundsManager } from "@flashist/flibs";
export declare class AdvAdapter extends BaseAppManager {
    protected soundsManager: SoundsManager;
    protected appState: {
        readonly app: {
            readonly debug: boolean;
            readonly appLaunchesCount: number;
            readonly sessionStartTime: number;
            readonly sessionDuration: number;
            readonly totalUsageDuration: number;
            readonly previousSessionTotalUsageTime: number;
            readonly config: {
                readonly appName: string;
                readonly appVersion: number;
                readonly files: readonly any[];
                readonly supportedLocales?: readonly string[];
                readonly targetFps?: number;
                readonly sizeArea: {
                    readonly x: number;
                    readonly y: number;
                    readonly width: number;
                    readonly height: number;
                };
            };
        };
    };
    protected muteSoundsDuringAdv: boolean;
    protected fullscreenAdvMinInterval: number;
    protected fullscreenAdvLastTimeShown: number;
    protected rewardedAdvMinInterval: number;
    protected rewardedAdvLastTimeShown: number;
    checkIfFullscreenAdvAvailable(): boolean;
    showFullscreenAdv(): Promise<any>;
    protected internalShowFullscreenAdv(): Promise<any>;
    checkIfRewardedAdvAvailable(): boolean;
    showRewardedAdv(): Promise<boolean>;
    protected internalShowRewardedAdv(): Promise<boolean>;
    checkIfBannerAdvAvailable(): boolean;
    showBannerAdv(): Promise<any>;
    protected internalShowBannerAdv(): Promise<any>;
    protected updateBannerData(): void;
    protected getBannerRect(): Rectangle;
    protected addDisableSoundsLock(): void;
    protected removeDisalbeSoundsLock(): void;
}
