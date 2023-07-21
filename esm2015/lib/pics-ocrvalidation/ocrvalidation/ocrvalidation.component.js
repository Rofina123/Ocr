import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AlertService } from '../service/alert.service';
import { AuthService } from '../service/auth.service';
import { DataStoreService } from '../service/data-store.service';
import { LocalService } from '../service/local.service';
import { NgxfUploaderService } from 'ngxf-uploader';
import { RBACINFO } from '../@core/ocr-validation-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../@core/ocr-validation.service";
import * as i2 from "../service/data-store.service";
import * as i3 from "primeng/card";
import * as i4 from "angular-formio";
export class OcrvalidationComponent {
    constructor(injector, ocrValidationService, _storeservice) {
        this.ocrValidationService = ocrValidationService;
        this._storeservice = _storeservice;
        this.isformIO = false;
        this.formJson = [];
        this.isReadOnly = false;
        this.RBACORG = new RBACINFO();
        this.contentArray = [];
        this.ocrResponse = new EventEmitter();
        this.authService = injector.get(AuthService);
        this.localstorage = injector.get(LocalService);
        this.dataStore = injector.get(DataStoreService);
        this.uploadService = injector.get(NgxfUploaderService);
        this.alertService = injector.get(AlertService);
        this.triggerRefresh = new EventEmitter();
    }
    ngOnInit() {
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                console.log(this.RBACORG, 'RBACORG Profile');
                this.environment = this.RBACORG['environment'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                if (this.environment) {
                    const obj = this.localstorage.getObj('OCRObj');
                    this.getTemplate(this.currenttemplateResult);
                    this.getUpload(obj);
                }
            }
        });
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    getTemplate(result) {
        var _a, _b;
        if (result) {
            this.fromTitle = ((_a = result.data) === null || _a === void 0 ? void 0 : _a.pagename) ? (_b = result.data) === null || _b === void 0 ? void 0 : _b.pagename : '';
            this.dataStore.setData('title', this.fromTitle);
            if (result.data.templatejson) {
                this.isformIO = true;
                result.data.templatejson = result.data.templatejson.replaceAll('{sourceid}', this.sourceid);
                this.tableschemaconfig = JSON.parse(result.data.tableschemaconfig);
                this.duplicateTableSchemaconfig = Object.assign({}, this.tableschemaconfig);
                this.isOcrForm = this.tableschemaconfig.ocrchecked;
                this.documentType = this.tableschemaconfig.selectedDocumentType;
                this.jsonForm = {
                    components: JSON.parse(result.data.templatejson).components.filter((component) => component.key !== 'submit')
                };
            }
        }
    }
    getUpload(obj) {
        this.ocrValidationService.getUpload(obj).subscribe((res) => {
            if (res && res.data) {
                const resData = res.data;
                const imageCategory = resData === null || resData === void 0 ? void 0 : resData.imageCategory;
                this.ocrDocumentDetails = imageCategory === null || imageCategory === void 0 ? void 0 : imageCategory.id_json[0];
                const fileUrl = resData === null || resData === void 0 ? void 0 : resData.fileUrl;
                this.imgUrl = fileUrl === null || fileUrl === void 0 ? void 0 : fileUrl.source.url;
                this.ocrFormPatching();
            }
            else {
                this.alertService.error('Something Went Wrong!');
            }
        }, (err) => console.log(err));
    }
    ocrFormPatching() {
        const ArrayOCR = this.tableschemaconfig.fieldmapping.filter((element) => element.ocrkey);
        ArrayOCR === null || ArrayOCR === void 0 ? void 0 : ArrayOCR.forEach((res) => {
            if (this.ocrDocumentDetails) {
                const documentValue = Object.keys(this.ocrDocumentDetails);
                documentValue === null || documentValue === void 0 ? void 0 : documentValue.forEach(element => {
                    if (element.toLowerCase() == res.ocrkey.toLowerCase()) {
                        this.submitionData.data[res.field] =
                            res.ocrkey == 'date_of_birth'
                                ? new Date(this.ocrDocumentDetails[element])
                                : this.ocrDocumentDetails[element];
                    }
                });
            }
        });
        const json = this.jsonForm.components[0].components;
        // ArrayOCR.forEach(( field ) => {
        //   const formJson = json.filter((res:any) => res.key.includes(field));
        //   this.formJson.push(...formJson);
        // });
        this.jsonForm.components[0].components = this.formJson;
        this.triggerRefresh.emit({
            property: 'form',
            value: this.jsonForm
        });
    }
    backToForm() {
        this.ocrResponse.emit(this.submitionData);
    }
}
OcrvalidationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrvalidationComponent, deps: [{ token: i0.Injector }, { token: i1.OcrValidationService }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
OcrvalidationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: OcrvalidationComponent, selector: "lib-ocrvalidation", inputs: { formResponseData: "formResponseData", currenttemplateResult: "currenttemplateResult", submitionData: "submitionData" }, outputs: { ocrResponse: "ocrResponse" }, viewQueries: [{ propertyName: "formIO", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<div class=\"card\">\n    <div class=\"row\">\n      <div class=\"col pr-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Uploaded Document\">\n          <img [src]=\"imgUrl\" alt=\"document\" class=\"w-100\" />\n        </p-card>\n      </div>\n      <div class=\"col pl-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Document Information\">\n          <div class=\"col-12 dynamic-page mt-0\" *ngIf=\"isformIO\">\n            <formio\n              #formIO\n              [form]=\"jsonForm\"\n              [readOnly]=\"isReadOnly\"\n              [submission]=\"submitionData\"\n              [refresh]=\"triggerRefresh\"\n          ></formio>\n          </div>\n          <button type=\"button\" class=\"btn success\" (click)=\"backToForm()\">Done</button>\n        </p-card>\n      </div>\n    </div>\n  </div>\n\n", styles: [":host ::ng-deep .p-card .p-card-content{padding:0}:host ::ng-deep .p-card .success{border-color:#146a5d;color:#146a5d}\n"], components: [{ type: i3.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { type: i4.FormioComponent, selector: "formio" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrvalidationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-ocrvalidation',
                    templateUrl: './ocrvalidation.component.html',
                    styleUrls: ['./ocrvalidation.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.OcrValidationService }, { type: i2.DataStoreService }]; }, propDecorators: { formIO: [{
                type: ViewChild,
                args: ['formIO']
            }], formResponseData: [{
                type: Input
            }], currenttemplateResult: [{
                type: Input
            }], submitionData: [{
                type: Input
            }], ocrResponse: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NydmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvb2NyLXZhbGlkYXRpb24vc3JjL2xpYi9waWNzLW9jcnZhbGlkYXRpb24vb2NydmFsaWRhdGlvbi9vY3J2YWxpZGF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9vY3ItdmFsaWRhdGlvbi9zcmMvbGliL3BpY3Mtb2NydmFsaWRhdGlvbi9vY3J2YWxpZGF0aW9uL29jcnZhbGlkYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVksS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7O0FBTzlELE1BQU0sT0FBTyxzQkFBc0I7SUFpQ2pDLFlBQVksUUFBa0IsRUFBVSxvQkFBMEMsRUFBVyxhQUErQjtRQUFwRix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQVcsa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBMUI1SCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2pCLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFZMUIsZUFBVSxHQUFHLEtBQUssQ0FBQztR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QVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUN2QixRQUFRLEVBQUUsTUFBTTtZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDckIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7b0hBaElVLHNCQUFzQjt3R0FBdEIsc0JBQXNCLHNVQ2hCbkMsdzBCQXdCQTs0RkRSYSxzQkFBc0I7a0JBTGxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsV0FBVyxFQUFFLGdDQUFnQztvQkFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7aUJBQzlDO2lLQVVDLE1BQU07c0JBREwsU0FBUzt1QkFBQyxRQUFRO2dCQW9CVixnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0cscUJBQXFCO3NCQUE3QixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0ksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3RvciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvYWxlcnQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2xvY2FsLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybWlvQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhci1mb3JtaW8nO1xuaW1wb3J0IHsgTmd4ZlVwbG9hZGVyU2VydmljZSB9IGZyb20gJ25neGYtdXBsb2FkZXInO1xuaW1wb3J0IHsgT2NyVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9AY29yZS9vY3ItdmFsaWRhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUkJBQ0lORk8gfSBmcm9tICcuLi9AY29yZS9vY3ItdmFsaWRhdGlvbi11cmwuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW9jcnZhbGlkYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vb2NydmFsaWRhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29jcnZhbGlkYXRpb24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBPY3J2YWxpZGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBvY3JEb2N1bWVudERldGFpbHM6IGFueTtcbiAgaW1nVXJsOiBhbnk7XG4gIHNob3dPY3JGb3JtITogYm9vbGVhbjtcbiAgdGFibGVzY2hlbWFjb25maWc6IGFueTtcbiAganNvbkZvcm06IGFueTtcbiAgaXNmb3JtSU8gPSBmYWxzZTtcbiAgQFZpZXdDaGlsZCgnZm9ybUlPJylcbiAgZm9ybUlPITogRm9ybWlvQ29tcG9uZW50O1xuICBmb3JtSnNvbjogQXJyYXk8YW55PiA9IFtdO1xuICB0cmlnZ2VyUmVmcmVzaDogYW55O1xuICBhdXRoU2VydmljZTogYW55O1xuICBsb2NhbHN0b3JhZ2U6IGFueTtcbiAgZGF0YVN0b3JlOiBhbnk7XG4gIHVwbG9hZFNlcnZpY2U6IGFueTtcbiAgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2U7XG4gIGZyb21UaXRsZTogYW55O1xuICBkdXBsaWNhdGVUYWJsZVNjaGVtYWNvbmZpZzogYW55O1xuICBpc09jckZvcm06IGFueTtcbiAgZG9jdW1lbnRUeXBlOiBhbnk7XG4gIHNvdXJjZWlkOiBhbnk7XG4gIGlzUmVhZE9ubHkgPSBmYWxzZTtcbiAgZW52aXJvbm1lbnQ6IGFueTtcbiAgUkJBQ09SRzogUkJBQ0lORk8gPSBuZXcgUkJBQ0lORk8oKTtcbiAgb3JnU3VicyE6IFN1YnNjcmlwdGlvbjtcbiAgb3JnSWQ6IGFueTtcbiAgY29udGVudEFycmF5OiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIGZvcm1SZXNwb25zZURhdGE6IGFueTtcbiAgQElucHV0KCkgY3VycmVudHRlbXBsYXRlUmVzdWx0OiBhbnk7XG4gIEBJbnB1dCgpIHN1Ym1pdGlvbkRhdGE6IGFueTtcbiAgQE91dHB1dCgpIG9jclJlc3BvbnNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSBvY3JWYWxpZGF0aW9uU2VydmljZTogT2NyVmFsaWRhdGlvblNlcnZpY2UsICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2UpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PEF1dGhTZXJ2aWNlPihBdXRoU2VydmljZSk7XG4gICAgdGhpcy5sb2NhbHN0b3JhZ2UgPSBpbmplY3Rvci5nZXQ8TG9jYWxTZXJ2aWNlPihMb2NhbFNlcnZpY2UpO1xuICAgIHRoaXMuZGF0YVN0b3JlID0gaW5qZWN0b3IuZ2V0PERhdGFTdG9yZVNlcnZpY2U+KERhdGFTdG9yZVNlcnZpY2UpO1xuICAgIHRoaXMudXBsb2FkU2VydmljZSA9IGluamVjdG9yLmdldDxOZ3hmVXBsb2FkZXJTZXJ2aWNlPihOZ3hmVXBsb2FkZXJTZXJ2aWNlKTtcbiAgICB0aGlzLmFsZXJ0U2VydmljZSA9IGluamVjdG9yLmdldDxBbGVydFNlcnZpY2U+KEFsZXJ0U2VydmljZSk7XG4gICAgdGhpcy50cmlnZ2VyUmVmcmVzaCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3JnU3VicyA9ICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXNbJ1JCQUNPUkcnXSAmJiByZXNbJ1JCQUNPUkcnXSAhPT0gJycpIHtcbiAgICAgICAgdGhpcy5SQkFDT1JHID0gcmVzWydSQkFDT1JHJ107XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuUkJBQ09SRywgJ1JCQUNPUkcgUHJvZmlsZScpO1xuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gdGhpcy5SQkFDT1JHWydlbnZpcm9ubWVudCddO1xuICAgICAgICB0aGlzLm9yZ0lkID0gcGFyc2VJbnQodGhpcy5SQkFDT1JHWydvcmdJRCddKTtcbiAgICAgICAgaWYodGhpcy5lbnZpcm9ubWVudCl7XG4gICAgICAgICAgY29uc3Qgb2JqID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0T2JqKCdPQ1JPYmonKTtcbiAgICAgICAgICB0aGlzLmdldFRlbXBsYXRlKHRoaXMuY3VycmVudHRlbXBsYXRlUmVzdWx0KTtcbiAgICAgICAgICB0aGlzLmdldFVwbG9hZChvYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICBcbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgIFxuICAgIHRoaXMub3JnU3Vicy51bnN1YnNjcmliZSgpO1xuICB9XG4gIHByaXZhdGUgZ2V0VGVtcGxhdGUocmVzdWx0OiBhbnkpIHtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICB0aGlzLmZyb21UaXRsZSA9IHJlc3VsdC5kYXRhPy5wYWdlbmFtZSA/IHJlc3VsdC5kYXRhPy5wYWdlbmFtZSA6ICcnO1xuICAgICAgdGhpcy5kYXRhU3RvcmUuc2V0RGF0YSgndGl0bGUnLCB0aGlzLmZyb21UaXRsZSk7XG5cbiAgICAgIGlmIChyZXN1bHQuZGF0YS50ZW1wbGF0ZWpzb24pIHtcbiAgICAgICAgdGhpcy5pc2Zvcm1JTyA9IHRydWU7XG4gICAgICAgIHJlc3VsdC5kYXRhLnRlbXBsYXRlanNvbiA9IHJlc3VsdC5kYXRhLnRlbXBsYXRlanNvbi5yZXBsYWNlQWxsKCd7c291cmNlaWR9JywgdGhpcy5zb3VyY2VpZCk7XG4gICAgICAgIHRoaXMudGFibGVzY2hlbWFjb25maWcgPSBKU09OLnBhcnNlKHJlc3VsdC5kYXRhLnRhYmxlc2NoZW1hY29uZmlnKTtcbiAgICAgICAgdGhpcy5kdXBsaWNhdGVUYWJsZVNjaGVtYWNvbmZpZyA9IHsgLi4udGhpcy50YWJsZXNjaGVtYWNvbmZpZyB9O1xuICAgICAgICB0aGlzLmlzT2NyRm9ybSA9IHRoaXMudGFibGVzY2hlbWFjb25maWcub2NyY2hlY2tlZDtcbiAgICAgICAgdGhpcy5kb2N1bWVudFR5cGUgPSB0aGlzLnRhYmxlc2NoZW1hY29uZmlnLnNlbGVjdGVkRG9jdW1lbnRUeXBlO1xuICAgICAgICB0aGlzLmpzb25Gb3JtID0ge1xuICAgICAgICAgIGNvbXBvbmVudHM6IEpTT04ucGFyc2UocmVzdWx0LmRhdGEudGVtcGxhdGVqc29uKS5jb21wb25lbnRzLmZpbHRlcigoY29tcG9uZW50OmFueSkgPT4gY29tcG9uZW50LmtleSAhPT0gJ3N1Ym1pdCcpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0VXBsb2FkKG9iajphbnkpIHtcbiAgICB0aGlzLm9jclZhbGlkYXRpb25TZXJ2aWNlLmdldFVwbG9hZChvYmopLnN1YnNjcmliZShcbiAgICAgIChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhKSB7XG4gICAgICAgICAgY29uc3QgcmVzRGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgIGNvbnN0IGltYWdlQ2F0ZWdvcnkgPSByZXNEYXRhPy5pbWFnZUNhdGVnb3J5O1xuICAgICAgICAgIHRoaXMub2NyRG9jdW1lbnREZXRhaWxzID0gaW1hZ2VDYXRlZ29yeT8uaWRfanNvblswXTtcbiAgICAgICAgICBjb25zdCBmaWxlVXJsID0gcmVzRGF0YT8uZmlsZVVybDtcbiAgICAgICAgICB0aGlzLmltZ1VybCA9IGZpbGVVcmw/LnNvdXJjZS51cmw7XG4gICAgICAgICAgdGhpcy5vY3JGb3JtUGF0Y2hpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcignU29tZXRoaW5nIFdlbnQgV3JvbmchJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoZXJyOmFueSkgPT4gY29uc29sZS5sb2coZXJyKVxuICAgICk7XG4gIH1cblxuICBvY3JGb3JtUGF0Y2hpbmcoKSB7XG4gICAgY29uc3QgQXJyYXlPQ1IgPSB0aGlzLnRhYmxlc2NoZW1hY29uZmlnLmZpZWxkbWFwcGluZy5maWx0ZXIoKGVsZW1lbnQ6YW55KSA9PiBlbGVtZW50Lm9jcmtleSk7XG4gICAgQXJyYXlPQ1I/LmZvckVhY2goKHJlczphbnkpID0+IHtcbiAgICAgIGlmICh0aGlzLm9jckRvY3VtZW50RGV0YWlscykge1xuICAgICAgICBjb25zdCBkb2N1bWVudFZhbHVlID0gT2JqZWN0LmtleXModGhpcy5vY3JEb2N1bWVudERldGFpbHMpO1xuICAgICAgICBkb2N1bWVudFZhbHVlPy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50LnRvTG93ZXJDYXNlKCkgPT0gcmVzLm9jcmtleS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnN1Ym1pdGlvbkRhdGEuZGF0YVtyZXMuZmllbGRdID1cbiAgICAgICAgICAgICAgcmVzLm9jcmtleSA9PSAnZGF0ZV9vZl9iaXJ0aCdcbiAgICAgICAgICAgICAgICA/IG5ldyBEYXRlKHRoaXMub2NyRG9jdW1lbnREZXRhaWxzW2VsZW1lbnRdKVxuICAgICAgICAgICAgICAgIDogdGhpcy5vY3JEb2N1bWVudERldGFpbHNbZWxlbWVudF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBqc29uID0gdGhpcy5qc29uRm9ybS5jb21wb25lbnRzWzBdLmNvbXBvbmVudHM7XG4gICAgLy8gQXJyYXlPQ1IuZm9yRWFjaCgoIGZpZWxkICkgPT4ge1xuICAgIC8vICAgY29uc3QgZm9ybUpzb24gPSBqc29uLmZpbHRlcigocmVzOmFueSkgPT4gcmVzLmtleS5pbmNsdWRlcyhmaWVsZCkpO1xuICAgIC8vICAgdGhpcy5mb3JtSnNvbi5wdXNoKC4uLmZvcm1Kc29uKTtcbiAgICAvLyB9KTtcbiAgICB0aGlzLmpzb25Gb3JtLmNvbXBvbmVudHNbMF0uY29tcG9uZW50cyA9IHRoaXMuZm9ybUpzb247XG4gICAgdGhpcy50cmlnZ2VyUmVmcmVzaC5lbWl0KHtcbiAgICAgIHByb3BlcnR5OiAnZm9ybScsXG4gICAgICB2YWx1ZTogdGhpcy5qc29uRm9ybVxuICAgIH0pO1xuICB9XG5cbiAgYmFja1RvRm9ybSgpIHtcbiAgICB0aGlzLm9jclJlc3BvbnNlLmVtaXQodGhpcy5zdWJtaXRpb25EYXRhKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sIHByLTJcIj5cbiAgICAgICAgPHAtY2FyZCBzdHlsZUNsYXNzPVwidy0xMDAgaC0xMDBcIiBoZWFkZXI9XCJVcGxvYWRlZCBEb2N1bWVudFwiPlxuICAgICAgICAgIDxpbWcgW3NyY109XCJpbWdVcmxcIiBhbHQ9XCJkb2N1bWVudFwiIGNsYXNzPVwidy0xMDBcIiAvPlxuICAgICAgICA8L3AtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbCBwbC0yXCI+XG4gICAgICAgIDxwLWNhcmQgc3R5bGVDbGFzcz1cInctMTAwIGgtMTAwXCIgaGVhZGVyPVwiRG9jdW1lbnQgSW5mb3JtYXRpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGR5bmFtaWMtcGFnZSBtdC0wXCIgKm5nSWY9XCJpc2Zvcm1JT1wiPlxuICAgICAgICAgICAgPGZvcm1pb1xuICAgICAgICAgICAgICAjZm9ybUlPXG4gICAgICAgICAgICAgIFtmb3JtXT1cImpzb25Gb3JtXCJcbiAgICAgICAgICAgICAgW3JlYWRPbmx5XT1cImlzUmVhZE9ubHlcIlxuICAgICAgICAgICAgICBbc3VibWlzc2lvbl09XCJzdWJtaXRpb25EYXRhXCJcbiAgICAgICAgICAgICAgW3JlZnJlc2hdPVwidHJpZ2dlclJlZnJlc2hcIlxuICAgICAgICAgID48L2Zvcm1pbz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBzdWNjZXNzXCIgKGNsaWNrKT1cImJhY2tUb0Zvcm0oKVwiPkRvbmU8L2J1dHRvbj5cbiAgICAgICAgPC9wLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiJdfQ==