import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Optional, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule } from '@angular/core';

class GoogleTagManagerService {
    constructor(config = { id: null }, googleTagManagerId, googleTagManagerAuth, googleTagManagerPreview) {
        this.config = config;
        this.googleTagManagerId = googleTagManagerId;
        this.googleTagManagerAuth = googleTagManagerAuth;
        this.googleTagManagerPreview = googleTagManagerPreview;
        this.isLoaded = false;
        this.browserGlobals = {
            windowRef() {
                return window;
            },
            documentRef() {
                return document;
            },
        };
        if (this.config == null) {
            this.config = { id: null };
        }
        this.config = Object.assign(Object.assign({}, this.config), { id: googleTagManagerId || this.config.id, gtm_auth: googleTagManagerAuth || this.config.gtm_auth, gtm_preview: googleTagManagerPreview || this.config.gtm_preview });
        if (this.config.id == null) {
            throw new Error('Google tag manager ID not provided.');
        }
    }
    getDataLayer() {
        const window = this.browserGlobals.windowRef();
        window.dataLayer = window.dataLayer || [];
        return window.dataLayer;
    }
    pushOnDataLayer(obj) {
        const dataLayer = this.getDataLayer();
        dataLayer.push(obj);
    }
    addGtmToDom() {
        return new Promise((resolve, reject) => {
            if (this.isLoaded) {
                return resolve(this.isLoaded);
            }
            const doc = this.browserGlobals.documentRef();
            this.pushOnDataLayer({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js',
            });
            const gtmScript = doc.createElement('script');
            gtmScript.id = 'GTMscript';
            gtmScript.async = true;
            gtmScript.src = this.applyGtmQueryParams('https://www.googletagmanager.com/gtm.js');
            gtmScript.addEventListener('load', () => {
                return resolve(this.isLoaded = true);
            });
            gtmScript.addEventListener('error', () => {
                return reject(false);
            });
            doc.head.insertBefore(gtmScript, doc.head.firstChild);
        });
    }
    pushTag(item) {
        return new Promise((resolve, reject) => {
            if (!this.isLoaded) {
                this.addGtmToDom().then(() => {
                    this.pushOnDataLayer(item);
                    return resolve();
                }).catch(() => reject());
            }
            this.pushOnDataLayer(item);
            return resolve();
        });
    }
    applyGtmQueryParams(url) {
        if (url.indexOf('?') === -1) {
            url += '?';
        }
        return (url +
            Object.keys(this.config)
                .filter((k) => this.config[k])
                .map((k) => `${k}=${this.config[k]}`)
                .join('&'));
    }
}
/** @nocollapse */ GoogleTagManagerService.ɵfac = function GoogleTagManagerService_Factory(t) { return new (t || GoogleTagManagerService)(ɵɵinject('googleTagManagerConfig', 8), ɵɵinject('googleTagManagerId', 8), ɵɵinject('googleTagManagerAuth', 8), ɵɵinject('googleTagManagerPreview', 8)); };
/** @nocollapse */ GoogleTagManagerService.ɵprov = ɵɵdefineInjectable({ token: GoogleTagManagerService, factory: GoogleTagManagerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GoogleTagManagerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['googleTagManagerConfig']
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['googleTagManagerId']
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['googleTagManagerAuth']
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: ['googleTagManagerPreview']
            }] }]; }, null); })();

class GoogleTagManagerModule {
    static forRoot(config) {
        return {
            ngModule: GoogleTagManagerModule,
            providers: [{ provide: 'googleTagManagerConfig', useValue: config }],
        };
    }
}
/** @nocollapse */ GoogleTagManagerModule.ɵmod = ɵɵdefineNgModule({ type: GoogleTagManagerModule });
/** @nocollapse */ GoogleTagManagerModule.ɵinj = ɵɵdefineInjector({ factory: function GoogleTagManagerModule_Factory(t) { return new (t || GoogleTagManagerModule)(); } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GoogleTagManagerModule, [{
        type: NgModule
    }], null, null); })();

/*
 * Public API Surface of angular-google-tag-manager
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GoogleTagManagerModule, GoogleTagManagerService };
//# sourceMappingURL=angular-google-tag-manager.js.map
