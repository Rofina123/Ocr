import { Injectable } from '@angular/core';
import { NavigationStart } from '@angular/router';
import { AlertType } from '../common/common.entity';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new Subject();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }
    error(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }
    info(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }
    warn(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }
    alert(type, message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    }
    clear() {
        // clear alerts
        this.subject.next();
    }
}
AlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9vY3ItdmFsaWRhdGlvbnMvc3JjL2xpYi9waWNzLW9jcnZhbGlkYXRpb24vc2VydmljZS9hbGVydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBUyxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFHM0MsTUFBTSxPQUFPLFlBQVk7SUFJdkIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIMUIsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFTLENBQUM7UUFDL0IseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBR25DLGtGQUFrRjtRQUNsRixNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM5QixJQUFJLEtBQUssWUFBWSxlQUFlLEVBQUU7Z0JBQ3BDLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO29CQUM3QixzQ0FBc0M7b0JBQ3RDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7aUJBQ25DO3FCQUFNO29CQUNMLHVCQUF1QjtvQkFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNkO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBZSxFQUFFLG9CQUFvQixHQUFHLEtBQUs7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxLQUFLLENBQUMsT0FBZSxFQUFFLG9CQUFvQixHQUFHLEtBQUs7UUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFJLENBQUMsT0FBZSxFQUFFLG9CQUFvQixHQUFHLEtBQUs7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxJQUFJLENBQUMsT0FBZSxFQUFFLG9CQUFvQixHQUFHLEtBQUs7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxLQUFLLENBQUMsSUFBZSxFQUFFLE9BQWUsRUFBRSxvQkFBb0IsR0FBRyxLQUFLO1FBQ2xFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELEtBQUs7UUFDSCxlQUFlO1FBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzswR0EvQ1UsWUFBWTs4R0FBWixZQUFZOzRGQUFaLFlBQVk7a0JBRHhCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25TdGFydCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWxlcnQsIEFsZXJ0VHlwZSB9IGZyb20gJy4uL2NvbW1vbi9jb21tb24uZW50aXR5JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWxlcnRTZXJ2aWNlIHtcclxuICBwcml2YXRlIHN1YmplY3QgPSBuZXcgU3ViamVjdDxBbGVydD4oKTtcclxuICBwcml2YXRlIGtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIC8vIGNsZWFyIGFsZXJ0IG1lc3NhZ2VzIG9uIHJvdXRlIGNoYW5nZSB1bmxlc3MgJ2tlZXBBZnRlclJvdXRlQ2hhbmdlJyBmbGFnIGlzIHRydWVcclxuICAgIHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2VlcEFmdGVyUm91dGVDaGFuZ2UpIHtcclxuICAgICAgICAgIC8vIG9ubHkga2VlcCBmb3IgYSBzaW5nbGUgcm91dGUgY2hhbmdlXHJcbiAgICAgICAgICB0aGlzLmtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGNsZWFyIGFsZXJ0IG1lc3NhZ2VzXHJcbiAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEFsZXJ0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgc3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2UpIHtcclxuICAgIHRoaXMuYWxlcnQoQWxlcnRUeXBlLlN1Y2Nlc3MsIG1lc3NhZ2UsIGtlZXBBZnRlclJvdXRlQ2hhbmdlKTtcclxuICB9XHJcblxyXG4gIGVycm9yKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5hbGVydChBbGVydFR5cGUuRXJyb3IsIG1lc3NhZ2UsIGtlZXBBZnRlclJvdXRlQ2hhbmdlKTtcclxuICB9XHJcblxyXG4gIGluZm8obWVzc2FnZTogc3RyaW5nLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSA9IGZhbHNlKSB7XHJcbiAgICB0aGlzLmFsZXJ0KEFsZXJ0VHlwZS5JbmZvLCBtZXNzYWdlLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSk7XHJcbiAgfVxyXG5cclxuICB3YXJuKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZSkge1xyXG4gICAgdGhpcy5hbGVydChBbGVydFR5cGUuV2FybmluZywgbWVzc2FnZSwga2VlcEFmdGVyUm91dGVDaGFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgYWxlcnQodHlwZTogQWxlcnRUeXBlLCBtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2UpIHtcclxuICAgIHRoaXMua2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZTtcclxuICAgIHRoaXMuc3ViamVjdC5uZXh0KDxBbGVydD57IHR5cGU6IHR5cGUsIG1lc3NhZ2U6IG1lc3NhZ2UgfSk7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIC8vIGNsZWFyIGFsZXJ0c1xyXG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoKTtcclxuICB9XHJcbn1cclxuIl19