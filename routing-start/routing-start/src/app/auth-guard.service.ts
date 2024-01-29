import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuardian implements CanActivateChild {

    constructor(private authService: AuthService, private router: Router) {

    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        this.authService.logOut()

        return this.authService.isLogged().then(
            (logged: boolean) => {
                if (logged) {
                    return true;
                } else {
                    return this.router.navigate(['/servers']);
                }
            }
        );
    }
}
