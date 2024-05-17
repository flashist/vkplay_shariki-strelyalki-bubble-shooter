import { BaseAppManager } from "@flashist/appframework";
import { IPurchaseResponseData } from "./IPurchaseResponseData";
export declare class IapAdapter extends BaseAppManager {
    checkIfIapAvailable(): Promise<boolean>;
    getCatalog(): Promise<any>;
    getPurchases(): Promise<any>;
    purchase(id: string, data?: any): Promise<IPurchaseResponseData>;
    consumePurchase(consumeToken: string): Promise<boolean>;
}
