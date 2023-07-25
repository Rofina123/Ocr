import { Injectable } from '@angular/core';
import { OcrValidationServiceConfig } from './ocr-validation-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../service/http.service";
export class OcrValidationService {
    constructor(httpService) {
        this.httpService = httpService;
        console.log('log');
    }
    getUpload(obj) {
        return this.httpService.post(OcrValidationServiceConfig.EndPoint.OCRValidate.GetNewOcrData, JSON.parse(obj));
    }
}
OcrValidationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationService, deps: [{ token: i1.HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
OcrValidationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLXZhbGlkYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9vY3ItdmFsaWRhdGlvbnMvc3JjL2xpYi9waWNzLW9jcnZhbGlkYXRpb24vQGNvcmUvb2NyLXZhbGlkYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7QUFLekUsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxTQUFTLENBQUMsR0FBTztRQUNmLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9HLENBQUM7O2tIQVBVLG9CQUFvQjtzSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07NEZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IE9jclZhbGlkYXRpb25TZXJ2aWNlQ29uZmlnIH0gZnJvbSAnLi9vY3ItdmFsaWRhdGlvbi11cmwuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE9jclZhbGlkYXRpb25TZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2xvZycpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXBsb2FkKG9iajphbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoT2NyVmFsaWRhdGlvblNlcnZpY2VDb25maWcuRW5kUG9pbnQuT0NSVmFsaWRhdGUuR2V0TmV3T2NyRGF0YSwgSlNPTi5wYXJzZShvYmopKTtcclxuICB9XHJcbn1cclxuIl19