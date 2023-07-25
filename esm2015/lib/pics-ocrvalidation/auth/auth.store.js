import { Injectable } from '@angular/core';
import { Store } from '../service/store.service';
import { forkJoin, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthURL } from '../config/auth-url.config';
import { AuthState } from './auth.state';
import * as i0 from "@angular/core";
import * as i1 from "../service/http.service";
export class AuthStore extends Store {
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
AuthStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthStore, deps: [{ token: i1.HttpService }], target: i0.ɵɵFactoryTarget.Injectable });
AuthStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthStore });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AuthStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9vY3ItdmFsaWRhdGlvbnMvc3JjL2xpYi9waWNzLW9jcnZhbGlkYXRpb24vYXV0aC9hdXRoLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O0FBRXpDLE1BQU0sT0FBTyxTQUFVLFNBQVEsS0FBZ0I7SUFDN0MsWUFBb0IsV0FBd0I7UUFDMUMsS0FBSyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztRQURMLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRTVDLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBYTtRQUN2QixJQUFJLENBQUMsUUFBUSxpQ0FBTSxJQUFJLENBQUMsS0FBSyxLQUFFLElBQUksSUFBRyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUNuQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDTCxPQUFPLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNoRixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDOzt1R0FwQlUsU0FBUzsyR0FBVCxTQUFTOzRGQUFULFNBQVM7a0JBRHJCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXJEdG8gfSBmcm9tICcuLi9jb21tb24vY29tbW9uLmVudGl0eSc7XHJcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9odHRwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4uL3NlcnZpY2Uvc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IGZvcmtKb2luLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEF1dGhVUkwgfSBmcm9tICcuLi9jb25maWcvYXV0aC11cmwuY29uZmlnJztcclxuaW1wb3J0IHsgQXV0aFN0YXRlIH0gZnJvbSAnLi9hdXRoLnN0YXRlJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFN0b3JlIGV4dGVuZHMgU3RvcmU8QXV0aFN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHtcclxuICAgIHN1cGVyKG5ldyBBdXRoU3RhdGUoKSk7XHJcbiAgfVxyXG5cclxuICBhZGRBdXRoSW5mbyh1c2VyOiBVc2VyRHRvKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgdXNlciB9KTtcclxuICB9XHJcblxyXG4gIGdldEF1dGhJbmZvKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgIGlmICh0aGlzLnN0YXRlLnVzZXIpIHtcclxuICAgICAgcmV0dXJuIG9mKHRoaXMuc3RhdGUudXNlcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZm9ya0pvaW4oW3RoaXMuaHR0cFNlcnZpY2UuZ2V0KEF1dGhVUkwuRW5kUG9pbnRzLmF1dGgudXNlci51c2VySW5mbyldKS5waXBlKFxyXG4gICAgICAgIHRhcCgoW3VzZXJdKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=