import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

// PAGES
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

// COMPONENTS
import { GnomeCardComponent } from './components/gnome-card/gnome-card.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

// GUARDS & SERVICES
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { AuthService } from './services/auth.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';

const routes: Routes = [
  { path: '',  component: LandingPageComponent
  , canActivate: [ InitAuthGuardService ]
 },
    { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    GnomeCardComponent,
    HomePageComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
