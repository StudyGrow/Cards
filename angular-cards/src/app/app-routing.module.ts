import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./routes/home-page/home-page.component";
import { CardsPageComponent } from "./routes/cards-page/cards-page.component";
import { LoginPageComponent } from "./routes/login-page/login-page.component";
import { SignupPageComponent } from "./routes/signup-page/signup-page.component";
import { AboutComponent } from "./routes/about/about.component";
import { AccountPageComponent } from "./routes/account-page/account-page.component";
import { UserService as AuthGuard } from "./services/user.service";
import { OverviewComponent } from "./components/overview/overview.component";
import { ChangeProfileComponent } from "./components/change-profile/change-profile.component";
import { CardsOverviewComponent } from "./components/cards-overview/cards-overview.component";
import { ErrorPageComponent } from "./routes/error-page/error-page.component";
const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "vorlesung/:abrv", component: CardsPageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "signup", component: SignupPageComponent },
  { path: "about", component: AboutComponent },

  {
    path: "account",
    component: AccountPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "overview", component: OverviewComponent },
      { path: "manage", component: ChangeProfileComponent },
      { path: "cards", component: CardsOverviewComponent },
    ],
  },
  { path: "**", component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
