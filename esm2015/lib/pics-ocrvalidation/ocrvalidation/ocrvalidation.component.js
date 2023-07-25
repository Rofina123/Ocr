import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AlertService } from '../service/alert.service';
import { AuthService } from '../service/auth.service';
import { DataStoreService } from '../service/data-store.service';
import { LocalService } from '../service/local.service';
// import { FormioComponent } from 'angular-formio';
import { NgxfUploaderService } from 'ngxf-uploader';
import { RBACINFO } from '../@core/ocr-validation-url.config';
import * as i0 from "@angular/core";
import * as i1 from "../@core/ocr-validation.service";
import * as i2 from "../service/data-store.service";
import * as i3 from "primeng/card";
export class OcrvalidationComponent {
    constructor(injector, ocrValidationService, _storeservice) {
        this.ocrValidationService = ocrValidationService;
        this._storeservice = _storeservice;
        this.isformIO = false;
        // formIO!: FormioComponent;
        this.formJson = [];
        this.RBACORG = new RBACINFO();
        this.isReadOnly = false;
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
        }, err => console.log(err));
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
        // ArrayOCR.forEach(({ field }) => {
        //   const formJson = json.filter(res => res.key.includes(field));
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
OcrvalidationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: OcrvalidationComponent, selector: "lib-ocrvalidation", inputs: { formResponseData: "formResponseData", currenttemplateResult: "currenttemplateResult", submitionData: "submitionData" }, outputs: { ocrResponse: "ocrResponse" }, viewQueries: [{ propertyName: "formJson", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<div class=\"card\">\n    <div class=\"row\">\n      <div class=\"col pr-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Uploaded Document\">\n          <img [src]=\"imgUrl\" alt=\"document\" class=\"w-100\" />\n        </p-card>\n      </div>\n      <div class=\"col pl-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Document Information\">\n          <div class=\"col-12 dynamic-page mt-0\" *ngIf=\"isformIO\">\n            <!-- <formio\n              #formIO\n              [form]=\"jsonForm\"\n              [readOnly]=\"isReadOnly\"\n              [submission]=\"submitionData\"\n              [refresh]=\"triggerRefresh\"></formio> -->\n          </div>\n          <button type=\"button\" class=\"btn btn-cancel\" (click)=\"backToForm()\">Done</button>\n        </p-card>\n      </div>\n    </div>\n  </div>\n", styles: [":host ::ng-deep .p-card .p-card-content{padding:0}:host ::ng-deep .p-card .success{border-color:#146a5d;color:#146a5d}\n"], components: [{ type: i3.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrvalidationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-ocrvalidation',
                    templateUrl: './ocrvalidation.component.html',
                    styleUrls: ['./ocrvalidation.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.OcrValidationService }, { type: i2.DataStoreService }]; }, propDecorators: { 
        // formIO!: FormioComponent;
        formJson: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NydmFsaWRhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvb2NyLXZhbGlkYXRpb25zL3NyYy9saWIvcGljcy1vY3J2YWxpZGF0aW9uL29jcnZhbGlkYXRpb24vb2NydmFsaWRhdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9waWNzLWNvcmUvb2NyLXZhbGlkYXRpb25zL3NyYy9saWIvcGljcy1vY3J2YWxpZGF0aW9uL29jcnZhbGlkYXRpb24vb2NydmFsaWRhdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBWSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxvREFBb0Q7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFPOUQsTUFBTSxPQUFPLHNCQUFzQjtJQStCakMsWUFBWSxRQUFrQixFQUFTLG9CQUEwQyxFQUFVLGFBQStCO1FBQW5GLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUF6QjFILGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsNEJBQTRCO1FBQzVCLGFBQVEsR0FBZSxFQUFFLENBQUM7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SUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDdkIsUUFBUSxFQUFFLE1BQU07WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O29IQTdIVSxzQkFBc0I7d0dBQXRCLHNCQUFzQix3VUNqQm5DLHMwQkFzQkE7NEZETGEsc0JBQXNCO2tCQUxsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7b0JBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2lCQUM5Qzs7UUFTQyw0QkFBNEI7UUFDNUIsUUFBUTtzQkFGUCxTQUFTO3VCQUFDLFFBQVE7Z0JBb0JWLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxxQkFBcUI7c0JBQTdCLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0b3IsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2FsZXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9kYXRhLXN0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9jYWxTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9sb2NhbC5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IEZvcm1pb0NvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXItZm9ybWlvJztcbmltcG9ydCB7IE5neGZVcGxvYWRlclNlcnZpY2UgfSBmcm9tICduZ3hmLXVwbG9hZGVyJztcbmltcG9ydCB7IE9jclZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vQGNvcmUvb2NyLXZhbGlkYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJCQUNJTkZPIH0gZnJvbSAnLi4vQGNvcmUvb2NyLXZhbGlkYXRpb24tdXJsLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1vY3J2YWxpZGF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29jcnZhbGlkYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vY3J2YWxpZGF0aW9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT2NydmFsaWRhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG9jckRvY3VtZW50RGV0YWlsczogYW55O1xuICBpbWdVcmw6IGFueTtcbiAgc2hvd09jckZvcm0hOiBib29sZWFuO1xuICB0YWJsZXNjaGVtYWNvbmZpZzogYW55O1xuICBqc29uRm9ybTogYW55O1xuICBpc2Zvcm1JTyA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCdmb3JtSU8nKVxuICAvLyBmb3JtSU8hOiBGb3JtaW9Db21wb25lbnQ7XG4gIGZvcm1Kc29uOiBBcnJheTxhbnk+ID0gW107XG4gIGVudmlyb25tZW50OiBhbnk7XG4gIFJCQUNPUkc6IFJCQUNJTkZPID0gbmV3IFJCQUNJTkZPKCk7XG4gIG9yZ1N1YnMhOiBTdWJzY3JpcHRpb247XG4gIG9yZ0lkOiBhbnk7XG4gIHRyaWdnZXJSZWZyZXNoOiBhbnk7XG4gIGF1dGhTZXJ2aWNlOiBhbnk7XG4gIGxvY2Fsc3RvcmFnZTogYW55O1xuICBkYXRhU3RvcmU6IGFueTtcbiAgdXBsb2FkU2VydmljZTogYW55O1xuICBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZTtcbiAgZnJvbVRpdGxlOiBhbnk7XG4gIGR1cGxpY2F0ZVRhYmxlU2NoZW1hY29uZmlnOiBhbnk7XG4gIGlzT2NyRm9ybTogYW55O1xuICBkb2N1bWVudFR5cGU6IGFueTtcbiAgc291cmNlaWQ6IGFueTtcbiAgaXNSZWFkT25seSA9IGZhbHNlO1xuICBjb250ZW50QXJyYXk6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KCkgZm9ybVJlc3BvbnNlRGF0YTogYW55O1xuICBASW5wdXQoKSBjdXJyZW50dGVtcGxhdGVSZXN1bHQ6IGFueTtcbiAgQElucHV0KCkgc3VibWl0aW9uRGF0YTogYW55O1xuICBAT3V0cHV0KCkgb2NyUmVzcG9uc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3Rvcixwcml2YXRlIG9jclZhbGlkYXRpb25TZXJ2aWNlOiBPY3JWYWxpZGF0aW9uU2VydmljZSwgcHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZSA9IGluamVjdG9yLmdldDxBdXRoU2VydmljZT4oQXV0aFNlcnZpY2UpO1xuICAgIHRoaXMubG9jYWxzdG9yYWdlID0gaW5qZWN0b3IuZ2V0PExvY2FsU2VydmljZT4oTG9jYWxTZXJ2aWNlKTtcbiAgICB0aGlzLmRhdGFTdG9yZSA9IGluamVjdG9yLmdldDxEYXRhU3RvcmVTZXJ2aWNlPihEYXRhU3RvcmVTZXJ2aWNlKTtcbiAgICB0aGlzLnVwbG9hZFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8Tmd4ZlVwbG9hZGVyU2VydmljZT4oTmd4ZlVwbG9hZGVyU2VydmljZSk7XG4gICAgdGhpcy5hbGVydFNlcnZpY2UgPSBpbmplY3Rvci5nZXQ8QWxlcnRTZXJ2aWNlPihBbGVydFNlcnZpY2UpO1xuICAgIHRoaXMudHJpZ2dlclJlZnJlc2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICB9XG5cbiAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3JnU3VicyA9ICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXNbJ1JCQUNPUkcnXSAmJiByZXNbJ1JCQUNPUkcnXSAhPT0gJycpIHtcbiAgICAgICAgdGhpcy5SQkFDT1JHID0gcmVzWydSQkFDT1JHJ107XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuUkJBQ09SRywgJ1JCQUNPUkcgUHJvZmlsZScpO1xuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gdGhpcy5SQkFDT1JHWydlbnZpcm9ubWVudCddO1xuICAgICAgICB0aGlzLm9yZ0lkID0gcGFyc2VJbnQodGhpcy5SQkFDT1JHWydvcmdJRCddKTtcbiAgICAgICAgaWYodGhpcy5lbnZpcm9ubWVudCl7XG4gICAgICAgICAgY29uc3Qgb2JqID0gdGhpcy5sb2NhbHN0b3JhZ2UuZ2V0T2JqKCdPQ1JPYmonKTtcbiAgICAgICAgICB0aGlzLmdldFRlbXBsYXRlKHRoaXMuY3VycmVudHRlbXBsYXRlUmVzdWx0KTtcbiAgICAgICAgICB0aGlzLmdldFVwbG9hZChvYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbm5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgXG4gICAgdGhpcy5vcmdTdWJzLnVuc3Vic2NyaWJlKCk7XG4gIH1cbiAgcHJpdmF0ZSBnZXRUZW1wbGF0ZShyZXN1bHQ6IGFueSkge1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHRoaXMuZnJvbVRpdGxlID0gcmVzdWx0LmRhdGE/LnBhZ2VuYW1lID8gcmVzdWx0LmRhdGE/LnBhZ2VuYW1lIDogJyc7XG4gICAgICB0aGlzLmRhdGFTdG9yZS5zZXREYXRhKCd0aXRsZScsIHRoaXMuZnJvbVRpdGxlKTtcblxuICAgICAgaWYgKHJlc3VsdC5kYXRhLnRlbXBsYXRlanNvbikge1xuICAgICAgICB0aGlzLmlzZm9ybUlPID0gdHJ1ZTtcbiAgICAgICAgcmVzdWx0LmRhdGEudGVtcGxhdGVqc29uID0gcmVzdWx0LmRhdGEudGVtcGxhdGVqc29uLnJlcGxhY2VBbGwoJ3tzb3VyY2VpZH0nLCB0aGlzLnNvdXJjZWlkKTtcbiAgICAgICAgdGhpcy50YWJsZXNjaGVtYWNvbmZpZyA9IEpTT04ucGFyc2UocmVzdWx0LmRhdGEudGFibGVzY2hlbWFjb25maWcpO1xuICAgICAgICB0aGlzLmR1cGxpY2F0ZVRhYmxlU2NoZW1hY29uZmlnID0geyAuLi50aGlzLnRhYmxlc2NoZW1hY29uZmlnIH07XG4gICAgICAgIHRoaXMuaXNPY3JGb3JtID0gdGhpcy50YWJsZXNjaGVtYWNvbmZpZy5vY3JjaGVja2VkO1xuICAgICAgICB0aGlzLmRvY3VtZW50VHlwZSA9IHRoaXMudGFibGVzY2hlbWFjb25maWcuc2VsZWN0ZWREb2N1bWVudFR5cGU7XG4gICAgICAgIHRoaXMuanNvbkZvcm0gPSB7XG4gICAgICAgICAgY29tcG9uZW50czogSlNPTi5wYXJzZShyZXN1bHQuZGF0YS50ZW1wbGF0ZWpzb24pLmNvbXBvbmVudHMuZmlsdGVyKChjb21wb25lbnQ6YW55KSA9PiBjb21wb25lbnQua2V5ICE9PSAnc3VibWl0JylcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRVcGxvYWQob2JqOmFueSkge1xuICAgIHRoaXMub2NyVmFsaWRhdGlvblNlcnZpY2UuZ2V0VXBsb2FkKG9iaikuc3Vic2NyaWJlKFxuICAgICAgKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzLmRhdGEpIHtcbiAgICAgICAgICBjb25zdCByZXNEYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgY29uc3QgaW1hZ2VDYXRlZ29yeSA9IHJlc0RhdGE/LmltYWdlQ2F0ZWdvcnk7XG4gICAgICAgICAgdGhpcy5vY3JEb2N1bWVudERldGFpbHMgPSBpbWFnZUNhdGVnb3J5Py5pZF9qc29uWzBdO1xuICAgICAgICAgIGNvbnN0IGZpbGVVcmwgPSByZXNEYXRhPy5maWxlVXJsO1xuICAgICAgICAgIHRoaXMuaW1nVXJsID0gZmlsZVVybD8uc291cmNlLnVybDtcbiAgICAgICAgICB0aGlzLm9jckZvcm1QYXRjaGluZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKCdTb21ldGhpbmcgV2VudCBXcm9uZyEnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXG4gICAgKTtcbiAgfVxuXG4gIG9jckZvcm1QYXRjaGluZygpIHtcbiAgICBjb25zdCBBcnJheU9DUiA9IHRoaXMudGFibGVzY2hlbWFjb25maWcuZmllbGRtYXBwaW5nLmZpbHRlcigoZWxlbWVudDphbnkpID0+IGVsZW1lbnQub2Nya2V5KTtcbiAgICBBcnJheU9DUj8uZm9yRWFjaCgocmVzOmFueSkgPT4ge1xuICAgICAgaWYgKHRoaXMub2NyRG9jdW1lbnREZXRhaWxzKSB7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50VmFsdWUgPSBPYmplY3Qua2V5cyh0aGlzLm9jckRvY3VtZW50RGV0YWlscyk7XG4gICAgICAgIGRvY3VtZW50VmFsdWU/LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQudG9Mb3dlckNhc2UoKSA9PSByZXMub2Nya2V5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0aW9uRGF0YS5kYXRhW3Jlcy5maWVsZF0gPVxuICAgICAgICAgICAgICByZXMub2Nya2V5ID09ICdkYXRlX29mX2JpcnRoJ1xuICAgICAgICAgICAgICAgID8gbmV3IERhdGUodGhpcy5vY3JEb2N1bWVudERldGFpbHNbZWxlbWVudF0pXG4gICAgICAgICAgICAgICAgOiB0aGlzLm9jckRvY3VtZW50RGV0YWlsc1tlbGVtZW50XTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLmpzb25Gb3JtLmNvbXBvbmVudHNbMF0uY29tcG9uZW50cztcbiAgICAvLyBBcnJheU9DUi5mb3JFYWNoKCh7IGZpZWxkIH0pID0+IHtcbiAgICAvLyAgIGNvbnN0IGZvcm1Kc29uID0ganNvbi5maWx0ZXIocmVzID0+IHJlcy5rZXkuaW5jbHVkZXMoZmllbGQpKTtcbiAgICAvLyAgIHRoaXMuZm9ybUpzb24ucHVzaCguLi5mb3JtSnNvbik7XG4gICAgLy8gfSk7XG4gICAgdGhpcy5qc29uRm9ybS5jb21wb25lbnRzWzBdLmNvbXBvbmVudHMgPSB0aGlzLmZvcm1Kc29uO1xuICAgIHRoaXMudHJpZ2dlclJlZnJlc2guZW1pdCh7XG4gICAgICBwcm9wZXJ0eTogJ2Zvcm0nLFxuICAgICAgdmFsdWU6IHRoaXMuanNvbkZvcm1cbiAgICB9KTtcbiAgfVxuXG4gIGJhY2tUb0Zvcm0oKSB7XG4gICAgdGhpcy5vY3JSZXNwb25zZS5lbWl0KHRoaXMuc3VibWl0aW9uRGF0YSk7XG4gIH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sIHByLTJcIj5cbiAgICAgICAgPHAtY2FyZCBzdHlsZUNsYXNzPVwidy0xMDAgaC0xMDBcIiBoZWFkZXI9XCJVcGxvYWRlZCBEb2N1bWVudFwiPlxuICAgICAgICAgIDxpbWcgW3NyY109XCJpbWdVcmxcIiBhbHQ9XCJkb2N1bWVudFwiIGNsYXNzPVwidy0xMDBcIiAvPlxuICAgICAgICA8L3AtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbCBwbC0yXCI+XG4gICAgICAgIDxwLWNhcmQgc3R5bGVDbGFzcz1cInctMTAwIGgtMTAwXCIgaGVhZGVyPVwiRG9jdW1lbnQgSW5mb3JtYXRpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGR5bmFtaWMtcGFnZSBtdC0wXCIgKm5nSWY9XCJpc2Zvcm1JT1wiPlxuICAgICAgICAgICAgPCEtLSA8Zm9ybWlvXG4gICAgICAgICAgICAgICNmb3JtSU9cbiAgICAgICAgICAgICAgW2Zvcm1dPVwianNvbkZvcm1cIlxuICAgICAgICAgICAgICBbcmVhZE9ubHldPVwiaXNSZWFkT25seVwiXG4gICAgICAgICAgICAgIFtzdWJtaXNzaW9uXT1cInN1Ym1pdGlvbkRhdGFcIlxuICAgICAgICAgICAgICBbcmVmcmVzaF09XCJ0cmlnZ2VyUmVmcmVzaFwiPjwvZm9ybWlvPiAtLT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tY2FuY2VsXCIgKGNsaWNrKT1cImJhY2tUb0Zvcm0oKVwiPkRvbmU8L2J1dHRvbj5cbiAgICAgICAgPC9wLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4iXX0=