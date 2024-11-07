import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CheesecakeComponent } from './cheesecakes/cheesecakes.component';
import { PiesComponent } from './pies/pies.component';

@NgModule({
  declarations: [
    AppComponent,
    CheesecakeComponent,
    PiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
