import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrontPageComponent} from "./pages/front-page/front-page/front-page.component";

const routes: Routes = [

  {
    path: "front-page",
    component: FrontPageComponent,
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home-page/home-page.module").then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./pages/admin/admin.module").then(
        (m) => m.AdminModule
      ),
  },
  {path: "", redirectTo: "front-page", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
