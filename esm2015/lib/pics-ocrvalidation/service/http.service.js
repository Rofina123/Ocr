import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL29jci12YWxpZGF0aW9ucy9zcmMvbGliL3BpY3Mtb2NydmFsaWRhdGlvbi9zZXJ2aWNlL2h0dHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlDLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd2QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDakUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBTTlDLE1BQU0sT0FBTyxXQUFXO0lBZXRCLFlBQW9CLElBQWdCLEVBQVMsYUFBK0I7UUFBeEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQWI1RSxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVuQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBRU4sWUFBTyxHQUFHLElBQUksV0FBVyxFQUFFO2FBQy9CLEdBQUcsQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUM7YUFDakMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQzthQUN2QyxHQUFHLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFMUIsZ0JBQVcsR0FBNkIsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDNUUsdUJBQWtCLEdBQTZCLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBSXhGLHlFQUF5RTtRQUN6RSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNyRCxJ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QUFDLFdBQVcsQ0FBQztRQUMxRCxPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7eUdBOUdVLFdBQVc7NkdBQVgsV0FBVyxjQUZWLE1BQU07NEZBRVAsV0FBVztrQkFIdkIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL2ludGVybmFsL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL3Rocm93RXJyb3InO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL2ludGVybmFsL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IERhdGFTdG9yZVNlcnZpY2UgfSBmcm9tICcuL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSB7XHJcbiAgUkJBQ09SRzogYW55O1xyXG4gIG92ZXJyaWRlVXJsID0gdHJ1ZTtcclxuICBlcnJvckRhdGEhOiBIdHRwRXJyb3JSZXNwb25zZTtcclxuICBiYXNlVXJsID0gJyc7XHJcbiAgdG9rZW5LZXk6IGFueTtcclxuICBwdWJsaWMgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXHJcbiAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXHJcbiAgICAuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpXHJcbiAgICAuc2V0KCdyb2xlJywgJ3JvbGU9Q1BfUFVCTElDJyk7XHJcblxyXG4gIHB1YmxpYyBzaG93U3Bpbm5lcjogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgcHVibGljIG91dHNpZGVTaG93U3Bpbm5lcjogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgdXJsMTogc3RyaW5nO1xyXG4gIHVybCE6IHN0cmluZztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQscHJpdmF0ZSBfc3RvcmVzZXJ2aWNlOiBEYXRhU3RvcmVTZXJ2aWNlKSB7XHJcbiAgICAvLyB0aGlzLnVybCA9IGVudmlyb25tZW50LmFwaUhvc3Q7IC8vdXJsIGZyb20gY29uZmlnIGZpbGUgb3IgZW52aXJvbm1lbnRzXHJcbiAgICB0aGlzLl9zdG9yZXNlcnZpY2UuY3VycmVudFN0b3JlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgaWYgKHJlc1snUkJBQ09SRyddICYmIHJlc1snUkJBQ09SRyddICE9PSAnJykge1xyXG4gICAgICAgIHRoaXMuUkJBQ09SRyA9IHJlc1snUkJBQ09SRyddO1xyXG4gICAgICAgIHRoaXMudXJsID0gdGhpcy5SQkFDT1JHWydhcGlIb3N0J10gPyB0aGlzLlJCQUNPUkdbJ2FwaUhvc3QnXSA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpJztcclxuICAgICAgICB0aGlzLnRva2VuS2V5ID0gdGhpcy5SQkFDT1JHWyd0b2tlbktleSddO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudXJsMSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0KGFwaVJvdXRlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMudXJsICsgYXBpUm91dGV9YCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLmdldEh0dHBIZWFkZXJzKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcG9zdChhcGlSb3V0ZTogc3RyaW5nLCBib2R5OiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnVybCArIGFwaVJvdXRlfWAsIGJvZHksIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5nZXRIdHRwSGVhZGVycygpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1dChhcGlSb3V0ZTogc3RyaW5nLCBib2R5OiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGAke3RoaXMudXJsICsgYXBpUm91dGV9YCwgYm9keSwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLmdldEh0dHBIZWFkZXJzKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGF0Y2goYXBpUm91dGU6IHN0cmluZywgYm9keT86IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaChgJHt0aGlzLnVybCArIGFwaVJvdXRlfWAsIGJvZHksIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5nZXRIdHRwSGVhZGVycygpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZShhcGlSb3V0ZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLnVybCArIGFwaVJvdXRlfWAsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5nZXRIdHRwSGVhZGVycygpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEh0dHBIZWFkZXJzKCk6IEh0dHBIZWFkZXJzIHtcclxuICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ2tleScsICd2YWx1ZScpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXR0YWNobWVudEh0dHBIZWFkZXJzKGNvbnRlbnRUeXBlOmFueSk6IEh0dHBIZWFkZXJzIHtcclxuICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlKTtcclxuICB9XHJcbiAgcHV0VXBsb2FkKGFwaVJvdXRlOiBzdHJpbmcsIGJvZHk6IGFueSwgY29udGVudFR5cGU6YW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChgJHthcGlSb3V0ZX1gLCBib2R5LCB7IGhlYWRlcnM6IHRoaXMuZ2V0QXR0YWNobWVudEh0dHBIZWFkZXJzKGNvbnRlbnRUeXBlKSB9KTtcclxuICB9XHJcblxyXG4gIHB1dHVwbG9hZDIoYXBpUm91dGU6IHN0cmluZywgYm9keTogYW55LCBjb250ZW50dHlwZTphbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAucHV0KGAke3RoaXMudXJsMSArIGFwaVJvdXRlfWAsIGJvZHksIHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmdldEF0dGFjaG1lbnRIdHRwSGVhZGVycyhjb250ZW50dHlwZSksXHJcbiAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJ1xyXG4gICAgICB9KVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuICBnZXRBdXRvc3VnZ2VzdCh1cmw6YW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt1cmx9YCk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGFwaVJvdXRlXHJcbiAgICogVGhpcyBmdW5jdGlvbiB3aWxsIGRvd25sb2FkIHRoZSBzdHJlYW0gZmlsZSBmcm9tIHRoZSBBUEkgc2VydmljZS5cclxuICAgKiBObyBIVFRQIHJlcXVpcmVkIGZvciB0aGlzIHN0cmVhbS4gU28gdXNlZCBXaW5kb3cubG9jYXRpb24uaHJlZiB0byBkb3dubG9hZCB0aGUgZmlsZVxyXG4gICAqL1xyXG4gIGdldEZvcm1Eb3dubG9hZGVkKGFwaVJvdXRlOiBzdHJpbmcpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dGhpcy51cmwgKyBhcGlSb3V0ZX1gO1xyXG4gIH1cclxuICAvL2NvbW1vbiBodHRwIHNlcnZpY2Uob3B0aW9uYWwpXHJcblxyXG4gIGhhbmRsZUVycm9yKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkge1xyXG4gICAgbGV0IGVycm9yTWVzc2FnZSA9ICcnO1xyXG4gICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xyXG4gICAgICAvLyBDbGllbnQtc2lkZSBlcnJvcnNcclxuICAgICAgZXJyb3JNZXNzYWdlID0gYEVycm9yOiAke2Vycm9yLmVycm9yLm1lc3NhZ2V9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFNlcnZlci1zaWRlIGVycm9yc1xyXG4gICAgICBlcnJvck1lc3NhZ2UgPSBgRXJyb3IgQ29kZTogJHtlcnJvci5zdGF0dXN9XFxuTWVzc2FnZTogJHtcclxuICAgICAgICBlcnJvcj8uZXJyb3I/Lm1lc3NhZ2UgPyBlcnJvcj8uZXJyb3I/Lm1lc3NhZ2UgOiBlcnJvci5tZXNzYWdlXHJcbiAgICAgIH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICB9XHJcbiAgZ2V0VG9rZW4oKTogYW55IHtcclxuICAgIGNvbnN0IHRva2VuID0gdGhpcy50b2tlbktleSA/IHRoaXMudG9rZW5LZXkgOiAnand0LXRva2VuJztcclxuICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHRva2VuKTtcclxuICB9XHJcbn1cclxuIl19