import { ICharacterVO } from "./ICharacterVO";
export declare const GameCharactersModuleInitialState: {
    gameCharacters: {
        characters: ICharacterVO[];
    };
};
export type GameCharactersModuleState = typeof GameCharactersModuleInitialState;
