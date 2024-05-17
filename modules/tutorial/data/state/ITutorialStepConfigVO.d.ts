import { Align, VAlign } from "@flashist/flibs";
export interface ITutorialStepConfigVO {
    id: string;
    viewId: string;
    completeSaveStepId?: string;
    textId?: string;
    requiredCompleteStepIds?: string[];
    blocking?: boolean;
    blockingHole?: boolean;
    align?: Align;
    valign?: VAlign;
    labelAlign?: Align;
    labelValign?: VAlign;
    minTimeToDisplayMs?: number;
    completeByStageDown?: boolean;
    globalEventToComplete?: string;
    startAnalyticsEvent?: string;
    completeAnalyticsEvent?: string;
}
