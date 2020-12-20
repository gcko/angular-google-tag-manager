import { NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class GoogleTagManagerModule {
    static forRoot(config) {
        return {
            ngModule: GoogleTagManagerModule,
            providers: [{ provide: 'googleTagManagerConfig', useValue: config }],
        };
    }
}
/** @nocollapse */ GoogleTagManagerModule.ɵmod = i0.ɵɵdefineNgModule({ type: GoogleTagManagerModule });
/** @nocollapse */ GoogleTagManagerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GoogleTagManagerModule_Factory(t) { return new (t || GoogleTagManagerModule)(); } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GoogleTagManagerModule, [{
        type: NgModule
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1nb29nbGUtdGFnLW1hbmFnZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZ29vZ2xlLXRhZy1tYW5hZ2VyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLWdvb2dsZS10YWctbWFuYWdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7O0FBSTlELE1BQU0sT0FBTyxzQkFBc0I7SUFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FDbkIsTUFBOEI7UUFFOUIsT0FBTztZQUNMLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQ3JFLENBQUM7SUFDSixDQUFDOzs2RUFSVSxzQkFBc0I7OElBQXRCLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBRGxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR29vZ2xlVGFnTWFuYWdlckNvbmZpZyB9IGZyb20gJy4vZ29vZ2xlLXRhZy1tYW5hZ2VyLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlVGFnTWFuYWdlck1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcbiAgICBjb25maWc6IEdvb2dsZVRhZ01hbmFnZXJDb25maWdcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxHb29nbGVUYWdNYW5hZ2VyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBHb29nbGVUYWdNYW5hZ2VyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiAnZ29vZ2xlVGFnTWFuYWdlckNvbmZpZycsIHVzZVZhbHVlOiBjb25maWcgfV0sXG4gICAgfTtcbiAgfVxufVxuIl19