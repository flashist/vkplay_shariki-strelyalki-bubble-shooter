import { Facade } from "@flashist/appframework/facade/Facade";
import { Point } from "@flashist/flibs";
export declare class GameFacade extends Facade {
    protected iframeParentElement: Node;
    protected iframeElement: HTMLElement;
    protected iframeBaseSize: Point;
    protected iframeParentCSS: CSSStyleDeclaration;
    protected iframeCSS: CSSStyleDeclaration;
    protected askToReviewMinTimeout: number;
    protected wasAskedToReview: boolean;
    protected askToInstallMinTimeout: number;
    protected wasAskedToInstall: boolean;
    protected addModules(): void;
    protected initApp(): Promise<void>;
    protected activateIframeApp(): Promise<void>;
    protected addListeners(): void;
    protected onPreloaderLoadingComplete(): void;
    protected onWindowResize(): void;
}
