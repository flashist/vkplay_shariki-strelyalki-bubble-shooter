import { IapAdapter } from "../abstract/IapAdapter";
import { YandexGamesPlatformAdapter } from "./YandexGamesPlatformAdapter";
import { IPurchaseResponseData } from "../abstract/IPurchaseResponseData";
export declare class YandexGamesIapAdapter extends IapAdapter {
    protected platformAdapter: YandexGamesPlatformAdapter;
    protected paymentsSdk: any;
    checkIfIapAvailable(): Promise<boolean>;
    getCatalog(): Promise<any>;
    getPurchases(): Promise<any>;
    purchase(id: string, data?: any): Promise<IPurchaseResponseData>;
    consumePurchase(consumeToken: string): Promise<boolean>;
}
