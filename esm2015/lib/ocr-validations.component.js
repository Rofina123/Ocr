import { Component, Input } from '@angular/core';
import { RBACINFO } from './pics-ocrvalidation/@core/ocr-validation-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-ocrvalidation/store/permission.store";
import * as i2 from "./pics-ocrvalidation/service/data-store.service";
import * as i3 from "./pics-ocrvalidation/ocrvalidation/ocrvalidation.component";
export class OcrValidationsComponent {
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
    }
    ngOnInit() {
        this.ocrEvent.subscribe((val) => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
        });
    }
}
OcrValidationsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationsComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
OcrValidationsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: OcrValidationsComponent, selector: "lib-ocr-validations", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", ocrEvent: "ocrEvent" }, ngImport: i0, template: `
   <lib-ocrvalidation></lib-ocrvalidation>
  `, isInline: true, components: [{ type: i3.OcrvalidationComponent, selector: "lib-ocrvalidation", inputs: ["formResponseData", "currenttemplateResult", "submitionData"], outputs: ["ocrResponse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-ocr-validations',
                    template: `
   <lib-ocrvalidation></lib-ocrvalidation>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.PermissionStore }, { type: i2.DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], ocrEvent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLXZhbGlkYXRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9vY3ItdmFsaWRhdGlvbnMvc3JjL2xpYi9vY3ItdmFsaWRhdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7Ozs7QUFhaEYsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQyxZQUFxQixlQUFnQyxFQUMzQyxhQUErQjtRQURwQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDM0Msa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBSnpCLFlBQU8sR0FBYyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBTWxELENBQUM7SUFFSixRQUFRO1FBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7cUhBaEJVLHVCQUF1Qjt5R0FBdkIsdUJBQXVCLDJJQU54Qjs7R0FFVDs0RkFJVSx1QkFBdUI7a0JBUm5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFOztHQUVUO29CQUNELE1BQU0sRUFBRSxFQUNQO2lCQUNGO3FJQUVpQixPQUFPO3NCQUF0QixLQUFLO2dCQUNVLFVBQVU7c0JBQXpCLEtBQUs7Z0JBQ1UsUUFBUTtzQkFBdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUkJBQ0lORk8gfSBmcm9tICcuL3BpY3Mtb2NydmFsaWRhdGlvbi9AY29yZS9vY3ItdmFsaWRhdGlvbi11cmwuY29uZmlnJztcbmltcG9ydCB7IFBlcm1pc3Npb25TdG9yZSB9IGZyb20gJy4vcGljcy1vY3J2YWxpZGF0aW9uL3N0b3JlL3Blcm1pc3Npb24uc3RvcmUnO1xuaW1wb3J0IHsgRGF0YVN0b3JlU2VydmljZSB9IGZyb20gJy4vcGljcy1vY3J2YWxpZGF0aW9uL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9jci12YWxpZGF0aW9ucycsXG4gIHRlbXBsYXRlOiBgXG4gICA8bGliLW9jcnZhbGlkYXRpb24+PC9saWItb2NydmFsaWRhdGlvbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgT2NyVmFsaWRhdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwdWJsaWMgUkJBQ09SRz86IFJCQUNJTkZPID0gbmV3IFJCQUNJTkZPKCk7XG4gIEBJbnB1dCgpIHB1YmxpYyBQRVJNSVNTSU9OPzogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgb2NyRXZlbnQhOiBPYnNlcnZhYmxlPGFueT47XG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIHBlcm1pc3Npb25TdG9yZTogUGVybWlzc2lvblN0b3JlLFxuICAgIHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkgeyBcblxuICAgIH1cblxuIG5nT25Jbml0KCkge1xuICAgIHRoaXMub2NyRXZlbnQuc3Vic2NyaWJlKCh2YWw6IGFueSkgPT4ge1xuICAgICAgdGhpcy5SQkFDT1JHID0gdmFsLlJCQUNPUkc7XG4gICAgICB0aGlzLlBFUk1JU1NJT04gPSB2YWwuUEVSTUlTU0lPTjtcbiAgICAgIHRoaXMuX3N0b3Jlc2VydmljZS5zZXREYXRhKCdSQkFDT1JHJywgdGhpcy5SQkFDT1JHKTtcbiAgICAgIHRoaXMucGVybWlzc2lvblN0b3JlLnNldFN0b3JlKHRoaXMuUEVSTUlTU0lPTik7XG4gICAgfSlcbiAgfVxuXG59XG4iXX0=