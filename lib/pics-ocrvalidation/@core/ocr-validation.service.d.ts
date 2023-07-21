import { HttpService } from '../service/http.service';
import * as i0 from "@angular/core";
export declare class OcrValidationService {
    private httpService;
    constructor(httpService: HttpService);
    getUpload(obj: any): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OcrValidationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OcrValidationService>;
}
