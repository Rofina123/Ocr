import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map } from 'rxjs/internal/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./data-store.service";
export class HttpService {
    constructor(http, _storeservice) {
        this.http = http;
        this._storeservice = _storeservice;
        this.overrideUrl = true;
        this.baseUrl = '';
        this.headers = new HttpHeaders()
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('role', 'role=CP_PUBLIC');
        this.showSpinner = new BehaviorSubject(false);
        this.outsideShowSpinner = new BehaviorSubject(false);
        // this.url = environment.apiHost; //url from config file or environments
        this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.RBACORG = res['RBACORG'];
                this.url = this.RBACORG['apiHost'] ? this.RBACORG['apiHost'] : 'http://localhost:3000/api';
                this.tokenKey = this.RBACORG['tokenKey'];
            }
        });
        this.url1 = '';
    }
    get(apiRoute) {
        return this.http.get(`${this.url + apiRoute}`, {
            headers: this.getHttpHeaders()
        });
    }
    post(apiRoute, body) {
        return this.http.post(`${this.url + apiRoute}`, body, {
            headers: this.getHttpHeaders()
        });
    }
    put(apiRoute, body) {
        return this.http.put(`${this.url + apiRoute}`, body, {
            headers: this.getHttpHeaders()
        });
    }
    patch(apiRoute, body) {
        return this.http.patch(`${this.url + apiRoute}`, body, {
            headers: this.getHttpHeaders()
        });
    }
    delete(apiRoute) {
        return this.http.delete(`${this.url + apiRoute}`, {
            headers: this.getHttpHeaders()
        });
    }
    getHttpHeaders() {
        return new HttpHeaders().set('key', 'value');
    }
    getAttachmentHttpHeaders(contentType) {
        return new HttpHeaders().set('Content-Type', contentType);
    }
    putUpload(apiRoute, body, contentType) {
        return this.http.put(`${apiRoute}`, body, { headers: this.getAttachmentHttpHeaders(contentType) });
    }
    putupload2(apiRoute, body, contenttype) {
        return this.http
            .put(`${this.url1 + apiRoute}`, body, {
            headers: this.getAttachmentHttpHeaders(contenttype),
            observe: 'response'
        })
            .pipe(map(data => {
            return data;
        }));
    }
    getAutosuggest(url) {
        return this.http.get(`${url}`);
    }
    /**
     *
     * @param apiRoute
     * This function will download the stream file from the API service.
     * No HTTP required for this stream. So used Window.location.href to download the file
     */
    getFormDownloaded(apiRoute) {
        window.location.href = `${this.url + apiRoute}`;
    }
    //common http service(optional)
    handleError(error) {
        var _a, _b;
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message) ? (_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.message : error.message}`;
        }
        return throwError(errorMessage);
    }
    getToken() {
        const token = this.tokenKey ? this.tokenKey : 'jwt-token';
        return sessionStorage.getItem(token);
    }
}
HttpService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService, deps: [{ token: i1.HttpClient }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.DataStoreService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL29jci12YWxpZGF0aW9uL3NyYy9saWIvcGljcy1vY3J2YWxpZGF0aW9uL3NlcnZpY2UvaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBaUMsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQU05QyxNQUFNLE9BQU8sV0FBVztJQWV0QixZQUFvQixJQUFnQixFQUFTLGFBQStCO1FBQXhELFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFiNUUsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFbkIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUVOLFlBQU8sR0FBRyxJQUFJLFdBQVcsRUFBRTthQUMvQixHQUFHLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDO2FBQ2pDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7YUFDdkMsR0FBRyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTFCLGdCQUFXLEdBQTZCLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQzVFLHVCQUFrQixHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUl4Rix5RUFBeUU7UUFDekUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMs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LENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDMUQsT0FBTyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O3lHQTlHVSxXQUFXOzZHQUFYLFdBQVcsY0FGVixNQUFNOzRGQUVQLFdBQVc7a0JBSHZCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS90aHJvd0Vycm9yJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9kYXRhLXN0b3JlLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG4gIFJCQUNPUkc6IGFueTtcclxuICBvdmVycmlkZVVybCA9IHRydWU7XHJcbiAgZXJyb3JEYXRhITogSHR0cEVycm9yUmVzcG9uc2U7XHJcbiAgYmFzZVVybCA9ICcnO1xyXG4gIHRva2VuS2V5OiBhbnk7XHJcbiAgcHVibGljIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxyXG4gICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgLnNldCgncm9sZScsICdyb2xlPUNQX1BVQkxJQycpO1xyXG5cclxuICBwdWJsaWMgc2hvd1NwaW5uZXI6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIHB1YmxpYyBvdXRzaWRlU2hvd1NwaW5uZXI6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIHVybDE6IHN0cmluZztcclxuICB1cmwhOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LHByaXZhdGUgX3N0b3Jlc2VydmljZTogRGF0YVN0b3JlU2VydmljZSkge1xyXG4gICAgLy8gdGhpcy51cmwgPSBlbnZpcm9ubWVudC5hcGlIb3N0OyAvL3VybCBmcm9tIGNvbmZpZyBmaWxlIG9yIGVudmlyb25tZW50c1xyXG4gICAgdGhpcy5fc3RvcmVzZXJ2aWNlLmN1cnJlbnRTdG9yZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXNbJ1JCQUNPUkcnXSAmJiByZXNbJ1JCQUNPUkcnXSAhPT0gJycpIHtcclxuICAgICAgICB0aGlzLlJCQUNPUkcgPSByZXNbJ1JCQUNPUkcnXTtcclxuICAgICAgICB0aGlzLnVybCA9IHRoaXMuUkJBQ09SR1snYXBpSG9zdCddID8gdGhpcy5SQkFDT1JHWydhcGlIb3N0J10gOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaSc7XHJcbiAgICAgICAgdGhpcy50b2tlbktleSA9IHRoaXMuUkJBQ09SR1sndG9rZW5LZXknXTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnVybDEgPSAnJztcclxuICB9XHJcblxyXG4gIGdldChhcGlSb3V0ZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLnVybCArIGFwaVJvdXRlfWAsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5nZXRIdHRwSGVhZGVycygpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBvc3QoYXBpUm91dGU6IHN0cmluZywgYm9keTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy51cmwgKyBhcGlSb3V0ZX1gLCBib2R5LCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SHR0cEhlYWRlcnMoKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdXQoYXBpUm91dGU6IHN0cmluZywgYm9keTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChgJHt0aGlzLnVybCArIGFwaVJvdXRlfWAsIGJvZHksIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5nZXRIdHRwSGVhZGVycygpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBhdGNoKGFwaVJvdXRlOiBzdHJpbmcsIGJvZHk/OiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2goYCR7dGhpcy51cmwgKyBhcGlSb3V0ZX1gLCBib2R5LCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SHR0cEhlYWRlcnMoKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoYXBpUm91dGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoYCR7dGhpcy51cmwgKyBhcGlSb3V0ZX1gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0SHR0cEhlYWRlcnMoKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRIdHRwSGVhZGVycygpOiBIdHRwSGVhZGVycyB7XHJcbiAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdrZXknLCAndmFsdWUnKTtcclxuICB9XHJcblxyXG4gIGdldEF0dGFjaG1lbnRIdHRwSGVhZGVycyhjb250ZW50VHlwZTphbnkpOiBIdHRwSGVhZGVycyB7XHJcbiAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XHJcbiAgfVxyXG4gIHB1dFVwbG9hZChhcGlSb3V0ZTogc3RyaW5nLCBib2R5OiBhbnksIGNvbnRlbnRUeXBlOmFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7YXBpUm91dGV9YCwgYm9keSwgeyBoZWFkZXJzOiB0aGlzLmdldEF0dGFjaG1lbnRIdHRwSGVhZGVycyhjb250ZW50VHlwZSkgfSk7XHJcbiAgfVxyXG5cclxuICBwdXR1cGxvYWQyKGFwaVJvdXRlOiBzdHJpbmcsIGJvZHk6IGFueSwgY29udGVudHR5cGU6YW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLnB1dChgJHt0aGlzLnVybDEgKyBhcGlSb3V0ZX1gLCBib2R5LCB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5nZXRBdHRhY2htZW50SHR0cEhlYWRlcnMoY29udGVudHR5cGUpLFxyXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZSdcclxuICAgICAgfSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICB9XHJcbiAgZ2V0QXV0b3N1Z2dlc3QodXJsOmFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dXJsfWApO1xyXG4gIH1cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSBhcGlSb3V0ZVxyXG4gICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBkb3dubG9hZCB0aGUgc3RyZWFtIGZpbGUgZnJvbSB0aGUgQVBJIHNlcnZpY2UuXHJcbiAgICogTm8gSFRUUCByZXF1aXJlZCBmb3IgdGhpcyBzdHJlYW0uIFNvIHVzZWQgV2luZG93LmxvY2F0aW9uLmhyZWYgdG8gZG93bmxvYWQgdGhlIGZpbGVcclxuICAgKi9cclxuICBnZXRGb3JtRG93bmxvYWRlZChhcGlSb3V0ZTogc3RyaW5nKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3RoaXMudXJsICsgYXBpUm91dGV9YDtcclxuICB9XHJcbiAgLy9jb21tb24gaHR0cCBzZXJ2aWNlKG9wdGlvbmFsKVxyXG5cclxuICBoYW5kbGVFcnJvcihlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpIHtcclxuICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnJztcclxuICAgIGlmIChlcnJvci5lcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcclxuICAgICAgLy8gQ2xpZW50LXNpZGUgZXJyb3JzXHJcbiAgICAgIGVycm9yTWVzc2FnZSA9IGBFcnJvcjogJHtlcnJvci5lcnJvci5tZXNzYWdlfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTZXJ2ZXItc2lkZSBlcnJvcnNcclxuICAgICAgZXJyb3JNZXNzYWdlID0gYEVycm9yIENvZGU6ICR7ZXJyb3Iuc3RhdHVzfVxcbk1lc3NhZ2U6ICR7XHJcbiAgICAgICAgZXJyb3I/LmVycm9yPy5tZXNzYWdlID8gZXJyb3I/LmVycm9yPy5tZXNzYWdlIDogZXJyb3IubWVzc2FnZVxyXG4gICAgICB9YDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgfVxyXG4gIGdldFRva2VuKCk6IGFueSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5LZXkgPyB0aGlzLnRva2VuS2V5IDogJ2p3dC10b2tlbic7XHJcbiAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSh0b2tlbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==