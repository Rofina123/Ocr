import { Injectable } from '@angular/core';
import { AuthURL } from '../config/auth-url.config';
import { BehaviorSubject, forkJoin, of } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
// import { AppConstants } from '../entities/app-constants';
import { AlertService } from './alert.service';
import * as i0 from "@angular/core";
import * as i1 from "./http.service";
import * as i2 from "@angular/router";
import * as i3 from "../auth/auth.store";
import * as i4 from "./credentials.service";
import * as i5 from "./local.service";
export class AuthService {
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
AuthService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, deps: [{ token: i0.Injector }, { token: i1.HttpService }, { token: i2.Router }, { token: i3.AuthStore }, { token: i4.CredentialsService }, { token: i5.LocalService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.HttpService }, { type: i2.Router }, { type: i3.AuthStore }, { type: i4.CredentialsService }, { type: i5.LocalService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL29jci12YWxpZGF0aW9uL3NyYy9saWIvcGljcy1vY3J2YWxpZGF0aW9uL3NlcnZpY2UvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFJckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLDREQUE0RDtBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7QUFNL0MsTUFBTSxPQUFPLFdBQVc7SUFHdEIsWUFDRSxRQUFrQixFQUNWLFdBQXdCLEVBQ3hCLE9BQWUsRUFDZixLQUFnQixFQUNoQixrQkFBc0MsRUFDdEMsVUFBd0I7UUFKeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQVc7UUFDaEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxlQUFVLEdBQVYsVUFBVSxDQUFjO1FBTTNCLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUM5QyxtQkFBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdEMsZ0JBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUNsRCxvQkFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7UUFSaEQsSUFBSSxDQUFD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ZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQXV0aFN0b3JlIH0gZnJvbSAnLi4vYXV0aC9hdXRoLnN0b3JlJztcclxuXHJcbmltcG9ydCB7IEF1dGhVUkwgfSBmcm9tICcuLi9jb25maWcvYXV0aC11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmb3JrSm9pbiwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWVyZ2VNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuLy8gaW1wb3J0IHsgQXBwQ29uc3RhbnRzIH0gZnJvbSAnLi4vZW50aXRpZXMvYXBwLWNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJy4vYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IENyZWRlbnRpYWxzU2VydmljZSB9IGZyb20gJy4vY3JlZGVudGlhbHMuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBMb2NhbFNlcnZpY2UgfSBmcm9tICcuL2xvY2FsLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIHNoYXJlZEluZm86IGFueTtcclxuICBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGluamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHN0b3JlOiBBdXRoU3RvcmUsXHJcbiAgICBwcml2YXRlIGNyZWRlbnRpYWxzU2VydmljZTogQ3JlZGVudGlhbHNTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhbHN0b3JlOiBMb2NhbFNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuYWxlcnRTZXJ2aWNlID0gaW5qZWN0b3IuZ2V0PEFsZXJ0U2VydmljZT4oQWxlcnRTZXJ2aWNlKTtcclxuICAgXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3JnSW5mbyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PignJyk7XHJcbiAgY3VycmVudE9yZ0luZm8gPSB0aGlzLm9yZ0luZm8uYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIHB1YmxpYyBjdXJyZW50TWVudSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PignJyk7XHJcbiAgY3VycmVudE1lbnVJbmZvID0gdGhpcy5jdXJyZW50TWVudS5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgZmVlZE9yZ0luZm8oZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLm9yZ0luZm8ubmV4dChkYXRhKTtcclxuICB9XHJcbiAgZ2V0Q3VycmVudE1lbnUoZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLmN1cnJlbnRNZW51Lm5leHQoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VyT3JnTGlzdCgpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIub3JnTGlzdCk7XHJcbiAgfVxyXG5cclxuICBnZXRVbk5vdGlmaWVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KEF1dGhVUkwuRW5kUG9pbnRzLmF1dGgudXNlci5ub3RpZmljYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVW5Ob3RpZmllZChkYXRhOmFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIubm90aWZpY2F0aW9uLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVdvcmtlckF2YWlsYWJpbGl0eShkYXRhOmFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucGF0Y2goQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLndvcmtlckF2YWlsYWJpbGl0eSwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBnZXRXb3JrZXJBdmFpbGFiaWxpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLmdldFdvcmtlckF2YWlsYWJpbGl0eSk7XHJcbiAgfVxyXG5cclxuICBnZXRNc3RyVG9rZW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC5taWNyb3N0cmF0ZWd5LmxvZ2luKS5waXBlKChyZXM6YW55KSA9PiB7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2dpbihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBvdHA6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgc2VjcmV0OiBvdHAgPyBvdHAgOiAnJ1xyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLmxvZ2luLCBib2R5KS5waXBlKFxyXG4gICAgICBtZXJnZU1hcCgocmVzOiBhbnkpOiBPYnNlcnZhYmxlPFthbnldPiA9PiB7XHJcbiAgICAgICAgaWYgKHJlc1snZGF0YSddID09PSAnTUZBX0NPREVfU0VORCcpIHtcclxuICAgICAgICAgIHJldHVybiBvZihyZXNbJ2RhdGEnXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3JlZGVudGlhbHNTZXJ2aWNlLnNldENyZWRlbnRpYWxzKHJlc1snZGF0YSddLmlkVG9rZW4uand0VG9rZW4pO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlZnJlc2hUb2tlbicsIHJlc1snZGF0YSddLnJlZnJlc2hUb2tlbi50b2tlbik7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCByZXNbJ2RhdGEnXS5pZFRva2VuLnBheWxvYWRbJ2VtYWlsJ10pO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2lkJywgcmVzWydkYXRhJ10uaWRUb2tlbi5wYXlsb2FkWydjdXN0b206aWQnXSk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCByZXNbJ2RhdGEnXS5pZFRva2VuLnBheWxvYWRbJ25hbWUnXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVmcmVzaFRva2VuKCkge1xyXG4gICAgY29uc3QgZW1haWwgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpO1xyXG4gICAgY29uc3QgcmVmcmVzaFRva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaFRva2VuJyk7XHJcbiAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICBlbWFpbCxcclxuICAgICAgcmVmcmVzaFRva2VuXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIucmVmcmVzaFRva2VuLCBib2R5KS5waXBlKFxyXG4gICAgICBtZXJnZU1hcCgocmVzOiBhbnkpOiBhbnkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3JlZGVudGlhbHNTZXJ2aWNlLnNldENyZWRlbnRpYWxzKHJlc1snZGF0YSddLmlkVG9rZW4uand0VG9rZW4pO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3JlZnJlc2hUb2tlbicsIHJlc1snZGF0YSddLnJlZnJlc2hUb2tlbi50b2tlbik7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCByZXNbJ2RhdGEnXS5pZFRva2VuLnBheWxvYWRbJ2VtYWlsJ10pO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2lkJywgcmVzWydkYXRhJ10uaWRUb2tlbi5wYXlsb2FkWydjdXN0b206aWQnXSk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCByZXNbJ2RhdGEnXS5pZFRva2VuLnBheWxvYWRbJ25hbWUnXSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25ldyB0b2tlbiBnZW5lcmF0ZWQuLi4nLCByZXNbJ2RhdGEnXS5pZFRva2VuLmp3dFRva2VuKTtcclxuICAgICAgICByZXR1cm4gW3Jlc1snZGF0YSddLmlkVG9rZW4uand0VG9rZW5dO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldExvZ2dlZEluKCkge1xyXG4gICAgdGhpcy5odHRwU2VydmljZVxyXG4gICAgICAucG9zdChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIubG9nb3V0LCB7XHJcbiAgICAgICAgZW1haWw6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJylcclxuICAgICAgfSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0xvZ2dlZCBpbiBmbGFnIHJlc2V0IHN1Y2Nlc3NmdWwuJyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvZ291dCgpIHtcclxuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRVc2VySW5mbygpOiBPYnNlcnZhYmxlPFthbnldPiB7XHJcbiAgICByZXR1cm4gZm9ya0pvaW4oW3RoaXMuaHR0cFNlcnZpY2UuZ2V0KEF1dGhVUkwuRW5kUG9pbnRzLmF1dGgudXNlci51c2VySW5mbyldKS5waXBlKFxyXG4gICAgICB0YXAoKFt1c2VyXSkgPT4ge1xyXG4gICAgICAgIC8vIHRoaXMuc3RvcmUuYWRkQXV0aEluZm8odXNlclsnZGF0YSddKTtcclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VXNlclJvbGUoaWQ6YW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIudXNlclJvbGUucmVwbGFjZSgne2lkfScsIGlkKSkucGlwZSgocmVzOmFueSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcm91dGVUb0R5bmFtaWNQYWdlKG9yZ2lkOmFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZVxyXG4gICAgICAuZ2V0KEF1dGhVUkwuRW5kUG9pbnRzLmF1dGgudXNlci5yb3V0ZVRvRHluYW1pY1BhZ2UucmVwbGFjZSgne29yZ2lkfScsIG9yZ2lkKSlcclxuICAgICAgLnBpcGUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRBdXRoTWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLmF1dGhNZSk7XHJcbiAgfVxyXG5cclxuICBSZXNldFBhc3N3b3JkKGRhdGE6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIucmVzZXRQYXNzd29yZCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Um9sZUtleSgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLmxvY2Fsc3RvcmUuZ2V0T2JqKCd1c2VyJyk7XHJcbiAgICBpZiAodXNlciAmJiB1c2VyLnJvbGUpIHtcclxuICAgICAgcmV0dXJuIHVzZXIucm9sZS5yb2xla2V5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQWRtaW4oKSB7XHJcbiAgICByZXR1cm4gJ0FETScgPT09IHRoaXMuZ2V0Um9sZUtleSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldE9yZ0lEKCkge1xyXG4gICAgY29uc3QgdXNlciA9IHRoaXMubG9jYWxzdG9yZS5nZXRPYmooJ3VzZXInKTtcclxuICAgIGlmICh1c2VyICYmIHVzZXIudXNlcldvcmtJbmZvICYmIHVzZXIudXNlcldvcmtJbmZvLm9yZ2FuaXphdGlvbiAmJiB1c2VyLnVzZXJXb3JrSW5mby5vcmdhbml6YXRpb24uaWQpIHtcclxuICAgICAgcmV0dXJuIHVzZXIudXNlcldvcmtJbmZvLm9yZ2FuaXphdGlvbi5pZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbmZvcm1NYWlsKGRhdGE6YW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KEF1dGhVUkwuRW5kUG9pbnRzLmF1dGgudXNlci5jb25mb3JtTWFpbCwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYXNzd29yZChkYXRhOmFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIuY2hhbmdlUGFzc3dvcmQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2hhcmVkTWVzc2FnZShkYXRhOmFueSkge1xyXG4gICAgdGhpcy5zaGFyZWRJbmZvID0gZGF0YTtcclxuICB9XHJcblxyXG4gIGdldFNoYXJlZE1lc3NhZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaGFyZWRJbmZvO1xyXG4gIH1cclxuXHJcbiAgLy8gYXN5bmMgY2hlY2tEeW5hbWljUGFnZVBlcm1pc3Npb24ocGFnZUlkOiBhbnkpIHtcclxuICAvLyAgIGNvbnN0IGR5bmFtaWNQYWdlcyA9IGF3YWl0IHRoaXMuZ2V0QXV0aG9yaXplZFBhZ2VzKCk7XHJcbiAgLy8gICAvLyBpZiAocGFnZUlkKSB7XHJcbiAgLy8gICAvLyAgIHRoaXMuZHluYW1pY1RhYlBhZ2VTZXJ2aWNlLmdldFBhZ2VCeUlkKHBhZ2VJZCkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgLy8gICAvLyAgICAgaWYgKGR5bmFtaWNQYWdlcy5zb21lKHBhZ2UgPT4gcGFnZS5pZCA9PT0gcmVzWydkYXRhJ11bMF0uYWN0aXZlVmVyc2lvbi5pZCkpIHtcclxuICAvLyAgIC8vICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbYHBhZ2VzL2R5bmFtaWMtc2VhcmNoL3NlYXJjaC8ke3Jlc1snZGF0YSddWzBdLmFjdGl2ZVZlcnNpb24uaWR9YF0pO1xyXG4gIC8vICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgLy8gICAvLyAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihcclxuICAvLyAgIC8vICAgICAgICAgYFlvdSBkb24ndCBoYXZlIHBlcm1pc3Npb25zIGZvciAke3Jlc1snZGF0YSddWzBdLmFjdGl2ZVZlcnNpb24ucGFnZW5hbWV9IC4gUGxlYXNlIENvbnRhY3QgQWRtaW5pc3RyYXRvcmBcclxuICAvLyAgIC8vICAgICAgICk7XHJcbiAgLy8gICAvLyAgICAgfVxyXG4gIC8vICAgLy8gICB9KTtcclxuICAvLyAgIC8vIH0gZWxzZSB7XHJcbiAgLy8gICAvLyAgIHRoaXMuYWxlcnRTZXJ2aWNlLmVycm9yKFxyXG4gIC8vICAgLy8gICAgICdZb3UgZG9uXFwndCBoYXZlIHBlcm1pc3Npb25zIHRvIHBlcmZvcm0gdGhlIGZvbGxvd2luZyBvcGVyYXRpb25zIC5QbGVhc2UgQ29udGFjdCBBZG1pbmlzdHJhdG9yJ1xyXG4gIC8vICAgLy8gICApO1xyXG4gIC8vICAgLy8gfVxyXG4gIC8vIH1cclxuXHJcbiAgZ2V0Q3VycmVudE9yZygpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFVzZXJPcmdMaXN0KClcclxuICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZTphbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VbJ2RhdGEnXVswXS5pZDtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBhc3luYyBnZXRBdXRob3JpemVkUGFnZXMoKSB7XHJcbiAgLy8gICBjb25zdCBvcmdJZCA9IGF3YWl0IHRoaXMuZ2V0Q3VycmVudE9yZygpO1xyXG4gIC8vICAgcmV0dXJuIHRoaXMucGFnZUhlYWRlclNlcnZpY2VcclxuICAvLyAgICAgLmdldEF1dGhvcml6ZWRQYWdlcyhvcmdJZClcclxuICAvLyAgICAgLnRvUHJvbWlzZSgpXHJcbiAgLy8gICAgIC50aGVuKFxyXG4gIC8vICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAvLyAgICAgICAgIGNvbnN0IGR5bmFtaWNQYWdlID0gcmVzcG9uc2VbJ2RhdGEnXS5maWx0ZXIocGFnZSA9PiB7XHJcbiAgLy8gICAgICAgICAgIHJldHVybiAoXHJcbiAgLy8gICAgICAgICAgICAgcGFnZS5hY3RpdmVWZXJzaW9uICYmXHJcbiAgLy8gICAgICAgICAgICAgKHBhZ2UuYWN0aXZlVmVyc2lvbi5ncmlkY29uZmlnIHx8IHBhZ2UuYWN0aXZlVmVyc2lvbi50ZW1wbGF0ZWpzb24gfHwgdGhpcy5nZXRDdXN0b21QYWdlKHBhZ2UpKVxyXG4gIC8vICAgICAgICAgICApO1xyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICByZXR1cm4gZHluYW1pY1BhZ2UubWFwKHBhZ2UgPT4gKHtcclxuICAvLyAgICAgICAgICAgaWQ6IHBhZ2UuYWN0aXZlVmVyc2lvbi5pZCxcclxuICAvLyAgICAgICAgICAgbmFtZTogcGFnZS5hY3RpdmVWZXJzaW9uLnBhZ2VuYW1lLFxyXG4gIC8vICAgICAgICAgICBhY3RpdmVWZXJzaW9uOiBwYWdlLmFjdGl2ZVZlcnNpb25cclxuICAvLyAgICAgICAgIH0pKTtcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIF9lcnJvciA9PiB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihBcHBDb25zdGFudHMuZXJyb3JNZXNzYWdlKVxyXG4gIC8vICAgICApO1xyXG4gIC8vIH1cclxuXHJcbiAgZ2V0Q3VzdG9tUGFnZShwYWdlOmFueSkge1xyXG4gICAgaWYgKHBhZ2UuYWN0aXZlVmVyc2lvbi50YWJjb25maWcpIHtcclxuICAgICAgY29uc3Qgcm91dGluZ1RhYiA9IEpTT04ucGFyc2UocGFnZS5hY3RpdmVWZXJzaW9uLnRhYmNvbmZpZykuZmlsdGVyKCh4OmFueSkgPT4geC50eXBlID09PSAnUk9VVElORycpO1xyXG4gICAgICByZXR1cm4gcm91dGluZ1RhYi5sZW5ndGggJiYgcGFnZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19