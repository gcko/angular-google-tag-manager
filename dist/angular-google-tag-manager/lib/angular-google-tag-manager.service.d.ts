import { GoogleTagManagerConfig } from './google-tag-manager-config';
import * as i0 from "@angular/core";
export declare class GoogleTagManagerService {
    config: GoogleTagManagerConfig;
    googleTagManagerId: string;
    googleTagManagerAuth: string;
    googleTagManagerPreview: string;
    private isLoaded;
    private browserGlobals;
    constructor(config: GoogleTagManagerConfig, googleTagManagerId: string, googleTagManagerAuth: string, googleTagManagerPreview: string);
    getDataLayer(): any[];
    private pushOnDataLayer;
    addGtmToDom(): Promise<boolean>;
    pushTag(item: object): Promise<void>;
    private applyGtmQueryParams;
    static ɵfac: i0.ɵɵFactoryDef<GoogleTagManagerService, [{ optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDef<GoogleTagManagerService>;
}
//# sourceMappingURL=angular-google-tag-manager.service.d.ts.map