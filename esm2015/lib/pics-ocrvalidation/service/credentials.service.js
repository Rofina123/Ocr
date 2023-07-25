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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGVudGlhbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9vY3ItdmFsaWRhdGlvbnMvc3JjL2xpYi9waWNzLW9jcnZhbGlkYXRpb24vc2VydmljZS9jcmVkZW50aWFscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUTNDLE1BQU0sY0FBYyxHQUFHLFdBQVcsQ0FBQztBQUVuQzs7O0dBR0c7QUFJSCxNQUFNLE9BQU8sa0JBQWtCO0lBRzdCO1FBRlEsVUFBSyxHQUFrQixJQUFJLENBQUM7UUFHbEMsTUFBTSxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksZ0JBQWdCLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxjQUFjLENBQUMsV0FBb0I7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLElBQUksSUFBSSxDQUFDO1FBQ2pDLElBQUksV0FBVyxFQUFFO1lBQ2YsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNMLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7O2dIQXhDVSxrQkFBa0I7b0hBQWxCLGtCQUFrQixjQUZqQixNQUFNOzRGQUVQLGtCQUFrQjtrQkFIOUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENyZWRlbnRpYWxzIHtcclxuICAvLyBDdXN0b21pemUgcmVjZWl2ZWQgY3JlZGVudGlhbHMgaGVyZVxyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgdG9rZW46IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgY3JlZGVudGlhbHNLZXkgPSAnand0LXRva2VuJztcclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBzdG9yYWdlIGZvciBhdXRoZW50aWNhdGlvbiBjcmVkZW50aWFscy5cclxuICogVGhlIENyZWRlbnRpYWxzIGludGVyZmFjZSBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aCBwcm9wZXIgaW1wbGVtZW50YXRpb24uXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDcmVkZW50aWFsc1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgdG9rZW46IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IHNhdmVkQ3JlZGVudGlhbHMgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGNyZWRlbnRpYWxzS2V5KTtcclxuICAgIGlmIChzYXZlZENyZWRlbnRpYWxzKSB7XHJcbiAgICAgIHRoaXMudG9rZW4gPSBzYXZlZENyZWRlbnRpYWxzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlzIHRoZSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQuXHJcbiAgICogQHJldHVybiBUcnVlIGlmIHRoZSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQuXHJcbiAgICovXHJcbiAgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhdGhpcy5jcmVkZW50aWFscztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIHVzZXIgY3JlZGVudGlhbHMuXHJcbiAgICogQHJldHVybiBUaGUgdXNlciBjcmVkZW50aWFscyBvciBudWxsIGlmIHRoZSB1c2VyIGlzIG5vdCBhdXRoZW50aWNhdGVkLlxyXG4gICAqL1xyXG4gIGdldCBjcmVkZW50aWFscygpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLnRva2VuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgdXNlciBjcmVkZW50aWFscy5cclxuICAgKiBUaGUgY3JlZGVudGlhbHMgbWF5IGJlIHBlcnNpc3RlZCBhY3Jvc3Mgc2Vzc2lvbnMgYnkgc2V0dGluZyB0aGUgYHJlbWVtYmVyYCBwYXJhbWV0ZXIgdG8gdHJ1ZS5cclxuICAgKiBPdGhlcndpc2UsIHRoZSBjcmVkZW50aWFscyBhcmUgb25seSBwZXJzaXN0ZWQgZm9yIHRoZSBjdXJyZW50IHNlc3Npb24uXHJcbiAgICogQHBhcmFtIGNyZWRlbnRpYWxzIFRoZSB1c2VyIGNyZWRlbnRpYWxzLlxyXG4gICAqIEBwYXJhbSByZW1lbWJlciBUcnVlIHRvIHJlbWVtYmVyIGNyZWRlbnRpYWxzIGFjcm9zcyBzZXNzaW9ucy5cclxuICAgKi9cclxuICBzZXRDcmVkZW50aWFscyhjcmVkZW50aWFscz86IHN0cmluZykge1xyXG4gICAgdGhpcy50b2tlbiA9IGNyZWRlbnRpYWxzIHx8IG51bGw7XHJcbiAgICBpZiAoY3JlZGVudGlhbHMpIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShjcmVkZW50aWFsc0tleSwgY3JlZGVudGlhbHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19