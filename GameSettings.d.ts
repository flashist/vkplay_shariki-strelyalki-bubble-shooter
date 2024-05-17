import { Rectangle } from "@flashist/flibs";
export declare const GameSettings: {
    sizeArea: Rectangle;
    colors: {
        white: number;
        darkGrey: number;
        red: number;
        green: number;
        black: number;
        lightBlue: number;
        blue: number;
        grey: number;
        darkerGrey: number;
        darkRed: number;
    };
    fonts: {
        mainFont: string;
    };
    grid: {
        width: number;
        height: number;
    };
    gameplay: {
        availableLettersCount: number;
        levelTime: number;
        cheatMoreTime: number;
    };
};
