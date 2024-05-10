export interface IMessageVO {
    id: string;
    isSender?: boolean;
    nextMessageId?: string;
    replyMessageIds?: string[];
    isFinal?: boolean;
    isFail?: boolean;
}
