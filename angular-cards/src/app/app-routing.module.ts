import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppCustomPreloader } from "./preloadStrategy";
import { LoginPageComponent } from "./routes/login-page/login-page.component";
import { SignupPageComponent } from "./routes/signup-page/signup-page.component";
import { AboutComponent } from "./routes/about/about.component";
import { UserService as AuthGuard } from "./services/user.service";
import { ErrorPageComponent } from "./routes/error-page/error-page.component";
import { ConfirmationPageComponent } from "./routes/confirmation-page/confirmation-page.component";
const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
    data: { preload: true },
  },

  { path: "login", component: LoginPageComponent },
  { path: "signup", component: SignupPageComponent },
  { path: "about", component: AboutComponent },
  { path: "confirmation", component: ConfirmationPageComponent },
  {
    path: "account",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.ProfileModule),
  },
  {
    path: "vorlesung/:abrv",
    loadChildren: () =>
      import("./cards/cards.module").then((m) => m.CardsModule),
    data: { preload: true },
  },
  { path: "**", component: ErrorPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader }),
  ],
  exports: [RouterModule],
  providers: [AppCustomPreloader],
})
export class AppRoutingModule {}
