import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataStoreService } from './pics-ocrvalidation/service/data-store.service';
import { PermissionStore } from './pics-ocrvalidation/store/permission.store';
import { RBACINFO } from './pics-ocrvalidation/@core/ocr-validation-url.config';
import * as i0 from "@angular/core";
export declare class OcrValidationComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    ocrEvent: Observable<any>;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OcrValidationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OcrValidationComponent, "ocr-validation", never, { "RBACORG": "RBACORG"; "PERMISSION": "PERMISSION"; "ocrEvent": "ocrEvent"; }, {}, never, never>;
}
