import { BaseAppView, SimpleButtonView } from "@flashist/appframework";
import { FLabel, Graphics, Sprite, Texture } from "@flashist/flibs";
export declare class UploadView extends BaseAppView {
    uploadTitleLabel: FLabel;
    processTitleLabel: FLabel;
    photoPlaceholderBg: Graphics;
    photoPlaceholderIcon: FLabel;
    photoErrorLabel: FLabel;
    photoProcessProgressLabel: FLabel;
    photoImage: Sprite;
    protected photoMask: Graphics;
    uploadBtn: SimpleButtonView;
    protected construction(...args: any[]): void;
    setPhotoTexture(texture: Texture): void;
    protected arrange(): void;
}
