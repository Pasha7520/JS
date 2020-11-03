import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {
  private readonly ADMIN_PASSWORD = "adminadmin";
  private hasSession = false;

  get isAuthorized(): boolean {
    return this.hasSession;
  }

  isAuthorizedStatic(): Promise<boolean> {
    return of<boolean>(true)
      .pipe(delay(800))
      .toPromise();
  }

  validPassword(enteredPassword) {
    this.hasSession = this.ADMIN_PASSWORD === enteredPassword;
    return this.isAuthorized;
  }
}
