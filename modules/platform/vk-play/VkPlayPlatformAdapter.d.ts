import { PlatformAdapter } from "../abstract/PlatformAdapter";
export declare class VkPlayPlatformAdapter extends PlatformAdapter {
    sdk: any;
    sdkCallbacks: any;
    protected internalInit(params?: any): Promise<void>;
}
