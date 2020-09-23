import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuctionItemComponent } from './auction-item/auction-item.component';
import { AuctionItemDetailComponent } from './auction-item-detail/auction-item-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home',},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'buy', component: AuctionItemComponent },
  { path: 'auctions/:id', component: AuctionItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
