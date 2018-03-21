import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GnomeCardComponent } from './components/gnome-card/gnome-card.component';


@NgModule({
  declarations: [
    AppComponent,
    GnomeCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
