import { Router } from '@angular/router';
import { AlertType } from '../common/common.entity';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class AlertService {
    private router;
    private subject;
    private keepAfterRouteChange;
    constructor(router: Router);
    getAlert(): Observable<any>;
    success(message: string, keepAfterRouteChange?: boolean): void;
    error(message: string, keepAfterRouteChange?: boolean): void;
    info(message: string, keepAfterRouteChange?: boolean): void;
    warn(message: string, keepAfterRouteChange?: boolean): void;
    alert(type: AlertType, message: string, keepAfterRouteChange?: boolean): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AlertService>;
}
