import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, ViewChild, Input, Output, NgModule } from '@angular/core';
import { BehaviorSubject, of, Subject, forkJoin } from 'rxjs';
import * as i1 from '@angular/router';
import { NavigationStart } from '@angular/router';
import { tap, mergeMap } from 'rxjs/operators';
import * as i1$1 from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map } from 'rxjs/internal/operators';
import { NgxfUploaderService } from 'ngxf-uploader';
import * as i3 from 'primeng/card';
import { CardModule } from 'primeng/card';

class OcrValidationsService {
    constructor() { }
}
OcrValidationsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
OcrValidationsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class OcrValidationServiceConfig {
}
OcrValidationServiceConfig.EndPoint = {
    OCRValidate: {
        GetNewOcrData: '/ocr/analyzeDocument',
        CreateReferral: '/ref/referral/create',
        SaveClientDetail: '/ref/client/create',
        SaveContactDetail: '/ref/contact/create',
        SaveProviderDetail: '/ref/provider/search',
        SaveReferralProvider: '/ref/referral-provider/create',
        CreateAttachment: '/ref/attachment/create',
        UpdateImgaCatogory: '/ocr/imageCategory/',
        CancelRefferral: '/file/delete-file'
    }
};
class RBACINFO {
    constructor() {
        this.apiHost = '';
        this.tokenKey = '';
    }
}
class Environment {
}

class Store {
    constructor(initialState) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    get state() {
        return this._state$.getValue();
    }
    setState(nextState) {
        this._state$.next(nextState);
    }
}

class PermissionStore extends Store {
    constructor() {
        super({});
    }
    setStore(data, type = 'P') {
        const permissionMap = {};
        if (type === 'P') {
            const flatData = [...this.flat(data)];
            flatData.forEach((permission) => {
                permissionMap[permission.name] = permission.allowed;
            });
            this.setState(Object.assign(Object.assign({}, this.state), permissionMap));
        }
        else {
            data.forEach((permission) => {
                permissionMap['GALKP_' + permission.key] = permission.lookuprolepermissions;
            });
            this.setState(Object.assign(Object.assign({}, this.state), permissionMap));
        }
    }
    getStore(type = 'P') {
        if (type === 'P')
            return of(this.state.permissions);
        else
            return of(this.state.lookupPermissions);
    }
    flat(array) {
        let result = [];
        array.forEach(item => {
            result.push(item);
            if (item.permissions && Array.isArray(item.permissions)) {
                result = result.concat(this.flat(item.permissions));
            }
        });
        return result;
    }
}
PermissionStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PermissionStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class DataStoreService {
    constructor() {
        this.currentStoreSubject = new BehaviorSubject({});
        this.currentStore = this.currentStoreSubject.asObservable();
        // test code
    }
    setData(key, value) {
        const currentStore = this.getCurrentStore();
        currentStore[key] = value;
        this.currentStoreSubject.next(currentStore);
    }
    setObject(value) {
        this.currentStoreSubject.next(value);
    }
    getData(key) {
        const currentStore = this.getCurrentStore();
        return currentStore[key];
    }
    clearStore() {
        const currentStore = this.getCurrentStore();
        Object.keys(currentStore).forEach(key => {
            delete currentStore[key];
        });
        this.currentStoreSubject.next(currentStore);
    }
    getCurrentStore() {
        return this.currentStoreSubject.value;
    }
}
DataStoreService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataStoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
DataStoreService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataStoreService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: DataStoreService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
class Alert {
}
class UserGroupDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRolePageDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRoleDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserDto {
    constructor(data) {
        Object.assign(this, data);
    }
}

class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new Subject();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }
    error(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }
    info(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }
    warn(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }
    alert(type, message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    }
    clear() {
        // clear alerts
        this.subject.next();
    }
}
AlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });

class AuthURL {
}
AuthURL.EndPoints = {
    auth: {
        user: {
            conformMail: '/org/auth/forgot-password',
            changePassword: '/org/auth/forgot-password-verification',
            login: '/org/auth/login',
            refreshToken: '/org/auth/refresh-token',
            logout: '/org/auth/logout',
            userInfo: '/org/user/page/list',
            userRole: '/org/user/{id}',
            routeToDynamicPage: '/page/organisation/{orgid}?returnUserPage=true&excludeNoActiveVersionPages=true',
            authMe: '/org/auth/me',
            resetPassword: '/org/user/reset-password',
            orgList: '/org/organization/tree',
            notification: '/worker/notification',
            workerAvailability: '/worker/updateAvailablity',
            getWorkerAvailability: '/worker/getByCurrentUser'
        },
        permission: {
            permissionRoleById: '/app/permission/role/{id}',
            pagePermission: '/app/permission/page',
            pageLookupPermission: '/app/permission/page/lookup'
        },
        microstrategy: {
            login: '/microstrategy/login',
            getLibrary: '/microstrategy/library'
        }
    }
};

class HttpService {
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
HttpService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService, deps: [{ token: i1$1.HttpClient }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: HttpService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }, { type: DataStoreService }]; } });

class AuthState {
}

class AuthStore extends Store {
    constructor(httpService) {
        super(new AuthState());
        this.httpService = httpService;
    }
    addAuthInfo(user) {
        this.setState(Object.assign(Object.assign({}, this.state), { user }));
    }
    getAuthInfo() {
        console.log(this.state);
        if (this.state.user) {
            return of(this.state.user);
        }
        else {
            return forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(tap(([user]) => {
                return user;
            }));
        }
    }
}
AuthStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthStore, deps: [{ token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthStore });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: HttpService }]; } });

const credentialsKey = 'jwt-token';
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
class CredentialsService {
    constructor() {
        this.token = null;
        const savedCredentials = sessionStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this.token = savedCredentials;
        }
    }
    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    isAuthenticated() {
        return !!this.credentials;
    }
    /**
     * Gets the user credentials.
     * @return The user credentials or null if the user is not authenticated.
     */
    get credentials() {
        return this.token;
    }
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    setCredentials(credentials) {
        this.token = credentials || null;
        if (credentials) {
            sessionStorage.setItem(credentialsKey, credentials);
        }
        else {
            sessionStorage.clear();
        }
    }
}
CredentialsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CredentialsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CredentialsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CredentialsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CredentialsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class StorageService {
    constructor(Storage) {
        this.Storage = Storage;
    }
    getItem(key) {
        return this.Storage.getItem(key);
    }
    setItem(key, item) {
        return this.Storage.setItem(key, item);
    }
    getObj(key, safe = true) {
        try {
            const item = this.getItem(key);
            return JSON.parse(item);
        }
        catch (e) {
            if (!safe) {
                throw e;
            }
        }
    }
    setObj(key, item) {
        return this.setItem(key, JSON.stringify(item));
    }
    removeItem(key) {
        this.Storage.removeItem(key);
    }
    clear() {
        this.Storage.clear();
    }
}

class LocalService extends StorageService {
    constructor() {
        super(window.sessionStorage);
    }
}
LocalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LocalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LocalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LocalService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: LocalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class AuthService {
    constructor(injector, httpService, _router, store, credentialsService, localstore) {
        this.httpService = httpService;
        this._router = _router;
        this.store = store;
        this.credentialsService = credentialsService;
        this.localstore = localstore;
        this.orgInfo = new BehaviorSubject('');
        this.currentOrgInfo = this.orgInfo.asObservable();
        this.currentMenu = new BehaviorSubject('');
        this.currentMenuInfo = this.currentMenu.asObservable();
        this.alertService = injector.get(AlertService);
    }
    feedOrgInfo(data) {
        this.orgInfo.next(data);
    }
    getCurrentMenu(data) {
        this.currentMenu.next(data);
    }
    getUserOrgList() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.orgList);
    }
    getUnNotified() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.notification);
    }
    updateUnNotified(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.notification, data);
    }
    updateWorkerAvailability(data) {
        return this.httpService.patch(AuthURL.EndPoints.auth.user.workerAvailability, data);
    }
    getWorkerAvailability() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.getWorkerAvailability);
    }
    getMstrToken() {
        return this.httpService.get(AuthURL.EndPoints.auth.microstrategy.login).pipe((res) => {
            return res;
        });
    }
    login(email, password, otp) {
        const body = {
            email: email,
            password: password,
            secret: otp ? otp : ''
        };
        return this.httpService.post(AuthURL.EndPoints.auth.user.login, body).pipe(mergeMap((res) => {
            if (res['data'] === 'MFA_CODE_SEND') {
                return of(res['data']);
            }
            this.credentialsService.setCredentials(res['data'].idToken.jwtToken);
            sessionStorage.setItem('refreshToken', res['data'].refreshToken.token);
            sessionStorage.setItem('email', res['data'].idToken.payload['email']);
            sessionStorage.setItem('id', res['data'].idToken.payload['custom:id']);
            sessionStorage.setItem('username', res['data'].idToken.payload['name']);
            return this.getUserInfo();
        }));
    }
    refreshToken() {
        const email = sessionStorage.getItem('email');
        const refreshToken = sessionStorage.getItem('refreshToken');
        const body = {
            email,
            refreshToken
        };
        return this.httpService.post(AuthURL.EndPoints.auth.user.refreshToken, body).pipe(mergeMap((res) => {
            this.credentialsService.setCredentials(res['data'].idToken.jwtToken);
            sessionStorage.setItem('refreshToken', res['data'].refreshToken.token);
            sessionStorage.setItem('email', res['data'].idToken.payload['email']);
            sessionStorage.setItem('id', res['data'].idToken.payload['custom:id']);
            sessionStorage.setItem('username', res['data'].idToken.payload['name']);
            console.log('new token generated...', res['data'].idToken.jwtToken);
            return [res['data'].idToken.jwtToken];
        }));
    }
    resetLoggedIn() {
        this.httpService
            .post(AuthURL.EndPoints.auth.user.logout, {
            email: sessionStorage.getItem('email')
        })
            .subscribe(() => {
            console.log('Logged in flag reset successful.');
        });
    }
    logout() {
        this._router.navigate(['/login']);
        sessionStorage.clear();
        localStorage.clear();
    }
    getUserInfo() {
        return forkJoin([this.httpService.get(AuthURL.EndPoints.auth.user.userInfo)]).pipe(tap(([user]) => {
            // this.store.addAuthInfo(user['data']);
            return user;
        }));
    }
    getUserRole(id) {
        return this.httpService.get(AuthURL.EndPoints.auth.user.userRole.replace('{id}', id)).pipe((res) => {
            return res;
        });
    }
    routeToDynamicPage(orgid) {
        return this.httpService
            .get(AuthURL.EndPoints.auth.user.routeToDynamicPage.replace('{orgid}', orgid))
            .pipe((res) => {
            return res;
        });
    }
    getAuthMe() {
        return this.httpService.get(AuthURL.EndPoints.auth.user.authMe);
    }
    ResetPassword(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.resetPassword, data);
    }
    getRoleKey() {
        const user = this.localstore.getObj('user');
        if (user && user.role) {
            return user.role.rolekey;
        }
    }
    isAdmin() {
        return 'ADM' === this.getRoleKey();
    }
    getOrgID() {
        const user = this.localstore.getObj('user');
        if (user && user.userWorkInfo && user.userWorkInfo.organization && user.userWorkInfo.organization.id) {
            return user.userWorkInfo.organization.id;
        }
        else {
            return '';
        }
    }
    conformMail(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.conformMail, data);
    }
    changePassword(data) {
        return this.httpService.post(AuthURL.EndPoints.auth.user.changePassword, data);
    }
    setSharedMessage(data) {
        this.sharedInfo = data;
    }
    getSharedMessage() {
        return this.sharedInfo;
    }
    // async checkDynamicPagePermission(pageId: any) {
    //   const dynamicPages = await this.getAuthorizedPages();
    //   // if (pageId) {
    //   //   this.dynamicTabPageService.getPageById(pageId).subscribe(res => {
    //   //     if (dynamicPages.some(page => page.id === res['data'][0].activeVersion.id)) {
    //   //       this._router.navigate([`pages/dynamic-search/search/${res['data'][0].activeVersion.id}`]);
    //   //     } else {
    //   //       this.alertService.error(
    //   //         `You don't have permissions for ${res['data'][0].activeVersion.pagename} . Please Contact Administrator`
    //   //       );
    //   //     }
    //   //   });
    //   // } else {
    //   //   this.alertService.error(
    //   //     'You don\'t have permissions to perform the following operations .Please Contact Administrator'
    //   //   );
    //   // }
    // }
    getCurrentOrg() {
        return this.getUserOrgList()
            .toPromise()
            .then((response) => {
            return response['data'][0].id;
        });
    }
    // async getAuthorizedPages() {
    //   const orgId = await this.getCurrentOrg();
    //   return this.pageHeaderService
    //     .getAuthorizedPages(orgId)
    //     .toPromise()
    //     .then(
    //       response => {
    //         const dynamicPage = response['data'].filter(page => {
    //           return (
    //             page.activeVersion &&
    //             (page.activeVersion.gridconfig || page.activeVersion.templatejson || this.getCustomPage(page))
    //           );
    //         });
    //         return dynamicPage.map(page => ({
    //           id: page.activeVersion.id,
    //           name: page.activeVersion.pagename,
    //           activeVersion: page.activeVersion
    //         }));
    //       },
    //       _error => this.alertService.error(AppConstants.errorMessage)
    //     );
    // }
    getCustomPage(page) {
        if (page.activeVersion.tabconfig) {
            const routingTab = JSON.parse(page.activeVersion.tabconfig).filter((x) => x.type === 'ROUTING');
            return routingTab.length && page;
        }
    }
}
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, deps: [{ token: i0.Injector }, { token: HttpService }, { token: i1.Router }, { token: AuthStore }, { token: CredentialsService }, { token: LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: HttpService }, { type: i1.Router }, { type: AuthStore }, { type: CredentialsService }, { type: LocalService }]; } });

class OcrValidationService {
    constructor(httpService) {
        this.httpService = httpService;
        console.log('log');
    }
    getUpload(obj) {
        return this.httpService.post(OcrValidationServiceConfig.EndPoint.OCRValidate.GetNewOcrData, JSON.parse(obj));
    }
}
OcrValidationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationService, deps: [{ token: HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
OcrValidationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: HttpService }]; } });

class OcrvalidationComponent {
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
OcrvalidationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrvalidationComponent, deps: [{ token: i0.Injector }, { token: OcrValidationService }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
OcrvalidationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: OcrvalidationComponent, selector: "lib-ocrvalidation", inputs: { formResponseData: "formResponseData", currenttemplateResult: "currenttemplateResult", submitionData: "submitionData" }, outputs: { ocrResponse: "ocrResponse" }, viewQueries: [{ propertyName: "formJson", first: true, predicate: ["formIO"], descendants: true }], ngImport: i0, template: "<div class=\"card\">\n    <div class=\"row\">\n      <div class=\"col pr-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Uploaded Document\">\n          <img [src]=\"imgUrl\" alt=\"document\" class=\"w-100\" />\n        </p-card>\n      </div>\n      <div class=\"col pl-2\">\n        <p-card styleClass=\"w-100 h-100\" header=\"Document Information\">\n          <div class=\"col-12 dynamic-page mt-0\" *ngIf=\"isformIO\">\n            <!-- <formio\n              #formIO\n              [form]=\"jsonForm\"\n              [readOnly]=\"isReadOnly\"\n              [submission]=\"submitionData\"\n              [refresh]=\"triggerRefresh\"></formio> -->\n          </div>\n          <button type=\"button\" class=\"btn btn-cancel\" (click)=\"backToForm()\">Done</button>\n        </p-card>\n      </div>\n    </div>\n  </div>\n", styles: [":host ::ng-deep .p-card .p-card-content{padding:0}:host ::ng-deep .p-card .success{border-color:#146a5d;color:#146a5d}\n"], components: [{ type: i3.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrvalidationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-ocrvalidation',
                    templateUrl: './ocrvalidation.component.html',
                    styleUrls: ['./ocrvalidation.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: OcrValidationService }, { type: DataStoreService }]; }, propDecorators: { 
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

class OcrValidationsComponent {
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
OcrValidationsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationsComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
OcrValidationsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: OcrValidationsComponent, selector: "lib-ocr-validations", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", ocrEvent: "ocrEvent" }, ngImport: i0, template: `
   <lib-ocrvalidation></lib-ocrvalidation>
  `, isInline: true, components: [{ type: OcrvalidationComponent, selector: "lib-ocrvalidation", inputs: ["formResponseData", "currenttemplateResult", "submitionData"], outputs: ["ocrResponse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: OcrValidationsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-ocr-validations',
                    template: `
   <lib-ocrvalidation></lib-ocrvalidation>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], ocrEvent: [{
                type: Input
            }] } });

class OcrValidationsModule {
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

/*
 * Public API Surface of ocr-validations
 */

/**
 * Generated bundle index. Do not edit.
 */

export { OcrValidationsComponent, OcrValidationsModule, OcrValidationsService };
//# sourceMappingURL=pics-core-ocr-validations.js.map
