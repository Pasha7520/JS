import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthAdminService} from "./auth-admin.service";

@Injectable()
export class AuthAdminGuard implements CanActivate {
  constructor(private adminAuthService: AuthAdminService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.adminAuthService.isAuthorized) {
      return true;
    } else {
      return this.router.parseUrl("/admin/auth");
    }
  }
}
