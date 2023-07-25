import { NgModule } from '@angular/core';
import { OcrValidationsComponent } from './ocr-validations.component';
import { OcrvalidationComponent } from './pics-ocrvalidation/ocrvalidation/ocrvalidation.component';
import { CardModule } from 'primeng/card';
import { PermissionStore } from './pics-ocrvalidation/store/permission.store';
import { DataStoreService } from './pics-ocrvalidation/service/data-store.service';
import { HttpService } from './pics-ocrvalidation/service/http.service';
import { AuthService } from './pics-ocrvalidation/service/auth.service';
import { AuthStore } from './pics-ocrvalidation/auth/auth.store';
import { AlertService } from './pics-ocrvalidation/service/alert.service';
import * as i0 from "@angular/core";
export class OcrValidationsModule {
}
OcrValidationsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
OcrValidationsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationsModule, declarations: [OcrValidationsComponent,
        OcrvalidationComponent], imports: [CardModule], exports: [OcrValidationsComponent] });
OcrValidationsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationsModule, providers: [HttpService, PermissionStore, DataStoreService, AuthService, AuthStore, AlertService], imports: [[
            CardModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        OcrValidationsComponent,
                        OcrvalidationComponent
                    ],
                    imports: [
                        CardModule,
                    ],
                    providers: [HttpService, PermissionStore, DataStoreService, AuthService, AuthStore, AlertService],
                    exports: [
                        OcrValidationsComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLXZhbGlkYXRpb25zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9vY3ItdmFsaWRhdGlvbnMvc3JjL2xpYi9vY3ItdmFsaWRhdGlvbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDcEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRDQUE0QyxDQUFDOztBQWlCMUUsTUFBTSxPQUFPLG9CQUFvQjs7a0hBQXBCLG9CQUFvQjttSEFBcEIsb0JBQW9CLGlCQVo3Qix1QkFBdUI7UUFDdkIsc0JBQXNCLGFBR3RCLFVBQVUsYUFLVix1QkFBdUI7bUhBR2Qsb0JBQW9CLGFBTHJCLENBQUMsV0FBVyxFQUFDLGVBQWUsRUFBQyxnQkFBZ0IsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLFlBQVksQ0FBQyxZQUpsRjtZQUNQLFVBQVU7U0FFWDs0RkFNVSxvQkFBb0I7a0JBZGhDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsVUFBVTtxQkFFWDtvQkFDRCxTQUFTLEVBQUMsQ0FBQyxXQUFXLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsWUFBWSxDQUFDO29CQUMzRixPQUFPLEVBQUU7d0JBQ1AsdUJBQXVCO3FCQUN4QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY3JWYWxpZGF0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vb2NyLXZhbGlkYXRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPY3J2YWxpZGF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9waWNzLW9jcnZhbGlkYXRpb24vb2NydmFsaWRhdGlvbi9vY3J2YWxpZGF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jYXJkJztcbmltcG9ydCB7IFBlcm1pc3Npb25TdG9yZSB9IGZyb20gJy4vcGljcy1vY3J2YWxpZGF0aW9uL3N0b3JlL3Blcm1pc3Npb24uc3RvcmUnO1xuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vcGljcy1vY3J2YWxpZGF0aW9uL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLW9jcnZhbGlkYXRpb24vc2VydmljZS9odHRwLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL3BpY3Mtb2NydmFsaWRhdGlvbi9zZXJ2aWNlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU3RvcmUgfSBmcm9tICcuL3BpY3Mtb2NydmFsaWRhdGlvbi9hdXRoL2F1dGguc3RvcmUnO1xuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLW9jcnZhbGlkYXRpb24vc2VydmljZS9hbGVydC5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBPY3JWYWxpZGF0aW9uc0NvbXBvbmVudCxcbiAgICBPY3J2YWxpZGF0aW9uQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDYXJkTW9kdWxlLFxuICAgIFxuICBdLFxuICBwcm92aWRlcnM6W0h0dHBTZXJ2aWNlLFBlcm1pc3Npb25TdG9yZSxEYXRhU3RvcmVTZXJ2aWNlLEF1dGhTZXJ2aWNlLEF1dGhTdG9yZSxBbGVydFNlcnZpY2VdLFxuICBleHBvcnRzOiBbXG4gICAgT2NyVmFsaWRhdGlvbnNDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBPY3JWYWxpZGF0aW9uc01vZHVsZSB7IH1cbiJdfQ==