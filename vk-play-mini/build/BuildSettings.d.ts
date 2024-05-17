export interface IBuildConfigVO {
    firebase?: {
        config: any;
        googleAnalyticsConfig: any;
    };
    gameAnalytics?: {
        config: {
            gameKey: string;
            secretKey: string;
        };
    };
    yandex?: {
        adv?: {
            desktop?: {
                rewarded?: {
                    blockId: string;
                    type: string;
                    platform: string;
                };
            };
            mobile?: {
                rewarded?: {
                    blockId: string;
                    type: string;
                    platform: string;
                };
            };
        };
    };
}
export declare let CUR_BUILD_CONFIG: IBuildConfigVO;
export declare const isYandexGames: boolean;
export declare const isYanexWebEn: boolean;
export declare const isYanexWebRu: boolean;
export declare const isYanexWeb: boolean;
