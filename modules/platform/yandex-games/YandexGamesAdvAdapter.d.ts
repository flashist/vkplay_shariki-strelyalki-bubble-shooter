import { AdvAdapter } from "../abstract/AdvAdapter";
import { YandexGamesPlatformAdapter } from "./YandexGamesPlatformAdapter";
export declare class YandexGamesAdvAdapter extends AdvAdapter {
    protected platformAdapter: YandexGamesPlatformAdapter;
    protected construction(...args: any[]): void;
    internalShowFullscreenAdv(): Promise<any>;
    internalShowRewardedAdv(): Promise<boolean>;
}
