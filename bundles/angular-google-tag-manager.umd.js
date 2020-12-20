(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('angular-google-tag-manager', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['angular-google-tag-manager'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var GoogleTagManagerService = /** @class */ (function () {
        function GoogleTagManagerService(config, googleTagManagerId, googleTagManagerAuth, googleTagManagerPreview) {
            if (config === void 0) { config = { id: null }; }
            this.config = config;
            this.googleTagManagerId = googleTagManagerId;
            this.googleTagManagerAuth = googleTagManagerAuth;
            this.googleTagManagerPreview = googleTagManagerPreview;
            this.isLoaded = false;
            this.browserGlobals = {
                windowRef: function () {
                    return window;
                },
                documentRef: function () {
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
        GoogleTagManagerService.prototype.getDataLayer = function () {
            var window = this.browserGlobals.windowRef();
            window.dataLayer = window.dataLayer || [];
            return window.dataLayer;
        };
        GoogleTagManagerService.prototype.pushOnDataLayer = function (obj) {
            var dataLayer = this.getDataLayer();
            dataLayer.push(obj);
        };
        GoogleTagManagerService.prototype.addGtmToDom = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (_this.isLoaded) {
                    return resolve(_this.isLoaded);
                }
                var doc = _this.browserGlobals.documentRef();
                _this.pushOnDataLayer({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js',
                });
                var gtmScript = doc.createElement('script');
                gtmScript.id = 'GTMscript';
                gtmScript.async = true;
                gtmScript.src = _this.applyGtmQueryParams('https://www.googletagmanager.com/gtm.js');
                gtmScript.addEventListener('load', function () {
                    return resolve(_this.isLoaded = true);
                });
                gtmScript.addEventListener('error', function () {
                    return reject(false);
                });
                doc.head.insertBefore(gtmScript, doc.head.firstChild);
            });
        };
        GoogleTagManagerService.prototype.pushTag = function (item) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (!_this.isLoaded) {
                    _this.addGtmToDom().then(function () {
                        _this.pushOnDataLayer(item);
                        return resolve();
                    }).catch(function () { return reject(); });
                }
                _this.pushOnDataLayer(item);
                return resolve();
            });
        };
        GoogleTagManagerService.prototype.applyGtmQueryParams = function (url) {
            var _this = this;
            if (url.indexOf('?') === -1) {
                url += '?';
            }
            return (url +
                Object.keys(this.config)
                    .filter(function (k) { return _this.config[k]; })
                    .map(function (k) { return k + "=" + _this.config[k]; })
                    .join('&'));
        };
        return GoogleTagManagerService;
    }());
    /** @nocollapse */ GoogleTagManagerService.ɵfac = function GoogleTagManagerService_Factory(t) { return new (t || GoogleTagManagerService)(i0.ɵɵinject('googleTagManagerConfig', 8), i0.ɵɵinject('googleTagManagerId', 8), i0.ɵɵinject('googleTagManagerAuth', 8), i0.ɵɵinject('googleTagManagerPreview', 8)); };
    /** @nocollapse */ GoogleTagManagerService.ɵprov = i0.ɵɵdefineInjectable({ token: GoogleTagManagerService, factory: GoogleTagManagerService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GoogleTagManagerService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: ['googleTagManagerConfig']
                        }] }, { type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: ['googleTagManagerId']
                        }] }, { type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: ['googleTagManagerAuth']
                        }] }, { type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: ['googleTagManagerPreview']
                        }] }];
        }, null);
    })();

    var GoogleTagManagerModule = /** @class */ (function () {
        function GoogleTagManagerModule() {
        }
        GoogleTagManagerModule.forRoot = function (config) {
            return {
                ngModule: GoogleTagManagerModule,
                providers: [{ provide: 'googleTagManagerConfig', useValue: config }],
            };
        };
        return GoogleTagManagerModule;
    }());
    /** @nocollapse */ GoogleTagManagerModule.ɵmod = i0.ɵɵdefineNgModule({ type: GoogleTagManagerModule });
    /** @nocollapse */ GoogleTagManagerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GoogleTagManagerModule_Factory(t) { return new (t || GoogleTagManagerModule)(); } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(GoogleTagManagerModule, [{
                type: i0.NgModule
            }], null, null);
    })();

    /*
     * Public API Surface of angular-google-tag-manager
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.GoogleTagManagerModule = GoogleTagManagerModule;
    exports.GoogleTagManagerService = GoogleTagManagerService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-google-tag-manager.umd.js.map
