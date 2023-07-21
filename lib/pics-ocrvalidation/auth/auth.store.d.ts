import { UserDto } from '../common/common.entity';
import { HttpService } from '../service/http.service';
import { Store } from '../service/store.service';
import { Observable } from 'rxjs';
import { AuthState } from './auth.state';
import * as i0 from "@angular/core";
export declare class AuthStore extends Store<AuthState> {
    private httpService;
    constructor(httpService: HttpService);
    addAuthInfo(user: UserDto): void;
    getAuthInfo(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthStore>;
}
