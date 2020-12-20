import { Inject, Injectable, Optional } from '@angular/core';
import * as i0 from "@angular/core";
export class GoogleTagManagerService {
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
/** @nocollapse */ GoogleTagManagerService.ɵfac = function GoogleTagManagerService_Factory(t) { return new (t || GoogleTagManagerService)(i0.ɵɵinject('googleTagManagerConfig', 8), i0.ɵɵinject('googleTagManagerId', 8), i0.ɵɵinject('googleTagManagerAuth', 8), i0.ɵɵinject('googleTagManagerPreview', 8)); };
/** @nocollapse */ GoogleTagManagerService.ɵprov = i0.ɵɵdefineInjectable({ token: GoogleTagManagerService, factory: GoogleTagManagerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GoogleTagManagerService, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1nb29nbGUtdGFnLW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWdvb2dsZS10YWctbWFuYWdlci9zcmMvIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1nb29nbGUtdGFnLW1hbmFnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTdELE1BQU0sT0FBTyx1QkFBdUI7SUFZbEMsWUFHUyxTQUFpQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFDSCxrQkFBMEIsRUFHcEUsb0JBQTRCLEVBRzVCLHVCQUErQjtRQVAvQixXQUFNLEdBQU4sTUFBTSxDQUF1QztRQUNILHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBUTtRQUdwRSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQVE7UUFHNUIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFRO1FBckJoQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLG1CQUFjLEdBQUc7WUFDdkIsU0FBUztnQkFDUCxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDO1lBQ0QsV0FBVztnQkFDVCxPQUFPLFFBQVEsQ0FBQztZQUNsQixDQUFDO1NBQ0YsQ0FBQztRQWNBLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUM1QjtRQUVELElBQUksQ0FBQyxNQUFNLG1DQUNOLElBQUksQ0FBQyxNQUFNLEtBQ2QsRUFBRSxFQUFFLGtCQUFrQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUN4QyxRQUFRLEVBQUUsb0JBQW9CLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQ3RELFdBQVcsRUFBRSx1QkFBdUIsSUFB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RCxPQUFPLENBQ0wsR0FBRztZQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztpQkFDckIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3QixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztpQkFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUNiLENBQUM7SUFDSixDQUFDOztpSEF0R1UsdUJBQXVCLGNBY3hCLHdCQUF3QixrQkFFWixvQkFBb0Isa0JBRWhDLHNCQUFzQixrQkFHdEIseUJBQXlCO2tGQXJCeEIsdUJBQXVCLFdBQXZCLHVCQUF1QixtQkFGdEIsTUFBTTtrREFFUCx1QkFBdUI7Y0FIbkMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COztzQkFjSSxRQUFROztzQkFDUixNQUFNO3VCQUFDLHdCQUF3Qjs7c0JBRS9CLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsb0JBQW9COztzQkFDdkMsUUFBUTs7c0JBQ1IsTUFBTTt1QkFBQyxzQkFBc0I7O3NCQUU3QixRQUFROztzQkFDUixNQUFNO3VCQUFDLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdvb2dsZVRhZ01hbmFnZXJDb25maWcgfSBmcm9tICcuL2dvb2dsZS10YWctbWFuYWdlci1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlVGFnTWFuYWdlclNlcnZpY2Uge1xuICBwcml2YXRlIGlzTG9hZGVkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBicm93c2VyR2xvYmFscyA9IHtcbiAgICB3aW5kb3dSZWYoKTogYW55IHtcbiAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfSxcbiAgICBkb2N1bWVudFJlZigpOiBhbnkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH0sXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KCdnb29nbGVUYWdNYW5hZ2VyQ29uZmlnJylcbiAgICBwdWJsaWMgY29uZmlnOiBHb29nbGVUYWdNYW5hZ2VyQ29uZmlnID0geyBpZDogbnVsbCB9LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoJ2dvb2dsZVRhZ01hbmFnZXJJZCcpIHB1YmxpYyBnb29nbGVUYWdNYW5hZ2VySWQ6IHN0cmluZyxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoJ2dvb2dsZVRhZ01hbmFnZXJBdXRoJylcbiAgICBwdWJsaWMgZ29vZ2xlVGFnTWFuYWdlckF1dGg6IHN0cmluZyxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoJ2dvb2dsZVRhZ01hbmFnZXJQcmV2aWV3JylcbiAgICBwdWJsaWMgZ29vZ2xlVGFnTWFuYWdlclByZXZpZXc6IHN0cmluZ1xuICApIHtcbiAgICBpZiAodGhpcy5jb25maWcgPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb25maWcgPSB7IGlkOiBudWxsIH07XG4gICAgfVxuXG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAuLi50aGlzLmNvbmZpZyxcbiAgICAgIGlkOiBnb29nbGVUYWdNYW5hZ2VySWQgfHwgdGhpcy5jb25maWcuaWQsXG4gICAgICBndG1fYXV0aDogZ29vZ2xlVGFnTWFuYWdlckF1dGggfHwgdGhpcy5jb25maWcuZ3RtX2F1dGgsXG4gICAgICBndG1fcHJldmlldzogZ29vZ2xlVGFnTWFuYWdlclByZXZpZXcgfHwgdGhpcy5jb25maWcuZ3RtX3ByZXZpZXcsXG4gICAgfTtcbiAgICBpZiAodGhpcy5jb25maWcuaWQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHb29nbGUgdGFnIG1hbmFnZXIgSUQgbm90IHByb3ZpZGVkLicpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXREYXRhTGF5ZXIoKTogYW55W10ge1xuICAgIGNvbnN0IHdpbmRvdyA9IHRoaXMuYnJvd3Nlckdsb2JhbHMud2luZG93UmVmKCk7XG4gICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgcmV0dXJuIHdpbmRvdy5kYXRhTGF5ZXI7XG4gIH1cblxuICBwcml2YXRlIHB1c2hPbkRhdGFMYXllcihvYmo6IG9iamVjdCk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGFMYXllciA9IHRoaXMuZ2V0RGF0YUxheWVyKCk7XG4gICAgZGF0YUxheWVyLnB1c2gob2JqKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRHdG1Ub0RvbSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNMb2FkZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodGhpcy5pc0xvYWRlZCk7XG4gICAgICB9XG4gICAgICBjb25zdCBkb2MgPSB0aGlzLmJyb3dzZXJHbG9iYWxzLmRvY3VtZW50UmVmKCk7XG4gICAgICB0aGlzLnB1c2hPbkRhdGFMYXllcih7XG4gICAgICAgICdndG0uc3RhcnQnOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgZXZlbnQ6ICdndG0uanMnLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGd0bVNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIGd0bVNjcmlwdC5pZCA9ICdHVE1zY3JpcHQnO1xuICAgICAgZ3RtU2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgIGd0bVNjcmlwdC5zcmMgPSB0aGlzLmFwcGx5R3RtUXVlcnlQYXJhbXMoXG4gICAgICAgICdodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanMnXG4gICAgICApO1xuICAgICAgZ3RtU2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHRoaXMuaXNMb2FkZWQgPSB0cnVlKTtcbiAgICAgIH0pO1xuICAgICAgZ3RtU2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgZG9jLmhlYWQuaW5zZXJ0QmVmb3JlKGd0bVNjcmlwdCwgZG9jLmhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcHVzaFRhZyhpdGVtOiBvYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzTG9hZGVkKSB7XG4gICAgICAgIHRoaXMuYWRkR3RtVG9Eb20oKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnB1c2hPbkRhdGFMYXllcihpdGVtKTtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiByZWplY3QoKSk7XG4gICAgICB9XG4gICAgICB0aGlzLnB1c2hPbkRhdGFMYXllcihpdGVtKTtcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5R3RtUXVlcnlQYXJhbXModXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh1cmwuaW5kZXhPZignPycpID09PSAtMSkge1xuICAgICAgdXJsICs9ICc/JztcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgdXJsICtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29uZmlnKVxuICAgICAgICAuZmlsdGVyKChrKSA9PiB0aGlzLmNvbmZpZ1trXSlcbiAgICAgICAgLm1hcCgoaykgPT4gYCR7a309JHt0aGlzLmNvbmZpZ1trXX1gKVxuICAgICAgICAuam9pbignJicpXG4gICAgKTtcbiAgfVxufVxuIl19