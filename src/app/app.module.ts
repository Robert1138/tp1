import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AuctionPageComponent } from './auction-page/auction-page.component';
import { AuctionItemComponent } from './auction-item/auction-item.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuctionItemService } from './auction-item.service';
import { AuctionItemDetailComponent } from './auction-item-detail/auction-item-detail.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpClientXsrfModule } from '@angular/common/http';
import {IvyCarouselModule} from 'angular-responsive-carousel';


// might have to put HttpClientXsrfModule with options in the imports directly
// this should automatically extra
var XsrfModule = HttpClientXsrfModule.withOptions({
  cookieName:'_gorilla_csrf',
  headerName:'X-CSRF-Token',
})
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AuctionPageComponent,
    AuctionItemComponent,
    LandingPageComponent,
    AuctionItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    XsrfModule,
    IvyCarouselModule,
  ],
  providers: [AuctionItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
