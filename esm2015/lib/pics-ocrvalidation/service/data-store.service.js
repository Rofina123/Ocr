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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL29jci12YWxpZGF0aW9uL3NyYy9saWIvcGljcy1vY3J2YWxpZGF0aW9uL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHdkMsTUFBTSxPQUFPLGdCQUFnQjtJQUkzQjtRQUhRLHdCQUFtQixHQUFHLElBQUksZUFBZSxDQUFNLEVBQVMsQ0FBQyxDQUFDO1FBQzNELGlCQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRzVELFlBQVk7SUFDZCxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQzdCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QyxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFVO1FBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFXO1FBQ2pCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QyxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsVUFBVTtRQUNSLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0QyxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQzs7OEdBakNVLGdCQUFnQjtrSEFBaEIsZ0JBQWdCOzRGQUFoQixnQkFBZ0I7a0JBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVN0b3JlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjdXJyZW50U3RvcmVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHt9IGFzIGFueSk7XHJcbiAgcHVibGljIGN1cnJlbnRTdG9yZSA9IHRoaXMuY3VycmVudFN0b3JlU3ViamVjdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyB0ZXN0IGNvZGVcclxuICB9XHJcblxyXG4gIHNldERhdGEoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRTdG9yZSA9IHRoaXMuZ2V0Q3VycmVudFN0b3JlKCk7XHJcbiAgICBjdXJyZW50U3RvcmVba2V5XSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jdXJyZW50U3RvcmVTdWJqZWN0Lm5leHQoY3VycmVudFN0b3JlKTtcclxuICB9XHJcblxyXG4gIHNldE9iamVjdCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLmN1cnJlbnRTdG9yZVN1YmplY3QubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKGtleTogc3RyaW5nKTogYW55IHtcclxuICAgIGNvbnN0IGN1cnJlbnRTdG9yZSA9IHRoaXMuZ2V0Q3VycmVudFN0b3JlKCk7XHJcbiAgICByZXR1cm4gY3VycmVudFN0b3JlW2tleV07XHJcbiAgfVxyXG5cclxuICBjbGVhclN0b3JlKCkge1xyXG4gICAgY29uc3QgY3VycmVudFN0b3JlID0gdGhpcy5nZXRDdXJyZW50U3RvcmUoKTtcclxuICAgIE9iamVjdC5rZXlzKGN1cnJlbnRTdG9yZSkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBkZWxldGUgY3VycmVudFN0b3JlW2tleV07XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY3VycmVudFN0b3JlU3ViamVjdC5uZXh0KGN1cnJlbnRTdG9yZSk7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50U3RvcmUoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdG9yZVN1YmplY3QudmFsdWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==