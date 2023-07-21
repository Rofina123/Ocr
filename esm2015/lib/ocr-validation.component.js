import { Component, Input } from '@angular/core';
import { RBACINFO } from './pics-ocrvalidation/@core/ocr-validation-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-ocrvalidation/store/permission.store";
import * as i2 from "./pics-ocrvalidation/service/data-store.service";
import * as i3 from "./pics-ocrvalidation/ocrvalidation/ocrvalidation.component";
export class OcrValidationComponent {
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
OcrValidationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
OcrValidationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: OcrValidationComponent, selector: "ocr-validation", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", ocrEvent: "ocrEvent" }, ngImport: i0, template: `
    <lib-ocrvalidation></lib-ocrvalidation>
  `, isInline: true, components: [{ type: i3.OcrvalidationComponent, selector: "lib-ocrvalidation", inputs: ["formResponseData", "currenttemplateResult", "submitionData"], outputs: ["ocrResponse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ocr-validation',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NyLXZhbGlkYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL29jci12YWxpZGF0aW9uL3NyYy9saWIvb2NyLXZhbGlkYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSXpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7Ozs7QUFXaEYsTUFBTSxPQUFPLHNCQUFzQjtJQUlqQyxZQUNVLGVBQWdDLEVBQ2hDLGFBQStCO1FBRC9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFMekIsWUFBTyxHQUFjLElBQUksUUFBUSxFQUFFLENBQUM7SUFRcEQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDOztvSEFsQlUsc0JBQXNCO3dHQUF0QixzQkFBc0Isc0lBTnZCOztHQUVUOzRGQUlVLHNCQUFzQjtrQkFSbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUU7O0dBRVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7cUlBRWlCLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDVSxRQUFRO3NCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLW9jcnZhbGlkYXRpb24vc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9waWNzLW9jcnZhbGlkYXRpb24vc3RvcmUvcGVybWlzc2lvbi5zdG9yZSc7XG5pbXBvcnQgeyBSQkFDSU5GTyB9IGZyb20gJy4vcGljcy1vY3J2YWxpZGF0aW9uL0Bjb3JlL29jci12YWxpZGF0aW9uLXVybC5jb25maWcnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29jci12YWxpZGF0aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bGliLW9jcnZhbGlkYXRpb24+PC9saWItb2NydmFsaWRhdGlvbj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgT2NyVmFsaWRhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBSQkFDT1JHPzogUkJBQ0lORk8gPSBuZXcgUkJBQ0lORk8oKTtcbiAgQElucHV0KCkgcHVibGljIFBFUk1JU1NJT04/OiBhbnk7XG4gIEBJbnB1dCgpIHB1YmxpYyBvY3JFdmVudCE6IE9ic2VydmFibGU8YW55PjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uU3RvcmU6IFBlcm1pc3Npb25TdG9yZSxcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2VcbiAgKSB7IFxuICAgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9jckV2ZW50LnN1YnNjcmliZSgodmFsOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuUkJBQ09SRyA9IHZhbC5SQkFDT1JHO1xuICAgICAgdGhpcy5QRVJNSVNTSU9OID0gdmFsLlBFUk1JU1NJT047XG4gICAgICB0aGlzLl9zdG9yZXNlcnZpY2Uuc2V0RGF0YSgnUkJBQ09SRycsIHRoaXMuUkJBQ09SRyk7XG4gICAgICB0aGlzLnBlcm1pc3Npb25TdG9yZS5zZXRTdG9yZSh0aGlzLlBFUk1JU1NJT04pO1xuICAgIH0pXG4gIH1cblxufVxuIl19