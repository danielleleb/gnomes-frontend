import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GnomeCardComponent } from './components/gnome-card/gnome-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NgComponent } from './ng/ng.component';


@NgModule({
  declarations: [
    AppComponent,
    GnomeCardComponent,
    HomePageComponent,
    LandingPageComponent,
    NgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
