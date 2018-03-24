import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


// PAGES
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthComponent } from './pages/auth/auth.component';

// COMPONENTS
import { GnomeCardComponent } from './components/gnome-card/gnome-card.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

// GUARDS & SERVICES
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { AuthService } from './services/auth.service';
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { GnomesService } from './services/gnomes.service';

// PIPES
import { SearchPipe } from './pipes/search.pipe';

const routes: Routes = [
  { path: '',  component: LandingPageComponent
 },
  { path: 'auth',  component: AuthComponent
 , canActivate: [ RequireAnonGuardService ]
 },
    { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent,
    GnomeCardComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    SearchPipe,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService,
    GnomesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
