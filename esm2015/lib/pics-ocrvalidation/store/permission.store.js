import { Injectable } from '@angular/core';
import { Store } from '../service/store.service';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
export class PermissionStore extends Store {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9vY3ItdmFsaWRhdGlvbnMvc3JjL2xpYi9waWNzLW9jcnZhbGlkYXRpb24vc3RvcmUvcGVybWlzc2lvbi5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNqRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUd0QyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxLQUFVO0lBQzdDO1FBQ0UsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFTLEVBQUUsT0FBZSxHQUFHO1FBQ3BDLE1BQU0sYUFBYSxHQUE0QixFQUFFLENBQUM7UUFDbEQsSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFO1lBQ2hCLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQWUsRUFBRSxFQUFFO2dCQUNuQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDdEQsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsUUFBUSxpQ0FBTSxJQUFJLENBQUMsS0FBSyxHQUFLLGFBQWEsRUFBRyxDQUFDO1NBQ3BEO2FBQU07WUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBZSxFQUFFLEVBQUU7Z0JBQy9CLGFBQWEsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztZQUM5RSxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxRQUFRLGlDQUFNLElBQUksQ0FBQyxLQUFLLEdBQUssYUFBYSxFQUFHLENBQUM7U0FDcEQ7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLE9BQWUsR0FBRztRQUN6QixJQUFJLElBQUksS0FBSyxHQUFHO1lBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQzs7WUFDL0MsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTyxJQUFJLENBQUMsS0FBWTtRQUN2QixJQUFJLE1BQU0sR0FBVSxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDdkQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUNyRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7NkdBbkNVLGVBQWU7aUhBQWYsZUFBZTs0RkFBZixlQUFlO2tCQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4uL3NlcnZpY2Uvc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uU3RvcmUgZXh0ZW5kcyBTdG9yZTxhbnk+IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHt9KTtcclxuICB9XHJcblxyXG4gIHNldFN0b3JlKGRhdGE6IGFueSwgdHlwZTogc3RyaW5nID0gJ1AnKTogdm9pZCB7XHJcbiAgICBjb25zdCBwZXJtaXNzaW9uTWFwOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9O1xyXG4gICAgaWYgKHR5cGUgPT09ICdQJykge1xyXG4gICAgICBjb25zdCBmbGF0RGF0YSA9IFsuLi50aGlzLmZsYXQoZGF0YSldO1xyXG4gICAgICBmbGF0RGF0YS5mb3JFYWNoKChwZXJtaXNzaW9uOiBhbnkpID0+IHtcclxuICAgICAgICBwZXJtaXNzaW9uTWFwW3Blcm1pc3Npb24ubmFtZV0gPSBwZXJtaXNzaW9uLmFsbG93ZWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgLi4ucGVybWlzc2lvbk1hcCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRhdGEuZm9yRWFjaCgocGVybWlzc2lvbjogYW55KSA9PiB7XHJcbiAgICAgICAgcGVybWlzc2lvbk1hcFsnR0FMS1BfJyArIHBlcm1pc3Npb24ua2V5XSA9IHBlcm1pc3Npb24ubG9va3Vwcm9sZXBlcm1pc3Npb25zO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIC4uLnBlcm1pc3Npb25NYXAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTdG9yZSh0eXBlOiBzdHJpbmcgPSAnUCcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgaWYgKHR5cGUgPT09ICdQJykgcmV0dXJuIG9mKHRoaXMuc3RhdGUucGVybWlzc2lvbnMpO1xyXG4gICAgZWxzZSByZXR1cm4gb2YodGhpcy5zdGF0ZS5sb29rdXBQZXJtaXNzaW9ucyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZsYXQoYXJyYXk6IGFueVtdKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBhbnlbXSA9IFtdO1xyXG4gICAgYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgcmVzdWx0LnB1c2goaXRlbSk7XHJcbiAgICAgIGlmIChpdGVtLnBlcm1pc3Npb25zICYmIEFycmF5LmlzQXJyYXkoaXRlbS5wZXJtaXNzaW9ucykpIHtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHRoaXMuZmxhdChpdGVtLnBlcm1pc3Npb25zKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIl19