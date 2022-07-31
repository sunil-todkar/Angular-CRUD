import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./core/login/login.component";
import { PageNotFoundComponent } from "./core/page-not-found/page-not-found.component";
import { RegisterFirstComponent } from "./register/register-first/register-first.component";
import { RegisterSecondComponent } from "./register/register-second/register-second.component";
import { HomeResolverGuard } from "./home/guard/home-resolver.guard";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    resolve: { homeResolver: HomeResolverGuard }
  },
  {
    path: "about",
    component: AboutComponent
  },
  { path: "login", component: LoginComponent },
  {
    path: "register",
    component: RegisterFirstComponent
  },
  { path: "register-second", component: RegisterSecondComponent },
  { path: "pagenotfound", component: PageNotFoundComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
