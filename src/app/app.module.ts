import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GnomeCardComponent } from './components/gnome-card/gnome-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequireAnonGuardComponent } from './guards/require-anon-guard/require-anon-guard.component';


@NgModule({
  declarations: [
    AppComponent,
    GnomeCardComponent,
    HomePageComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    RequireAnonGuardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
