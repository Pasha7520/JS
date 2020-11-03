import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminAuthComponent} from "./admin-auth/admin-auth.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {AuthAdminGuard} from "./auth-admin.guard";

const routes: Routes = [
  {path: "", redirectTo: "edit", pathMatch: "full"},
  {
    path: "edit",
    canActivate: [AuthAdminGuard],
    component: AdminPageComponent,
  },
  {
    path: "auth",
    component: AdminAuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
