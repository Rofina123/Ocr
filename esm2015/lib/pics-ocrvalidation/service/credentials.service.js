import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
const credentialsKey = 'jwt-token';
/**
 * Provides storage for authentication credentials.
 * The Credentials interface should be replaced with proper implementation.
 */
export class CredentialsService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGVudGlhbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9vY3ItdmFsaWRhdGlvbi9zcmMvbGliL3BpY3Mtb2NydmFsaWRhdGlvbi9zZXJ2aWNlL2NyZWRlbnRpYWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFRM0MsTUFBTSxjQUFjLEdBQUcsV0FBVyxDQUFDO0FBRW5DOzs7R0FHRztBQUlILE1BQU0sT0FBTyxrQkFBa0I7SUFHN0I7UUFGUSxVQUFLLEdBQWtCLElBQUksQ0FBQztRQUdsQyxNQUFNLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEUsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGNBQWMsQ0FBQyxXQUFvQjtRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsSUFBSSxJQUFJLENBQUM7UUFDakMsSUFBSSxXQUFXLEVBQUU7WUFDZixjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNyRDthQUFNO1lBQ0wsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7Z0hBeENVLGtCQUFrQjtvSEFBbEIsa0JBQWtCLGNBRmpCLE1BQU07NEZBRVAsa0JBQWtCO2tCQUg5QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JlZGVudGlhbHMge1xyXG4gIC8vIEN1c3RvbWl6ZSByZWNlaXZlZCBjcmVkZW50aWFscyBoZXJlXHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICB0b2tlbjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBjcmVkZW50aWFsc0tleSA9ICdqd3QtdG9rZW4nO1xyXG5cclxuLyoqXHJcbiAqIFByb3ZpZGVzIHN0b3JhZ2UgZm9yIGF1dGhlbnRpY2F0aW9uIGNyZWRlbnRpYWxzLlxyXG4gKiBUaGUgQ3JlZGVudGlhbHMgaW50ZXJmYWNlIHNob3VsZCBiZSByZXBsYWNlZCB3aXRoIHByb3BlciBpbXBsZW1lbnRhdGlvbi5cclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWRlbnRpYWxzU2VydmljZSB7XHJcbiAgcHJpdmF0ZSB0b2tlbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc3Qgc2F2ZWRDcmVkZW50aWFscyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oY3JlZGVudGlhbHNLZXkpO1xyXG4gICAgaWYgKHNhdmVkQ3JlZGVudGlhbHMpIHtcclxuICAgICAgdGhpcy50b2tlbiA9IHNhdmVkQ3JlZGVudGlhbHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaXMgdGhlIHVzZXIgaXMgYXV0aGVudGljYXRlZC5cclxuICAgKiBAcmV0dXJuIFRydWUgaWYgdGhlIHVzZXIgaXMgYXV0aGVudGljYXRlZC5cclxuICAgKi9cclxuICBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gISF0aGlzLmNyZWRlbnRpYWxzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgdXNlciBjcmVkZW50aWFscy5cclxuICAgKiBAcmV0dXJuIFRoZSB1c2VyIGNyZWRlbnRpYWxzIG9yIG51bGwgaWYgdGhlIHVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWQuXHJcbiAgICovXHJcbiAgZ2V0IGNyZWRlbnRpYWxzKCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMudG9rZW47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSB1c2VyIGNyZWRlbnRpYWxzLlxyXG4gICAqIFRoZSBjcmVkZW50aWFscyBtYXkgYmUgcGVyc2lzdGVkIGFjcm9zcyBzZXNzaW9ucyBieSBzZXR0aW5nIHRoZSBgcmVtZW1iZXJgIHBhcmFtZXRlciB0byB0cnVlLlxyXG4gICAqIE90aGVyd2lzZSwgdGhlIGNyZWRlbnRpYWxzIGFyZSBvbmx5IHBlcnNpc3RlZCBmb3IgdGhlIGN1cnJlbnQgc2Vzc2lvbi5cclxuICAgKiBAcGFyYW0gY3JlZGVudGlhbHMgVGhlIHVzZXIgY3JlZGVudGlhbHMuXHJcbiAgICogQHBhcmFtIHJlbWVtYmVyIFRydWUgdG8gcmVtZW1iZXIgY3JlZGVudGlhbHMgYWNyb3NzIHNlc3Npb25zLlxyXG4gICAqL1xyXG4gIHNldENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzPzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRva2VuID0gY3JlZGVudGlhbHMgfHwgbnVsbDtcclxuICAgIGlmIChjcmVkZW50aWFscykge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGNyZWRlbnRpYWxzS2V5LCBjcmVkZW50aWFscyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=