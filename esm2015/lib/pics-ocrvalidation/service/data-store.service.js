import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class DataStoreService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL29jci12YWxpZGF0aW9ucy9zcmMvbGliL3BpY3Mtb2NydmFsaWRhdGlvbi9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBR3ZDLE1BQU0sT0FBTyxnQkFBZ0I7SUFJM0I7UUFIUSx3QkFBbUIsR0FBRyxJQUFJLGVBQWUsQ0FBTSxFQUFTLENBQUMsQ0FBQztRQUMzRCxpQkFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUc1RCxZQUFZO0lBQ2QsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUM3QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBVTtRQUNsQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNqQixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUMsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEMsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO0lBQ3hDLENBQUM7OzhHQWpDVSxnQkFBZ0I7a0hBQWhCLGdCQUFnQjs0RkFBaEIsZ0JBQWdCO2tCQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFTdG9yZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgY3VycmVudFN0b3JlU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih7fSBhcyBhbnkpO1xyXG4gIHB1YmxpYyBjdXJyZW50U3RvcmUgPSB0aGlzLmN1cnJlbnRTdG9yZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGVzdCBjb2RlXHJcbiAgfVxyXG5cclxuICBzZXREYXRhKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCBjdXJyZW50U3RvcmUgPSB0aGlzLmdldEN1cnJlbnRTdG9yZSgpO1xyXG4gICAgY3VycmVudFN0b3JlW2tleV0gPSB2YWx1ZTtcclxuICAgIHRoaXMuY3VycmVudFN0b3JlU3ViamVjdC5uZXh0KGN1cnJlbnRTdG9yZSk7XHJcbiAgfVxyXG5cclxuICBzZXRPYmplY3QodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5jdXJyZW50U3RvcmVTdWJqZWN0Lm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YShrZXk6IHN0cmluZyk6IGFueSB7XHJcbiAgICBjb25zdCBjdXJyZW50U3RvcmUgPSB0aGlzLmdldEN1cnJlbnRTdG9yZSgpO1xyXG4gICAgcmV0dXJuIGN1cnJlbnRTdG9yZVtrZXldO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJTdG9yZSgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRTdG9yZSA9IHRoaXMuZ2V0Q3VycmVudFN0b3JlKCk7XHJcbiAgICBPYmplY3Qua2V5cyhjdXJyZW50U3RvcmUpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgZGVsZXRlIGN1cnJlbnRTdG9yZVtrZXldO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmN1cnJlbnRTdG9yZVN1YmplY3QubmV4dChjdXJyZW50U3RvcmUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudFN0b3JlKCk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RvcmVTdWJqZWN0LnZhbHVlO1xyXG4gIH1cclxufVxyXG4iXX0=