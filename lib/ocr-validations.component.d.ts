import { OnInit } from '@angular/core';
import { RBACINFO } from './pics-ocrvalidation/@core/ocr-validation-url.config';
import { PermissionStore } from './pics-ocrvalidation/store/permission.store';
import { DataStoreService } from './pics-ocrvalidation/service/data-store.service';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class OcrValidationsComponent implements OnInit {
    private permissionStore;
    private _storeservice;
    RBACORG?: RBACINFO;
    PERMISSION?: any;
    ocrEvent: Observable<any>;
    constructor(permissionStore: PermissionStore, _storeservice: DataStoreService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OcrValidationsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OcrValidationsComponent, "lib-ocr-validations", never, { "RBACORG": "RBACORG"; "PERMISSION": "PERMISSION"; "ocrEvent": "ocrEvent"; }, {}, never, never>;
}
