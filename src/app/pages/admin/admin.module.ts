import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {AdminAuthComponent} from './admin-auth/admin-auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminRoutingModule} from "./admin-routing.module";
import {AuthAdminService} from "./auth-admin.service";
import {AuthAdminGuard} from "./auth-admin.guard";


@NgModule({
  declarations: [AdminPageComponent, AdminAuthComponent],
  providers: [AuthAdminService, AuthAdminGuard],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, AdminRoutingModule
  ]
})
export class AdminModule {
}
