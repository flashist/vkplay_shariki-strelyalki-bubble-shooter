import { BaseAppManager } from "@flashist/appframework";
export declare class IframeAppCommunicationManager extends BaseAppManager {
    protected messageIdToCallbackMap: {
        [messageId: string]: IIframeAppCommunicationMessageCallback;
    };
    protected addListeners(): void;
    sendMessageToIframe(messageId: string, data?: any): void;
    addMessageCallback(messageId: string, callback: IIframeAppCommunicationMessageCallback): void;
    removeMessageCallback(messageId: string): void;
}
export interface IIframeAppCommunicationMessageVO<DataType extends any = null> {
    messageId: string;
    data?: DataType;
}
export interface IIframeAppCommunicationMessageProgressData {
    progress: number;
    total: number;
    loadGroup?: string;
}
export interface IIframeAppCommunicationMessageAnalyticsData {
    analyticEventId: string;
    value?: number;
}
export interface IIframeAppCommunicationMessageCallback {
    (messageData: IIframeAppCommunicationMessageVO): any;
}
export interface IWaitApproveMessageDataType {
    approveId: string;
}
export interface ISetTotalScoreMessageDataType {
    score: number;
}
