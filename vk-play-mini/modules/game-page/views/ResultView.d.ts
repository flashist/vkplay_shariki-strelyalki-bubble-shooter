import { BaseAppView, SimpleButtonView } from "@flashist/appframework";
import { FLabel, Graphics, Sprite, Texture } from "@flashist/flibs";
export declare class ResultView extends BaseAppView {
    infoLabel: FLabel;
    imageBg: Graphics;
    image: Sprite;
    protected imageMask: Graphics;
    restartBtn: SimpleButtonView;
    protected construction(...args: any[]): void;
    setPhotoTexture(texture: Texture): void;
    protected arrange(): void;
}
