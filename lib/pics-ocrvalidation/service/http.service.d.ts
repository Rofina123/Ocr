import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { DataStoreService } from './data-store.service';
import * as i0 from "@angular/core";
export declare class HttpService {
    private http;
    private _storeservice;
    RBACORG: any;
    overrideUrl: boolean;
    errorData: HttpErrorResponse;
    baseUrl: string;
    tokenKey: any;
    headers: HttpHeaders;
    showSpinner: BehaviorSubject<boolean>;
    outsideShowSpinner: BehaviorSubject<boolean>;
    url1: string;
    url: string;
    constructor(http: HttpClient, _storeservice: DataStoreService);
    get(apiRoute: string): Observable<Object>;
    post(apiRoute: string, body: any): Observable<Object>;
    put(apiRoute: string, body: any): Observable<Object>;
    patch(apiRoute: string, body?: any): Observable<Object>;
    delete(apiRoute: string): Observable<Object>;
    getHttpHeaders(): HttpHeaders;
    getAttachmentHttpHeaders(contentType: any): HttpHeaders;
    putUpload(apiRoute: string, body: any, contentType: any): Observable<Object>;
    putupload2(apiRoute: string, body: any, contenttype: any): Observable<any>;
    getAutosuggest(url: any): Observable<Object>;
    /**
     *
     * @param apiRoute
     * This function will download the stream file from the API service.
     * No HTTP required for this stream. So used Window.location.href to download the file
     */
    getFormDownloaded(apiRoute: string): void;
    handleError(error: HttpErrorResponse): Observable<never>;
    getToken(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpService>;
}
