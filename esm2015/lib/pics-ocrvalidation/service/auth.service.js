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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL29jci12YWxpZGF0aW9ucy9zcmMvbGliL3BpY3Mtb2NydmFsaWRhdGlvbi9zZXJ2aWNlL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBSXJELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyw0REFBNEQ7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7O0FBTS9DLE1BQU0sT0FBTyxXQUFXO0lBR3RCLFlBQ0UsUUFBa0IsRUFDVixXQUF3QixFQUN4QixPQUFlLEVBQ2YsS0FBZ0IsRUFDaEIsa0JBQXNDLEVBQ3RDLFVBQXdCO1FBSnhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFXO1FBQ2hCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZUFBVSxHQUFWLFVBQVUsQ0FBYztRQU0zQixZQUFPLEdBQUcsSUFBSSxlQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDOUMsbUJBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXRDLGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDbEQsb0JBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBUmhELElBQUksQ0FB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bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEF1dGhTdG9yZSB9IGZyb20gJy4uL2F1dGgvYXV0aC5zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBBdXRoVVJMIH0gZnJvbSAnLi4vY29uZmlnL2F1dGgtdXJsLmNvbmZpZyc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgZm9ya0pvaW4sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1lcmdlTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbi8vIGltcG9ydCB7IEFwcENvbnN0YW50cyB9IGZyb20gJy4uL2VudGl0aWVzL2FwcC1jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICcuL2FsZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDcmVkZW50aWFsc1NlcnZpY2UgfSBmcm9tICcuL2NyZWRlbnRpYWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9jYWxTZXJ2aWNlIH0gZnJvbSAnLi9sb2NhbC5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBzaGFyZWRJbmZvOiBhbnk7XHJcbiAgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2U7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXHJcbiAgICBwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSxcclxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogQXV0aFN0b3JlLFxyXG4gICAgcHJpdmF0ZSBjcmVkZW50aWFsc1NlcnZpY2U6IENyZWRlbnRpYWxzU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9jYWxzdG9yZTogTG9jYWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmFsZXJ0U2VydmljZSA9IGluamVjdG9yLmdldDxBbGVydFNlcnZpY2U+KEFsZXJ0U2VydmljZSk7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9yZ0luZm8gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oJycpO1xyXG4gIGN1cnJlbnRPcmdJbmZvID0gdGhpcy5vcmdJbmZvLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwdWJsaWMgY3VycmVudE1lbnUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oJycpO1xyXG4gIGN1cnJlbnRNZW51SW5mbyA9IHRoaXMuY3VycmVudE1lbnUuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGZlZWRPcmdJbmZvKGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5vcmdJbmZvLm5leHQoZGF0YSk7XHJcbiAgfVxyXG4gIGdldEN1cnJlbnRNZW51KGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5jdXJyZW50TWVudS5uZXh0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlck9yZ0xpc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLm9yZ0xpc3QpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VW5Ob3RpZmllZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIubm90aWZpY2F0aW9uKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVVuTm90aWZpZWQoZGF0YTphbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLm5vdGlmaWNhdGlvbiwgZGF0YSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVXb3JrZXJBdmFpbGFiaWxpdHkoZGF0YTphbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBhdGNoKEF1dGhVUkwuRW5kUG9pbnRzLmF1dGgudXNlci53b3JrZXJBdmFpbGFiaWxpdHksIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0V29ya2VyQXZhaWxhYmlsaXR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KEF1dGhVUkwuRW5kUG9pbnRzLmF1dGgudXNlci5nZXRXb3JrZXJBdmFpbGFiaWxpdHkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TXN0clRva2VuKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KEF1dGhVUkwuRW5kUG9pbnRzLmF1dGgubWljcm9zdHJhdGVneS5sb2dpbikucGlwZSgocmVzOmFueSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9naW4oZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgb3RwOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgIHNlY3JldDogb3RwID8gb3RwIDogJydcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5wb3N0KEF1dGhVUkwuRW5kUG9pbnRzLmF1dGgudXNlci5sb2dpbiwgYm9keSkucGlwZShcclxuICAgICAgbWVyZ2VNYXAoKHJlczogYW55KTogT2JzZXJ2YWJsZTxbYW55XT4gPT4ge1xyXG4gICAgICAgIGlmIChyZXNbJ2RhdGEnXSA9PT0gJ01GQV9DT0RFX1NFTkQnKSB7XHJcbiAgICAgICAgICByZXR1cm4gb2YocmVzWydkYXRhJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzU2VydmljZS5zZXRDcmVkZW50aWFscyhyZXNbJ2RhdGEnXS5pZFRva2VuLmp3dFRva2VuKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoVG9rZW4nLCByZXNbJ2RhdGEnXS5yZWZyZXNoVG9rZW4udG9rZW4pO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgcmVzWydkYXRhJ10uaWRUb2tlbi5wYXlsb2FkWydlbWFpbCddKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpZCcsIHJlc1snZGF0YSddLmlkVG9rZW4ucGF5bG9hZFsnY3VzdG9tOmlkJ10pO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgcmVzWydkYXRhJ10uaWRUb2tlbi5wYXlsb2FkWyduYW1lJ10pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFVzZXJJbmZvKCk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlZnJlc2hUb2tlbigpIHtcclxuICAgIGNvbnN0IGVtYWlsID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKTtcclxuICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hUb2tlbicpO1xyXG4gICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHJlZnJlc2hUb2tlblxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLnJlZnJlc2hUb2tlbiwgYm9keSkucGlwZShcclxuICAgICAgbWVyZ2VNYXAoKHJlczogYW55KTogYW55ID0+IHtcclxuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzU2VydmljZS5zZXRDcmVkZW50aWFscyhyZXNbJ2RhdGEnXS5pZFRva2VuLmp3dFRva2VuKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoVG9rZW4nLCByZXNbJ2RhdGEnXS5yZWZyZXNoVG9rZW4udG9rZW4pO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgcmVzWydkYXRhJ10uaWRUb2tlbi5wYXlsb2FkWydlbWFpbCddKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpZCcsIHJlc1snZGF0YSddLmlkVG9rZW4ucGF5bG9hZFsnY3VzdG9tOmlkJ10pO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgcmVzWydkYXRhJ10uaWRUb2tlbi5wYXlsb2FkWyduYW1lJ10pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZXcgdG9rZW4gZ2VuZXJhdGVkLi4uJywgcmVzWydkYXRhJ10uaWRUb2tlbi5qd3RUb2tlbik7XHJcbiAgICAgICAgcmV0dXJuIFtyZXNbJ2RhdGEnXS5pZFRva2VuLmp3dFRva2VuXTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXRMb2dnZWRJbigpIHtcclxuICAgIHRoaXMuaHR0cFNlcnZpY2VcclxuICAgICAgLnBvc3QoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLmxvZ291dCwge1xyXG4gICAgICAgIGVtYWlsOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdlbWFpbCcpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dnZWQgaW4gZmxhZyByZXNldCBzdWNjZXNzZnVsLicpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2dvdXQoKSB7XHJcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VXNlckluZm8oKTogT2JzZXJ2YWJsZTxbYW55XT4ge1xyXG4gICAgcmV0dXJuIGZvcmtKb2luKFt0aGlzLmh0dHBTZXJ2aWNlLmdldChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIudXNlckluZm8pXSkucGlwZShcclxuICAgICAgdGFwKChbdXNlcl0pID0+IHtcclxuICAgICAgICAvLyB0aGlzLnN0b3JlLmFkZEF1dGhJbmZvKHVzZXJbJ2RhdGEnXSk7XHJcbiAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFVzZXJSb2xlKGlkOmFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLnVzZXJSb2xlLnJlcGxhY2UoJ3tpZH0nLCBpZCkpLnBpcGUoKHJlczphbnkpID0+IHtcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJvdXRlVG9EeW5hbWljUGFnZShvcmdpZDphbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2VcclxuICAgICAgLmdldChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIucm91dGVUb0R5bmFtaWNQYWdlLnJlcGxhY2UoJ3tvcmdpZH0nLCBvcmdpZCkpXHJcbiAgICAgIC5waXBlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXV0aE1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KEF1dGhVUkwuRW5kUG9pbnRzLmF1dGgudXNlci5hdXRoTWUpO1xyXG4gIH1cclxuXHJcbiAgUmVzZXRQYXNzd29yZChkYXRhOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLnJlc2V0UGFzc3dvcmQsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFJvbGVLZXkoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5sb2NhbHN0b3JlLmdldE9iaigndXNlcicpO1xyXG4gICAgaWYgKHVzZXIgJiYgdXNlci5yb2xlKSB7XHJcbiAgICAgIHJldHVybiB1c2VyLnJvbGUucm9sZWtleTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0FkbWluKCkge1xyXG4gICAgcmV0dXJuICdBRE0nID09PSB0aGlzLmdldFJvbGVLZXkoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRPcmdJRCgpIHtcclxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLmxvY2Fsc3RvcmUuZ2V0T2JqKCd1c2VyJyk7XHJcbiAgICBpZiAodXNlciAmJiB1c2VyLnVzZXJXb3JrSW5mbyAmJiB1c2VyLnVzZXJXb3JrSW5mby5vcmdhbml6YXRpb24gJiYgdXNlci51c2VyV29ya0luZm8ub3JnYW5pemF0aW9uLmlkKSB7XHJcbiAgICAgIHJldHVybiB1c2VyLnVzZXJXb3JrSW5mby5vcmdhbml6YXRpb24uaWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25mb3JtTWFpbChkYXRhOmFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdChBdXRoVVJMLkVuZFBvaW50cy5hdXRoLnVzZXIuY29uZm9ybU1haWwsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFzc3dvcmQoZGF0YTphbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoQXV0aFVSTC5FbmRQb2ludHMuYXV0aC51c2VyLmNoYW5nZVBhc3N3b3JkLCBkYXRhKTtcclxuICB9XHJcblxyXG4gIHNldFNoYXJlZE1lc3NhZ2UoZGF0YTphbnkpIHtcclxuICAgIHRoaXMuc2hhcmVkSW5mbyA9IGRhdGE7XHJcbiAgfVxyXG5cclxuICBnZXRTaGFyZWRNZXNzYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hhcmVkSW5mbztcclxuICB9XHJcblxyXG4gIC8vIGFzeW5jIGNoZWNrRHluYW1pY1BhZ2VQZXJtaXNzaW9uKHBhZ2VJZDogYW55KSB7XHJcbiAgLy8gICBjb25zdCBkeW5hbWljUGFnZXMgPSBhd2FpdCB0aGlzLmdldEF1dGhvcml6ZWRQYWdlcygpO1xyXG4gIC8vICAgLy8gaWYgKHBhZ2VJZCkge1xyXG4gIC8vICAgLy8gICB0aGlzLmR5bmFtaWNUYWJQYWdlU2VydmljZS5nZXRQYWdlQnlJZChwYWdlSWQpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gIC8vICAgLy8gICAgIGlmIChkeW5hbWljUGFnZXMuc29tZShwYWdlID0+IHBhZ2UuaWQgPT09IHJlc1snZGF0YSddWzBdLmFjdGl2ZVZlcnNpb24uaWQpKSB7XHJcbiAgLy8gICAvLyAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW2BwYWdlcy9keW5hbWljLXNlYXJjaC9zZWFyY2gvJHtyZXNbJ2RhdGEnXVswXS5hY3RpdmVWZXJzaW9uLmlkfWBdKTtcclxuICAvLyAgIC8vICAgICB9IGVsc2Uge1xyXG4gIC8vICAgLy8gICAgICAgdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoXHJcbiAgLy8gICAvLyAgICAgICAgIGBZb3UgZG9uJ3QgaGF2ZSBwZXJtaXNzaW9ucyBmb3IgJHtyZXNbJ2RhdGEnXVswXS5hY3RpdmVWZXJzaW9uLnBhZ2VuYW1lfSAuIFBsZWFzZSBDb250YWN0IEFkbWluaXN0cmF0b3JgXHJcbiAgLy8gICAvLyAgICAgICApO1xyXG4gIC8vICAgLy8gICAgIH1cclxuICAvLyAgIC8vICAgfSk7XHJcbiAgLy8gICAvLyB9IGVsc2Uge1xyXG4gIC8vICAgLy8gICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihcclxuICAvLyAgIC8vICAgICAnWW91IGRvblxcJ3QgaGF2ZSBwZXJtaXNzaW9ucyB0byBwZXJmb3JtIHRoZSBmb2xsb3dpbmcgb3BlcmF0aW9ucyAuUGxlYXNlIENvbnRhY3QgQWRtaW5pc3RyYXRvcidcclxuICAvLyAgIC8vICAgKTtcclxuICAvLyAgIC8vIH1cclxuICAvLyB9XHJcblxyXG4gIGdldEN1cnJlbnRPcmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRVc2VyT3JnTGlzdCgpXHJcbiAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAudGhlbigocmVzcG9uc2U6YW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlWydkYXRhJ11bMF0uaWQ7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gYXN5bmMgZ2V0QXV0aG9yaXplZFBhZ2VzKCkge1xyXG4gIC8vICAgY29uc3Qgb3JnSWQgPSBhd2FpdCB0aGlzLmdldEN1cnJlbnRPcmcoKTtcclxuICAvLyAgIHJldHVybiB0aGlzLnBhZ2VIZWFkZXJTZXJ2aWNlXHJcbiAgLy8gICAgIC5nZXRBdXRob3JpemVkUGFnZXMob3JnSWQpXHJcbiAgLy8gICAgIC50b1Byb21pc2UoKVxyXG4gIC8vICAgICAudGhlbihcclxuICAvLyAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgLy8gICAgICAgICBjb25zdCBkeW5hbWljUGFnZSA9IHJlc3BvbnNlWydkYXRhJ10uZmlsdGVyKHBhZ2UgPT4ge1xyXG4gIC8vICAgICAgICAgICByZXR1cm4gKFxyXG4gIC8vICAgICAgICAgICAgIHBhZ2UuYWN0aXZlVmVyc2lvbiAmJlxyXG4gIC8vICAgICAgICAgICAgIChwYWdlLmFjdGl2ZVZlcnNpb24uZ3JpZGNvbmZpZyB8fCBwYWdlLmFjdGl2ZVZlcnNpb24udGVtcGxhdGVqc29uIHx8IHRoaXMuZ2V0Q3VzdG9tUGFnZShwYWdlKSlcclxuICAvLyAgICAgICAgICAgKTtcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgcmV0dXJuIGR5bmFtaWNQYWdlLm1hcChwYWdlID0+ICh7XHJcbiAgLy8gICAgICAgICAgIGlkOiBwYWdlLmFjdGl2ZVZlcnNpb24uaWQsXHJcbiAgLy8gICAgICAgICAgIG5hbWU6IHBhZ2UuYWN0aXZlVmVyc2lvbi5wYWdlbmFtZSxcclxuICAvLyAgICAgICAgICAgYWN0aXZlVmVyc2lvbjogcGFnZS5hY3RpdmVWZXJzaW9uXHJcbiAgLy8gICAgICAgICB9KSk7XHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICBfZXJyb3IgPT4gdGhpcy5hbGVydFNlcnZpY2UuZXJyb3IoQXBwQ29uc3RhbnRzLmVycm9yTWVzc2FnZSlcclxuICAvLyAgICAgKTtcclxuICAvLyB9XHJcblxyXG4gIGdldEN1c3RvbVBhZ2UocGFnZTphbnkpIHtcclxuICAgIGlmIChwYWdlLmFjdGl2ZVZlcnNpb24udGFiY29uZmlnKSB7XHJcbiAgICAgIGNvbnN0IHJvdXRpbmdUYWIgPSBKU09OLnBhcnNlKHBhZ2UuYWN0aXZlVmVyc2lvbi50YWJjb25maWcpLmZpbHRlcigoeDphbnkpID0+IHgudHlwZSA9PT0gJ1JPVVRJTkcnKTtcclxuICAgICAgcmV0dXJuIHJvdXRpbmdUYWIubGVuZ3RoICYmIHBhZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==