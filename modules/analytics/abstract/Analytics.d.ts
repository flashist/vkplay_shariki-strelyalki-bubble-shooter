export declare class Analytics {
    private static isInitialized;
    private static eventPropNamesPrefix;
    static init(analyticsConfig: any, userProps?: Record<string, any>, eventPropNamesPrefix?: string): void;
    static logEvent(eventName: string, value?: number): void;
}
