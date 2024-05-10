import { AdvAdapter } from "../abstract/AdvAdapter";
import { VkPlayPlatformAdapter } from "./VkPlayPlatformAdapter";
export declare class VkPlayAdvAdapter extends AdvAdapter {
    protected platformAdapter: VkPlayPlatformAdapter;
    internalShowFullscreenAdv(): Promise<any>;
    internalShowRewardedAdv(): Promise<boolean>;
}
